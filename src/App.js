import NavBar from "./Components/NavBar";
import { BrowserRouter as Routes, Route, Link} from "react-router-dom";
import Home from "./Components/pages/Home";
import Reviews from "./Components/pages/Reviews";
import About from "./Components/pages/About";

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path={"/home"} element={<Home/>}/> 
      <Route path={"/reviews"} element={<Reviews/>}/>
      <Route path={"/about"} element={<About/>}/>         
    </Routes>
    </>
  )
}

export default App;
