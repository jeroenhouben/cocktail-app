import React from 'react';
import { Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import CocktailCategoriesContainer from './components/CocktailCategoriesContainer'
import DrinkTypeContainer from './components/DrinkTypeContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" component={CocktailCategoriesContainer} />
        <Route path="/drink-types/:drinktype" component={DrinkTypeContainer} />
      </header>
    </div>
  );
}

export default App;
