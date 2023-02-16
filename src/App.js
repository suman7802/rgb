import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import Form from "./components/Form";
function App() {
  return (
    <div className="App">
      <Navbar
        option1="Home"
        option2="About"
        option3="Contact"
        NavbarColor="rgba(158, 167, 242, 0.5)"
      />
      <Text/>
      <Form />
    </div>
  );
}

export default App;
