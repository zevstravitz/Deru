import React, { useState, useEffect } from "react";
// import NewBlock from '../NewBlock/index'
import "./index.scss";

type BlockInputProps = {
  id: string;
  placeholder: string;
};

const BlockInput: React.FC<BlockInputProps> = (props) => {
  const [innerContent, setInnerContent] = useState('');

  const handleInput = (event: React.KeyboardEvent): any => {
    if (event.key === "Enter") {

    }
    
    const currContent = document.getElementById(props.id);
    if (currContent) setInnerContent(currContent.innerText);
  };

  useEffect(() => {
    document.getElementById(props.id)?.focus();
  });

  return (
    <React.Fragment>
      <div
        id={props.id}
        className={"block-input" + (innerContent === "" ? "" : "")}
        placeholder={props.placeholder}
        contentEditable="true"
        onKeyDown={(e) => handleInput(e)}
      ></div>
    </React.Fragment>
  );
};

export default BlockInput;
