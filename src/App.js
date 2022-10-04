import { useEffect } from "react";

function App() {
  useEffect(()=> {
    fetch("https://fierce-ridge-31455.herokuapp.com/products")
    .then(res => res.json())
    .then(res => console.log(res))
  },[])
  return 
}

export default App;
