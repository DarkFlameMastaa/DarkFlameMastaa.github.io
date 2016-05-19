function swichPic () {
	$(".ctrl-i").click(function  () {
		var index=$(this).index();
		$(".ctrl-i").removeClass("ctrl-active");
		$(this).addClass("ctrl-active");

		$(".main-i").removeClass("main-active")
		$(".main-i").eq(index).addClass("main-i main-active");
	})
}
addOnLoad(swichPic);