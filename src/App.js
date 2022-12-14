import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import Sell from "./pages/Sell";
import Products from "./pages/Products";
import Footer from "./Components/Footer";
import Cart from "./pages/Cart";

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

        <Route exact path={"/cart"}>
          <Cart />
        </Route>

        <Route exact path={"/sell"}>
          <Sell />
        </Route>       
      </Switch>
    </Router>

    <Footer />
    </>
  )
}

export default App;
