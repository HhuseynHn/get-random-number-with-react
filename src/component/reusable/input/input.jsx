/** @format */
import React from "react";

const Input = ({ type, value, placeholder, className, handleChange }) => {
  return (
    <>
      <input
        type={type}
        value={value}
        className={className}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </>
  );
};
export default Input;

{
  /* <input
  type={props.type}
  value={props.value}
  className={props.className}
  onChange={props.handleChange}
/>; */
}
