interface NavbarItemProps {
  label: string;
  order: number;
}

const NavbarItem = ({label, order}: NavbarItemProps) => {
  return (
    <div className="NavbarItem">
      <p>{label}{order}</p>
    </div>
  )
}

export default NavbarItem
