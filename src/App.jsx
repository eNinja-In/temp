import './style/App.css'
import NavBar from './navBar'
import Home from './home'
import FooterBar from './footerBar'
import About from './about'
import Gallery from './gallery'
import Contact from './contact'
import Product from './product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FooterBar />
    </Router>
  );
}

export default App;
