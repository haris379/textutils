import React from 'react';
import PropTypes from 'prop-types';
export default function GreetingForm(props) {
  return (
    <>
    <div>
        <p>Hello form {props.nameOfPerson}</p>
    </div>
    </>
  )
}
