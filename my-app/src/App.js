import { Deploy } from "./Component/Deploy/Deploy";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState({});
  useEffect(() => {
    fetch("/api")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => setState(data))
      .then((error) => console.log(error));
  }, []);
  return (
    <div className="App">
      <Deploy props={state} />
    </div>
  );
}

export default App;
