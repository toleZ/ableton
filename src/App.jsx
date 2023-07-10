import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="bg-[#f3f3f3]">
      <div className="max-w-[1600px] mx-auto bg-white">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>Not found</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
