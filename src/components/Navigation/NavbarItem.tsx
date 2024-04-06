interface NavbarItemProps {
  label: string;
  order: number;
}

const NavbarItem = ({label, order}: NavbarItemProps) => {
  return (
    <div className="NavbarItem">
      <div className="navItemIcon"></div>
      <div className="navItemText">
        <p>Step {order}</p>
        <p>{label.toUpperCase()}</p>
      </div>
    </div>
  )
}

export default NavbarItem
