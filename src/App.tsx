import "./App.css";
import Home from "./pages/HomePage/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import About from "./pages/AboutPage/About";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
