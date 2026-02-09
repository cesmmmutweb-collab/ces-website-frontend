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
      {/* Home page route */}
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

      {/* Teams page route */}
      <Route path="/team" element={<Team />} />
    </Routes>
  );
}

export default App;
