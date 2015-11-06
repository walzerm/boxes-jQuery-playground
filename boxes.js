$( document ).ready(function() {
	console.log( "ready!" );

	var secretBox = $("#secretBox");
	secretBox.css("background", "white");

	var children = $("#row1").children();
	children.addClass("boxType3");

	var lastChild = $("#row4").children().last();
	lastChild.hide();

	var toWhite = $(".boxType1");
	toWhite.css("background", "white");

	var clearCSS = $("#row2 div").filter(":nth-child(2), :nth-child(1)");
	//clearCSS.css("background", "yellow");
	clearCSS.removeClass("box boxType3 boxType2");
	
	var smallWidth = $("div").not(".row #secretBox");
	smallWidth.css("width", "2px");
});



console.log("hello world");
