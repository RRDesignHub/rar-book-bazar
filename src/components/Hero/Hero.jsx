import heroImg from '../../assets/HeroImg.png'
export default function Hero() {

  return (
    <>
      <div className="flex max-w-7xl mx-auto px-3 my-10">
        <div className="hero bg-[hsla(113,80%,96%,1)]  rounded-3xl px-28 py-10">
          <div className="hero-content flex-col md:flex-row-reverse gap-14">
            <img
              src={heroImg}

              className="" />
            <div>
              <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button className="btn max-sm:h-9 min-h-9 max-sm:px-2 text-lg font-semibold text-white border-[#23BE0A] bg-[#23BE0A] hover:bg-transparent hover:text-[#23BE0A] hover:border-[#23BE0A]">View The Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}