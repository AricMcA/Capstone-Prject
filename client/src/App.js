import './App.css';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import { UserProvider } from './Context/user'
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import Consoles from './components/Consoles';
import ConsolesGames from './components/ConsolesGames';
import UsersConsoles from './components/UsersConsoles';
import UsersGames from './components/UsersGames';
import Games from './components/Games';
import GamesInfo from './components/GamesInfo';

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
            <Route exact path="/consoles" element={<Consoles />} />
            <Route exact path="/consoles/:id/games" element={<ConsolesGames />} />
            <Route exact path="/user/consoles" element={<UsersConsoles />} />
            <Route exact path="/user/consoles/:id/games" element={<UsersGames />} />
            <Route exact path="/games" element={<Games />} />
            <Route exact path="/games/:id" element={<GamesInfo />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
