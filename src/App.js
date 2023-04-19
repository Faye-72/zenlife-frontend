import "../src/styles/main.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./components/LoginPage";
import { SignupPage } from "./components/SignupPage";
import { Profile } from "./components/Profile";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";

function App() {
  // const [showSignup, setShowSignup] = useState(false);

  const handleFormSwitch = (formType) => {
    if (formType === "Signup") {
      // setShowSignup(true);
    } else {
      // setShowSignup(false);
    }
  };

  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/signup"
              element={<SignupPage onFormSwitch={handleFormSwitch} />}
            />
            <Route
              path="/login"
              element={<LoginPage onFormSwitch={handleFormSwitch} />}
            />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
