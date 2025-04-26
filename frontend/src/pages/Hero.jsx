import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FileBox, Share2, Shield, Code2, Music4, Users, Star, Zap, Heart, Mail, Github, Twitter, Linkedin } from 'lucide-react';
import logo from '../assets/logo.jpg';
import '../styles/animations.css';

// Custom hook for intersection observer
function useElementOnScreen(ref, threshold = 0.1) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, threshold]);

  return isIntersecting;
}

function Hero() {
  // State management
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  
  // Refs for sections
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const showcaseRef = useRef(null);
  
  // Intersection observers
  const heroInView = useElementOnScreen(heroRef);
  const featuresInView = useElementOnScreen(featuresRef);
  const showcaseInView = useElementOnScreen(showcaseRef);

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Feature rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Add new state for cursor follower
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Add new useEffect for cursor follower with smooth animation
  useEffect(() => {
    const moveCursor = (e) => {
      requestAnimationFrame(() => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  // Features data
  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Intelligent Code Management",
      description: "Advanced AI-powered code organization with real-time collaboration",
      gradient: "from-purple-600 to-blue-600",
      highlight: "bg-purple-500/20"
    },
    {
      icon: <Music4 className="w-8 h-8" />,
      title: "Creative Suite",
      description: "Professional-grade tools for digital content creation",
      gradient: "from-pink-600 to-purple-600",
      highlight: "bg-pink-500/20"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Military-grade encryption for your digital assets",
      gradient: "from-blue-600 to-cyan-600",
      highlight: "bg-blue-500/20"
    }
  ];

  // Updated navigation items
  const navItems = ['Home', 'Code', 'Music', 'Collaborate'];

  // Additional content sections data
  const useCases = [
    {
      title: "For Developers",
      icon: <Code2 className="w-6 h-6" />,
      description: "Manage your code projects with advanced version control, real-time collaboration, and AI-powered suggestions.",
      features: [
        "Smart code organization",
        "Git integration",
        "Team collaboration",
        "AI code review"
      ]
    },
    {
      title: "For Musicians",
      icon: <Music4 className="w-6 h-6" />,
      description: "Organize your music tracks, collaborate with other artists, and manage your audio assets seamlessly.",
      features: [
        "Track organization",
        "Audio collaboration",
        "Version control",
        "Metadata management"
      ]
    },
    {
      title: "For Teams",
      icon: <Users className="w-6 h-6" />,
      description: "Bring your team together with powerful collaboration tools, real-time updates, and seamless file sharing.",
      features: [
        "Real-time collaboration",
        "Team management",
        "Access control",
        "Activity tracking"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Add cursor follower */}
      <div
        className="pointer-events-none fixed inset-0 z-50"
        aria-hidden="true"
      >
        <div
          className="absolute w-4 h-4 bg-pink-500 blur-sm rounded-full  transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: `translate(-50%, -50%) scale(${scrolled ? 0.7 : 1})`,
          }}
        >
          <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse"></div>
        </div>
      </div>

      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x/10}% ${50 + mousePosition.y/10}%, rgba(139, 92, 246, 0.3), transparent 60%),
                        radial-gradient(circle at ${30 - mousePosition.x/15}% ${70 - mousePosition.y/15}%, rgba(236, 72, 153, 0.3), transparent 60%)`,
            filter: 'blur(80px)',
            transform: 'translate3d(0, 0, 0)'
          }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJhMmE2YSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')] opacity-5" />
      </div>

      {/* Updated Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`} style={{ userSelect: 'none' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="DigitalKitty Logo" className="h-10 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    to={item === 'Home' ? '/home' : `/${item.toLowerCase()}`}
                    className="relative text-base text-white/70 w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:ease-in-out hover:text-opacity-80 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                ))}
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                <div className="relative w-6 h-6">
                  <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                  <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 translate-y-2 ${menuOpen ? 'opacity-0' : ''}`} />
                  <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 translate-y-4 ${menuOpen ? '-rotate-45 -translate-y-0.5' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/80 backdrop-blur-md">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/home' : `/${item.toLowerCase()}`}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
            <Link
              to="/login"
              className="block px-3 py-2 text-base font-medium text-purple-400 hover:text-purple-300 transition-colors duration-300"
            >
              Get Started →
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full filter blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500/30 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500/30 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className={`space-y-8 text-center lg:text-left transition-all duration-1000 transform ${heroInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                  <span className="block bg-gradient-to-r from-white via-purple-200 to-pink-200 text-transparent bg-clip-text">
                    Transform Your
                  </span>
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
                    Digital Experience
                  </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                  Experience the next generation of digital asset management with DigitalKitty's AI-powered platform.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  to="/signup"
                  className="group relative inline-flex items-center px-8 py-3 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="relative z-10 p-1.43">Get Started Free</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute right-1.5 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center transform group-hover:translate-x-2 transition-transform duration-300">
                    <span className="ml-1.2">→</span>
                  </div>
                </Link>
                <Link
                  to="/demo"
                  className="group inline-flex items-center px-6 py-3 text-base font-medium text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Watch Demo
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                </span>
              </Link>
            </div>
            
              {/* Feature Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0 pt-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-500 transform hover:-translate-y-1 ${feature.highlight} ${index === activeFeature ? 'ring-2 ring-purple-500/50' : ''}`}
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} p-2.5 mb-3`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-sm font-semibold mb-1">{feature.title}</h3>
                    <p className="text-xs text-gray-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className={`relative transition-all duration-1000 transform ${heroInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {/* Main circular container */}
              <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] mx-auto">
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full animate-spin-slow">
                  <div className="absolute inset-[3px] rounded-full bg-black"></div>
                </div>
                
                {/* Content */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-900/50 to-black flex items-center justify-center overflow-hidden backdrop-blur-xl">
                  <img
                    src={logo}
                    alt="DigitalKitty Interface"
                    className="h-40 w-auto object-cover rounded-full shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 z-20"
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 opacity-80 animate-float" style={{ animationDelay: '0s' }} />
                <div className="absolute top-1/2 -left-12 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-70 animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute -bottom-8 right-1/4 w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 opacity-80 animate-float" style={{ animationDelay: '2s' }} />
              </div>

              {/* Stats */}
              <div className="absolute -right-10 top-1/2 transform -translate-y-1/2">
                <div className="space-y-4">
                  {[
                    { label: 'Active Users', value: '10K+' },
                    { label: 'Files Managed', value: '1M+' },
                    { label: 'Client Rating', value: '4.9/5' }
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-lg rounded-lg px-4 py-2 border border-white/10"
                    >
                      <div className="text-sm font-semibold text-purple-300">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* New Use Cases Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white mb-4">
              Tailored for Your Needs
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              DigitalKitty adapts to your workflow, whether you're coding, creating music, or collaborating with a team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 p-2.5 mb-4">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-gray-400 mb-6">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-purple-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
      </div>
    </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-black via-purple-900/10 to-black">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white mb-4">
              How It Works
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience a seamless workflow with our intuitive platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {[
                {
                  title: "Upload & Organize",
                  description: "Easily upload and organize your files with our drag-and-drop interface and smart categorization."
                },
                {
                  title: "Collaborate & Share",
                  description: "Work together in real-time, share files securely, and manage team access with granular controls."
                },
                {
                  title: "Track & Version",
                  description: "Keep track of changes, maintain version history, and rollback when needed with our powerful versioning system."
                }
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Display */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20"></div>
                {/* Add your interactive demo or screenshot here */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Zap className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                    <p className="text-lg font-medium">Interactive Demo Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Enhanced background effects */}
        <div className="absolute inset-0">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black"></div>
          
          {/* Animated orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[128px] animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full filter blur-[128px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJhMmE2YSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')] opacity-[0.02]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            {/* Enhanced heading with animated gradient */}
            <div className="relative inline-block">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="inline-block bg-gradient-to-r from-white via-purple-200 to-pink-200 text-transparent bg-clip-text animate-gradient-x">
                  Ready to Transform
                </span>
                <br />
                <span className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text animate-gradient-x">
                  Your Workflow?
                </span>
              </h2>
              {/* Animated underline */}
              <div className="absolute left-1/2 -bottom-4 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform -translate-x-1/2"></div>
            </div>

            {/* Enhanced description */}
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join the community of innovative creators who are revolutionizing their digital workflow with DigitalKitty.
            </p>

            {/* Stats section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto my-16">
              {[
                { value: '10K+', label: 'Active Users' },
                { value: '1M+', label: 'Files Managed' },
                { value: '99.9%', label: 'Uptime' },
                { value: '4.9/5', label: 'User Rating' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-white/[0.03] rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  <div className="relative">
                    <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* Primary CTA */}
              <Link
                to="/signup"
                className="group relative inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium text-lg overflow-hidden shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">Get Started Free</span>
                <div className="relative z-10 w-8 h-8 ml-4 rounded-full bg-white/10 flex items-center justify-center transform group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-lg">→</span>
                </div>
              </Link>

              {/* Secondary CTA */}
              <Link
                to="/demo"
                className="group relative px-8 py-4 rounded-full text-white font-medium text-lg transition-all duration-300"
              >
                <span className="absolute inset-0 border-2 border-purple-500/30 rounded-full group-hover:border-purple-500/50 transition-colors duration-300"></span>
                <span className="relative flex items-center">
                  <Zap className="w-5 h-5 mr-2 transform group-hover:rotate-12 transition-transform duration-300" />
                  Watch Demo
                </span>
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="flex flex-col items-center space-y-4">
                <p className="text-gray-400 mb-4">Trusted by leading companies worldwide</p>
                <div className="flex flex-wrap justify-center gap-8 opacity-50">
                  {/* Add company logos here */}
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <div key={i} className="w-32 h-8 bg-white/10 rounded-md"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </section>
    </div>
  );
}

export default Hero;
