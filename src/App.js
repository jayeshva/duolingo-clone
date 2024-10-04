import Dashboard from "./DashBoard/Dashboard";
import MainBoard from "./GettingStarted/MainBoard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./GettingStarted/NotFound";
import Register from "./GettingStarted/Register";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainBoard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/learn" element={<Dashboard />} />
          <Route path="/sounds" element={<Dashboard />} />
          <Route path="/leaderboards" element={<Dashboard />} />
          <Route path="/quests" element={<Dashboard />} />
          <Route path="/shop" element={<Dashboard />} />
          <Route path="/profile" element={<Dashboard />} />
          <Route path="/more" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
