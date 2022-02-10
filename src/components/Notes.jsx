import React from "react";

export default function Notes({ notes }) {
  return (
    <section id="notes">
      {notes.map((item) => (
        <div className="card" key={item.id}>
          <div className="head">
            <h1>{item.title}</h1>
            <span>{item.date}</span>
          </div>
          <p>{item.content}</p>
        </div>
      ))}
    </section>
  );
}
