import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import Form from "./components/Form";
import Alert1 from "./components/Alert";
import React, {useState} from "react";
function App() {
  const [Alert, setAlert] = useState(null);
  const showAlert = (message, color) => {
    console.log(message, color);
    setAlert({
      message: message,
      color: color,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  };
  return (
    <div className="App">
      {/* <Navbar
        option1="Home"
        option2="About"
        option3="Contact"
        NavbarColor="rgba(158, 167, 242, 0.5)"
      /> */}
      {Alert && <Alert1 alert={Alert} />}
      <Text method={showAlert} />
      {/* <Form /> */}
    </div>
  );
}

export default App;
