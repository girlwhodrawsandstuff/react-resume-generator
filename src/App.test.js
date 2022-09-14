import App from "./App";
const { render } = require("@testing-library/react");

test("app should render on page load", () => {
  render(<App />);
  
});
