import React from 'react'
import Book from './Book'
import books from '../data/books'

const Booklist = () => {
  return (
    <div>
      <center><h1 class="text-3xl font-bold underline text-blue-800 ">BOOK LIST</h1>
</center>
      <div className="main">   
        {books.map((item) => (
          <Book key={item.id} person={item} />
        ))}
      </div>

    </div>
  )
}

export default Booklist