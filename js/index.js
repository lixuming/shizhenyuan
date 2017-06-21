
//轮播图
$('.swiper-container').swiper({
	//autoplay : 4000,
	speed:1500,
	effect:'slide',
	autoplayDisableOnInteraction : false,
	loop : true,
	onSlideChangeEnd:function(){
		//console.log(111);
	}
});

$(window).scroll(function(){
	var wdHeight = $(window).scrollTop();
	if(wdHeight > 500){
		$('#scrollToTop').css('display','block');
	}else{
		$('#scrollToTop').css('display','none');
	}
	console.log(wdHeight);
});


$("#scrollToTop").click(function () {
	var speed=500;//滑动的速度
	$('body,html').animate({ scrollTop: 0 }, speed);
	return false;
});

var _about =  $('.index').find('.about'),
	_movie = _about.find('video');

$('#btn').click(function(){
	console.log(111);
	$(this).css('display','none');
	_movie.get(0).play();
});