import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/Login";
import Profile from "./pages/Profile";
;

function App() {


  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/signIn" component={SignIn} />
      <Route exact path="/profile" component={Profile} />
    </Router>
   
  );
}

export default App;
