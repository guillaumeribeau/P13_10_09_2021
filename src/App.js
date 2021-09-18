import "./styles/App.css";
import "./styles/Transactions.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/Login";
import Profile from "./pages/Profile";
import Transactions from "./pages/Transactions";
;

function App() {


  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/signIn" component={SignIn} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/transactions" component={Transactions} />
    </Router>
   
  );
}

export default App;
