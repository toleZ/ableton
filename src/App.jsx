import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#f3f3f3]">
      <div className="max-w-[1600px] mx-auto bg-white font-futura-pt overflow-hidden">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </div>
  );
};

export default App;
