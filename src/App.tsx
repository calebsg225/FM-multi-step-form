import NavDisplay from "./components/Navigation/NavDisplay";
import Form from "./components/Form/Form";
import { useState } from "react";

function App() {

  const [ selectedSection, setSelectedSection ] = useState(1);

  return (
    <div className="App">
      <NavDisplay selectedSection={selectedSection} />
      <Form selectedSection={selectedSection} setSelectedSection={setSelectedSection}/>
    </div>
  );
}

export default App;
