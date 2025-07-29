import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
// import AppCounter from "./component/AppCounter";
// import About from "./component/About";

function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" AboutText="About TextUtils" /> */}
      <div className="container my-3">
        <TextForm heading="Enter the Text to analyze" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
