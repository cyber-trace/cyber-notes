import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import { getNotes } from "./API/notesAPI";
function App() {
  const [notes, setnotes] = useState([]);

  return (
    <div className="dark App">
      <Navbar />
      <Form action={setnotes} />
      <Notes notes={notes} />
    </div>
  );
}

export default App;
