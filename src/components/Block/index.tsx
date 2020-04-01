import React, { useState } from "react";

import { IBlock } from '../Page/PageTypes'
import "./index.scss";

import NewBlockButton from "./NewBlockButton";

// Block Types
import TextBlock from "./TextBlock";
import TexBlock from './TexBlock';
import VideoBlock from "./VideoBlock";

const Block: React.FC<IBlock> = (props) => {
  const [blockType, setBlockType] = useState('text')
  let block;

  if (blockType === 'text') {
    block = <TextBlock id={props.id} placeholder="Type '/' for commands"></TextBlock>;
  } else if (blockType === 'tex') {
    block = <TexBlock id={props.id} content={props.content}></TexBlock>
  } else if (blockType === 'video') {
    block = <VideoBlock id={props.id}></VideoBlock>
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
