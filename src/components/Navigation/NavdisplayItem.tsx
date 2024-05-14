interface NavbarItemProps {
  label: string;
  order: number;
  isSelected: boolean;
}

const NavdisplayItem = ({label, order, isSelected}: NavbarItemProps) => {
  return (
    <div className="navdisplayItem">
      <div className={`navItemIcon ${isSelected ? 'selected' : 'unselected'}`}>{order}</div>
      <div className="navItemText">
        <p>Step {order}</p>
        <p>{label.toUpperCase()}</p>
      </div>
    </div>
  )
}

export default NavdisplayItem
