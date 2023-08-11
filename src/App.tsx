import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import P5ImageImporter from "./components/P5Lasso";

function App() {
  const [count, setCount] = useState(0);

  return <P5ImageImporter />;
}

export default App;
