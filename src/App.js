
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";

function Home() {
  return <h1>Tiwari's Home Page!!!!! </h1>;
}

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/checkout" element={<h1>Checkout</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
        <Route path="/" element={<><Header /><Home /></>} />
      </Routes>
    </Router>
  </div>
  
  );
}

export default App;

