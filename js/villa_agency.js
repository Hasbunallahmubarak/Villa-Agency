/*JavaScript Code by Hmabiola */


/* Accordion in section_2 */

let i, acc = document.getElementsByClassName('accordion');
for ( i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
	this.classList.toggle("actively");
	let panel = this.nextElementSibling;
	if (panel.style.maxHeight) {
		panel.style.maxHeight = null;
	} else {
		panel.style.maxHeight = panel.scrollHeight + "px";
	}
});
	acc[0].click();
}

/*Video script code */

let button,video;
button = document.getElementById('videoButton');
video = document.getElementById('theVideo');
button.addEventListener("click", function () {
	if (video.paused) {
		video.play();
		this.src = "images/pause.png";
	} else {
		video.pause();
		this.src = "images/play.png";
	}
});

/* Tablinks in Best Deal section */


function tabFunc(evt, currentTab) {
	let i, tabmenu = document.getElementsByClassName('tabcontent');
	for (i = 0; i < tabmenu.length; i++) {
		tabmenu[i].style.display = "none";
	}
	let tablinks = document.getElementsByClassName("tablink");
	for ( i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active_tab", "");
	}
	document.getElementById(currentTab).style.display = "block";
	evt.currentTarget.className += " active_tab";
}
document.getElementById('defaultOpen').click();

/* Toggle navigation bar on different screen sizes with transition effect*/

let viewport = document.body;
let width = viewport.innerWidth;
let mobile = document.getElementById('mobile');
let navlinks = document.getElementById('navLinks');
mobile.addEventListener("click", function () {
if (navlinks.style.maxHeight) {
	navlinks.style.maxHeight = null;
} else {
	navlinks.style.maxHeight = navlinks.scrollHeight + "px";
}
});



/* JS defined margintop for section1 */
let section1 = document.getElementById('section_1');
let allNav = document.getElementById('allNav');
if (section1.style.marginTop) {
	section1.style.marginTop = null;
} else {
	section1.style.marginTop = allNav.scrollHeight + "px";
}

/* Hide contact info in header on scroll */

window.onscroll = function () {scrollFunc()};
let body, html, toHideElement; 
body = document.body;
html = document.documentElement;
toHideElement = document.getElementById('top-bar');
function scrollFunc() {
	if (body.scrollTop > toHideElement.scrollHeight || html.scrollTop > toHideElement.scrollHeight) {
		toHideElement.style.display = "none";
	} else {
		toHideElement.style.display = "block";
	}
}

/* Source a map link and display it in the DOM */

let img_preview = document.getElementById('map-holder');

if (navigator.onLine){
	img_preview.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63424.74903787807!2d3.3177469!3d6.515759!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d24c04d3e75%3A0x7347f1a6be13e004!2sUniversity%20of%20Lagos!5e0!3m2!1sen!2sng!4v1702552535568!5m2!1sen!2sng";
} else{
	img_preview.src = "images/map.jpg";
}

/* Get User map and display it in the DOM

let lat,long;
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.watchPosition(showPosition);
	} else {
		alert("Your Browser doesn't support geolocation");
	}	
}
function showPosition(position) {
	
	let long_lat = position.coords.latitude + "," + position.coords.longitude;
	let img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+ long_lat +"&zoom=14&size=665x450&sensor=false&key=YOUR_KEY";
	img_preview.src = img_url;
}*/