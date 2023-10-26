import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import About from './routes/About/About';
import Development from './routes/Development/Development';
import Roadmap from './routes/Roadmap/Roadmap';
import Team from './routes/Team/Team';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Development' element={<Development />} />
        <Route path='/Roadmap' element={<Roadmap />} />
        <Route path='/Team' element={<Team />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
