import React, { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle("");
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <label>Add a Book.</label>
      <form>
        <label>Title</label>
        <input type="text" value={title} onChange={handleChange} name="name" />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default BookCreate;
