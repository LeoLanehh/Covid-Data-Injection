import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing";


function App() {
  return (
      <div className="App">
        <BrowserRouter>
            <Route path="/index" component={Landing} />
            <Route path="/login" component={SignIn} />
            <Route path="/register" component={SignUp} />
            <Route path="/dashboard" component={Home} />
        </BrowserRouter>
      </div>
  );
}

export default App;
