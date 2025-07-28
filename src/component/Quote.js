import React from 'react'
import PropTypes from 'prop-types'

export default function Quote(props) {
  return (
    <div>
      <h1>Quote of the day</h1>
      <p>{props.quoteOfTheDay}</p>
      <p>Author : {props.authorOfQuote}</p>
    </div>
  )
}
