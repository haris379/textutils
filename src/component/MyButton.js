import React from 'react'
import PropTypes from 'prop-types'
MyButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default function MyButton(props) {
  return (
    <>
    <button className="btn btn-primary" onClick={props.onClick}>
      {props.label}
    </button>
    </>
  )
}
