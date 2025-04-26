import React, { useState, useEffect } from 'react';
import { Users, Plus, Code2, Music2, Clock, ChevronRight, Sparkles, Zap, Users2 } from 'lucide-react';

const Collaborate = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [recentProjects] = useState([
        {
            name: 'Music Production Suite',
            type: 'music',
            members: 4,
            timestamp: '30 minutes ago',
            status: 'In Progress',
            color: 'from-pink-500 to-purple-500'
        },
        {
            name: 'React Component Library',
            type: 'code',
            members: 3,
            timestamp: '2 hours ago',
            status: 'Active',
            color: 'from-purple-500 to-blue-500'
        },
        {
            name: 'AI Integration Project',
            type: 'code',
            members: 5,
            timestamp: '1 day ago',
            status: 'Planning',
            color: 'from-blue-500 to-cyan-500'
        }
    ]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white pt-24 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="fixed inset-0 bg-gradient-to-tr from-black via-purple-900/5 to-black"></div>
            <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-20"></div>

            {/* Animated glow orbs */}
            <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
            <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow animation-delay-2000"></div>

            {/* Mouse follow effect */}
            <div
                className="fixed w-[500px] h-[500px] rounded-full pointer-events-none blur-[100px] opacity-20 bg-purple-500 transition-transform duration-1000"
                style={{
                    transform: `translate(${mousePosition.x - 250}px, ${mousePosition.y - 250}px)`,
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-white/5 rounded-full mb-8 backdrop-blur-sm
                        border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                        <Users2 className="w-4 h-4 text-purple-400 mr-2" />
                        <span className="text-sm text-gray-300">Real-time Collaboration</span>
                    </div>

                    <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent
                       animate-gradient-x">
                        Create Together
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto animate-fade-in-up">
                        Build amazing projects with your team in a seamless collaborative environment
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {/* New Project Card */}
                    <div className="bg-gradient-to-b from-white/[0.05] to-transparent rounded-3xl p-1 animate-fade-in-up">
                        <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-purple-500/10 rounded-xl">
                                        <Sparkles className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-white">New Project</h2>
                                        <p className="text-sm text-gray-400">Start collaborating with your team</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
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
                                        <option value="">Project Type</option>
                                        <option value="code">Code Project</option>
                                        <option value="music">Music Project</option>
                                        <option value="design">Design Project</option>
                                    </select>

                                    <select className="bg-black/30 border border-white/5 rounded-xl px-4 py-3 text-white
                                   focus:ring-2 focus:ring-purple-500/30 focus:border-transparent
                                   hover:border-purple-500/30 transition-all duration-300">
                                        <option value="">Access Level</option>
                                        <option value="public">Public</option>
                                        <option value="private">Private</option>
                                        <option value="team">Team Only</option>
                                    </select>
                                </div>

                                <textarea
                                    rows="4"
                                    className="w-full bg-black/30 border border-white/5 rounded-xl px-4 py-3 text-white
                           placeholder-gray-500 focus:ring-2 focus:ring-purple-500/30 focus:border-transparent
                           hover:border-purple-500/30 transition-all duration-300"
                                    placeholder="Describe your project"
                                />

                                <div className="space-y-4">
                                    <label className="text-sm text-gray-400">Team Members</label>
                                    <div className="flex items-center space-x-4">
                                        <input
                                            type="email"
                                            className="flex-1 bg-black/30 border border-white/5 rounded-xl px-4 py-3 text-white
                               placeholder-gray-500 focus:ring-2 focus:ring-purple-500/30 focus:border-transparent
                               hover:border-purple-500/30 transition-all duration-300"
                                            placeholder="Enter email address"
                                        />
                                        <button className="p-3 bg-purple-500/10 rounded-xl hover:bg-purple-500/20
                                     transition-all duration-300 border border-purple-500/30 hover:border-purple-500/50">
                                            <Plus className="w-5 h-5 text-purple-400" />
                                        </button>
                                    </div>
                                </div>

                                <button className="w-full flex items-center justify-center px-6 py-3 rounded-xl
                                 bg-gradient-to-r from-purple-500 to-blue-500 text-white
                                 hover:from-purple-600 hover:to-blue-600
                                 transform hover:-translate-y-1 transition-all duration-300">
                                    <Zap className="w-5 h-5 mr-2" />
                                    Create Project
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Recent Projects */}
                    <div className="bg-gradient-to-b from-white/[0.05] to-transparent rounded-3xl p-1 animate-fade-in-up delay-100">
                        <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-purple-500/10 rounded-xl">
                                        <Clock className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-white">Recent Projects</h2>
                                        <p className="text-sm text-gray-400">Your active collaborations</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {recentProjects.map((project, index) => (
                                    <div
                                        key={project.name}
                                        className="group relative bg-black/20 rounded-xl p-4 hover:bg-purple-500/5
                             border border-white/5 hover:border-purple-500/30
                             transition-all duration-300 transform hover:-translate-y-1
                             hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color}
                                      flex items-center justify-center`}>
                                                    {project.type === 'code' ? (
                                                        <Code2 className="w-6 h-6 text-white" />
                                                    ) : (
                                                        <Music2 className="w-6 h-6 text-white" />
                                                    )}
                                                </div>
                                                <div>
                                                    <h3 className="text-white font-medium group-hover:text-purple-400 transition-colors">
                                                        {project.name}
                                                    </h3>
                                                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                                                        <span>{project.members} members</span>
                                                        <span>•</span>
                                                        <span className="text-purple-400">{project.status}</span>
                                                        <span>•</span>
                                                        <span>{project.timestamp}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="flex items-center space-x-2 text-purple-400 opacity-0 group-hover:opacity-100
                                       transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                                                <span>Open Project</span>
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

export default Collaborate;
