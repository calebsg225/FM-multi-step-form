import FormNav from "../Footer/FormNav";
import AddOnFormSection from "./FormSections/AddOnFormSection";
import InfoFormSection from "./FormSections/InfoFormSection";
import PlanFormSection from "./FormSections/PlanFormSection";
import SummarySection from "./FormSections/SummarySection";

interface FormProps {
  selectedSection: number;
  setSelectedSection: (...args:any) => void;
}

const Form = ({ selectedSection, setSelectedSection }: FormProps) => {

  return (
    <main className="form-container">
      <section className="input-section-container">
        <InfoFormSection/>
        <PlanFormSection/>
        <AddOnFormSection/>
        <SummarySection/>
      </section>
      <FormNav selectedSection={selectedSection} setSelectedSection={setSelectedSection}/>
    </main>
  )
}

export default Form;