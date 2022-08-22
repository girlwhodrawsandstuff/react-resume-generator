import "./App.css";
import Form from "./components/Form/Form";

function App() {
  const temporaryData = {
    firstName: "Varsha",
    lastName: "Singh",
    role: "Frontend Developer",
    profilePicture: "image",
  };

  return <div className="App">
    <h1>Resume Generator</h1>
    <Form />
    <h2>{temporaryData?.firstName} {temporaryData?.lastName}</h2>
    <h4>{temporaryData?.role}</h4>
  </div>;
}

export default App;
