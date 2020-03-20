import React from 'react'
import './index.css';

function NewBlockButton() {
  return (
    <button
      className="new-block-button">
      <svg className='plus-icon' viewBox="0 0 24 24">
        <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
      </svg>
      </button>
  )
}

export default NewBlockButton;