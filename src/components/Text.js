import React, {useState} from "react";

const Text = () => {
  const [text, setText] = useState("");
  
  const HandleOnChange = (event) => {
    setText(event.target.value);
  };

  const UpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const LowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  return (
    <div className="flex flex-row p-2">
      <textarea
        value={text}
        onChange={HandleOnChange}
        className="border-[1px] border-black p-2"
        name="input"
        id="input"
        placeholder="TextManipulation"
        cols="180"
        rows="10"></textarea>
      <div className="right flex flex-col">
        <button className="button" onClick={UpperCase}>
          UpperCase
        </button>
        <button className="button" onClick={LowerCase}>
          LowerCase
        </button>
      </div>
    </div>
  );
};

export default Text;
