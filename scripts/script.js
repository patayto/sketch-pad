$(document).ready(function() {
	draw(16);

// trying to fix below so I can change data-set from 0 to 1, and update opacity

	$('.cell').on('mouseenter', function() {
		if ($(this).data('set') === 0) {
			var randomR = Math.floor(Math.random() * 256);
			var randomG = Math.floor(Math.random() * 256);
			var randomB = Math.floor(Math.random() * 256);
			$(this).css({"background-color": "rgb(" + randomR + ", " + randomG + ", " + randomB + ")", "opacity": "0.1"});
			$(this).data('set', '1');
		} else {
			var op = $(this).css("opacity");
			if(op < 1){
				op += 0.1;
				$(this).css("opacity", op);
			}
		}
	});
	$('#new_canvas').on('click', function(){
		$('.cell').css("background-color", "#FFF");
		$('#canvas_form').show();
	});
	$('input').on('keyup', function(event) {
		if(event.keyCode === 13){
			draw($(this).val());
			$('#canvas_form').hide();
			$('form').trigger('reset');
		}
		if ($(this).data('set') === false) {
			var randomR = Math.floor(Math.random() * 256);
			var randomG = Math.floor(Math.random() * 256);
			var randomB = Math.floor(Math.random() * 256);
			$(this).css({"background-color": "rgb(" + randomR + ", " + randomG + ", " + randomB + ")", "opacity": "0.1"});
			$(this).data("set", true);
		} else {
			var op = $(this).css("opacity");
			if(op < 1){
				op += 0.1;
				$(this).css("opacity", op);
			}
		}
	});
});


function noenter() {
  return !(window.event && window.event.keyCode == 13); 
}

function draw(count) {
	var cell = "<div class='cell' data-set='0'></div>";
	var cells = "";
	var dimension = 700/count;
	for (var row = 0; row < count; row++){
		for (var col = 0; col < count; col++) {
			cells += cell;
		}
	}
	document.getElementById("container").innerHTML = cells;
	$('.cell').css({"width": dimension + "px", "height": dimension + "px"});
}