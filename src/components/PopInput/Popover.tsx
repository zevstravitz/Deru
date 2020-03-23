import React, { useRef, useEffect } from "react";

type OutsideAlerterProps = {
  children: JSX.Element
}

const OutsideAlerter: React.FC<OutsideAlerterProps> = (props) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return <div ref={wrapperRef}>{props.children}</div>;
}

type useOutsideAlerterProps = {
  ref: React.PropsWithChildren<useOutsideAlerterProps>
}

const useOutsideAlerter: React.FC<useOutsideAlerterProps> = (ref) => {
  
  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      alert("You clicked outside of me!");
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}

export default OutsideAlerter;