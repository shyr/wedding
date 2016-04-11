'use strict';

$(function () {
	// random main background
	var images = ['m-1.jpg', 'm-2.jpg', 'm-3.jpg'];
	$('#bg1').css({ 'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')' });

	// init controller
	var controller = new ScrollMagic.Controller();

	var dimmer = TweenMax.to("#cover", 1, {
		opacity: 0.6
	});

	new ScrollMagic.Scene({
		duration: '250px',
		offset: '170px'
	}).setTween(dimmer).addTo(controller);

	var font_brighter = TweenMax.to("#wrap_confession", 1, {
		color: 'rgba(0, 0, 0, 1)'
	});

	new ScrollMagic.Scene({
		triggerElement: '#trigger2',
		duration: '250px',
		offset: '-100px'
	}).setTween(font_brighter).addTo(controller);

	var font_dimmer = TweenMax.to("#wrap_confession", 1, {
		color: 'rgba(0, 0, 0, 0.3)'
	});

	new ScrollMagic.Scene({
		triggerElement: '#trigger3',
		duration: '250px',
		offset: '-100px'
	}).setTween(font_dimmer).addTo(controller);

	var map_font_brighter = TweenMax.to("#location", 1, {
		color: 'rgba(0, 0, 0, 1)',
		opacity: 1
	});

	new ScrollMagic.Scene({
		triggerElement: '#trigger4',
		duration: '250px',
		offset: '-100px'
	}).setTween(map_font_brighter).addTo(controller);

	var font_dimmer = TweenMax.to("#location", 1, {
		color: 'rgba(0, 0, 0, 0.3)',
		opacity: 0.3
	});

	new ScrollMagic.Scene({
		triggerElement: '#trigger5',
		duration: '250px',
		offset: '-100px'
	}).setTween(font_dimmer).addTo(controller);

	var gallery_font_brighter = TweenMax.to("#gallery", 1, {
		color: 'rgba(0, 0, 0, 1)',
		opacity: 1
	});

	new ScrollMagic.Scene({
		triggerElement: '#trigger6',
		duration: '250px',
		offset: '-100px'
	}).setTween(gallery_font_brighter).addTo(controller);

	/* 지도 */
	var centerPoint = new nhn.api.map.LatLng(37.3624968, 127.1075447);
	var oPoint = new nhn.api.map.LatLng(37.3597611, 127.1052704);
	nhn.api.map.setDefaultPoint('LatLng');
	var oMap = new nhn.api.map.Map('div_map_box', {
		point: centerPoint,
		zoom: 10,
		enableWheelZoom: true,
		enableDragPan: true,
		enableDblClickZoom: false,
		mapMode: 0,
		activateTrafficMap: false,
		activateBicycleMap: false,
		minMaxLevel: [1, 14]
	});

	var oSlider = new nhn.api.map.ZoomControl();
	oMap.addControl(oSlider);
	oSlider.setPosition({
		top: 10,
		left: 10
	});

	var oMapTypeBtn = new nhn.api.map.MapTypeBtn();
	oMap.addControl(oMapTypeBtn);
	oMapTypeBtn.setPosition({
		bottom: 10,
		right: 80
	});

	var trafficButton = new nhn.api.map.TrafficMapBtn(); // - 실시간 교통지도 버튼 선언
	trafficButton.setPosition({
		bottom: 10,
		right: 150
	}); // - 실시간 교통지도 버튼 위치 지정

	oMap.addControl(trafficButton);
	// Marker  생성
	var oSize = new nhn.api.map.Size(28, 37);
	var oOffset = new nhn.api.map.Size(14, 37);
	var oIcon = new nhn.api.map.Icon('http://static.naver.com/maps2/icons/pin_spot2.png', oSize, oOffset);

	var oMarker = new nhn.api.map.Marker(oIcon, { title: '그린팩토리' });
	oMarker.setPoint(oPoint);
	oMap.addOverlay(oMarker);

	/* 갤러리 */
	$(".rslides").responsiveSlides({
		auto: false,
		speed: 2000,
		timeout: 7000,
		random: true,
		pager: true,
		pause: true
	});

	$(".rslides").parent().find(".rslides_tabs").addClass("pagination");
	$(".rslides").parent().find(".rslides_tabs").addClass("pagination-sm");

	// Make it to full screen
	window.scrollTo(0, 1);
});
//# sourceMappingURL=main.js.map
