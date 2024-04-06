import NavbarItem from "./NavbarItem";

const NavBar = () => {

  const navItemNames = ["your info", "select plan", "add-ons", "summary"];

  return (
    <section className="top-navigation">
      {navItemNames.map((label, index) => <NavbarItem label={label} order={index+1}/> )}
    </section>
  )
}

export default NavBar
