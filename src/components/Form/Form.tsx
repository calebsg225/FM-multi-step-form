// generate form here
// contains all form entry sections

import { useState } from "react";
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
  
  const [form, setForm] = useState({});
  
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  return (
    <main className="form-container">
      <section className="input-section-container">
        <form>
          <InfoFormSection handleInput={handleInput} isSelected={selectedSection === 1} form={form}/>
          <PlanFormSection handleInput={handleInput} isSelected={selectedSection === 2} form={form}/>
          <AddOnFormSection/>
          <SummarySection/>
        </form>
      </section>
      <FormNav selectedSection={selectedSection} setSelectedSection={setSelectedSection}/>
      {JSON.stringify(form, null, 2)}
    </main>
  )
}

export default Form;