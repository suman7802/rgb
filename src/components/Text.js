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
    <>
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
      <div className="monitor flex flex-row mx-2 text-left">
        <div>
          <p className="text-xl font-bold">Your Text Summary</p>
          <p>
            {text.split(" ").length}words and {text.length}characters
          </p>
          <p>
            Aprox {0.008 * text.split(" ").length} minutes time will take to read this{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Text;
