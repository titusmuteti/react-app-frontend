import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Components/pages/Home";
import Reviews from "./Components/pages/Reviews";
import About from "./Components/pages/About";

function App() {
  return (
    <>
    <Router>
    <NavBar />
      <Switch>
        <Route exact path={"/home"}>
          <Home />
        </Route>

        <Route exact path={"/reviews"}>
          <Reviews />
        </Route> 

        <Route exact path={"/about"}>
          <About />
        </Route>       
      </Switch>
    </Router>
    </>
  )
}

export default App;
