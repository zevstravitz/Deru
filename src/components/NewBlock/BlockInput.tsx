import React from 'react'
import './index.css';

interface BlockInputProps {
  id: string,
  placeholder: string
}

class BlockInput extends React.Component<BlockInputProps> {
  state = {
    innerContent: ''
  }

  handleInput = (event: React.KeyboardEvent): any => {
    let currContent  = document.getElementById(this.props.id)
    this.setState({
      innerContent: currContent?.innerText
    })
  }

  render () {
    return (
      <React.Fragment>
        <div
          id={this.props.id}
          className={'block-input' +
                    (this.state.innerContent === '' ? ' .empty-input' : '')
                    }
          placeholder={this.props.placeholder}
          contentEditable="true"
          onKeyDown={(e) => this.handleInput(e)}
        >
        </div>
      </React.Fragment>
    )
  }
}

export default BlockInput;