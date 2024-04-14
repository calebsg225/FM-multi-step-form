// form section asking for:
//    First Name
//    Last Name
//    Email Address
//    Phone Number

interface InfoFormSectionProps {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InfoFormSection = ({handleInput}: InfoFormSectionProps) => {
  return (
    <div className="info-form-section-container">
      <input type="text" name="firstName" onChange={handleInput}/>
      <input type="text" name="lastName" onChange={handleInput}/>
      <input type="text" name="emailAddress" onChange={handleInput}/>
      <input type="text" name="phoneNumber" onChange={handleInput}/>
    </div>
  );
}

export default InfoFormSection;