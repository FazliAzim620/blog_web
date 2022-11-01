import Home from './pages/home/Home'
import Single from './pages/single/Single';
import Topbar from "./components/topbar/Topbar";
import Write from './pages/write/Write';
import Settings from './pages/Settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Topbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={ <Login/>} />
      <Route path="/register" element={ <Register/>} />
      <Route path="/write" element={ <Write/>} />
      <Route path="/settings" element={ <Settings/>} />
      <Route path="/single" element={ <Single/>} />
      
    </Routes>
 
    </Router>
  );
}

export default App;
