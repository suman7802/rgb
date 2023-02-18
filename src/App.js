import "./App.css";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import Form from "./components/Form";
import React, {useState} from "react";
import Alert1 from "./components/Alert";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PageNotFound from "./components/404";

function App() {

  const [Alert, setAlert] = useState(null);
  const showAlert = (message, color) => {
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
      <Navbar options={options} NavbarColor="rgba(158, 167, 242, 0.5)" />
      {Alert && <Alert1 alert={Alert} />}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
