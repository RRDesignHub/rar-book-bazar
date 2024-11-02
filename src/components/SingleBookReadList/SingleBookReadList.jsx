export default function SingleBookReadList({readBook}){
  const {bookId, bookName, author, image, rating, tags, category, review, totalPages, yearOfPublishing, publisher} = readBook;
  return(
    <>
      <div className="border border-[#13131326] rounded-3xl p-6 flex flex-col md:flex-row gap-6">
          <div className="bg-[#effded] rounded-2xl py-7 px-9">
            <img
            src={image}
            className="rounded-lg  h-[170px]" />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold ">{bookName}</h2>
            <h3 className="font-medium text-[#131313cb] mb-3">By: {author}</h3>
            <div className="flex gap-x-7">
              <p className="text-justify mb-6"><span className="font-bold">Tag: </span> {tags.map((tag, index)=> <span key={index} className=" bg-[#effded] font-medium text-[#23BE0A] py-1 px-4 mr-3 rounded-3xl cursor-pointer">#{tag}</span>)}</p>
              <p className="text-[#131313b2]">Year of Publishing: {yearOfPublishing}</p>
            </div>
            <div className="flex gap-x-7">
              <p className="text-[#131313b2]">Publisher: {publisher}</p>
              <p className="text-[#131313b2] flex justify-between">Pages: {totalPages}</p>
            </div>
            <div className="border my-4 border-t-gray-200 w-full"></div>

            <div className="flex gap-x-7">
              <p className=" bg-[#effded] font-medium text-[#23BE0A] py-1 px-4 mr-3 rounded-3xl cursor-pointer">Category: {category}</p>
              <p className=" bg-[#effded] font-medium text-[#23BE0A] py-1 px-4 mr-3 rounded-3xl cursor-pointer">Rating: {rating}</p>
              <button className="btn btn-sm text-white bg-[#23BE0A] font-semibold hover:bg-transparent hover:text-[#23BE0A] hover:border-[#23BE0A]">See Details</button>
            </div>
          </div>
          
      </div>
    </>
  )
}