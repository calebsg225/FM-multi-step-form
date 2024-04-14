// form section asking for:
//    type of plan (toggle between selections)
// **toggle between yearly and monthly plans here

interface PlanFormSectionProps {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSelected: boolean;
}

const PlanFormSection = ({handleInput, isSelected}: PlanFormSectionProps) => {
  return isSelected ? (
    <div className="plan-form-section-container">
      <h2>Select your plan</h2>
      <p>You ahve the option of monthly or yearly billing.</p>
      {[
        {"title": "Arcade", "price": "9", "period": "monthly"},
        {"title": "Advanced", "price": "12", "period": "monthly"},
        {"title": "Pro", "price": "15", "period": "monthly"}
      ].map((v, i) => 
        <label className={`plan-selection`}>
          <input type="radio" name="plan" onChange={handleInput} id={v.title.toLowerCase()} value={v.title.toLowerCase()} />
          <div>
            <h3>{v.title}</h3>
            <p>{v.price}</p>
            <p>2 months free</p>
          </div>
        </label>
      )}
    </div>
  ) : <></>;
}

export default PlanFormSection;