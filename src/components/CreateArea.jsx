import React, { useState } from "react";
import "../styles.css";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function handleSubmit(event){
        props.addNote(note);
        setNote({ title: "", content: "" });
        event.preventDefault();
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
      >
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button type="submit" value={note}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
