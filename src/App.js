
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";



function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/checkout" element={<> <Header /><h1>Checkout</h1></>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
        <Route path="/" element={ <> <Header /> <Home/></>}>
        </Route>
      </Routes>
    </Router>
  </div>
  
  );
}

export default App;

