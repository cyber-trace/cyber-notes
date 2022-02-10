import React, { useState } from "react";

export default function Form({ action }) {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [successMsg, setsuccessMsg] = useState(null);
  const [errorMsg, seterrorMsg] = useState(null);
  const handleSubmit = async (e) => {
    try {
      const newNote = {
        author: 1,
        date: new Date(Date.now()).toDateString(),
        title: title,
        content: content,
      };
      e.preventDefault();
      await fetch(`http://localhost:5000/notes`, {
        method: "POST",
        body: JSON.stringify(newNote),
        headers: {
          "Content-Type": "application/json",
        },
      });
      settitle("");
      setcontent("");
      action((value) => [
        ...value,
        { ...newNote, id: Math.floor(Math.random() * 1000) },
      ]);
      setsuccessMsg("Note created successfully");
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
            value={title}
            type="text"
            placeholder="Title"
            onChange={(e) => settitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={content}
            placeholder="Description"
            cols="30"
            rows="10"
            onChange={(e) => setcontent(e.target.value)}
          />
        </div>
        <button type="submit">Add new note</button>
      </form>
    </section>
  );
}
