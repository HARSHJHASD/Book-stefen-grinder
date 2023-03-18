import React from 'react'
import BookShow from './BookShow'

const BookList = ({books,deleteBookById,editBookById}) => {
  return (
    <div>
 {
      books.map((book)=>
      {
        return(
          <BookShow editBookById={editBookById} deleteBookById={deleteBookById} book={book}/>
        )
      })
    }
    </div>
   
  )
}

export default BookList