import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import './MovieList.css';

function MovieList() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);
  const history = useHistory();
  // const location = useLocation();

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  const handleMovieitem = (movie) => {
    //console.log('click!!')
    //location.state = movie
    //console.log(movie)
    history.push({ pathname: '/detailspage', state: movie })
  }

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id}>
              <h3>{movie.title}</h3>
              <img src={movie.poster} alt={movie.title} onClick={() => handleMovieitem(movie)}/>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
