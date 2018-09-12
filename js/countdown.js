/*
 Template Name: Brazil | coming soon
 Template URI: - http://shentm.info/brazil/
 Description: Brazil Template
 Version: 1.0
 Author: Theme Grant Template
 Design By: Maksim Shavkutenko
 Author URI: http://shentm.info/brazil/
 */
(function($){
	"use strict";
	/*=======================================
	  COUNTDOWN TIMER
	 =======================================*/
	$('#countdown_dashboard').countdown('2017/10/10',
		function(event) {
			$('#clock-count-days').html(event.strftime('%D'));
			$('#clock-count-hours').html(event.strftime('%H'));
			$('#clock-count-minutes').html(event.strftime('%M'));
			$('#clock-count-seconds').html(event.strftime('%S'));
		}
	);
})(jQuery);