function mousemove () {
	
	$(".box").mousemove(function  (e) {
		var x=e.pageX;
		var y=e.pageY;
		$("#x").text(x);
	    $("#y").text(y);
	})
}
addOnLoad(mousemove);	