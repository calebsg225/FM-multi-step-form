// navbar should not be interactive, just displays current section being viewed.

import NavbarItem from "./NavbarItem";

interface NavBarProps {
  selectedSection: number;
}

const NavBar = ({ selectedSection }: NavBarProps) => {

  const navItemNames = ["your info", "select plan", "add-ons", "summary"];

  return (
    <header className="top-navigation">
      {navItemNames.map((label, index) => <NavbarItem label={label} order={index+1} isSelected={index+1 === selectedSection} key={index}/> )}
    </header>
  )
}

export default NavBar
