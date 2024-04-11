// form section asking for:
//    First Name
//    Last Name
//    Email Address
//    Phone Number

import { UseFormRegister } from "react-hook-form";

interface InfoFormSectionProps {
  register: UseFormRegister<{}>;
}

const InfoFormSection = ({register}: InfoFormSectionProps) => {
  return (
    <div className="info-form-section-container">
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </div>
  );
}

export default InfoFormSection;