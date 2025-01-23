import { NavLink } from "react-router-dom"

const arrayNav = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Chi siamo",
    path: "/about"
  },
  {
    name: "Elenco dei post",
    path: "/list"
  },

];

const Navbar = () => {
  return (
    <nav>
      <ul>
        {arrayNav.map((item, i) => (
          <li key={i}>
            <NavLink to={item.path}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar