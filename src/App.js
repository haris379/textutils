import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
function App() {
  return (
    <>
      <Navbar title = "TextUtils" AboutText = "About TextUtils"/>
      <TextForm/>
    </>
  );
}

export default App;
