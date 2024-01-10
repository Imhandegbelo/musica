import { Routes, Route } from "react-router";
import Home from "./pages/Home";
// import "./App.css";

function App() {
  return (
    <div className="bg-[#1D2123]">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="*" element={</>} /> */}
      </Routes>
    </div>
  );
}

export default App;
