// src/App.jsx
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './static/Navbar';
import Navmenu from './static/Navmenu';
import Footer from './static/Footer';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <main>
      <Navbar />
      <Navmenu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error code={404} />} />
      </Routes>
      <Footer />
      </main>
    </Router>
  )
}