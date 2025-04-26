import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Code2,
    Music2,
    Users,
    ChevronRight,
    Sparkles,
    Zap,
    ArrowRight,
    Github,
    Upload,
    Clock,
    Star,
    Play,
    PenTool,
    Layers,
    Terminal,
    Cpu
} from 'lucide-react';

const Home = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);

    // Featured projects
    const featuredProjects = [
        {
            id: 1,
            name: 'React Component Library',
            type: 'code',
            description: 'A modern, accessible component library for React applications',
            color: 'from-purple-500 to-blue-500',
            stars: 156
        },
        {
            id: 2,
            name: 'Music Production Suite',
            type: 'music',
            description: 'Professional audio tools for music producers and artists',
            color: 'from-pink-500 to-purple-500',
            stars: 89
        },
        {
            id: 3,
            name: 'AI Integration Project',
            type: 'code',
            description: 'Seamlessly integrate AI into your existing workflows',
            color: 'from-blue-500 to-cyan-500',
            stars: 124
        }
    ];

    // Features
    const features = [
        {
            title: 'Code Management',
            icon: Terminal,
            description: 'Manage, organize, and optimize your code with powerful tools',
            color: 'purple'
        },
        {
            title: 'Collaboration',
            icon: Users,
            description: 'Work seamlessly with your team in real-time',
            color: 'pink'
        },
        {
            title: 'Music Production',
            icon: Music2,
            description: 'Create and edit music with professional audio tools',
            color: 'blue'
        },
        {
            title: 'AI Processing',
            icon: Cpu,
            description: 'Leverage AI to enhance your creative and development processes',
            color: 'cyan'
        }
    ];

    // Testimonials
    const testimonials = [
        {
            id: 1,
            text: "This platform has completely transformed our development workflow. The collaboration features are unmatched!",
            name: "Alex Johnson",
            role: "Lead Developer at TechCorp",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            id: 2,
            text: "As a music producer, I've never found tools this intuitive and powerful. Game changer for my studio work.",
            name: "Sophia Chen",
            role: "Independent Music Producer",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            id: 3,
            text: "The AI integration capabilities have saved us countless hours of manual work. Highly recommended!",
            name: "Marcus Williams",
            role: "CTO at AI Innovations",
            image: "https://randomuser.me/api/portraits/men/67.jpg"
        }
    ];

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Set loaded state for animations
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
            {/* Background Effects */}
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

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className={`inline-flex items-center px-4 py-2 bg-white/5 rounded-full mb-6 backdrop-blur-sm
                          border border-white/10 transition-all duration-1000
                          ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-5'}`}>
                            <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
                            <span className="text-sm text-gray-300">The Ultimate Digital Platform</span>
                        </div>

                        <h1 className={`text-5xl sm:text-7xl font-bold mb-6 transition-all duration-1000 delay-100
                          ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-5'}`}>
                            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-gradient-x">
                                Create, Collaborate, Innovate
                            </span>
                        </h1>

                        <p className={`text-xl text-gray-400 max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-200
                         ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-5'}`}>
                            All-in-one platform for developers, musicians, and creators to build, share, and collaborate on digital projects
                        </p>

                        <div className={`flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 transition-all duration-1000 delay-300
                          ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-5'}`}>
                            <Link
                                to="/signup"
                                className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium
                         hover:from-purple-600 hover:to-blue-600 transition-all duration-300
                         transform hover:-translate-y-1 shadow-lg hover:shadow-purple-500/25 group"
                            >
                                Get Started
                                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                to="/login"
                                className="px-8 py-4 rounded-xl border border-purple-500/30 text-white font-medium
                         hover:bg-purple-500/10 transition-all duration-300
                         transform hover:-translate-y-1"
                            >
                                Sign In
                            </Link>
                        </div>
                    </div>

                    {/* Floating elements */}
                    <div className={`relative h-32 mt-16 transition-all duration-1000 delay-500
                        ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0'}`}>
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex -space-x-4">
                            {['code', 'music', 'design'].map((item, i) => (
                                <div
                                    key={item}
                                    className="w-24 h-24 rounded-2xl bg-gradient-to-r shadow-lg flex items-center justify-center"
                                    style={{
                                        backgroundImage: i === 0 ? 'linear-gradient(to right, #8b5cf6, #3b82f6)' :
                                            i === 1 ? 'linear-gradient(to right, #ec4899, #8b5cf6)' :
                                                'linear-gradient(to right, #3b82f6, #06b6d4)',
                                        animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                                        animationDelay: `${i * 0.2}s`
                                    }}
                                >
                                    {i === 0 ? <Code2 className="w-8 h-8 text-white" /> :
                                        i === 1 ? <Music2 className="w-8 h-8 text-white" /> :
                                            <PenTool className="w-8 h-8 text-white" />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                            Powerful Features
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Everything you need to bring your ideas to life
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={feature.title}
                                className="bg-white/[0.03] backdrop-blur-sm rounded-3xl p-6 border border-white/10
                        hover:border-purple-500/30 transition-all duration-500
                        transform hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10 group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-${feature.color}-500/10 flex items-center justify-center mb-6
                               transform group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className={`w-7 h-7 text-${feature.color}-400`} />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-16">
                        <Link
                            to="/features"
                            className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors
                       group"
                        >
                            <span>Explore all features</span>
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                        <div>
                            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                                Featured Projects
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl">
                                Discover what others are creating on the platform
                            </p>
                        </div>
                        <Link
                            to="/projects"
                            className="mt-4 md:mt-0 inline-flex items-center space-x-2 px-4 py-2 rounded-xl
                       bg-white/5 border border-white/10 hover:bg-white/10
                       transition-all duration-300 group"
                        >
                            <span>View All</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="group bg-gradient-to-b from-white/[0.05] to-transparent rounded-3xl p-1
                         transition-all duration-500 transform hover:-translate-y-2
                         hover:shadow-lg hover:shadow-purple-500/10"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-6 h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color}
                                  flex items-center justify-center relative`}>
                                            {project.type === 'code' ? (
                                                <Code2 className="w-6 h-6 text-white" />
                                            ) : (
                                                <Music2 className="w-6 h-6 text-white" />
                                            )}
                                            <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${project.color}
                                    opacity-30 animate-ping-slow`}></div>
                                        </div>
                                        <div className="flex items-center space-x-1 text-gray-400">
                                            <Star className="w-4 h-4 text-yellow-400" />
                                            <span>{project.stars}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                                        {project.name}
                                    </h3>

                                    <p className="text-gray-400 mb-6 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex justify-between items-center mt-auto">
                                        <div className="flex -space-x-2">
                                            {[...Array(3)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="w-8 h-8 rounded-full border-2 border-black/40 overflow-hidden"
                                                >
                                                    <img
                                                        src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${20 + i + index * 3}.jpg`}
                                                        alt="Collaborator"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        <Link
                                            to={`/projects/${project.id}`}
                                            className="inline-flex items-center space-x-2 text-purple-400
                               hover:text-purple-300 transition-colors group"
                                        >
                                            <span>View</span>
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-16 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="bg-gradient-to-b from-white/[0.05] to-transparent rounded-3xl p-1">
                        <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <Link
                                    to="/codeupload"
                                    className="flex items-center p-4 rounded-xl bg-white/[0.03] border border-white/10
                           hover:border-purple-500/30 hover:bg-purple-500/5
                           transition-all duration-300 transform hover:-translate-y-1 group"
                                >
                                    <div className="mr-4 p-3 rounded-xl bg-purple-500/10">
                                        <Upload className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-white group-hover:text-purple-300 transition-colors">
                                            Upload Code
                                        </h3>
                                        <p className="text-sm text-gray-400">
                                            Share and manage your code
                                        </p>
                                    </div>
                                    <ChevronRight className="ml-auto w-5 h-5 text-gray-500 group-hover:text-purple-400
                                        group-hover:translate-x-1 transition-all" />
                                </Link>

                                <Link
                                    to="/collaborate"
                                    className="flex items-center p-4 rounded-xl bg-white/[0.03] border border-white/10
                           hover:border-purple-500/30 hover:bg-purple-500/5
                           transition-all duration-300 transform hover:-translate-y-1 group"
                                >
                                    <div className="mr-4 p-3 rounded-xl bg-purple-500/10">
                                        <Users className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-white group-hover:text-purple-300 transition-colors">
                                            Collaborate
                                        </h3>
                                        <p className="text-sm text-gray-400">
                                            Work with your team
                                        </p>
                                    </div>
                                    <ChevronRight className="ml-auto w-5 h-5 text-gray-500 group-hover:text-purple-400
                                        group-hover:translate-x-1 transition-all" />
                                </Link>

                                <Link
                                    to="/profile"
                                    className="flex items-center p-4 rounded-xl bg-white/[0.03] border border-white/10
                           hover:border-purple-500/30 hover:bg-purple-500/5
                           transition-all duration-300 transform hover:-translate-y-1 group"
                                >
                                    <div className="mr-4 p-3 rounded-xl bg-purple-500/10">
                                        <Layers className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-white group-hover:text-purple-300 transition-colors">
                                            My Profile
                                        </h3>
                                        <p className="text-sm text-gray-400">
                                            Manage your projects
                                        </p>
                                    </div>
                                    <ChevronRight className="ml-auto w-5 h-5 text-gray-500 group-hover:text-purple-400
                                        group-hover:translate-x-1 transition-all" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                            What Users Say
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Join thousands of satisfied users on our platform
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className="bg-white/[0.03] backdrop-blur-sm rounded-3xl p-6 border border-white/10
                         hover:border-purple-500/30 transition-all duration-500
                         hover:shadow-lg hover:shadow-purple-500/10 relative group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="absolute top-6 right-6 text-gray-600">
                                    <svg width="30" height="30" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="fill-purple-500/20">
                                        <path d="M10.7 8C7.2 8 4 10.6 4 14.5c0 3.9 3.4 7.1 7.2 7.1 .7 0 1.3-.1 1.9-.3 -2 3-4.7 5.2-4.7 5.2s6.9-1.2 9.9-7.2c.3-.7 .5-1.6 .5-2.4 0-4.8-3.5-8.9-8.1-8.9zm15.7 0c-3.5 0-6.7 2.6-6.7 6.5 0 3.9 3.4 7.1 7.2 7.1 .7 0 1.3-.1 1.9-.3 -2 3-4.7 5.2-4.7 5.2s6.9-1.2 9.9-7.2c.3-.7 .5-1.6 .5-2.4 0-4.8-3.5-8.9-8.1-8.9z" />
                                    </svg>
                                </div>

                                <p className="text-gray-300 mb-6 relative z-10">
                                    {testimonial.text}
                                </p>

                                <div className="flex items-center">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full mr-4 border-2 border-purple-500/20"
                                    />
                                    <div>
                                        <h4 className="text-white font-medium group-hover:text-purple-300 transition-colors">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-gray-400">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="bg-gradient-to-b from-purple-500/20 to-blue-500/5 rounded-3xl p-1">
                        <div className="bg-black/60 backdrop-blur-xl rounded-3xl p-12 text-center relative overflow-hidden">
                            {/* Animated background elements */}
                            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                                <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full border border-purple-500/20 animate-spin-slow"></div>
                                <div className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full border border-blue-500/20 animate-spin-slow animation-delay-2000"></div>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative">
                                Ready to Transform Your
                                <span className="relative">
                                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent ml-2">Workflow?</span>
                                    <span className="absolute bottom-0 left-2 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-width"></span>
                                </span>
                            </h2>

                            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                                Join thousands of creators and developers building the future together
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                                <Link
                                    to="/signup"
                                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium
                           hover:from-purple-600 hover:to-blue-600 transition-all duration-300
                           transform hover:-translate-y-1 shadow-lg hover:shadow-purple-500/25 group"
                                >
                                    Get Started Free
                                    <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 rounded-xl border border-purple-500/30 text-white font-medium
                           hover:bg-purple-500/10 transition-all duration-300
                           transform hover:-translate-y-1 flex items-center justify-center"
                                >
                                    <Github className="mr-2 w-5 h-5" />
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
