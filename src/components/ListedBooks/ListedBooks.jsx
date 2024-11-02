
import SingleBookReadList from "../SingleBookReadList/SingleBookReadList";
import { getReadBooks } from "../Utility/LSData";
import { useEffect, useState } from "react";

export default function ListedBooks(){
  const [allBooks, setAllBooks] = useState([]);
  const [enlistedBooksData, setEnlistedBooksData] = useState([]);

  const existingReadBooksId = getReadBooks();
  useEffect(()=>{
    fetch('booksData.json')
      .then(res=> res.json())
      .then(data=> setAllBooks(data))
  },[])
  
  useEffect(()=>{
    const listedBooks = allBooks.filter(book=> existingReadBooksId.includes(book.bookId));
    setEnlistedBooksData(listedBooks)
  },[])

  

  return(
    <>
      <div className="max-w-7xl mx-auto px-3 my-10">
        <div role="tablist" className="tabs tabs-lifted">
          <input 
          type="radio" 
          name="my_tabs_2" 
          role="tab" 
          className="tab text-lg text-[#121212]" 
          aria-label="Read Books" defaultChecked/>
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            {
              enlistedBooksData.map(readBook=> <SingleBookReadList readBook={readBook}  key={readBook.bookId}></SingleBookReadList>)

            }
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab text-lg text-[#121212]"
            aria-label="Wishlist Books"
             />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            Wishlist Books
          </div>

        </div>
      </div>
    </>
  )
}