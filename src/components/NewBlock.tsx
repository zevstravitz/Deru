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
      className="new-block-button">+</button>
  )
}

function BlockInput() {
  return (
    <div>
      <input
        className='block-input'
        type='text'
        placeholder="Type '/' for commands"></input>
    </div>
  )
}

export default NewBlock;
