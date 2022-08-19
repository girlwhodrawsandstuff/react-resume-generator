import "./App.css";

function App() {
  const temporaryData = {
    name: "Varsha Singh",
    role: "Frontend Developer",
  };

  return <div className="App">
    <h1>Resume Generator</h1>
    <h2>{temporaryData?.name}</h2>
    <h4>{temporaryData?.role}</h4>
  </div>;
}

export default App;
