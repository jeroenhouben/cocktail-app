import React, { Component } from 'react';
import Route from 'react-router-dom'
import CocktailCategories from './CocktailCategories'

class CocktailCategoriesContainer extends Component {
  state = {
    drinkTypes: []
  }
  componentDidMount() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then(res => res.json())
      .then(data => {
        const drinkTypes = data.drinks.map(drinkType => drinkType["strCategory"])
        this.setState({ drinkTypes })
      })
  }
  render() {
    return (
      <CocktailCategories drinkTypes={this.state.drinkTypes} />
    );
  }
}

export default CocktailCategoriesContainer;