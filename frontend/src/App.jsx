import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Make sure to import the CSS
import initShery from './utils/sheryInit';
import Hero from './pages/Hero';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CodeUpload from './pages/CodeUpload';
import MusicUpload from './pages/MusicUpload';
import Collaborate from './pages/Collaborate';
import About from './pages/About';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  const [error, setError] = useState(null);
  const location = useLocation();
  const scrollRef = useRef(null);
  const locoScroll = useRef(null); // Store Locomotive instance

  useEffect(() => {
    console.log('App component mounted');

    // Initialize custom animations
    try {
      setTimeout(() => {
        initShery();
      }, 100);
    } catch (err) {
      console.error('Error initializing animations:', err);
    }

    // Wait for a slight delay to ensure DOM is ready
    setTimeout(() => {
      if (scrollRef.current) {
        locoScroll.current = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          lerp: 0.08, // Adjust for smoothness
          multiplier: 1.2, // Speed control
        });
      }
    }, 500);

    return () => {
      locoScroll.current?.destroy();
    };
  }, []);

  useEffect(() => {
    if (locoScroll.current) {
      locoScroll.current.update(); // Update on route change
    }
  }, [location]);

  const isAuthPage = location.pathname.match(/^\/(login|signup)$/);
  const isHeroPage = location.pathname === '/';

  if (error) {
    return (
      <div className="min-h-screen flex flex-col bg-black text-white justify-center items-center">
        <h1 className="text-2xl font-bold mb-4 animate-fade-in">Something went wrong</h1>
        <p className="mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>{error.toString()}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="px-4 py-2 bg-white text-black rounded animate-fade-in hover:bg-gray-200 transition duration-300"
          style={{ animationDelay: '0.2s' }}
        >
          Reload Page
        </button>
      </div>
    );
  }

  try {
    return (
      <div ref={scrollRef} data-scroll-container className="min-h-screen flex flex-col bg-black">
        {!isHeroPage && <Navigation />}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/code" element={<CodeUpload />} />
            <Route path="/music" element={<MusicUpload />} />
            <Route path="/collaborate" element={<Collaborate />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        {!isAuthPage && <Footer />}
      </div>
    );
  } catch (err) {
    console.error('Error rendering App:', err);
    setError(err);
    return null;
  }
}

export default App;
