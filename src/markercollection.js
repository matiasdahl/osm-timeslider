"use strict";

var MarkerCollection = function(dataSource, map) {

    // Static data
    this.n = dataSource.points.length;

    function removePoint(entry) { map.removeLayer(entry); }

    function addPoint(entry) { entry.addTo(map); }

    /**
     *  The next two variables are set up so that initially this.lastDateInterval returns an empty interval.
     *  (see interval.js). This will generate a call to this.resetMarkers on the first call.
     */
    // index of first entry with date >= date0
    this.index0 = this.n-1;
    // index of last entry with date <= date1
    this.index1 = 0;

    this.marker0 = function() { return dataSource.points[this.index0].getMarker() }.bind(this);

    this.marker1 = function() { return dataSource.points[this.index1].getMarker() }.bind(this);

    this.date0 = function() { return dataSource.points[this.index0].getDate() }.bind(this);

    this.date1 = function() { return dataSource.points[this.index1].getDate() }.bind(this);

    this.lastDateInterval = function() { return [this.date0(), this.date1()]; }.bind(this);

    this.extend0 = function() {
        this.index0--;
        addPoint(this.marker0());
    };

    this.shrink0 = function() {
        removePoint(this.marker0());
        this.index0++;
    };

    this.extend1 = function() {
        this.index1++;
        addPoint(this.marker1());
    };

    this.shrink1 = function() {
        removePoint(this.marker1());
        this.index1--;
    };

    this.resetMarkers = function(newInterval) {
        var i;

        for (i=this.index0; i <= this.index1; i++) {
            removePoint(dataSource.points[i].getMarker());
        }

        this.index0 = 0;
        while ((this.date0() < newInterval[0]) &&
               (this.index0 != this.n - 1)) {
            this.index0++;
        }

        this.index1 = this.n - 1
        while ((newInterval[1] < this.date1()) &&
               (this.index0 + 1 != this.index1)) {
            this.index1--;
        }

        if (this.index0 != this.index1) {
            for (i=this.index0; i <= this.index1; i++) {
                addPoint(dataSource.points[i].getMarker());
            }
        }

    }.bind(this);

    this.sliderCallback = function(newTimeInterval) {
        var intersection = intervalIntersection(this.lastDateInterval(), newTimeInterval);

        if (isEmpty(intersection)) {
            this.resetMarkers(newTimeInterval);
        } else {

            // --- handle lower limit ---

            /**
             *  Lower point of intersection is above last lower point. The lower limit
             *  must have moved upwards.
             */
            if (intersection[0] > this.lastDateInterval()[0]) {

                var canShrink = function() {
                    if (this.index0 == this.index1 + 1) {
                        return false;
                    }
                    return this.date0() < newTimeInterval[0];
                }.bind(this);

                while (canShrink()) { this.shrink0(); };

            } else {
                // lower limit moved down or stayed the same

                var canExtend = function() {
                    if (this.index0 == 0) {
                        return false;
                    }
                    return dataSource.points[this.index0 - 1].getDate() >= newTimeInterval[0];
                }.bind(this);

                while(canExtend()) { this.extend0(); }

            }

            // --- handle upper limit ---

            /**
             *  Upper point of intersection is below last upper point. The upper limit
             *  must have moved downwards. Remove points from screen.
             */
            if (intersection[1] < this.lastDateInterval()[1]) {

                var canShrink = function() {
                    if (this.index1 == this.index0 + 1) {
                        return false;
                    }
                    return this.date1() > newTimeInterval[1];
                }.bind(this);

                while (canShrink()) { this.shrink1(); };

            } else {
                // Lower limit moved forward or stayed the same.
                // Possibly add entries to screen.

                var canExtend = function() {
                    if (this.index1 >= this.n - 1) {
                        return false;
                    }
                    return dataSource.points[this.index1 + 1].getDate() <= newTimeInterval[1];
                }.bind(this);

                while(canExtend()) { this.extend1(); }
            }
        }
    }.bind(this);

};
