import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import NotFound from "./gettingstarted/NotFound";
import MainBoard from "./gettingstarted/MainBoard";
import Dashboard from "./dashboard/Dashboard"; 
import {Learn} from "./dashboard/Learn/Learn"; 
import Sounds from "./dashboard/Sounds/Sounds";
import Leaderboards from "./dashboard/Leaderboards";
import Quests from "./dashboard/Quests";
import Shop from "./dashboard/Shop";
import Profile from "./dashboard/Profile";
import 'font-awesome/css/font-awesome.min.css';
import Register from "./gettingstarted/Authenticate/Register";
import DuolingoLoading from "./animations/DuolingoLoading";
import GlobalProvider from "./hooks/GlobalProvider";
import { QueryLearn } from "./reactQuery/QueryLearn";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 1 } },
  });

  return (
     <QueryClientProvider client={queryClient}>
    <GlobalProvider>
       <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainBoard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/learn" element={<Dashboard />}>
            <Route index element={<QueryLearn />} />
          </Route>
          <Route path="/sounds" element={<Dashboard />}>
            <Route index element={<Sounds />} /> 
          </Route>
          <Route path="/leaderboards" element={<Dashboard />}>
            <Route index element={<Leaderboards />} /> 
          </Route>
          <Route path="/quests" element={<Dashboard />}>
            <Route index element={<DuolingoLoading />} /> 
          </Route>
          <Route path="/shop" element={<Dashboard />}>
            <Route index element={<DuolingoLoading />} /> 
          </Route>
          <Route path="/profile" element={<Dashboard />}>
            <Route index element={<DuolingoLoading />} /> 
          </Route>
          <Route path="/more" element={<Dashboard />}>
            <Route index element={<DuolingoLoading />} /> 
          </Route>

          <Route path="*" element={<DuolingoLoading />} />
        </Routes>
      </Router>
    </div>
    </GlobalProvider>
    </QueryClientProvider>
   
  );
}

export default App;
