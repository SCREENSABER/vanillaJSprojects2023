
// const API_URL = 'https://api.themoviedb.org/3/movie/discover/api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'



// const API_URL = 'https://api.themoviedb.org/3/movie/discover/movie?sort_by=popularity.desc&api_key=2a07d3bd7ee357da38bdb22c00b920f4&page=1'
// const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
// const SEARCH_URL = 'https://api.themoviedb.org/3/movie/search/movie?&api_key=2a07d3bd7ee357da38bdb22c00b920f4&page=1&query="'

// const API_URL = 'https://api.themoviedb.org/3/movie/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10?&api_key=3fd2be6f0c70a2a598f084ddfb75487c'













const form = document.getElementById('form')
const search = document.getElementById('search')
const API_URL = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-US&query=game&page=1&include_adult=false'
const IMG_PATH = 'https://image.tmdb.org/t/p/w780'      
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-US&query=game&page=1&include_adult=false&query="'
const main = document.getElementById('main')




getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const searchTerm = search.value

//     if(searchTerm && searchTerm !== '') {
//         getMovies(SEARCH_API + searchTerm)

//         search.value = ''
//     } else {
//         window.location.reload()
//     }
// })





// const API_URL = 'https://api.themoviedb.org/3/movie/discover?&api_key=3fd2be6f0c70a2a598f084ddfb75487c'



function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average,
        overview } = movie

        const movieEl = document.createElement
        ('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
          <img src="${IMG_PATH + poster_path}" alt="${title}">
          <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>
        
        
        `
        main.appendChild(movieEl)
    })
}


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})



function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

