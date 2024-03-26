
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from './Signin';
import Registration from "./Registration.js";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/checkout" element={
        <> 
         <Header />
         <Checkout/>
      
        </>
      } 
      />
        <Route path="/login" element={<><Signin/></>  } />
        <Route path="/registration" element={<Registration/> }/>

        <Route path="/" element={ <> <Header /> <Home/></>}>
        </Route>
        {/* <Route path="/" element={<Signin/> }/>
        <Route path="/registration" element={<Registration/> }/> */}
      </Routes>
    </Router>
  </div>
  
  );
}

export default App;

