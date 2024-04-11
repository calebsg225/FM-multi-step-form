// displays all options selected as a summary

import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

interface SummarySectionProps {
  register: UseFormRegister<{}>;
  handleSubmit: UseFormHandleSubmit<{}, undefined>;
}

const SummarySection = ({register, handleSubmit}: SummarySectionProps) => {
  return (
    <></>
  );
}

export default SummarySection;