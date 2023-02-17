import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import Form from "./components/Form";
import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import Alert1 from "./components/Alert";
import {showAlert} from "./index";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import PageNotFound from "./components/404";

function App(props) {
  const Title = () => {
    document.title = "Jaldi kar kalsubha Panwel jana hai";
  };
  const [Alert, setAlert] = useState(null);
  const showAlert = (message, color) => {
    console.log(message, color);
    setAlert({
      message: message,
      color: color,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const options = [
    {
      text: "Home",
      link: "",
    },
    {
      text: "About",
      link: "about",
    },
    {
      text: "Contact",
      link: "contact",
    },
    {
      text: "Login",
      link: "login",
    },
  ];

  setTimeout(() => {
    Title();
  }, 10000);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Text method={showAlert} />,
    },
    {
      path: "login",

      element: (
        <div>
          <Form />
        </div>
      ),
    },
    {path: "*", element: <PageNotFound />},
  ]);

  return (
    <div className="App">
      <Title />
      {Alert && <Alert1 alert={Alert} />}

      <Navbar options={options} NavbarColor="rgba(158, 167, 242, 0.5)" />

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
