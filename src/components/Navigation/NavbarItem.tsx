interface NavbarItemProps {
  label: string;
  order: number;
  isSelected: boolean;
}

const NavbarItem = ({label, order, isSelected}: NavbarItemProps) => {
  return (
    <nav className="NavbarItem">
      <div className="navItemIcon"></div>
      <div className="navItemText">
        <p>Step {order}</p>
        <p>{label.toUpperCase()}</p>
      </div>
    </nav>
  )
}

export default NavbarItem
