import NavbarItem from "./NavbarItem"

const NavBar = () => {

  const navItemNames = ["your info", "select plan", "add-ons", "summary"];

  return (
    <div className="top-navigation">
      {navItemNames.map((label, index) => <NavbarItem label={label} order={index+1}/> )}
    </div>
  )
}

export default NavBar
