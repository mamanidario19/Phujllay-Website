import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import About from './routes/About/About';
import Development from './routes/Development/Development';
import Roadmap from './routes/Roadmap/Roadmap';
import Roadmap_Info from './routes/Roadmap_Info/Roadmap_Info';
import Team from './routes/Team/Team';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToUp from './components/ScrollToUp';

function App() {
  return (
    <div className="app">
    <ScrollToUp/>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/development' element={<Development />} />
        <Route path='/roadmap' element={<Roadmap />} />
        <Route path='/roadmap-info/:id' element={<Roadmap_Info />} />
        <Route path='/team' element={<Team />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
