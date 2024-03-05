import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function DetailsPage() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();
    const location = useLocation();

    movieList = location.state;
    
    const handleBackTo = (event) => {
        history.push({ pathname: '/' })
    }
  
    return (
    
      <div data-testid='movieDetails'>
        <h1>DetailsPage</h1>
        <h2>{movieList.title}</h2>
        <img src={movieList.poster}></img>
        <button data-testid='toList' onClick={(event) = handleBackTo(event)}>Return to List</button>
      </div>
    );
  }

export default DetailsPage;