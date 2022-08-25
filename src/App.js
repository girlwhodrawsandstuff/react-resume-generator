import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";

function App() {
  const [formData, setFormData] = useState({});

  function updateFormData(event) {
    event.preventDefault();

    const enteredFormData = new FormData(event.target);
    const formDataObject = enteredFormData.forEach(
      (value, key) => (formData[key] = value)
    );

    setFormData((previousFormData) => ({ ...previousFormData, formDataObject }));
  }

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="App">
      <h1>Resume Generator</h1>
      <Form formData={formData} updateFormData={updateFormData} />
      <h2>
        {formData?.firstName} {formData?.lastName}
      </h2>
      <h4>{formData?.role}</h4>
    </div>
  );
}

export default App;
