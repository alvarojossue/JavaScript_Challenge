console.log("JavaScript file is wired!");

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key'); // Returns an array of all keys

keys.forEach(key => key.addEventListener('transitionend', removePlayingClass));


// ----Function to play sound when key is pressed---- //

function playSound(event) {
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
	const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
	if(!audio) return; // stop the function from running all together
	audio.currentTime = 0; // When the key is press, the audio rewinds to the start
	audio.play();
	key.classList.add('playing');
}

// ----Function to remove class of playing---- //

function removePlayingClass(event) {
	if(event.propertyName !== 'transform') return // Just skip it
	this.classList.remove('playing'); // 'this' is the div element corresponding to the pressed key
}