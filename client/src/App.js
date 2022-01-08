import './App.css';
import Home from './components/Home';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';

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
