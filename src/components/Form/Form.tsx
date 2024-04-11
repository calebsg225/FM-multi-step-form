import FormNav from "../Footer/FormNav";
import AddOnFormSection from "./FormSections/AddOnFormSection";
import InfoFormSection from "./FormSections/InfoFormSection";
import PlanFormSection from "./FormSections/PlanFormSection";
import SummarySection from "./FormSections/SummarySection";

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface FormProps {
  selectedSection: number;
  setSelectedSection: (...args:any) => void;
}

const schema = yup
  .object()
  .shape({
  })
  .required();

const Form = ({ selectedSection, setSelectedSection }: FormProps) => {

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });

  return (
    <main className="form-container">
      <form className="upper-form-container">
        <InfoFormSection register={register}/>
        <PlanFormSection register={register}/>
        <AddOnFormSection register={register}/>
        <SummarySection register={register} handleSubmit={handleSubmit}/>
      </form>
      <FormNav selectedSection={selectedSection} setSelectedSection={setSelectedSection}/>
    </main>
  )
}

export default Form;