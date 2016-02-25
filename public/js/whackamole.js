"use strict";

$(document).ready(function(){
	$(".rat").fadeOut(1000);

	var rat = 0;
	var timer = 30;
	var timerInterval;
	var gameInterval;
	var gameStarted=false;
	var index = 0;

$("#play").click(function() {
	
	if(!gameStarted) {
		var index = 0;
		$("#count").html(index + ' whacks');
		gameStarted = true;
		randomRat();
		showUp(rat);
		gameInterval = setInterval(function() {
			randomRat();
			showUp(rat);
		}, 4100)
		timerInterval = setInterval(function() {
			timer--;

			// update displayed timer w/ jquery
			if (timer >= 2) {
				$("#timer").html(timer + ' seconds');	
			}
			if (timer == 1) {
				$("#timer").html(timer + ' second');		
			}

			if (timer == 0) {
				clearInterval(gameInterval);
				clearInterval(timerInterval);
				$("#timer").html(timer + ' seconds');		
				gameStarted=false;
				index = 0;
			};

		}, 1000);
	} 
});

function randomRat(){
	rat = Math.floor((Math.random() * 9)+1);
}

function showUp(rat){
	$('[data-id="' + rat + '"]').fadeIn(2000);
	$('[data-id="' + rat + '"]').fadeOut(2000);
};

$(".rat").click(function() {
	index++;
	// $(".rat").stop();
	$(".rat").hide();

	if (index == 1) {
		$("#count").html("1 whack");	
	}
	if (index >= 2) {
		$("#count").html(index + ' whacks');	
	}
});

});