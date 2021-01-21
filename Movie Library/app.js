const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

let content = document.querySelector('#content')
let search = document.querySelector('#search')
let form = document.querySelector('#form')
let home = document.querySelector('#home')



getMovies(APIURL);

async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

console.log(respData)

  showMovies(respData.results)
}
function showMovies(movies) {
    content.innerHTML = '';

    movies.forEach(movie => {
        let {title,poster_path, vote_average} = movie;

        if(poster_path != null){
            let movieEL = document.createElement('div')
            movieEL.classList.add('movie')
            movieEL.innerHTML = `
            <div class="movie-img">
            <img src="${IMGPATH + poster_path}" alt="${title}">
            </div>
            <div class="movie-info">
            <div class="movie-name">${title}</div>
            <div class="movie-rate ${rateVotes(vote_average)}">${vote_average}</div>
            </div>`;
            content.appendChild(movieEL)
        }
    });
}

let rateVotes = (vote) =>{
    if(vote >=8){
        return "green"
    } else if(vote >=5){

        return "orange"
    } else{
        return "red"
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getMovies(SEARCHAPI + searchTerm);

        search.value = "";
    }
});

home.addEventListener("click", () => {

    getMovies(APIURL)
});
