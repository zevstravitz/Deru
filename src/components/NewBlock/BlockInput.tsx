import React, { useState } from 'react'
import './index.css';

interface BlockInputProps {
  id: string,
  placeholder: string
}

const BlockInput: React.FC<BlockInputProps> = (props) => {
  const [innerContent, setInnerContent] = useState('')

  const handleInput = (event: React.KeyboardEvent): any => {
    let currContent  = document.getElementById(props.id)
    if (currContent)
      setInnerContent(currContent.innerText)
  }

  return (
      <React.Fragment>
        <div
          id={props.id}
          className={'block-input' +
                    (innerContent === '' ? ' .empty-input' : '')
                    }
          placeholder={props.placeholder}
          contentEditable="true"
          onKeyDown={(e) => handleInput(e)}
        >
        </div>
      </React.Fragment>
    )
}

export default BlockInput;