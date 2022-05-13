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

document.getElementById('player_pause').hidden = true;

document.getElementById('player_play').onclick = function() {
	
	document.getElementById('player_play').hidden = true;
	document.getElementById('player_pause').hidden = false;
  }

  document.getElementById('player_pause').onclick = function() {
	  
	document.getElementById('player_play').hidden = false;
	document.getElementById('player_pause').hidden = true;
  }