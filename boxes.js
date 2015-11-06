$( document ).ready(function() {
	console.log( "ready!" );

	var xAndY = $("#container");
	xAndY.on("click", function() {
		console.log("X: " + event.pageX + ", Y: " + event.pageY);
	});

	var redBoxes = $(".boxType1");
	var link = redBoxes.html('<a href="http://www.galvanize.com/"></a>');
	redBoxes.on("click", function() {
		window.location = $(this).find("a").attr("href");
		return false;
	});
});



console.log("hello world");
