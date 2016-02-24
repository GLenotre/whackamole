"use strict";

$(document).ready(function(){
	$(".rat").fadeOut();

("p").click(function() {
	index = 0;
	randomRat();
	showUp();
});

function randomRat(){
	var rat = Math.floor((Math.random() * 9)+1);
	numberRat.push(rat);
}

function showUp(){
	$("#ratone").fadeIn();
}

function dropOut(){

}

function scoreBoard(){

}

});