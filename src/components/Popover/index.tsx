import React, { useState } from "react";
import "./index.scss";
import CloseOnOutsideClick from '../CloseOnOutsideClick/index'

const PopInput: React.FC = () => {
  const [tex, setTex] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here we call a fn to change the state of the parent to close it
  }
 
  return (
    <div>
      <CloseOnOutsideClick>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='Enter TeX Here'
            onChange={e => setTex(e.target.value)}></input>
        </form>
      </CloseOnOutsideClick>
    </div>
  )
};

export default PopInput;
