import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FileBox, Share2, Shield, Code2, Music4, Users, Star, Zap, Heart, Mail } from 'lucide-react';
import logo from '../assets/logo.jpg';
import dragon1 from '../assets/dragon_1.jpg';
import dragon5 from '../assets/dragon_5.jpg';

// Custom hook for tracking when an element is in view
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

const About = () => {
  // Create refs for each section to track when they come into view
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const featuresRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  // Check if each section is in view
  const heroInView = useElementOnScreen(heroRef, 0.1);
  const missionInView = useElementOnScreen(missionRef, 0.1);
  const featuresInView = useElementOnScreen(featuresRef, 0.1);
  const teamInView = useElementOnScreen(teamRef, 0.1);
  const contactInView = useElementOnScreen(contactRef, 0.1);

  // Track mouse position for parallax effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20, // Scale for desired effect
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      bgColor: "from-purple-500 to-blue-600",
      title: "Code Management",
      description: "Advanced code project management with support for multiple programming languages, version control integration, and collaborative features."
    },
    {
      icon: <Music className="w-8 h-8" />,
      bgColor: "from-pink-500 to-rose-600",
      title: "Music Production",
      description: "Comprehensive music track organization with cover art support, genre classification, and built-in audio playback capabilities."
    },
    {
      icon: <Users className="w-8 h-8" />,
      bgColor: "from-amber-500 to-orange-600",
      title: "Team Collaboration",
      description: "Real-time collaboration tools for both code and music projects, with workspace management and team member coordination."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      bgColor: "from-emerald-500 to-teal-600",
      title: "Data Security",
      description: "Enterprise-grade encryption and security measures to protect your intellectual property and sensitive files."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      bgColor: "from-cyan-500 to-blue-600",
      title: "Lightning Fast",
      description: "Optimized for performance with fast uploads, downloads, and smooth interactions even with large files."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      bgColor: "from-red-500 to-pink-600",
      title: "Made with Care",
      description: "Designed with love and attention to detail to provide the best possible experience for creators."
    }
  ];


  const team = [
    {
      name: "Karan Singh",
      role: "Founder & Lead Developer",
      // Dragon image from assets
      image: dragon1,
      description: "Full-stack developer specializing in React and creative technology solutions with a passion for intuitive user experiences",
      socialLinks: ["github.com/KarXAI", "twitter.com/karansingh"]
    },
    {
      name: "Sahil",
      role: "Creative Director & Designer",
      // Dragon image from assets
      image: dragon5,
      description: "Award-winning designer with expertise in UI/UX, branding, and digital product design with an eye for detail",
      socialLinks: ["dribbble.com/sahil", "behance.net/sahil"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 -z-10 bg-black">
        <div
          className="absolute inset-0 opacity-30 blend-mode-screen transition-transform duration-700 ease-out"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(120, 41, 200, 0.5), transparent 80%)",
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            filter: "blur(80px)"
          }}
        />
        <div
          className="absolute inset-0 opacity-20 blend-mode-screen transition-transform duration-700 ease-out"
          style={{
            background: "radial-gradient(circle at 30% 70%, rgba(255, 0, 128, 0.5), transparent 80%)",
            transform: `translate(${-mousePosition.x * 0.7}px, ${-mousePosition.y * 0.7}px)`,
            filter: "blur(100px)"
          }}
        />
      </div>

      {/* Hero Section - Asymmetrical Split Layout */}
      <div
        ref={heroRef}
        className="relative pt-24 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-br from-purple-900/10 to-transparent -z-10"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-3/4 bg-gradient-to-tl from-blue-900/10 to-transparent -z-10"></div>
        <div className="absolute top-20 left-[10%] w-32 h-32 rounded-full border border-purple-500/20 animate-pulse-slow -z-10"></div>
        <div className="absolute bottom-20 right-[15%] w-48 h-48 rounded-full border border-blue-500/20 animate-pulse-slow -z-10" style={{animationDelay: '1s'}}></div>

        <div className="max-w-7xl mx-auto">
          {/* Split layout with grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side with large visual element */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start order-2 lg:order-1">
              <div className={`relative transition-all duration-1000 transform ${heroInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                {/* Main circular container with gradient border */}
                <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full flex items-center justify-center overflow-hidden">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full animate-spin-slow"></div>
                  {/* Inner content with blur effect */}
                  <div className="absolute inset-[3px] rounded-full bg-black flex items-center justify-center overflow-hidden backdrop-blur-xl">
                    <img
                      src={logo}
                      alt="DigitalKitty Logo"
                      className="h-40 w-auto object-cover rounded-full shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 z-20"
                    />
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-10 -right-10 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 opacity-80 animate-float z-10"
                  style={{ animationDelay: '0s', animationDuration: '6s' }}
                />
                <div className="absolute top-1/2 -left-8 w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 opacity-70 animate-float z-10"
                  style={{ animationDelay: '1.5s', animationDuration: '7s' }}
                />
                <div className="absolute -bottom-6 right-1/4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 opacity-80 animate-float z-10"
                  style={{ animationDelay: '1s', animationDuration: '8s' }}
                />
              </div>
            </div>

            {/* Right side with text content - asymmetrical alignment */}
            <div className="lg:col-span-7 lg:pl-8 order-1 lg:order-2 text-left">
              <div className="space-y-6">
                <h1
                  className={`text-4xl sm:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300 transition-all duration-1000 transform ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  Reimagining Digital Asset Management
                </h1>

                <div className={`w-24 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 delay-200 ${heroInView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>

                <p
                  className={`text-xl text-gray-300 max-w-2xl transition-all duration-1000 delay-300 transform ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                  DigitalKitty is revolutionizing how creators manage, collaborate, and share their work. Our platform combines powerful organization tools with an intuitive interface to streamline your creative workflow.
                </p>

                {/* Feature highlights with icons */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 transition-all duration-1000 delay-500 transform ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-500/20 p-2 rounded-lg">
                      <Code className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Code Management</h3>
                      <p className="text-gray-400 text-sm">Version control and collaboration for developers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-pink-500/20 p-2 rounded-lg">
                      <Music className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Music Production</h3>
                      <p className="text-gray-400 text-sm">Audio organization and artist collaboration</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-500/20 p-2 rounded-lg">
                      <Users className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Team Collaboration</h3>
                      <p className="text-gray-400 text-sm">Real-time editing and feedback for teams</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-emerald-500/20 p-2 rounded-lg">
                      <Shield className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Secure Storage</h3>
                      <p className="text-gray-400 text-sm">End-to-end encryption and backup solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section - Interactive Cards Design */}
      <section
        ref={missionRef}
        className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10 -z-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJhMmE2YSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+PC9zdmc+')] opacity-5 -z-10"></div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section header */}
          <div className="mb-16">
            <div className="flex items-center justify-center sm:justify-start mb-4">
              <div className={`h-px w-8 bg-purple-500 mr-4 transition-all duration-700 ${missionInView ? 'opacity-100 w-8' : 'opacity-0 w-0'}`}></div>
              <h2
                className={`text-sm uppercase tracking-widest font-semibold text-purple-400 transition-all duration-700 transform ${missionInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              >
                Our Core Purpose
              </h2>
              <div className={`h-px w-8 bg-purple-500 ml-4 transition-all duration-700 ${missionInView ? 'opacity-100 w-8' : 'opacity-0 w-0'}`}></div>
            </div>
            <h2
              className={`text-4xl sm:text-5xl font-bold text-left sm:text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white transition-all duration-1000 transform ${missionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              Why We Exist
            </h2>
          </div>

          {/* Mission cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div
              className={`group relative bg-gradient-to-br from-purple-900/20 to-black/40 backdrop-blur-sm border border-purple-500/10 rounded-xl overflow-hidden transition-all duration-700 transform hover:-translate-y-2 ${missionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="p-8">
                <div className="flex items-center justify-center w-14 h-14 bg-purple-500/20 rounded-lg mb-6">
                  <Zap className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Empower Creativity</h3>
                <p className="text-gray-400 leading-relaxed">
                  We're building tools that remove technical barriers, allowing creators to focus on what they do best - creating amazing content without limitation.
                </p>
              </div>
            </div>

            {/* Card 2 - Main mission card */}
            <div
              className={`group relative bg-gradient-to-br from-blue-900/30 to-purple-900/20 backdrop-blur-sm border border-blue-500/20 rounded-xl overflow-hidden transition-all duration-700 transform hover:-translate-y-2 ${missionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-bl-full opacity-50"></div>
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-lg mb-6">
                  <Star className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                  To revolutionize how digital creators organize, collaborate and share their work through intuitive tools that adapt to creative workflows.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  We believe technology should enhance creativity, not hinder it. Our platform bridges the gap between powerful tools and intuitive design.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className={`group relative bg-gradient-to-br from-pink-900/20 to-black/40 backdrop-blur-sm border border-pink-500/10 rounded-xl overflow-hidden transition-all duration-700 transform hover:-translate-y-2 ${missionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="p-8">
                <div className="flex items-center justify-center w-14 h-14 bg-pink-500/20 rounded-lg mb-6">
                  <Users className="w-7 h-7 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Foster Collaboration</h3>
                <p className="text-gray-400 leading-relaxed">
                  We're breaking down silos between creators by building collaborative features that make teamwork seamless across different creative disciplines.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className={`mt-20 text-center transition-all duration-1000 delay-500 transform ${missionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <p className="text-lg text-purple-300 font-semibold mb-4">Our Values</p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-purple-950/30 border border-purple-500/20 rounded-full text-sm text-white">Innovation</span>
              <span className="px-4 py-2 bg-blue-950/30 border border-blue-500/20 rounded-full text-sm text-white">Accessibility</span>
              <span className="px-4 py-2 bg-pink-950/30 border border-pink-500/20 rounded-full text-sm text-white">Community</span>
              <span className="px-4 py-2 bg-indigo-950/30 border border-indigo-500/20 rounded-full text-sm text-white">Excellence</span>
              <span className="px-4 py-2 bg-teal-950/30 border border-teal-500/20 rounded-full text-sm text-white">Creativity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={featuresRef}
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
      >
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 transform ${featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white mb-4">
              What We Offer
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge tools designed for modern creators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group p-8 bg-white/[0.03] backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/5 relative overflow-hidden ${featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Gradient background that shows on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 ${feature.bgColor}`}></div>

                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 bg-gradient-to-br ${feature.bgColor} transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}>
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 transition-all duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        ref={teamRef}
        className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/10 via-black to-purple-900/10 -z-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjEiIGZpbGw9IiM0YTU1NjgiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZG90cykiIC8+PC9zdmc+')] opacity-5 -z-10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section header */}
          <div className="mb-16">
            <div className="flex items-center justify-center sm:justify-start mb-4">
              <div className={`h-px w-8 bg-indigo-500 mr-4 transition-all duration-700 ${teamInView ? 'opacity-100 w-8' : 'opacity-0 w-0'}`}></div>
              <h2
                className={`text-sm uppercase tracking-widest font-semibold text-indigo-400 transition-all duration-700 transform ${teamInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              >
                Leadership
              </h2>
              <div className={`h-px w-8 bg-indigo-500 ml-4 transition-all duration-700 ${teamInView ? 'opacity-100 w-8' : 'opacity-0 w-0'}`}></div>
            </div>
            <h2
              className={`text-4xl sm:text-5xl font-bold text-left sm:text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-white transition-all duration-1000 transform ${teamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              Meet Our Team
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-1000 transform ${teamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                  {/* Avatar with decorative elements */}
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-700"></div>
                    <div className="relative w-44 h-44 overflow-hidden rounded-full border-2 border-white/10">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-xl"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-indigo-400 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-400 mb-6 leading-relaxed">{member.description}</p>
                    <div className="flex justify-center lg:justify-start space-x-4">
                      {member.socialLinks.map((link, i) => (
                        <a
                          key={i}
                          href={`https://${link}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-indigo-900/30 border border-indigo-500/20 rounded-full text-sm text-white hover:bg-indigo-800/40 transition-colors duration-300"
                        >
                          {link.split('.com/')[0]}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative accent */}
                <div className="absolute -z-10 top-10 -right-20 w-40 h-40 rounded-full bg-indigo-600/5 filter blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 hidden lg:block"></div>
              </div>
            ))}
          </div>

          {/* Team Footer */}
          <div className={`mt-20 text-center transition-all duration-1000 delay-700 transform ${teamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <p className="text-lg text-indigo-300 font-semibold mb-6">Join Our Team</p>
            <a href="#contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              <Mail className="w-5 h-5 mr-2" /> Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-full opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at ${50 + mousePosition.x/40}% ${50 + mousePosition.y/40}%, rgba(139, 92, 246, 0.3), transparent 60%)`
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className={`transition-all duration-1000 transform ${contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white">
              Get in Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Have questions or want to learn more about DigitalKitty?
              We'd love to hear from you!
            </p>

            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-70 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
              <Link
                to="/"
                className="relative inline-flex items-center px-8 py-4 rounded-full bg-black text-white border border-purple-500/50 font-medium shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
