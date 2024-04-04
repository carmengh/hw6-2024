var video;
video = document.querySelector('#player1');
let vol = document.querySelector('#volume');
let slider = document.querySelector('#slider');

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	vol.textContent = slider.value + "%";
	console.log("Slider value: "+ slider.value);
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector('#slower').addEventListener("click", function(){
	video.playbackRate = video.playbackRate * .90;
	console.log("Video speed: " + video.playbackRate);
});

document.querySelector('#faster').addEventListener("click", function(){
	video.playbackRate = video.playbackRate * 1.111113;
	console.log("Video speed: " + video.playbackRate);
});

document.querySelector('#skip').addEventListener("click", function(){
	let newTime = video.currentTime + 10;
	if (newTime > video.duration){
		video.currentTime = 0;
	}
	else{
		video.currentTime = newTime;
	}
	console.log("Current video location: " + video.currentTime);
});

document.querySelector('#mute').addEventListener("click", function(){
	if (video.muted == true){
		video.muted = false;
		document.querySelector('#mute').textContent = "Mute";
	}
	else{
		video.muted = true;
		document.querySelector('#mute').textContent = "Unmute";
	}
	console.log("Video muted: " + video.muted);
});

document.querySelector('#slider').addEventListener("click", function(){
	video.volume = slider.value * 0.01;
	vol.textContent = (video.volume * 100) + "%";
	console.log("Video volume: " + video.volume);
	console.log("Slider: " + slider.value);
});

document.querySelector('#vintage').addEventListener("click",function(){
	video.classList.remove("video");
	video.classList.add("oldSchool");
	console.log("oldSchool activated");
});

document.querySelector('#orig').addEventListener("click", function(){
	video.classList.remove("oldSchool");
	video.classList.add("video");
	console.log("oldSchool unactivated");
});