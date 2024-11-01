import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom"
export default function Root() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}