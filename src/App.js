import './App.css';
import Home from './screens/Home';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/createuser" element={<Signup />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
