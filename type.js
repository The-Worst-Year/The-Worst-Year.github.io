// Find all text with .tricks class and break each letter into a span
var tricksWord = document.getElementsByClassName("tricks");
for (var i = 0; i < tricksWord.length; i++) {

	var wordWrap = tricksWord.item(i);
	wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="tricksword">$2</span>');

}


var tricksLetter = document.getElementsByClassName("tricksword");
for (var i = 0; i < tricksLetter.length; i++) {

	var letterWrap = tricksLetter.item(i);
	letterWrap.innerHTML = letterWrap.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

}






// Fade Up Animation
var fadeUp = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp
	.add({
		targets: '.fade-up .letter',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		easing: "easeOutExpo",
		duration: 4000,
		delay: (el, i) => 300 + 30 * i
	}).add({
		targets: '.fade-up .letter',
		translateY: [0, -100],
		opacity: [1, 0],
		easing: "easeInExpo",
		duration: 1200,
		delay: (el, i) => 100 + 30 * i
	});




var fadeUp2 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp2
	.add({
		targets: '.fade-up2 .letter',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		easing: "easeOutExpo",
		duration: 4000,
		delay: (el, i) => 300 + 30 * i
	}).add({
		targets: '.fade-up2 .letter',
		translateY: [0, -100],
		opacity: [1, 0],
		easing: "easeInExpo",
		duration: 1200,
		delay: (el, i) => 100 + 30 * i
	});




var fadeUp3 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp3
	.add({
		targets: '.fade-up3 .letter',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		easing: "easeOutExpo",
		duration: 4000,
		delay: (el, i) => 300 + 30 * i
	}).add({
		targets: '.fade-up3 .letter',
		translateY: [0, -100],
		opacity: [1, 0],
		easing: "easeInExpo",
		duration: 1200,
		delay: (el, i) => 100 + 30 * i
	});




var fadeUp4 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp4
	.add({
		targets: '.fade-up4 .letter',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		easing: "easeOutExpo",
		duration: 4000,
		delay: (el, i) => 300 + 30 * i
	}).add({
		targets: '.fade-up4 .letter',
		translateY: [0, -100],
		opacity: [1, 0],
		easing: "easeInExpo",
		duration: 1200,
		delay: (el, i) => 100 + 30 * i
	});




var fadeUp5 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp5
	.add({
		targets: '.fade-up5 .letter',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		easing: "easeOutExpo",
		duration: 3750,
		delay: (el, i) => 300 + 30 * i
	}).add({
		targets: '.fade-up5 .letter',
		translateY: [0, -100],
		opacity: [1, 0],
		easing: "easeInExpo",
		duration: 1200,
		delay: (el, i) => 100 + 30 * i
	});




var fadeUp6 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp6
	.add({
		targets: '.fade-up6 .letter',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		easing: "easeOutExpo",
		duration: 4000,
		delay: (el, i) => 300 + 30 * i
	}).add({
		targets: '.fade-up6 .letter',
		translateY: [0, -100],
		opacity: [1, 0],
		easing: "easeInExpo",
		duration: 1200,
		delay: (el, i) => 100 + 30 * i
	});




var fadeUp7 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp7
	.add({
		targets: '.fade-up7 .letter',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		easing: "easeOutExpo",
		duration: 4000,
		delay: (el, i) => 300 + 30 * i
	}).add({
		targets: '.fade-up7 .letter',
		translateY: [0, -100],
		opacity: [1, 0],
		easing: "easeInExpo",
		duration: 1200,
		delay: (el, i) => 100 + 30 * i
	});




var fadeUp8 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp8
	.add({
		targets: '.fade-up8 .letter',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		easing: "easeOutExpo",
		duration: 4000,
		delay: (el, i) => 300 + 30 * i
	}).add({
		targets: '.fade-up8 .letter',
		translateY: [0, -100],
		opacity: [1, 0],
		easing: "easeInExpo",
		duration: 1200,
		delay: (el, i) => 100 + 30 * i
	});





