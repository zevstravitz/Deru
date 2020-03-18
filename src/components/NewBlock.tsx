import React from 'react'
import '../App.css'

import uuid from 'uuid/v4'

function NewBlock() {
  return (
    <span className="new-block">
      <NewBlockButton></NewBlockButton>
      <BlockInput placeholder="Type '/' for commands"></BlockInput>
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

interface BlockInputProps {
  placeholder: string
}

class BlockInput extends React.Component<BlockInputProps> {
  state = {
    innerContent: ''
  }

  handleInput = () => {
    return; 
  }

  componentDidMount () {
    return;
  }

  componentDidUpdate () {
    return;
  }

  return (
      <div
        id={uuid()}
        className="block-input"
        placeholder={this.props.placeholder}
        contentEditable="true"
        onKeyDown={e => handleInput(e.currentTarget.innerHTML)}></div>
  )
}

export default NewBlock;
