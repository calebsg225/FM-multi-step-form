import NavBar from "./components/Navigation/NavBar";
import Form from "./components/Form/Form";
import { useState } from "react";

function App() {

  const [ selectedSection, setSelectedSection ] = useState(1);

  return (
    <div className="App">
      <NavBar selectedSection={selectedSection} setSelectedSection={setSelectedSection}/>
      <Form />
    </div>
  );
}

export default App;
