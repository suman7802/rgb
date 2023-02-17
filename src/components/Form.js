import React, {useState} from "react";

export default function Form({}) {
  const [btnText, setBtnText] = useState("Dark Mode");
  const [theme, setTheme] = useState({
    color: "black",
    backgroundColor: "rgb(245, 245, 239)",
    borderColor: "black",
  });
  const Title = () => {
    document.title = "Login page";
  };

  const toggleMode = () => {
    if (theme.color === "black") {
      setTheme({
        color: "white",
        backgroundColor: "rgb(38, 38, 38)",
        borderColor: "white",
      });
      setBtnText("Light Mode");
    } else {
      setTheme({
        color: "black",
        backgroundColor: "rgb(245, 245, 239)",
        borderColor: "black",
      });
      setBtnText("Dark Mode");
    }
  };

  return (
    <>
      <div style={theme} className="flex flex-col items-center  h-[100vh]">
        <Title />
        <form action="/">
          <div
            style={theme}
            className="min-w-[30vw] min-h-[30%] mt-10 my-3 mx-5 flex flex-col rounded-md  border-[4px] items-center py-2">
            <input
              style={{borderColor: "black"}}
              className="input"
              type="text"
              name="name"
              id="name"
              placeholder="FullName"
              required
            />
            <input
              style={{borderColor: "black"}}
              className="input"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <input
              style={{borderColor: "black"}}
              className="input"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
            <button type="submit" className="button min-w-[14rem]">
              Login
            </button>
            <button type="/" className="button min-w-[14rem]">
              CreateAccount
            </button>
          </div>
        </form>
        <div className="mode">
          <button className="button" onClick={toggleMode}>
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
}