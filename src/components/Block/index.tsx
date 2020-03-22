import React from 'react'
import './index.css';
import { v4 as uuidv4 } from 'uuid';

import TextBlock from './TextBlock';
import NewBlockButton from './NewBlockButton'

function NewBlock() {
  return (
    <span className="new-block">
      <NewBlockButton></NewBlockButton>
      <TextBlock id={uuidv4()} placeholder="Type '/' for commands"></TextBlock>
    </span>
  )
}

export default NewBlock;
