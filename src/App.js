import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Miscellaneous from './Miscellaneous';
import Contact from './Contact';
import './styles.css';

function App() {
  return (
    <Router>
      <div id="root">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/miscellaneous" element={<Miscellaneous />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
