import * as React from 'react'
import '../App.css'

function NewBlock() {
  return (
    <span className="new-block">
      <NewBlockButton></NewBlockButton>
      <BlockInput></BlockInput>
    </span>
  )
}

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

function BlockInput() {
  return (
    <div
      placeholder="Type '/' for commands"
      contentEditable="true">
        Type '/' for commands
      </div>
  )
}

export default NewBlock;
