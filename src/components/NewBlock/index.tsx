import React from 'react'
import './index.css';
import { v4 as uuidv4 } from 'uuid';

import BlockInput from './BlockInput';
import NewBlockButton from './'

function NewBlock() {
  return (
    <span className="new-block">
      <NewBlockButton></NewBlockButton>
      <BlockInput id={uuidv4()} placeholder="Type '/' for commands"></BlockInput>
    </span>
  )
}

export default NewBlock;
