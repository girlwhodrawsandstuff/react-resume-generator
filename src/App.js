import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import ResumeDisplay from "./components/ResumeDisplay/ResumeDisplay";

function App() {
  const [formData, setFormData] = useState({});

  function updateFormData(event) {
    event.preventDefault();

    const enteredFormData = new FormData(event.target);
    const formDataObject = enteredFormData.forEach(
      (value, key) => (formData[key] = value)
    );

    setFormData((previousFormData) => ({
      ...previousFormData,
      formDataObject,
    }));
  }

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="App">
      <h1>Resume Generator</h1>
      <Form formData={formData} updateFormData={updateFormData} />
      <ResumeDisplay formData={formData} />
    </div>
  );
}

export default App;
