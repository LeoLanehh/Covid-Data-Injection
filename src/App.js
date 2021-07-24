import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing";
import nosql_injection from "./Pages/nosql-injection"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/dashboard" component={Home} />
        <Route path="/nosql-injection" component={nosql_injection} />
      </BrowserRouter>
    </div>
  );
}

export default App;
