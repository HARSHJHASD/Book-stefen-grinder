import React from "react";
import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
// import BookShow from "./components/BookShow";

const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log("Need to add Book with: ", title);
    // books.push({id:123,title:title});
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 999), title: title },
    ];
    console.log(books);
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    console.log("delete book by id ",id);
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks(filteredBooks);
  };

  const editBookById = (id, title) => {
    const updatedBooks = books.map((book)=>{
        if(book.id===id)
        {
          return {...book,title:title};
        }
        else{
          return book;
        }
    });
    setBooks(updatedBooks);
  };

  return (
    <div>
      <BookList editBookById={editBookById} deleteBookById={deleteBookById} books={books} />
      <div>
        <BookCreate onCreate={createBook} />
      </div>
    </div>
  );
};

export default App;
