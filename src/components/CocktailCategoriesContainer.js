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
        const drinkTypes = data.drinks.map(drinkType => {
          const name = drinkType["strCategory"]
          const nameArray = name.split(' ')
          const toBeReturned = nameArray.join('_')
          return drinkType["strCategory"]
        })
        console.log('drink types', drinkTypes)
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