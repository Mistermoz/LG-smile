function lightbox() {
			$('#pc-photo').addClass('enabled');
	}
$(function () {
	$('a[href="#video"]').click(function (e) {
			$('#video').addClass('enabled');

			e.preventDefault();
	});

	$('a[href="/#/video/close"]').click(function (e) {
			$('#video').removeClass('enabled');

			e.preventDefault();
	});

	$('a[href="#techo"]').click(function (e) {
			$('#techo').addClass('enabled');

			e.preventDefault();
	});

	$('a[href="/#/techo/close"]').click(function (e) {
			$('#techo').removeClass('enabled');

			e.preventDefault();
	});

	$('a[href="/#/create/webcamera"]').click(function (e) {
			$('#take-photo').addClass('enabled');

			e.preventDefault();
	});

	$('a[href="/#/take-photo/close"]').click(function (e) {
			$('#take-photo').removeClass('enabled');

			e.preventDefault();
	});


	/**** Slider Techo*******/

	var actualItem = 0;
	var maxItem = $('#techo div.content .slider .items .item').length - 1;
	disableItems(true);

	$('a[href="/#/techo/next"]').click(function(e){
		actualItem++;
		animateItems();
		e.preventDefault();
	});

	$('a[href="/#/techo/prev"]').click(function(e){
		actualItem--;
		animateItems();
		e.preventDefault();
	});

	function animateItems(){
		if(actualItem > maxItem){ actualItem = maxItem;return;}
		if(actualItem < 0){ actualItem = 0;return;}

		$('#techo div.content .slider .items').stop().animate({marginLeft: -actualItem * 358}, { duration: 1000, easing: 'easeOutCubic' });
		if(actualItem == maxItem){ disableItems(); }else{enableItems();}
		if(actualItem == 0){ disableItems(true); }else{enableItems(true);}

		$('#techo div.content .slider .pagination ul li').removeClass('current');
		$('#techo div.content .slider .pagination ul li:nth-of-type('+(actualItem+1)+')').addClass('current');
	}

	function disableItems(left){
		if(left){
			$('a[href="/#/techo/prev"]').addClass('disabled');
		}else {
			$('a[href="/#/techo/next"]').addClass('disabled');
		}
	}

	function enableItems(left){
		if(left){
			$('a[href="/#/techo/prev"]').removeClass('disabled');
		}else {
			$('a[href="/#/techo/next"]').removeClass('disabled');
		}
	}

	/*** pagination ***/
	$('#techo div.content .slider .pagination li a[href*="/#/techo/item"]').click(function(e){
		var item = $(this).attr('href');
		item = item.replace('/#/techo/item', '');

		actualItem = item - 1;
		animateItems();
		e.preventDefault();
	});
});