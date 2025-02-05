import AboutUs from "./Components/AboutUs";
import Home from "./Components/Home";
import Login from "./Components/User/Login";
import Nav from "./Components/Nav";
import Profile from "./Components/User/Profile";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <Router> {}
      <div>
        <Nav />
        {/* -----------------mainsection---------------------- */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/User/login" element={<Login />} />
          <Route path="/user/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
