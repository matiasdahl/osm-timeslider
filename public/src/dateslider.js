"use strict";

var DateSlider = function(boundInterval, selectedInterval) {

	/** helper function: add years/months to a Date object */
	function datePlus(date, plus_year, plus_month) {
		return new Date(date.getFullYear() + plus_year, date.getMonth()
				+ plus_month, 1);
	}

	var yearScale = {
		first : function(min, max) {
			return boundInterval[0];
		},
		end : function(value) {
			return value;
		},
		next : function(value) {
			return datePlus(value, 1, 0);
		},
		label : function(value) {
			return value.getFullYear().toString();
		},
		format : function(tickContainer, tickStart, tickEnd) {
			tickContainer.css('color', '#ccc');
			tickContainer.addClass("year-text-" + tickStart.getFullYear());
		}
	};

	var subYearScale = {
		first : function(value) {
			return datePlus(boundInterval[0], 0, 3);
		},
		end : function(value) {
			return value;
		},
		next : function(value) {
			return datePlus(value, 0, value.getMonth() == 8 ? 6 : 3);
		},
		label : function(value) {
			return "";
		}
	};

	$("#slider").dateRangeSlider({
		arrows : false,
		valueLabels : "hide",
		bounds : {
			min : boundInterval[0],
			max : boundInterval[1]
		},
		defaultValues : {
			min : selectedInterval[0],
			max : selectedInterval[1]
		},
		scales : [ yearScale, subYearScale ]
	});

	$("#slider").dateRangeSlider("disable");

	this.setCallback = function(sliderCallback) {
		$("#slider").on("valuesChanging", function(e, data) {
			sliderCallback([ data.values.min, data.values.max ]);
		});
	};

	this.activate = function(colorPalette) {

		var activateYear = function(yr) {
			var i = yr - 2007;
			$(".year-text-" + yr).delay(5 + i * 80).queue(function(next) {
				$(this).css('color', colorPalette[i]);
				next();
			});
		}

		for (var yr = 2007; yr <= 2015; yr++) {
			activateYear(yr);
		}

    $("#slider").dateRangeSlider("enable");

	};

};
