'use strict';

$(function() {
// init controller
	var controller = new ScrollMagic.Controller();

// build tween
	/*var tween = TweenMax.to("#animation", 0.5, {
		opacity: 0/!*,
		scale: 0,
		repeat: 0,
		top: 600*!/
	});*/

	var tween2 = TweenMax.to("#cover", 1, {
		opacity: 0.8
	});

// build scene and set duration to window height
	/*var scene = new ScrollMagic.Scene({
		duration: "100%"
	}).setTween(tween)
		.addIndicators() // add indicators (requires plugin)
		.addTo(controller);*/

	var scene = new ScrollMagic.Scene({
		duration: "100%"
	}).setTween(tween2)
		.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
});