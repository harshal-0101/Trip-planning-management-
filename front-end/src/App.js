import AboutUs from "./Components/AboutUs";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
