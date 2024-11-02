import { NavLink } from "react-router-dom"
import './Navbar.css'
export default function Navbar() {
  const navLinks =  <>
                      <li>
                        <NavLink to='/' className="btn btn-outline text-lg font-semibold border-[hsl(112,90%,39%)] text-[#23BE0A] hover:bg-[#23BE0A] hover:border-[#23BE0A]">Home</NavLink>
                      </li>
                      <li>
                        <NavLink to='/listed-books' className="btn btn-outline text-lg font-semibold border-[hsl(112,90%,39%)] text-[#23BE0A] hover:bg-[#23BE0A] hover:border-[#23BE0A]">Listed Books</NavLink>
                      </li>
                      <li>
                        <NavLink to='/remaining-page' className="btn btn-outline text-lg font-semibold border-[hsl(112,90%,39%)] text-[#23BE0A] hover:bg-[#23BE0A] hover:border-[#23BE0A]">Pages to Read</NavLink>
                      </li>
                    </>
  return (
    <>
      <div className="navbar bg-base-100 max-w-7xl mx-auto justify-between">
        <div className="navbar-start gap-x-2 md:gap-x-4">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn px-2  h-9 min-h-0 flex- justify-center items-center bg-[#23BE0A] text-white lg:hidden">
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
          <a className="text-xl md:text-3xl font-bold text-[#131313]">Book Bazar</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-start lg:navbar-end gap-2 md:gap-4">
          <a className="btn max-sm:h-9 min-h-9 max-sm:px-2 text-lg font-semibold text-white border-[#23BE0A] bg-[#23BE0A] hover:bg-transparent hover:text-[#23BE0A] hover:border-[#23BE0A]">Sign In</a>
          <a className="btn max-sm:h-9 min-h-9 max-sm:px-2 text-lg font-semibold text-white border-[#23BE0A] bg-[#23BE0A] hover:bg-transparent hover:text-[#23BE0A] hover:border-[#23BE0A]">Sign Up</a>
        </div>
      </div>
    </>
  )
}