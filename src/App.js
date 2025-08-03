import "./App.css";
import { useState } from "react";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import Alert from "./Alert";
import About from "./component/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode is enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={
            <TextForm
              showAlert={showAlert}
              heading="Enter the Text to analyze"
              mode={mode}
            />
          } />
          <Route path="/about" element={<About mode = {mode}/>} />
          {/* Fallback route to prevent blank page */}
          <Route path="*" element={
            <TextForm
              showAlert={showAlert}
              heading="Try TextUtils - Word Counter , Character Counter , Remove extra spaces , Speak text"
              mode={mode}
            />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
