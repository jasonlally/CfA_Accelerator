$(document).ready(function() {

	var show_application = function(){
		$("#information").hide();
		$("#application").show();
		window.scrollTo(0,500);
	}

    $(".navbar").sticky({topSpacing:0});

	$("#application").hide(); 

	$(".Apply .button").on( 'click', function() {
		show_application();
		window.location.hash = '#application';
		
		 /*
		//Firefox for some reason does not refresh the DOM in iFrame
	    if($.browser.mozilla){
			document.getElementsByTagName('iframe')[0].src=document.getElementsByTagName('iframe')[0].src
	    }    */

	});





	$("div#application a.back").click(function() {
		$("#application").hide();
		$("#information").show();
		window.location.hash = '';
	});
		
	$('.advisorimages ul li img').popover({
		placement: 'bottom',
		animation: false}
	);
		
	// anchor scrolling
	var didScroll = true;

	var sections = $(".wrapper").each(function(index) {
		$(this).data("height", $(this).height());
	});
	var links = $(".navbar a");

	$(".navbar").localScroll({
		axis : "y",
		duration : 1000,
		easing : "easeInOutExpo",
		hash : true,
        offset: -70
	});
		
		
	if(window.location.hash == '#application'){
		show_application();
	}
	
		


});;
