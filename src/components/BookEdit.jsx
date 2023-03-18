import { useState } from "react";

function BookEdit({book,editBookById,setShowEdit}) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("New title is  ", title);
    editBookById(book.id, title); // call editBookById instead of updatedBooks
    setShowEdit(false);
  };


  return (
    <form onSubmit={handleSubmit} className="book-edit">
      {/* <label>Title</label> */}
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
