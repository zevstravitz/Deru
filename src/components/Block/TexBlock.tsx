import React, { useState, useEffect } from "react";
import katex from "katex";
import "./index.scss";

type TexBlockProps = {
  id: string;
}; 

const TexBlock: React.FC<TexBlockProps> = (props) => {
  const [tex, setTex] = useState("\\sum + \\frac{3}{4} + 4");
  const [raw, setRaw] = useState(true);

  useEffect(() => {
    const element = document.getElementById(props.id);
    if (element) {
      katex.render(tex, element, {
        throwOnError: false,
        displayMode: true,
      });
    }
  }, [tex, props.id]);

  if (raw) return <span id={props.id}></span>;
  else return <div contentEditable="true" placeholder="Type Tex"></div>;
};

export default TexBlock;
