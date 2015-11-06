$( document ).ready(function() {
	console.log( "ready!" );

	var xAndY = $("#container");
	xAndY.on("click", function() {
		console.log("X: " + event.pageX + ", Y: " + event.pageY);
	});

	var redBoxes = $(".boxType1");
	var galvanizeLink = redBoxes.html('<a href="http://www.galvanize.com/">Galvanize</a>');
	redBoxes.on("click", function() {
		alert("You can't leave this page!");
		//window.location = $(this).find("a").attr("href");
		return false;
	});

	var boxes = $(".box");
	boxes.on("click", function() {
		$(this).toggleClass("image");
	});

});



console.log("hello world");
