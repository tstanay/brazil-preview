/*
 Template Name: Brazil | coming soon
 Template URI: - http://shentm.info/brazil/
 Description: Brazil Template
 Version: 1.0
 Author: Template Grant Shen
 Design By: Maksim Shavkutenko
 Author URI: http://shentm.info/brazil/
 */
$(function () {
	"use strict";
	/*=======================================
	LOAD BACKGRIUND IMAGE
	=======================================*/
	$(window).on('load',function(e){
		$('#status').fadeOut();
		$('#preloader').delay(350).fadeOut('slow');
	});
	/*=======================================
	SINGUP  FORM
	=======================================*/
	$('.widget-search-form-brazil').find('input').focus(function(){
		$('#mc-embedded-subscribe').css({'border':'solid 1px #f6f6f6','background':'#fff'});
	});
	/*=======================================
	SOCIAL PANEL
	=======================================*/
	var transparent_color = '.bg-social-icons-form';
	var white_color = '.br-social-icons-form';
	$('.social-brazil-block').on({
		mouseenter: function(){
			$(this).find(transparent_color).fadeOut(500);
			$(this).find(white_color).fadeIn(500).css({'backgroundImage':'url(images/bg-icon-br2.png)'});
		},
		mouseleave: function(){
			$(this).find(transparent_color).fadeIn(500);
			$(this).find(white_color).fadeIn(500).css({'backgroundImage':'url(images/bg-icon-br.png)'});
		}
	});
	/*=======================================
	MAGNIFIC POPUP
	======================================= */
	var mainItem = $('.section-content');
	$(function () {
		$('.templatesha_modal_window_open').magnificPopup({
			type: 'inline',
			preloader: false,
			modal: true,
			removalDelay: 500,
			callbacks: {
				beforeOpen: function() {
					$('.brazil_modal_open').fadeIn(1000);
					$(mainItem).removeClass('animated fadeInDown').css({'display':'none'});
					$('.templatesha_modal_window_brazil').addClass('animated fadeInUp fast');
				}
			},
			midClick: true
		});
		$(document).on('click', '.templatesha_modal_window_close', function (e) {
			e.preventDefault();
			$.magnificPopup.close();
			$(mainItem).addClass('animated fadeInDown').css({'display':'block'});
		});
	});
	/*=======================================
	INPUT FORM SEND
	=======================================*/
	var input_contact_form = $('#templatesha_contact_form');
	$(input_contact_form).find('input').focus(function () {
		$(this).css({'border-bottom-color':'#fff'});
	});
	$(input_contact_form).find('input').blur(function(){
		$(this).css({'border-bottom-color':'rgba(255,255,255,0.5)','border-left':'none'});
		$(input_contact_form).find('input[type="submit"]').css({'border':'solid 1px rgba(255,255,255,0.7)'});
	});
	/*=======================================*/
});