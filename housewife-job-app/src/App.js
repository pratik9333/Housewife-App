import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Notfound from "./Pages/NotFound";
import Shop from "./Pages/Shop";
import Educational from "./Pages/Educational_Details";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Shop" component={Shop} />
          <Route path="/details" component={Educational} />
          <Route path="*" component={Notfound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
