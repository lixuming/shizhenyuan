
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
	//console.log(wdHeight);
});


$("#scrollToTop").click(function () {
	var speed=500;//滑动的速度
	$('body,html').animate({ scrollTop: 0 }, speed);
	return false;
});

var _about =  $('.index').find('.about_'),
	_movie = _about.find('video');

$('#btn').click(function(){
	$(this).css('display','none');
	_movie.get(0).play();
});

var __about = $('.about'),
	_about_btn = __about.find('.nav_').find('.choose_btn');
_about_btn.click(function(){
	$(this).addClass('strong').siblings().removeClass('strong');
	var a = $(this).index();
	//console.log(a);
	var b = __about.find('.part_'+a);
	//console.log(b);
	b.fadeIn(600).siblings('.part').fadeOut(300);

});
