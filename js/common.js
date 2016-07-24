//top的显示隐藏
var $top = $('.top');
var $frameTop = $('.frameTop');
$top.on('click','img',function(){
	$frameTop.show();
}).on('click','span',function(){
	$frameTop.hide();
})

//head里面的第五大道下来菜单
var $listHead = $('.listHead');
$('.downHead').on('mouseenter',function(){
	$listHead.show();
	$(this).addClass('downHeadActive');
	$(this).find('span').removeClass('arrowHead').addClass('arrowHeadActive');
}).on('mouseleave',function(){
	$listHead.hide();
	$(this).removeClass('downHeadActive');
	$(this).find('span').removeClass('arrowHeadActive').addClass('arrowHead');
})

//head里面的微信显示
$('.phoneHead').on('mouseenter',function(){
	$(this).children('img').show();
}).on('mouseleave',function(){
	$(this).children('img').hide();
})

//mid里面的购物车显示隐藏
$('.buycarHead').on('mouseenter',function(){
	$('.out_buycarHead').show();
}).on('mouseleave',function(){
	$('.out_buycarHead').hide();
})

//nav里面的多级菜单显示隐藏
var $classifyNav = $('.classifyNav');
$classifyNav.on('mouseenter',function(){
	$(this).children('ul').show();
}).on('mouseleave',function(){
	$(this).children('ul').hide();
})
$classifyNav.find('li').on('mouseover',function(){
	$(this).children('div').show();
	$(this).css({backgroundColor:'#fff'});
	$(this).find('span').show();

}).on('mouseleave',function(){
	$(this).children('div').hide();
	$(this).css({backgroundColor:'#dddee0'});
	$(this).find('span').hide();
})
//nav里面的正品轮播
var $liWrapNav = $('.wrapNav li');
$liWrapNav.on('mouseenter',function(){

	$(this).stop().animate({width:138});
}).on('mouseleave',function(){
	$(this).stop().animate({width:30});
})
