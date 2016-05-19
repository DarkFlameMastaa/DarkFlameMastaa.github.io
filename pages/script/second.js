	$("#list li").click(function  () {
			var index=$(this).index();
			var newSrc="image/"+(index+1)+".jpg";
			$("#pic").attr("src",newSrc);
			$(this).css("background","red");
			$(this).siblings().css("background","white");
		})

	function event () {
	$(".box1").css("background","black");
	$(".box1").mouseover(function  () {
	$(".box1").css({background:'green'})
});
	$(".box1").mouseout(function  () {
	$(".box1").css("background","blue")
});
	$(".box1").click(function(){
    $(this).animate({height:'+=100px',width:'+=150px',opacity:'0.4',left:'100px',top:"400px"},1000);
    $(this).animate({height:'+=100px',width:'+=150px',opacity:'0.8',top:"500px"},2000);
    $(this).addClass('magictime twisterInDown');
    $(this).animate({height:'-=200px',width:'-=300px',opacity:'1',left:'0px',top:"0px"},1000);

}); 
	$(".box2").mouseenter(function  () {
		$(this).css("background","#9ccc65");
		$(this).animate({fontSize:"15px"});

	});
	$(".box2").mouseleave(function  () {
		$(this).css("background","#2196f3");
		$(this).animate({fontSize:"30px"});

	});
	}

	function buttonControl () {
		$("#hide").click(function  () {
			$(".box3").hide(1000);
		});
		$("#show").click(function  () {
			$(".box3").show(1000);
		});
		$("#slideDown").click(function  () {
			$(".box3").slideDown(1000);
		});
		$("#slideUp").click(function  () {
			$(".box3").slideUp(1000);
		});
		$("#fadeIn").click(function  () {
			$(".box3").fadeIn(1000);
		});
		$("#fadeOut").click(function  () {
			$(".box3").fadeOut(1000);
		});
	}


	addOnLoad(event);
	addOnLoad(buttonControl);