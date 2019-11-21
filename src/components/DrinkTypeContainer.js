import React, { Component } from 'react';
import DrinkType from './DrinkType'

class DrinkTypeContainer extends Component {
  state = {
    imgURLs: []
  }
  componentDidMount() {
    console.log(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${decodeURIComponent(this.props.match.params.drinktype)}`)
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${decodeURIComponent(this.props.match.params.drinktype)}`)
      .then(res => res.json())
      .then(data => {
        const imgURLs = data.drinks.map(drink => drink['strDrinkThumb'])
        this.setState({ imgURLs })
      })
  }
  render() {
    return (
      <DrinkType imgURLs={this.state.imgURLs} />
    );
  }
}

export default DrinkTypeContainer;