var fadeUp9 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp9
	.add({
		targets: '.fade-up9 .letter',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		easing: "easeOutExpo",
		duration: 4000,
		delay: (el, i) => 300 + 30 * i
	}).add({
		targets: '.fade-up9 .letter',
		translateY: [0, -100],
		opacity: [1, 0],
		easing: "easeInExpo",
		duration: 1200,
		delay: (el, i) => 100 + 30 * i
	});






var fadeUp10 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp10
	.add({
		targets: '.fade-up10 .letter',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		easing: "easeOutExpo",
		duration: 4000,
		delay: (el, i) => 300 + 30 * i
	}).add({
		targets: '.fade-up10 .letter',
		translateY: [0, -100],
		opacity: [1, 0],
		easing: "easeInExpo",
		duration: 1200,
		delay: (el, i) => 100 + 30 * i
	});






var fadeUp11 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp11
	.add({
		targets: '.fade-up11 .letter',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		easing: "easeOutExpo",
		duration: 4000,
		delay: (el, i) => 300 + 30 * i
	}).add({
		targets: '.fade-up11 .letter',
		translateY: [0, -100],
		opacity: [1, 0],
		easing: "easeInExpo",
		duration: 1200,
		delay: (el, i) => 100 + 30 * i
	});








var fadeUp12 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp12
	.add({
		targets: '.fade-up12 .letter',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		easing: "easeOutExpo",
		duration: 4000,
		delay: (el, i) => 300 + 30 * i
	}).add({
		targets: '.fade-up12 .letter',
		translateY: [0, -100],
		opacity: [1, 0],
		easing: "easeInExpo",
		duration: 1200,
		delay: (el, i) => 100 + 30 * i
	});









var fadeUp13 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp13
	.add({
		targets: '.fade-up13 .letter',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		easing: "easeOutExpo",
		duration: 4000,
		delay: (el, i) => 300 + 30 * i
	}).add({
		targets: '.fade-up13 .letter',
		translateY: [0, -100],
		opacity: [1, 0],
		easing: "easeInExpo",
		duration: 1200,
		delay: (el, i) => 100 + 30 * i
	});







var fadeUp14 = anime.timeline({
	loop: false,
	autoplay: false,
});

fadeUp14
	.add({
		targets: '.fade-up14 .letter',
		translateY: [100, 0],
		translateZ: 0,
		opacity: [0, 1],
		easing: "easeOutExpo",
		duration: 4000,
		delay: (el, i) => 300 + 30 * i
	}).add({
		targets: '.fade-up14 .letter',
		translateY: [0, -100],
		opacity: [1, 0],
		easing: "easeInExpo",
		duration: 1200,
		delay: (el, i) => 100 + 30 * i
	});









// Wait before playing animation
setTimeout(() => {
	// Put the play below this line
	fadeUp.play();
}, 10000);

setTimeout(() => {
	// Put the play below this line
	fadeUp2.play();
}, 17500);

setTimeout(() => {
	// Put the play below this line
	fadeUp3.play();
}, 24500);

setTimeout(() => {
	// Put the play below this line
	fadeUp4.play();
}, 31500);

setTimeout(() => {
	// Put the play below this line
	fadeUp5.play();
}, 38500);

setTimeout(() => {
	// Put the play below this line
	fadeUp6.play();
}, 49500);

setTimeout(() => {
	// Put the play below this line
	fadeUp7.play();
}, 59000);




//************************* white slides starts ***************************//




setTimeout(() => {
	// Put the play below this line
	fadeUp8.play();
}, 64500);


setTimeout(() => {
	// Put the play below this line
	fadeUp9.play();
}, 70000);


setTimeout(() => {
	// Put the play below this line
	fadeUp10.play();
}, 76500);


setTimeout(() => {
	// Put the play below this line
	fadeUp11.play();
}, 82500);


setTimeout(() => {
	// Put the play below this line
	fadeUp12.play();
}, 88500);


setTimeout(() => {
	// Put the play below this line
	fadeUp13.play();
}, 99500);


setTimeout(() => {
	// Put the play below this line
	fadeUp14.play();
}, 105500);