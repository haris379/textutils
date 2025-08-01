import Alert from "./Alert";
import "./App.css";
import BackgroundColors from "./component/BackgroundColors";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light' ) {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode is enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is enabled", "success");
    }
  };

  return (
    <>
      {/* <Navbar title="TextUtils" AboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <BackgroundColors />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the Text to analyze"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;
