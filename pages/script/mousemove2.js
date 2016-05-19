function mousemove () {
	
	$(".box").mousemove(function  (e) {
		var x=e.pageX;
		var y=e.pageY;
		$("#x").text(x);
	    $("#y").text(y);
	    $(".red").css({"left":x,"top":y}); //                 -10当鼠标移出.box时候仍然在div里面这样也算鼠标在.box内.
	}).mouseenter(function  (e) {
		var div=$("<div>");
	    div.addClass("red");
	    $(".box").append(div);
	}).mouseleave(function  () {
		$(".red").remove();
	})
}
addOnLoad(mousemove);	