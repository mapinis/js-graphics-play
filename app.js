$( document ).ready(function(){
	
	$('.experiment').click(function(e){
		e.preventDefault();
		var id = $(this).attr('id');

		$('#menu').animate({ opacity: 0 }, 200);
		setTimeout(function(){
			$('#menu').css({ "display": "none" });
			$('#back').css({ "display": "block"}).animate({ opacity: 0.2 }, 200);
			$('#playzone').css({ "display": "inline-block" }).animate({ opacity: 1 }, 200)
		}, 200);
	});

	$('#back').click(function(e){
		e.preventDefault();

		$('#playzone').animate({ opacity: 0 }, 200);
		$('#back').css({ "display": "none", "opacity": 0});
		setTimeout(function(){
			$('#playzone').css({ "display": "none" });
			$('#menu').css({ "display": "flex" }).animate({ opacity: 1 }, 200)
		}, 200);
	});

	$('#back').hover(function(e){
		e.preventDefault();
		$(this).animate({ opacity: 0.5}, 400);
	},
	function(e){
		e.preventDefault();
		$(this).animate({ opacity: 0.2}, 400);
	});

});