import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";

function App() {
  const [notes, setnotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/notes")
      .then((response) => response.json())
      .then((data) => setnotes(data));
  }, []);

  return (
    <div className="dark App">
      <Navbar />
      <Form action={setnotes} />
      <Notes notes={notes} />
    </div>
  );
}

export default App;
