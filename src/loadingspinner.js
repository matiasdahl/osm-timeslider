"use strict";

var LoadingSpinner = {

	start : function() {
		var addHtml = '<div class="sk-spinner sk-spinner-pulse"></div>';
		$("#spinner-hud").html(addHtml);
	},

	stop : function() {
		var removeSpinner = function() {
			$(".sk-spinner-pulse").css("animation-play-state", "paused");
		};

		$("#spinner-hud").fadeOut(1000, removeSpinner);
	}

};
