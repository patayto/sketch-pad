$(document).ready(function() {
	draw(16);
	$('.cell').on('mouseenter', color);
	$('#new_canvas').on('click', function(){
		$('.cell').css({"background-color": "#FFF", "opacity": "1"});
		$('.cell').data('set', 0);
		$('#buttons').hide();
		$('#canvas_form').fadeIn();
	});
	$('#clear_canvas').on('click', function(){
		$('.cell').css({"background-color": "#FFF", "opacity": "1"});
		$('.cell').data('set', 0);
	});
	$('input').on('keyup', function(event) {
		if(event.keyCode === 13){
			draw($(this).val());
			$('#canvas_form').hide();
			$('#buttons').fadeIn();
			$('form').trigger('reset');
		}
		$('.cell').on('mouseenter', color);
	});

	// change color
	$('#black').on('click', function(){
		$('#buttons').data('selected', 'black');
	});
	$('#red').on('click', function(){
		$('#buttons').data('selected', 'red');
	});
	$('#orange').on('click', function(){
		$('#buttons').data('selected', 'orange');
	});
	$('#yellow').on('click', function(){
		$('#buttons').data('selected', 'yellow');
	});
	$('#green').on('click', function(){
		$('#buttons').data('selected', 'green');
	});
	$('#blue').on('click', function(){
		$('#buttons').data('selected', 'blue');
	});
	$('#indigo').on('click', function(){
		$('#buttons').data('selected', 'indigo');
	});
	$('#violet').on('click', function(){
		$('#buttons').data('selected', 'violet');
	});
	$('#rainbow').on('click', function(){
		$('#buttons').data('selected', 'rainbow');
	});
	$('#random').on('click', function(){
		$('#buttons').data('selected', 'random');
	});
	$('#eraser').on('click', function(){
		$('#buttons').data('selected', 'eraser');
	});
	$('#var_op').on('click', function(){
		if($('#var_op').data('var_op') === 'off'){
			$('#var_op').data('var_op', 'on');
			$('#var_op_on').css({'background-color': 'black', 'color': 'white'});
			$('#var_op_off').css({'background-color': 'rgba(0,0,0,0.05)', 'color': 'black'});
		} else {
			$('#var_op').data('var_op', 'off');
			$('#var_op_off').css({'background-color': 'black', 'color': 'white'});
			$('#var_op_on').css({'background-color': 'rgba(0,0,0,0.05)', 'color': 'black'});
		}
	})
});

// prevents form from submitting when pressing enter
function noenter() {
  return !(window.event && window.event.keyCode == 13); 
}

function color() {
	var color_code = $('#buttons').data('selected');
	if (color_code === 'random') {
		if ($(this).data('set') === 0) {
			var randomR = Math.floor(Math.random() * 256);
			var randomG = Math.floor(Math.random() * 256);
			var randomB = Math.floor(Math.random() * 256);
			if ($('#var_op').data('var_op') === 'on'){
				$(this).css({"background-color": "rgb(" + randomR + ", " + randomG + ", " + randomB + ")", "opacity": "0.2"});
			} else {
				$(this).css("background-color", "rgb(" + randomR + ", " + randomG + ", " + randomB + ")");
			}
			$(this).data('set', 1);
		} else {
			if ($('#var_op').data('var_op') === 'on') {
				var op = +$(this).css("opacity");
				if(op < 1){
					op += 0.2;
					$(this).css("opacity", op);
				}
			}
		}
	} else if(color_code === 'rainbow') {
		switch($('#rainbow').data('num')){
			case 0:
				$('#buttons').data('rainbow_selected', 'red');
				$('#rainbow').data('num', 1);
				break;
			case 1:
				$('#buttons').data('rainbow_selected', 'orange');
				$('#rainbow').data('num', 2);
				break;
			case 2:
				$('#buttons').data('rainbow_selected', 'yellow');
				$('#rainbow').data('num', 3);
				break;
			case 3:
				$('#buttons').data('rainbow_selected', 'green');
				$('#rainbow').data('num', 4);
				break;
			case 4:
				$('#buttons').data('rainbow_selected', 'blue');
				$('#rainbow').data('num', 5);
				break;
			case 5:
				$('#buttons').data('rainbow_selected', 'indigo');
				$('#rainbow').data('num', 6);
				break;
			case 6:
				$('#buttons').data('rainbow_selected', 'violet');
				$('#rainbow').data('num', 0);
				break;
			}
			if ($(this).data('set') === 0) {
				if ($('#var_op').data('var_op') === 'on'){
					$(this).css({"background-color": $('#buttons').data('rainbow_selected'), "opacity": "0.2"});
				} else {
					$(this).css("background-color", $('#buttons').data('rainbow_selected'));
				}
				$(this).data('set', 1);
		} else {
			if ($('#var_op').data('var_op') === 'on') {
				var op = +$(this).css("opacity");
				if(op < 1){
					op += 0.2;
					$(this).css("opacity", op);
				}
			}
		}
	} else if(color_code === 'eraser') {
		if ($(this).data('set') === 1){
			$(this).css({"background-color": "#FFF", "opacity": "1"});
			$(this).data('set', 0);
		}
	} else {
		if ($(this).data('set') === 0) {
			if ($('#var_op').data('var_op') === 'on'){
				$(this).css({"background-color": color_code, "opacity": "0.2"});
			} else {
				$(this).css("background-color", color_code);
			}
			$(this).data('set', 1);
		} else {
			if ($('#var_op').data('var_op') === 'on') {
				var op = +$(this).css("opacity");
				if(op < 1){
					op += 0.2;
					$(this).css("opacity", op);
				}
			}
		}
	}
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