import React, { useState } from "react";
import "./index.scss";
import { v4 as uuidv4 } from "uuid";

import NewBlockButton from "./NewBlockButton";

// Block Types
import TextBlock from "./TextBlock";
import TexBlock from './TexBlock';
import VideoBlock from "./VideoBlock";

function Block() {
  const [blockType, setBlockType] = useState('text')
  let block;

  if (blockType === 'text') {
    block = <TextBlock id={uuidv4()} placeholder="Type '/' for commands"></TextBlock>;
  } else if (blockType === 'tex') {
    block = <TexBlock id={uuidv4()}></TexBlock>
  } else if (blockType === 'video') {
    block = <VideoBlock id={uuidv4()}></VideoBlock>
  } else {
    return <div>In ./block/index.tsx</div>
  }

  return (
    <span className="new-block">
      <NewBlockButton></NewBlockButton>
      {block}
    </span>
  );
}

export default Block;
