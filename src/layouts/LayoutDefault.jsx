import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const LayoutDefault = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  )
}

export default LayoutDefault