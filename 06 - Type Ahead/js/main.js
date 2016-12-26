const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];


const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');


// ---- Fetching the data from the endpoint ---- ///

fetch(endpoint) // Returns a promise
	.then(blob => blob.json()) // First step to convert it to json, but it still a promise
	.then(data => cities.push(...data)) // Gets the data and pushes it into the array of cities


// ---- Event listerners for the search box ---- //

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keydown', displayMatches);


// ---- Function to find matches in the array of cities ---- //


function findMatches(wordToMatch, cities) {
	return cities.filter(place => {
		const regex = new RegExp(wordToMatch, 'gi');
		return place.city.match(regex) || place.state.match(regex)
	})
}

// ---- Function to display the HTML from the matches ---- //

function displayMatches(){
	const matchArray = findMatches(this.value, cities);
	const html = matchArray.map(place => {
		return `
			<li>
				<span class="name">${place.city}, ${place.state}</span>
				<span class="population">${numberWithCommas(place.population)}</span>
			</li>
		`;
	}).join('');
	suggestions.innerHTML = html;
}

// ---- Function to format population number ---- //

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
