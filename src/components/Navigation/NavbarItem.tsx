interface NavbarItemProps {
  label: string;
  order: number;
  isSelected: boolean;
}

const NavbarItem = ({label, order, isSelected}: NavbarItemProps) => {
  return (
    <div className="navbarItem">
      <div className={`navItemIcon ${isSelected ? 'selected' : 'unselected'}`}>{order}</div>
      <div className="navItemText">
        <p>Step {order}</p>
        <p>{label.toUpperCase()}</p>
      </div>
    </div>
  )
}

export default NavbarItem
