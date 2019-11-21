import React from "react";
import { Link } from 'react-router-dom'

export default function CocktailCategories(props) {
  return (
    <div>
      <ul>
        {props.drinkTypes.map(drinkType => <li><Link to={`/drink-types/${drinkType}`}>{drinkType}</Link></li>)}
      </ul>
    </div>
  )
}