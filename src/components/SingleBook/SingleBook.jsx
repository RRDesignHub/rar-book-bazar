import { Link } from "react-router-dom";

export default function SingleBook({bookData}){
  const {bookId, bookName, author, image, rating, tags, category} = bookData;
  return (
    <>
      <div>
        <div className="card flex flex-col w-96 border border-[rgba(19,19,19,0.15)] p-6">
          <figure className="bg-[#effded] rounded-2xl py-8">
            <img
              src={image}
              className="w-[134px] h-[166px]"
              alt={bookName} />
          </figure>
          <div className="card-body p-0 mt-6 flex-grow">
              <div className="card-actions ">
                {
                  tags.map((tag, index)=><div key={index} className="badge bg-[#effded] font-medium text-[#23BE0A] p-4">{tag}</div>)
                }
              </div>
            <h2 className="text-2xl font-bold mt-4">
              {bookName}
            </h2>
            <div className="flex justify-between items-center">
              <h3 className="font-medium text-[#131313cb]">By: {author}</h3>
              <Link to={`book/${bookId}`}><button className="btn btn-sm text-white bg-[#23BE0A] font-semibold hover:bg-transparent hover:text-[#23BE0A] hover:border-[#23BE0A]">See Details</button></Link>
            </div>
            
            <div className="border border-dashed border-t-gray-200 w-full"></div>
            <div className="flex justify-between items-center">
            <h3 className="font-medium text-[#131313cb]">{category}</h3>
            <div className="rating flex items-center gap-2">
              <h3 className="font-medium text-[#131313cb]">{rating}</h3>
               <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#23BE0A]" />  
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}