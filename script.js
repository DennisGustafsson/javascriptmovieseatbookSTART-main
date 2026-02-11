class Movie {
	constructor(name, price, year, poster) {
		this.name = name;
		this.price = price;
		this.year = year || null;
		this.poster = poster || null;
	}
}


const container = document.querySelector('.container');
const countEl = document.getElementById('count');
const totalEl = document.getElementById('total');
const movieSelect = document.getElementById('movie');


const MOVIE_API_URL = 'http://localhost:3000/movies';


function updateSelectedCount() {
	const selectedSeats = document.querySelectorAll('.row .seat.selected');
	const selectedCount = selectedSeats.length;
	const ticketPrice = Number(movieSelect.value) || 0;

	countEl.innerText = selectedCount;
	totalEl.innerText = selectedCount * ticketPrice;
}


function setMovieOptions(movies) {
	movieSelect.innerHTML = '';

	for (let i = 0; i < movies.length; i += 1) {
		const movie = movies[i];
		const option = document.createElement('option');
		option.value = movie.price;
		option.textContent = `${movie.name} (${movie.price} kr)`;
		movieSelect.appendChild(option);
	}
}


async function fetchMovies() {
	const response = await fetch(MOVIE_API_URL);

	if (!response.ok) {
		throw new Error('Failed to fetch movies');
	}

	const data = await response.json();
	const movies = [];

	for (let i = 0; i < data.length; i += 1) {
		const movie = data[i];
		const name = movie.Title || movie.name;
		const price = movie.Price || movie.price;
		const year = movie.Year || movie.year || null;
		const poster = movie.Poster || movie.poster || null;

		movies.push(new Movie(name, price, year, poster));
	}

	return movies;
}


async function initMovies() {
	try {
		const movies = await fetchMovies();
		setMovieOptions(movies);
		updateSelectedCount();
	} catch (error) {
		console.error(error);
		movieSelect.innerHTML = '<option value="0">Kunde inte ladda filmer</option>';
		updateSelectedCount();
	}
}


function handleSeatClick(event) {
	const seat = event.target;

	if (!seat.classList.contains('seat')) {
		return;
	}

	if (seat.classList.contains('occupied')) {
		return;
	}

	seat.classList.toggle('selected');
	updateSelectedCount();
}


container.addEventListener('click', handleSeatClick);


movieSelect.addEventListener('change', updateSelectedCount);


initMovies();

