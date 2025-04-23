import React from "react";
import TeamMemberCard from "./components/TeamMemberCard";
import './app.css';

function App(){
  return(
    <div className="container">
      <h1 className="team">Our Team</h1>
      <div className="card-container">
        <TeamMemberCard name="Jhon" title="Designer"></TeamMemberCard>
        <TeamMemberCard name="Royce" title="Manager"></TeamMemberCard>
      </div>
    </div>
  )
}

export default App;