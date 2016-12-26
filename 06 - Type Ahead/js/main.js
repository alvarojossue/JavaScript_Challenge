const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint) // Returns a promise
	.then(blob => blob.json()) // First step to convert it to json, but it still a promise
	.then(data => cities.push(...data))