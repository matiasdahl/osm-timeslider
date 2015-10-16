## Extracting selected amenities

### Input data

To extract the selected [OpenStreetMap](http://openstreetmap.org) amenities (see below), we will use the scripts in [this repo](https://github.com/matiasdahl/osm-extract-amenities). There, the script `extract-amenity-type.js` outputs all the map elements in an OpenStreetMap export file that have an `amenity=..`-tag. Nodes, ways and relations are exported separately into tab-separated files:

* amenities-nodes.txt
* amenities-ways.txt
* amenities-relations.txt

In addition, `extract-way-coordinates.js`  (also in the same repo) outputs latitude-longitude coordinates that describe the locations for all way elements, and writes these to the file:

* way-coordinates.txt

This latter script assumes that the input OSM file is a snapshot of the OSM data (so that the input does not have multiple versions of the same map element). The above files will be around 600M when computed from the latest OSM snapshot (as of 10/2015). For further details regarding the formats for the above files, see the repo linked above.

### Extracting the selected amenities

The script `process-am-data.R` uses the above input files, and finds those amenities with c. 20k - 100k entries in the latest snapshot. These amenities are extracted into separate files, such that in each file, the individual map elements are listed in chronological order. Lines are tab separated with the following format:

```
   last_edit_date | latitude | longitude | amenity name 
```

The script takes nodes and ways into account, but relation elements (listed in `amenities-relations.txt`) are omitted. Typically, these are not as frequently used as nodes and ways.

### Running

With the input files listed above in the current directory, the script can be run as:

```
   Rscript process-am-data.R 
```

When run on the 10/2015 OSM snapshot (see above), the script will take around 15 minutes on a recent laptop.

## License

MIT. See [LICENSE.md](LICENSE.md). 