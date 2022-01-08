import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import { UserProvider } from './Context/user'

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
