import React, { useState } from "react";
import Notes from "./components/Notes";
import './App.css'
const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Check the description for my Frontend Interview Prep Course",
    },
    { id: 2, text: "Welcome to the corporate life of coding" },
  ]);
  return <div>
    <Notes notes={notes} setNotes={setNotes} />
  </div>;
};

export default App;
