import { useLoaderData, useParams } from "react-router-dom"
import { addReadBooksToLS } from "../Utility/LSData";

export default function BookDetails() {
  const params = useParams();
  const {bookId} = params;
  const bookIdNum = parseInt(bookId);
  const books = useLoaderData();
 
  const book = books.find(book=> book.bookId === bookIdNum);
  const {bookId: currentBookId, bookName, author, image, rating, tags, category, review, totalPages, yearOfPublishing, publisher} = book;

  const handleMarksAsRead = (id)=>{
    addReadBooksToLS(id);
  }
  
  return (
    <>
      <div className="hero  ">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center">
          <div className="bg-[#effded] rounded-2xl p-16">
            <img
            src={image}
            className="rounded-lg  lg:w-[425px]" />
          </div>
          <div>
            <h2 className="text-2xl lg:text-5xl font-bold mb-4">
              {bookName}
            </h2>
            <h3 className="text-xl font-medium text-[#131313cb]">By: {author}</h3>
            <div className="border my-4 border-t-gray-200 w-full"></div>
            <h3 className="text-xl font-medium text-[#131313cb]">{category}</h3>
            <div className="border my-4 border-t-gray-200 w-full"></div>
            <p className="text-justify mb-6"><span className="font-bold">Review: </span> <span className="text-[#131313cc] ">{review}</span></p>
            <p className="text-justify mb-6"><span className="font-bold">Tag: </span> {tags.map((tag, index)=> <span key={index} className=" bg-[#effded] font-medium text-[#23BE0A] py-2 px-4 mr-2 rounded-3xl cursor-pointer">#{tag}</span>)}</p>
            <div className="border my-4 border-t-gray-200 w-full"></div>
            
            <div className="flex gap-10">
              <div className="flex flex-col gap-3 w-">
                <p className="text-[#131313b2] flex justify-between">Numbers of Pages:</p>
                <p className="text-[#131313b2]">Publisher: </p>
                <p className="text-[#131313b2]">Year of Publishing: </p>
                <p className="text-[#131313b2]">Rating: </p>
              </div>
              <div className="flex flex-col gap-3 w-">
                <p className="font-bold text-[#131313]">{totalPages}</p>
                <p className="font-bold text-[#131313]">{publisher}</p>
                <p className="font-bold text-[#131313]">{yearOfPublishing}</p>
                <p className="font-bold text-[#131313]">{rating}</p>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <button onClick={()=>handleMarksAsRead(currentBookId)} className="btn btn-outline text-lg font-semibold border-[hsl(112,90%,39%)] text-[#23BE0A] hover:bg-[#23BE0A] hover:border-[#23BE0A] px-6">Read</button>
              <button className="btn text-lg text-white bg-[#23BE0A] font-semibold hover:bg-transparent hover:text-[#23BE0A] hover:border-[#23BE0A]  px-6">Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}