// form section asking for:
//    First Name
//    Last Name
//    Email Address
//    Phone Number

interface InfoFormSectionProps {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSelected: boolean;
}

const InfoFormSection = ({handleInput, isSelected}: InfoFormSectionProps) => {
  return isSelected ? (
    <div className="info-form-section-container">
      <h2>Personal Info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <input type="text" name="firstName" onChange={handleInput}/>
      <input type="text" name="lastName" onChange={handleInput}/>
      <input type="text" name="emailAddress" onChange={handleInput}/>
      <input type="text" name="phoneNumber" onChange={handleInput}/>
    </div>
  ) : <></>;
}

export default InfoFormSection;