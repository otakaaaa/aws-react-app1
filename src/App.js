import './App.css';
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello React App with AWS</h2>
      </header>
    </div>
  );
}

export default App;
