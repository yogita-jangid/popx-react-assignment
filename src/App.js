import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="mobile-container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
