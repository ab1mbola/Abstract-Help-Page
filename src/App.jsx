import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
