export default function Navbar() {
  const navLinks =  <>
                      <li><a className="btn btn-outline text-lg font-semibold border-[#23BE0A] text-[#23BE0A] hover:bg-[#23BE0A] hover:border-[#23BE0A]">Home</a></li>
                      <li><a className="btn btn-outline text-lg font-semibold border-[#23BE0A] text-[#23BE0A] hover:bg-[#23BE0A] hover:border-[#23BE0A]">Listed Books</a></li>
                      <li><a className="btn btn-outline text-lg font-semibold border-[#23BE0A] text-[#23BE0A] hover:bg-[#23BE0A] hover:border-[#23BE0A]">Pages to Read</a></li>
                    </>
  return (
    <>
      <div className="navbar bg-base-100 max-w-7xl mx-auto max-sm:flex-col md:flex-row justify-between gap-y-3">
        <div className="navbar-start max-sm:w-fit gap-x-4">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn bg-[#23BE0A] text-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3">
              {navLinks}
            </ul>
          </div>
          <a className=" text-3xl font-bold text-[#131313]">Book Bazar</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-start lg:navbar-end  gap-4">
          <a className="btn text-lg font-semibold text-white border-[#23BE0A] bg-[#23BE0A] hover:bg-transparent hover:text-[#23BE0A] hover:border-[#23BE0A]">Sign In</a>
          <a className="btn text-lg font-semibold text-white border-[#23BE0A] bg-[#23BE0A] hover:bg-transparent hover:text-[#23BE0A] hover:border-[#23BE0A]">Sign Up</a>
        </div>
      </div>
    </>
  )
}