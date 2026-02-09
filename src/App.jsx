import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";
import Introduction from "./components/Introduction";
import TeamMembers from "./components/TeamMembers";
import Team from "./components/Team"; // your Teams.jsx page
import './index.css';
import Events from "./components/Events";
import ChatfinityHero from "./components/ChatfinityHero";

function App() {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <>
            <Introduction />
            <TeamMembers />
            <Events/>
            <ChatfinityHero/>
          </>
        } 
      />

      <Route path="/team" element={<Team />} />
    </Routes>
  );
}

export default App;
