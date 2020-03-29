import React, { useState } from "react";
import "./index.scss";
import { v4 as uuidv4 } from "uuid";

import NewBlockButton from "./NewBlockButton";

// Block Types
import TextBlock from "./TextBlock";
import TexBlock from './TexBlock';
import VideoBlock from "./VideoBlock";

type BlockProps = {
  id: string;
  type: string;
  content: string | [];
}

const Block: React.FC<BlockProps> = (props) => {
  const [blockType, setBlockType] = useState('text')
  let block;

  if (blockType === 'text') {
    block = <TextBlock id={props.id} placeholder="Type '/' for commands"></TextBlock>;
  } else if (blockType === 'tex') {
    block = <TexBlock id={props.id}></TexBlock>
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
