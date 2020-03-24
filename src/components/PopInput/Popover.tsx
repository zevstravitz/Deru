import React, { useRef, useEffect } from "react";

type OutsideAlerterProps = {
  children: JSX.Element
}

// Wrapper FC for component that should disappear on outside click
const OutsideAlerter: React.FC<OutsideAlerterProps> = (props) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div ref={wrapperRef}>
      {props.children}
    </div>
  )
}

type refType = React.MutableRefObject<any>

// Custom hook for detecting outside click
const useOutsideAlerter = (ref: refType) => {
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