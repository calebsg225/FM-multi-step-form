import NavbarItem from "./NavbarItem";

interface NavBarProps {
  selectedSection: number;
  setSelectedSection: (...args:any) => void;
}

const NavBar = ({ selectedSection, setSelectedSection }: NavBarProps) => {

  const navItemNames = ["your info", "select plan", "add-ons", "summary"];

  return (
    <header className="top-navigation">
      {navItemNames.map((label, index) => <NavbarItem label={label} order={index+1} isSelected={index+1 === selectedSection}/> )}
    </header>
  )
}

export default NavBar
