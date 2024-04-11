import FormNav from "../Footer/FormNav";
import AddOnFormSection from "./FormSections/AddOnFormSection";
import InfoFormSection from "./FormSections/InfoFormSection";
import PlanFormSection from "./FormSections/PlanFormSection";
import SummarySection from "./FormSections/SummarySection";

const Form = () => {
  return (
    <main className="form-container">
      <form className="upper-form-container">
        <InfoFormSection />
        <PlanFormSection />
        <AddOnFormSection />
        <SummarySection />
      </form>
      <FormNav />
    </main>
  )
}

export default Form;