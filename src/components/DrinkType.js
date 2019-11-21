import React, { Component } from 'react';

export default function DrinkType(props) {
  const images = props.imgURLs
  return (
    <div>
      <ul>
        {images && images.map(url => <img src={url} />)}
        {!images && 'Loading...'}
      </ul>
    </div>
  )
}