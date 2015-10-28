## Extracting selected amenities

### Input data

To extract the selected [OpenStreetMap](http://openstreetmap.org) amenities for the `osm-timeslider` visualization, we start with the scripts in [this repo](https://github.com/matiasdahl/osm-extract-amenities). There, the script `extract-amenity-type.js` outputs all the map elements in an OpenStreetMap file that have an `amenity=..`-tag. Nodes, ways and relations are exported separately into tab-separated files:

* amenities-nodes.txt
* amenities-ways.txt
* amenities-relations.txt

In addition, `extract-way-coordinates.js` (also in the same repo) outputs latitude-longitude coordinates that describe the locations for way elements, and writes these to the file:

* way-coordinates.txt

The latter script assumes that the input OSM file is a snapshot of the OSM data (so that there are not multiple versions of the same map element). The above files will be around 600M when computed from the latest OSM snapshot (as of 10/2015). For further details regarding the formats of the files, see the repo linked above.

### Running

When the above files are in the current directory, the script can be run as:

```
   Rscript process-am-data.R
```

This will take around 20 minutes on a recent laptop (on the 10/2015 snapshot).

### Output .tsv files

The script `process-am-data.R` reads the above files and extracts those amenities with c. 20k - 100k entries. Each of selected amenity is extracted into a separate file. For example, `atm.tsv` contains the extracted `amenity=atm` map elements, and in each file, the individual map elements are listed in chronological order. Columns are tab separated with the following structure:

```
   last_edit_date | latitude | longitude | amenity name
```

Node and way map elements are included, but relation elements (listed in `amenities-relations.txt`) are omitted. Typically, these are not as frequently used as nodes and ways.

## License

The extracted .tsv files contain data from the OpenStreetMap project, (c) OpenStreetMap contributors, and these .tsv files are distributed under the terms of the [ODbL](https://www.openstreetmap.org/copyright). In detail, the .tsv files are extracted from the OpenStreetMap snapshot from 5/10/2015 (planet-151005.osm.pbf, 29G, md5: `53510ecca3683c374230938f0a002fdf`). The extraction script is released under the MIT license, see [LICENSE.md](LICENSE.md).
