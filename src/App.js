import { Route, Routes } from "react-router-dom";
import "./App.css";

import UserProfile from "./components/UserProfile";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/Home" element={<HomePage />} />
      <Route path="/" element={<UserProfile />} />
    </Routes>
  );
}

export default App;
