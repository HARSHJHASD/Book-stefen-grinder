import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, deleteBookById, editBookById }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleClick = () => {
    deleteBookById(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmitt = () =>
  {
    setShowEdit(false);
  }

  let content = <h3> {book.title}</h3>;

  if (showEdit) {
    content = (
      <BookEdit
      handleSubmitt={handleSubmitt}
        setShowEdit={setShowEdit}
        
        editBookById={editBookById}
        book={book}
      />
    );
  }

  return (
    <div key={book.id}>
      <h3>Title: {content}</h3>
      <h3>Id: {book.id}</h3>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={() => handleClick()}>Delete</button>
    </div>
  );
};

export default BookShow;
