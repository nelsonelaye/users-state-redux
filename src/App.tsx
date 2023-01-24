import React from "react";
import LandingPage from "./routes/LandingPage";
import UpdateForm from "./components/UpdateForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/update/:id" element={<UpdateForm />} />
      </Routes>
    </Router>
  );
}

export default App;
