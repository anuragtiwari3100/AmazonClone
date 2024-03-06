
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";

function Home() {
  return <h1>Home Page!!!!!</h1>;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Header /> {/* Render the Header component outside the Routes */}
        <Routes>
          <Route path="/checkout" element={<h1>Checkout</h1>} />
          <Route path="/login" element={<h1>Login Page</h1>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

