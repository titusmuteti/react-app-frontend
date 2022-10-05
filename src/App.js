import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Products from "./Components/pages/Products";

function App() {
  return (
    <>
    <Router>
    <NavBar />
      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>

        <Route exact path={"/products"}>
          <Products />
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
