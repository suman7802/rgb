import React from "react";

function Alert(props) {
  return (
   
    <>
      <div
        style={{backgroundColor: props.alert.color}}
        className="h-[2rem] w-[100vw]">
        I am <strong>Alert!</strong> {props.alert.message}
      </div>
    </>
  );
}
export default Alert;
