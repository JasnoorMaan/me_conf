import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Advisory from './pages/Advisory';
import CommitteePage from './pages/CommitteePage';
import ComingSoon from './pages/ComingSoon';
import Guidelines from './pages/Guidelines';
import SubmissionGuidelines from './pages/SubmissionGuidelines';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/committee" element={<CommitteePage />} />
        <Route path="/registration-fees" element={<ComingSoon />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/submission-guidelines" element={<SubmissionGuidelines />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;