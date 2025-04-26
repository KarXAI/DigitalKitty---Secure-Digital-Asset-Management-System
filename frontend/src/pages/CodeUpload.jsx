import React, { useState, useEffect } from 'react';
import { Upload, Code2, Clock, ChevronRight, Sparkles, FileCode, Github, Terminal, Zap } from 'lucide-react';

const CodeUpload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const recentUploads = [
    {
      name: 'React Components',
      language: 'JavaScript',
      timestamp: '10 minutes ago',
      size: '2.4 MB',
      icon: '⚛️'
    },
    {
      name: 'API Server',
      language: 'Python',
      timestamp: '2 hours ago',
      size: '1.8 MB',
      icon: '🐍'
    },
    {
      name: 'ML Model',
      language: 'Python',
      timestamp: '3 hours ago',
      size: '5.2 MB',
      icon: '🤖'
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    setIsDragging(false);
    setIsUploading(true);
    
    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      setUploadProgress(i);
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    
    setIsUploading(false);
    setUploadProgress(0);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 bg-gradient-to-tr from-black via-purple-900/5 to-black"></div>
      <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-20"></div>
      
      {/* Animated glow orbs */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/5 rounded-full mb-8 backdrop-blur-sm
                        border border-white/10 hover:border-purple-500/30 transition-all duration-300">
            <Zap className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm text-gray-300">Instant Code Processing</span>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent
                       animate-gradient-x">
            Code Upload Studio
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto animate-fade-in-up">
            Transform your code into production-ready excellence with our advanced processing system
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Main Upload Card */}
          <div className="bg-gradient-to-b from-white/[0.05] to-transparent rounded-3xl p-1 animate-fade-in-up">
            <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-500/10 rounded-xl">
                    <Terminal className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">New Upload</h2>
                    <p className="text-sm text-gray-400">Start your project</p>
                  </div>
                </div>
                <Github className="w-6 h-6 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer" />
              </div>

              <div className="space-y-6">
                {/* Project Details Section */}
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    className="col-span-2 bg-black/30 border border-white/5 rounded-xl px-4 py-3 text-white
                             placeholder-gray-500 focus:ring-2 focus:ring-purple-500/30 focus:border-transparent
                             hover:border-purple-500/30 transition-all duration-300"
                    placeholder="Project Name"
                  />
                  
                  <select className="bg-black/30 border border-white/5 rounded-xl px-4 py-3 text-white
                                   focus:ring-2 focus:ring-purple-500/30 focus:border-transparent
                                   hover:border-purple-500/30 transition-all duration-300">
                    <option value="">Language</option>
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                  </select>
                  
                  <select className="bg-black/30 border border-white/5 rounded-xl px-4 py-3 text-white
                                   focus:ring-2 focus:ring-purple-500/30 focus:border-transparent
                                   hover:border-purple-500/30 transition-all duration-300">
                    <option value="">Framework</option>
                    <option value="react">React</option>
                    <option value="vue">Vue</option>
                    <option value="angular">Angular</option>
                  </select>
                </div>

                {/* Upload Zone */}
                <div 
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-300
                    ${isDragging 
                      ? 'bg-purple-500/10 border-2 border-dashed border-purple-400' 
                      : 'bg-black/30 border-2 border-dashed border-white/10 hover:border-purple-500/30'}`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <div className="relative z-10 p-10 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-purple-500/10 flex items-center justify-center">
                      <Upload className={`w-10 h-10 transition-colors duration-300 
                        ${isDragging ? 'text-purple-400' : 'text-gray-400'}`} />
                    </div>
                    <p className="text-lg font-medium text-white mb-2">Drop your files here</p>
                    <p className="text-sm text-gray-400 mb-4">or</p>
                    <button className="px-6 py-3 bg-purple-500/10 rounded-xl text-white 
                                     hover:bg-purple-500/20 transition-all duration-300 
                                     border border-purple-500/30 hover:border-purple-500/50
                                     hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                      Select Files
                    </button>
                  </div>

                  {/* Upload Progress Overlay */}
                  {isUploading && (
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-full max-w-[240px] text-center">
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-4">
                          <div 
                            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
                            style={{ width: `${uploadProgress}%` }}
                          ></div>
                        </div>
                        <p className="text-purple-400 font-medium">{uploadProgress}% Complete</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Recent Uploads Section */}
          <div className="bg-gradient-to-b from-white/[0.05] to-transparent rounded-3xl p-1 animate-fade-in-up delay-100">
            <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-500/10 rounded-xl">
                    <Clock className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Recent Uploads</h2>
                    <p className="text-sm text-gray-400">Your latest projects</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {recentUploads.map((upload, index) => (
                  <div 
                    key={upload.name}
                    className="group relative bg-black/20 rounded-xl p-4 hover:bg-purple-500/5
                             border border-white/5 hover:border-purple-500/30
                             transition-all duration-300 transform hover:-translate-y-1
                             hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                          <span className="text-2xl">{upload.icon}</span>
                        </div>
                        <div>
                          <h3 className="text-white font-medium group-hover:text-purple-400 transition-colors">
                            {upload.name}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {upload.language} • {upload.size} • {upload.timestamp}
                          </p>
                        </div>
                      </div>
                      <button className="flex items-center space-x-2 text-purple-400 opacity-0 group-hover:opacity-100 
                                       transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                        <span>View</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
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

export default CodeUpload;
