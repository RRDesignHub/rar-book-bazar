import { useEffect, useState } from "react"
import SingleBook from "../SingleBook/SingleBook";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    fetch('booksData.json')
      .then(res=> res.json())
      .then(books=> setBooks(books))
  }, [])
  
  return (
    <>
      <div className="max-w-7xl mx-auto px-3 my-14">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-6">Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            books.map((book)=> <SingleBook key={book.bookId} bookData={book}></SingleBook>)
          }
        </div>
      </div>
    </>
  )
}