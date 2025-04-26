import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Twitter, 
  LinkedinIcon, 
  Code2, 
  Music2, 
  Users, 
  Star, 
  Activity,
  Settings,
  Edit3,
  Share2,
  ChevronRight,
  ExternalLink,
  Zap,
  TrendingUp
} from 'lucide-react';

const Profile = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('projects');
  const [hoverCard, setHoverCard] = useState(null);
  const statsRef = useRef(null);

  const userStats = [
    { label: 'Projects', value: '12', icon: Code2 },
    { label: 'Collaborations', value: '34', icon: Users },
    { label: 'Stars', value: '156', icon: Star },
    { label: 'Contributions', value: '892', icon: Activity },
  ];

  const projects = [
    {
      id: 1,
      name: 'React Component Library',
      type: 'code',
      collaborators: 3,
      stars: 45,
      lastActive: '2 hours ago',
      color: 'from-purple-500 to-blue-500'
    },
    {
      id: 2,
      name: 'Music Production Suite',
      type: 'music',
      collaborators: 4,
      stars: 28,
      lastActive: '1 day ago',
      color: 'from-pink-500 to-purple-500'
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Add scroll observer for stats section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-count-up');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Particle animation data
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-tr from-black via-purple-900/5 to-black"></div>
      <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-20"></div>
      
      {/* Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite`
            }}
          ></div>
        ))}
      </div>
      
      {/* Glow Effects */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow animation-delay-2000"></div>

      {/* Mouse Follow */}
      <div
        className="fixed w-[500px] h-[500px] rounded-full pointer-events-none blur-[100px] opacity-20 bg-purple-500 transition-transform duration-1000"
        style={{
          transform: `translate(${mousePosition.x - 250}px, ${mousePosition.y - 250}px)`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <div className="bg-gradient-to-b from-white/[0.05] to-transparent rounded-3xl p-1 animate-fade-in-up">
            <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 relative overflow-hidden">
              {/* Background shine effect */}
              <div className="absolute -inset-[600px] bg-gradient-to-r from-transparent via-white/5 to-transparent 
                            skew-x-12 pointer-events-none animate-slide-right"></div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  <div className="relative group">
                    <div className="w-28 h-28 md:w-24 md:h-24 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 p-1 
                                  transition-transform duration-500 group-hover:scale-105">
                      <img 
                        src="https://c4.wallpaperflare.com/wallpaper/754/541/105/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg" 
                        alt="Profile"
                        className="w-full h-full object-cover rounded-xl"
                      />
                      {/* Pulsing outline */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-white/20 animate-pulse-border"></div>
                    </div>
                    <button className="absolute bottom-0 right-0 p-2 bg-black/50 rounded-full 
                                     backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 
                                     transition-all duration-300 hover:bg-purple-500/20">
                      <Edit3 className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  
                  <div className="space-y-2 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-3">
                      <h1 className="text-3xl font-bold text-white">Karan Singh</h1>
                      <div className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                                    border border-purple-500/20 text-sm text-purple-400 inline-flex items-center space-x-1 
                                    transition-all duration-300 hover:from-purple-500/30 hover:to-blue-500/30 
                                    group mt-2 md:mt-0">
                        <Zap className="w-3 h-3 opacity-70 group-hover:animate-pulse" />
                        <span>Pro</span>
                      </div>
                    </div>
                    <p className="text-gray-400">Full-stack Developer & Music Producer</p>
                    <div className="flex items-center justify-center md:justify-start space-x-4 pt-2">
                      <a href="https://github.com/KarXAI" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110 duration-300">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110 duration-300">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href="https://www.linkedin.com/in/karan-singhh/" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110 duration-300">
                        <LinkedinIcon className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3">
                  <Link 
                    to="/collaborate"
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 
                             hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300 
                             flex items-center space-x-2 transform hover:-translate-y-1 group"
                  >
                    <Users className="w-4 h-4" />
                    <span>Collaborate</span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 
                                  group-hover:opacity-10 transition-opacity duration-300"></div>
                  </Link>
                  <button className="p-2 rounded-xl bg-white/5 border border-white/10 
                                   hover:bg-white/10 transition-all duration-300
                                   transform hover:rotate-12">
                    <Settings className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {userStats.map((stat, index) => (
                  <div 
                    key={stat.label} 
                    className="group bg-gradient-to-br from-white/[0.03] to-transparent rounded-xl p-4 
                             border border-white/10 hover:border-purple-500/30 transition-all duration-500
                             hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transform hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <stat.icon className="w-5 h-5 text-purple-400 mb-2 transition-transform group-hover:scale-110 duration-300" />
                    <p className="text-2xl font-bold text-white transition-all duration-300 group-hover:text-purple-300">
                      <span className="counter">{stat.value}</span>
                    </p>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs & Content */}
          <div className="mt-6 bg-gradient-to-b from-white/[0.05] to-transparent rounded-3xl p-1 animate-fade-in-up delay-100">
            <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8">
              <div className="flex items-center space-x-6 mb-8 border-b border-white/10 pb-4 overflow-x-auto">
                {['projects', 'collaborations', 'activity'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-sm font-medium capitalize pb-2 border-b-2 transition-all duration-300 ${
                      activeTab === tab 
                        ? 'text-purple-400 border-purple-400' 
                        : 'text-gray-400 border-transparent hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Activity Chart (simplified) */}
              {activeTab === 'activity' && (
                <div className="h-48 w-full bg-black/20 rounded-xl p-4 mb-6 overflow-hidden">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-medium text-white">Activity Overview</h3>
                    <div className="flex items-center space-x-2 text-xs text-purple-400">
                      <TrendingUp className="w-4 h-4" />
                      <span>28% increase</span>
                    </div>
                  </div>
                  <div className="flex items-end h-24 space-x-2">
                    {[30, 45, 25, 60, 35, 50, 70, 55, 40, 65, 75, 48].map((height, i) => (
                      <div key={i} className="flex-1 group">
                        <div 
                          className="bg-gradient-to-t from-purple-500/40 to-blue-500/40 rounded-t-sm hover:from-purple-500/60 
                                   hover:to-blue-500/60 transition-all duration-300 transform hover:scale-y-110"
                          style={{ 
                            height: `${height}%`,
                            animationDelay: `${i * 100}ms`, 
                            animation: 'grow-y 1s forwards ease-out'
                          }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects Grid */}
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div 
                    key={project.id}
                    className="group relative bg-black/20 rounded-xl p-4 
                             border border-white/5 hover:border-purple-500/30
                             transition-all duration-500 transform hover:-translate-y-1
                             hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                    onMouseEnter={() => setHoverCard(project.id)}
                    onMouseLeave={() => setHoverCard(null)}
                    style={{ 
                      animationDelay: `${index * 200 + 500}ms`,
                      animation: 'fade-in-slide-up 0.5s ease-out forwards' 
                    }}
                  >
                    {/* Background glow effect on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} 
                                   rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} 
                                      flex items-center justify-center transform transition-transform
                                      duration-500 group-hover:scale-110 relative`}>
                          {project.type === 'code' ? (
                            <Code2 className="w-6 h-6 text-white" />
                          ) : (
                            <Music2 className="w-6 h-6 text-white" />
                          )}
                          
                          {/* Ping animation */}
                          <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${project.color}
                                        animate-ping-slow opacity-30`}></div>
                        </div>
                        <div>
                          <h3 className="text-white font-medium group-hover:text-purple-400 transition-colors">
                            {project.name}
                          </h3>
                          <div className="flex items-center space-x-3 text-sm text-gray-400">
                            <span className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {project.collaborators}
                            </span>
                            <span className="flex items-center">
                              <Star className="w-4 h-4 mr-1" />
                              <span className={hoverCard === project.id ? 'animate-count-small' : ''}>
                                {project.stars}
                              </span>
                            </span>
                            <span>•</span>
                            <span>{project.lastActive}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button className="p-2 rounded-xl bg-white/5 border border-white/10 
                                         hover:bg-white/10 transition-all duration-300
                                         transform hover:rotate-12">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="flex items-center space-x-2 text-purple-400 opacity-0 
                                         group-hover:opacity-100 transition-all duration-300
                                         transform translate-x-4 group-hover:translate-x-0">
                          <span>View Project</span>
                          <ChevronRight className="w-4 h-4 group-hover:animate-bounce-x" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 