import './App.css';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import { UserProvider } from './Context/user'
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
