import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

function DetailsPage() {

    const history = useHistory();
    const location = useLocation();
    console.log(location)
    const movie = history.location.state;
    
    const handleBackTo = () => {
        history.push({ pathname: '/', state: movie })
        console.log({history})
    }
  
    return (
    
      <div data-testid='movieDetails'>
        <h1>DetailsPage</h1>
        <h2>{movie.title}</h2>
        <img src={movie.poster}></img>
        <p>{movie.description}</p>
        <button data-testid='toList' onClick={() => handleBackTo()}>Return to List</button>
      </div>
    );
  }

export default DetailsPage;