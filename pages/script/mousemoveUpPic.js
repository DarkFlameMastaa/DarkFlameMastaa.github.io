function mousemove () {
	
	$(".box img").mousemove(function  (e) {
		var x=e.pageX;
		var y=e.pageY;
		$("#x").text(x);
	    $("#y").text(y);
	    $(".pic").css({"left":x+10,"top":y+10}); //                 -10当鼠标移出.box时候仍然在div里面这样也算鼠标在.box内.
	});
	$(".box img").mouseenter(function  (e) {
		var $img=$("<img/ >");
		var $src=$(this).attr("src");
		$img.attr("src",$src);
	    $img.addClass("pic");
	    $(".pic-box").append($img);
	});
	$(".box img").mouseleave(function  () {
		$(".pic").remove();
	})
}
addOnLoad(mousemove);	