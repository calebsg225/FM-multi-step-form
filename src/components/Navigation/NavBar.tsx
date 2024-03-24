import NavbarItem from "./NavbarItem"

const NavBar = () => {
  return (
    <div className="top-navigation">
      <NavbarItem label="your info"/>
      <NavbarItem label="select plan"/>
      <NavbarItem label="add-ons"/>
      <NavbarItem label="summary"/>
    </div>
  )
}

export default NavBar
