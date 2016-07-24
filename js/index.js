//banner轮播图
var imgBanner = $('.bigBanner img');
var $bigBanner = $('.bigBanner');
var $banner = $('.banner');
var indexBanner = 0;
var $liSmallBanner = $('.smallBanner li');
var timerBanner = setInterval(animation,1000);
$(".nextBanner").click(function(){
	indexBanner++;
	show();
});
$(".prevBanner").click(function(){
	indexBanner--;
	show();
});
$liSmallBanner.on('mouseenter',function(){
	 var index = $(this).index();
	 indexBanner = index ;
	 show();
})
$('.banner').on('mouseenter',function(){
	clearInterval(timerBanner);
}).on('mouseleave',function(){
	timerBanner = setInterval(animation,1000);
});
function animation(){
	show();
	indexBanner++;
};
function show(){
	if(indexBanner>=imgBanner.length){
		indexBanner=2;
		$bigBanner.css("left",-1440);
	}
	if(indexBanner<0){
		indexBanner=imgBanner.length-3;
		$bigBanner.css("left",-1440*(imgBanner.length-2));
	}
	var indexSmall = indexBanner;
	if(indexSmall>=imgBanner.length-2){
		indexSmall = indexSmall - 6

	}
	$bigBanner.animate({left:-1440*indexBanner},300);
	$liSmallBanner.css("background","#b7b6b4");
	$liSmallBanner.eq(indexSmall).css("background","red");
}
//brand向上

var $showBrand = $('.showBrand');
$showBrand.on('mouseenter',function(){
	$(this).stop().animate({height:154});

}).on('mouseleave',function(){
	$(this).stop().animate({height:55});
})
//hot改变边框
var $liListHot = $('.listHot li');
$liListHot.on('mouseenter',function(){
	$(this).find('.topline').stop().animate({width:166});
	$(this).find('.rightline').stop().animate({height:87});
	$(this).find('.bottomline').stop().animate({width:166});
	$(this).find('.leftline').stop().animate({height:87});
	$(this).find('img').hide();
	$(this).find('div').show();
}).on('mouseleave',function(){
	$(this).find('.topline').stop().animate({width:0});
	$(this).find('.rightline').stop().animate({height:0});
	$(this).find('.bottomline').stop().animate({width:0});
	$(this).find('.leftline').stop().animate({height:0});
	$(this).find('img').show();
	$(this).find('div').hide();
})
//sale左右滑动
$('.topSale').on('mouseenter',function(){
	$(this).find('h5').stop().animate({left:"35%"});
	$(this).find('img').stop().animate({left:"65%"});
}).on('mouseleave',function(){
	$(this).find('h5').stop().animate({left:"50%"});
	$(this).find('img').stop().animate({left:"50%"});
})
$('.top2Sale').on('mouseenter',function(){
	$(this).find('h5').stop().animate({left:5});
	$(this).find('img').stop().animate({left:175});
}).on('mouseleave',function(){
	$(this).find('h5').stop().animate({left:20});
	$(this).find('img').stop().animate({left:160});
})
//sale触摸滑动
$('.listSale span').on('mouseenter',function(){
	var index = $(this).index();
	$('.listSale span').css('background','#999999');
	$(this).css('background','#000');
	$('.inSale').animate({left:-1240*index});
})
//mail
var liListMail = $('.listMail li');
liListMail.on('mouseenter',function(){
	$(this).find('p').animate({
		height:50,
		top:0,
	});

}).on('mouseleave',function(){
	$(this).find('p').animate({
		height:0,
		top:50,
	});
})
//bag轮播图
var indexBag = 0;


$('.nextBag').click(function(){
	indexBag++;
	showBag();
})
$('.prevBag').click(function(){
	indexBag--;
	showBag();
})


function showBag(){

	if(indexBag>=5){
		indexBag = 2;
		$('.carouselBag h3').css('left',-220)
	}
	if(indexBag<0){
		indexBag = 2;
		$('.carouselBag h3').css('left',-220*3)
	}
	$('.carouselBag h3').animate({left:-220*indexBag});
}
//bottomPromotion
var $lipro = $('.smallPromotion li');
$lipro.on('mouseenter',function(){
	$(this).find('.toplinePro').stop().animate({width:192});
	$(this).find('.rightlinePro').stop().animate({height:63});
	$(this).find('.bottomlinePro').stop().animate({width:192});
	$(this).find('.leftlinePro').stop().animate({height:64});
	var index = $(this).index()+1;
	$('.bigPromotion img').attr({src:'img/'+index+'bank.jpg'});
}).on('mouseleave',function(){
	$(this).find('.toplinePro').stop().animate({width:0});
	$(this).find('.rightlinePro').stop().animate({height:0});
	$(this).find('.bottomlinePro').stop().animate({width:0});
	$(this).find('.leftlinePro').stop().animate({height:0});
})