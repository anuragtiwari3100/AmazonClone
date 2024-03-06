import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/checkout" element={<h1>Checkout</h1>} />
          <Route path="/login" element={<h1>Login Page</h1>} />
          <Route path="/" element={<h1>Home Page!!!!!</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
