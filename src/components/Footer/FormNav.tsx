interface FormNavProps {
  selectedSection: number;
  setSelectedSection: (...args:any) => void;
}

const FormNav = ({ selectedSection, setSelectedSection }: FormNavProps) => {

  const onBack = () => {
    setSelectedSection((i: number) => i-1);
  }

  const onNext = () => {
    setSelectedSection((i:number) => i+1);
  }

  const onConfirm = () => {}

  return (
    <section className="form-navigation">
      {selectedSection}
      <button className="back-button" onClick={onBack}><p>Go Back</p></button>
      {selectedSection === 4
      ? <button className="confirm-button" onClick={onConfirm}><p>Confirm</p></button>
      : <button className="next-button" onClick={onNext}><p>Next Step</p></button>
      }

    </section>
  )
}

export default FormNav;