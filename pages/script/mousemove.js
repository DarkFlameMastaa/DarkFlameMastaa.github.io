function mousemove () {
	
	$(".box").mousemove(function  (e) {
		var x=e.pageX;
		var y=e.pageY;
		$("#x").text(x);
	    $("#y").text(y);
	    $(".red").css({"left":x+1,"top":y+1}); //+1是为了避免鼠标在新建div里面。
	}).mouseenter(function  (e) {
		var div=$("<div>");
	    div.addClass("red");
	    $(".box").append(div);
	}).mouseleave(function  () {
		$(".red").remove();
	})
}
addOnLoad(mousemove);	