import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Advisory from './pages/Advisory';
import CommitteePage from './pages/CommitteePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/committee" element={<CommitteePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;