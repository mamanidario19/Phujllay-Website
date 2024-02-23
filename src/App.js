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

import Feature1 from "./routes/Features/Feature1";
import Feature2 from "./routes/Features/Feature2";
import Feature3 from "./routes/Features/Feature3";


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
          
        <Route path='/feature-1' element={<Feature1 />} />
        <Route path='/feature-2' element={<Feature2 />} />
        <Route path='/feature-3' element={<Feature3 />} />
          
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
