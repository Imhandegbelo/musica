import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import SingleAlbum from "./pages/SingleAlbum";
// import "./App.css";

function App() {
  return (
    <div className="bg-[#1D2123] h-screen ">
      <div className="max-w-[1440px] mx-auto">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:id" element={<SingleAlbum/>} />
          <Route path="/collection" element={<Collection/>} />
          {/* <Route path="*" element={</>} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
