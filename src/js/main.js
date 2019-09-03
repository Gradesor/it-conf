$(document).ready(function () {	
	$.scrollify({
		section: ".slide",
		sectionName: "section-name",
		easing: "easeOutExpo",
		scrollSpeed: 1100,
		offset: 10,
		scrollbars: false,
		standardScrollElements: "",
		setHeights: true,
		overflowScroll: true,
		updateHash: true,
		touchScroll: true
	});
	$('.map')
		.click(function () {
			$(this).find('iframe').addClass('clicked')
		})
		.mouseleave(function () {
			$(this).find('iframe').removeClass('clicked')
		});
})
