import React from 'react'
import '../App.css'
import { prependOnceListener } from 'cluster'

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
  constructor(props: BlockInputProps) {
    super(props)
    this.state = {}
  }

  handleInput() {
    
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  return (
    <React.Fragment>
      <div
        className="block-input"
        placeholder={props.placeholder}
        contentEditable="true"
        onKeyDown={e => handleInput(e.currentTarget.innerHTML)}></div>
    </React.Fragment>
  )
}

export default NewBlock;
