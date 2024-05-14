// navbar should not be interactive, just displays current section being viewed.

import NavdisplayItem from "./NavdisplayItem";

interface NavBarProps {
  selectedSection: number;
}

const NavDisplay = ({ selectedSection }: NavBarProps) => {

  const navItemNames = ["your info", "select plan", "add-ons", "summary"];

  return (
    <nav className="top-navigation">
      {navItemNames.map((label, index) => <NavdisplayItem 
        label={label} 
        order={index+1} 
        isSelected={index+1 === selectedSection} 
        key={index}/> 
      )}
    </nav>
  )
}

export default NavDisplay
