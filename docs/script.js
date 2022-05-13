var header = $('.menu__btn'),
	scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
	if ( scrolled > 24 && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;	
});

$(document).ready(function(){
	// прячем кнопку #back-top
	$("#back-top").hide();

	// появление/затухание кнопки #back-top
	$(function (){
		$(window).scroll(function (){
			if ($(this).scrollTop() > 100){
				$('#back-top').fadeIn();
			} else{
				$('#back-top').fadeOut();
			}
		});

		// при клике на ссылку плавно поднимаемся вверх
		$('#back-top a').click(function (){
			$('body,html').animate({
				scrollTop:0
			}, 800);
			return false;
		});
	});
});

function setBg(){
    $('#back-top').fadeOut();
}
function scroll(){
    if(scroll.scrolling){
        clearTimeout(scroll.timer);
    } else {
        scroll.scrolling = true;
    }
    scroll.timer = setTimeout(scrollStop, 1500);
}
function scrollStop(){
    setBg();
    scroll.scrolling = false;
}
document.body.onscroll = scroll;


document.getElementById('player_pause').hidden = true;

document.getElementById('player_play').onclick = function() {
	
	document.getElementById('player_play').hidden = true;
	document.getElementById('player_pause').hidden = false;
  }

  document.getElementById('player_pause').onclick = function() {
	  
	document.getElementById('player_play').hidden = false;
	document.getElementById('player_pause').hidden = true;
  }