import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import About from './routes/About/About';
import Development from './routes/Development/Development';
import Roadmap from './routes/Roadmap/Roadmap';
import Team from './routes/Team/Team';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Feature1 from "./routes/Features/Feature1";
import Feature2 from "./routes/Features/Feature2";
import Feature3 from "./routes/Features/Feature3";
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
        <Route path='/feature-1' element={<Feature1 />} />
        <Route path='/feature-2' element={<Feature2 />} />
        <Route path='/feature-3' element={<Feature3 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
