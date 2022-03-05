import React, { useState, useEffect } from "react";

export default function Form({ action }) {
  const [note, setNote] = useState({
    author: 1,
    title: "",
    content: "",
  });
  const [successMsg, setsuccessMsg] = useState(null);
  const [errorMsg, seterrorMsg] = useState(null);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setNote({
        title: "",
        content: "",
      });
      setsuccessMsg(`Note created successfully`);
      setTimeout(() => setsuccessMsg(null), 3000);
    } catch {
      seterrorMsg("Error while creating note");
      setTimeout(() => seterrorMsg(null), 3000);
    }
  };
  return (
    <section id="form">
      <form onSubmit={(e) => handleSubmit(e)}>
        {successMsg && (
          <div
            className="box"
            style={{
              background: "#198754",
            }}
          >
            <p>{successMsg}</p>
          </div>
        )}
        {errorMsg && (
          <div
            className="box"
            style={{
              background: "#dc3545",
            }}
          >
            <p>{errorMsg}</p>
          </div>
        )}
        <div>
          <label>Title</label>
          <input
            value={note.title}
            type="text"
            placeholder="Title"
            onChange={(e) => setNote({ ...note, title: e.target.value })}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={note.content}
            placeholder="Description"
            cols="30"
            rows="10"
            onChange={(e) => setNote({ ...note, content: e.target.value })}
          />
        </div>
        <button type="submit">Add new note</button>
      </form>
    </section>
  );
}
