import React from "react";

function Alert(props) {
  return (
    <>
      <div
        style={{backgroundColor: props.alert.color}}
        className="h-[2rem] w-[100vw] absolute">
        {props.alert.message}
      </div>
    </>
  );
}
export default Alert;
