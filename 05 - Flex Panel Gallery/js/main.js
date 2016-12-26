const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


// ----Function to toggle the class open ---- //

function toggleOpen() {
	this.classList.toggle('open');
}

// ----Function to toggle the class open-active ---- //

function toggleActive(e) {
	if(e.propertyName.includes('flex')){
		this.classList.toggle('open-active');
	}
}