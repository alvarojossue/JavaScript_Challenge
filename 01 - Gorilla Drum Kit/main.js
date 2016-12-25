console.log("JavaScript file is wired!");

window.addEventListener('keydown', function(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if(!audio) return; // stop the function from running all together
	audio.currentTime = 0; // When the key is press, the audio rewinds to the start
	audio.play();
	key.classList.add('playing');
});