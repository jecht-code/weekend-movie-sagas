//Main Dependencies
import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
//Different Pages
import MovieList from '../MovieList/MovieList';
import DetailsPage from '../DetailsPage/DetailsPage';
//Import CSS styling
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path="/detailspage" exact>
          <DetailsPage />
        </Route>
        {/* Add Movie page */}
        
      </Router>
    </div>
  );
}

export default App;
