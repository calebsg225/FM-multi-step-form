// form section asking for:
//    First Name
//    Last Name
//    Email Address
//    Phone Number

interface InfoFormSectionProps {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSelected: boolean;
  form: {[key: string]: string}
}

const InfoFormSection = ({handleInput, isSelected, form}: InfoFormSectionProps) => {
  return isSelected ? (
    <div className="info-form-section-container">
      <h2>Personal Info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <input type="text" name="firstName" value={form.firstName ? form.firstName : ''} onChange={handleInput}/>
      <input type="text" name="lastName" value={form.lastName ? form.lastName : ''} onChange={handleInput}/>
      <input type="text" name="emailAddress" value={form.emailAddress ? form.emailAddress : ''} onChange={handleInput}/>
      <input type="text" name="phoneNumber" value={form.phoneNumber ? form.phoneNumber : ''} onChange={handleInput}/>
    </div>
  ) : <></>;
}

export default InfoFormSection;