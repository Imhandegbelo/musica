import { Routes, Route } from "react-router";
import Home from "./pages/Home";
// import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      {/* <Route path="*" element={</>} /> */}
    </Routes>
  );
}

export default App;
