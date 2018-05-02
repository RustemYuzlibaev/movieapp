import axios from 'axios';
import $ from 'jquery';

$(document).ready(() => {

  $('#searchForm').on('submit', (e) => {
    let searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
});

function getMovies(searchText) {
  axios.get('http://www.omdbapi.com?s=' + searchText + '&apikey=thewdb')
       .then((responce) => {
         console.log(responce);
         let movies = responce.data.Search;
         let output = '';
         $.each(movies, (index, movie) => {
           output += `
               <div class="movie-section">
                 <div><img src="${movie.Poster}"></div>
                 <div><h5>${movie.Title}</h5></div>
               </div>
           `;
         });
         $('#movies').html(output);
       })
       .catch((err) => {
         console.log(err);
       });
}
