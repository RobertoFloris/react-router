import { Outlet } from "react-router-dom"

const LayoutDefault = () => {
  return (
    <>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  )
}

export default LayoutDefault