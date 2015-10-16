#
# process-am-data.R
#

library(dplyr)  # MIT licensed
# https://cran.r-project.org/web/packages/dplyr/index.html

Sys.setlocale(locale = "UTF-8")

cache_op <- function(cache_filename, f) {
    if (file.exists(cache_filename)) {
        return(readRDS(cache_filename))
    }

    result <- f()
    saveRDS(result, cache_filename, compress = FALSE)
    return(result)
}

load_data <- function() {
    load_raw <- function(file_name) {
        reg_exp <- "'s/\\\\t/ /g;s/\\\\n/ /g;s/\\\\r/ /g'"
        read.csv(pipe(paste0('cat ', file_name, ' | sed -e ',
                             reg_exp)),
                 header = TRUE,
                 sep = '\t',
                 quote = '',
                 colClasses = 'character',
                 allowEscapes = TRUE)
    }

    # Load latest snapshot data:
    nodes_with_coords <- load_raw('amenities-nodes.txt') %>%
        select(id, sec1970, latitude = pos1, longitude = pos2,
               amenity_type, name)

    ways <- load_raw('amenities-ways.txt')  %>%
        select(id, sec1970, node_id = pos1, amenity_type, name)

    way_coordinates <- read.csv('way-coordinates.txt',
                                header = TRUE,
                                sep = '\t',
                                colClasses = 'character') %>%
        select(node_id = id, latitude, longitude)

    #
    # We will have nrow(way_coordinates) < nrow(ways), but this is
    # explained by multiple ways referencing the same node-id for
    # their location.
    #
    stopifnot(setequal(ways$node_id, way_coordinates$node_id))

    ways_with_coords <- inner_join(ways, way_coordinates, by=c('node_id')) %>%
        select(id, sec1970, latitude, longitude, amenity_type, name)

    # Ensure that we lost no ways while joining the data
    stopifnot(setequal(ways_with_coords$id, ways$id))
    stopifnot(nrow(ways_with_coords) == nrow(ways))

    # Join nodes and ways into one long table, sort by last edit
    # (sec1970)
    nw_with_coords <- rbind(nodes_with_coords, ways_with_coords) %>%
        mutate(sec1970n = as.numeric(sec1970)) %>%
        select(sec1970n, latitude, longitude, amenity_type, name)

    # Add date column; sec1970 corresponds to date of last edit
    from_epoch <- function(s1970) {
        tmp <- as.Date(as.POSIXct(s1970,
                                  origin = "1970-01-01"))
        tmp <- gsub('-', '', as.character(tmp), fixed = TRUE)
        substr(tmp, 3, 10)
    }
    stopifnot(from_epoch(1) == "700101")

    nw_with_coords$last_edit_date <- from_epoch(nw_with_coords$sec1970n)

    return(nw_with_coords %>%
               select(last_edit_date, amenity_type,
                      latitude, longitude, name))
}

latest_amenity_data <- cache_op('latest_am_data.rds', load_data)

amenities_of_type <- function(am_name) {
    latest_amenity_data %>%
        filter(amenity_type == am_name) %>%
        arrange(last_edit_date) %>%
        select(last_edit_date, latitude, longitude, name)
}

# Write tab separated file of form:
#    last_edit_date  -  lat  -  lon  -  amenity_name
output <- function(am_name) {
    write.table(amenities_of_type(am_name),
                file = paste0(am_name, '.tsv'),
                quote = FALSE,
                row.names = FALSE,
                sep = '\t')
}

# Select amenities with c. 20k-100k entries on the current map.
selected_amenities <- latest_amenity_data %>%
    group_by(amenity_type) %>%
    summarize(count = n()) %>%
    ungroup() %>%
    arrange(desc(count)) %>%
    select(amenity_type, count) %>%
    filter(count > 20000*0.95) %>%
    filter(count < 100000*1.05)

for (am_name in selected_amenities$amenity_type) output(am_name)
