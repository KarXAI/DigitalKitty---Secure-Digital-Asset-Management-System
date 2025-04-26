import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Mail, Heart } from 'lucide-react';

const Footer = ({ isDarkPage = true }) => {
    const year = new Date().getFullYear();

    return (
        <footer className={`w-full py-12 ${isDarkPage ? 'bg-black text-white' : 'bg-zinc-900 text-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Upload</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/code" className="relative text-base text-white/70 w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:ease-in-out hover:text-opacity-80 transition-colors duration-300">
                                    Code Projects
                                </Link>
                            </li>
                            <li>
                                <Link to="/music" className="relative text-base text-white/70 w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:ease-in-out hover:text-opacity-80 transition-colors duration-300">
                                    Music Tracks
                                </Link>
                            </li>
                            <li>
                                <Link to="/collaborate" className="relative text-base text-white/70 w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:ease-in-out hover:text-opacity-80 transition-colors duration-300">
                                    Team Projects
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Features</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/dashboard" className="relative text-base text-white/70 w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:ease-in-out hover:text-opacity-80 transition-colors duration-300">
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to="/About" className="relative text-base text-white/70 w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:ease-in-out hover:text-opacity-80 transition-colors duration-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="relative text-base text-white/70 w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:ease-in-out hover:text-opacity-80 transition-colors duration-300">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/terms" className="relative text-base text-white/70 w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:ease-in-out hover:text-opacity-80 transition-colors duration-300">
                                    Terms
                                </Link>
                            </li>
                            <li>
                                <Link to="../about" className="relative text-base text-white/70 w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:ease-in-out hover:text-opacity-80 transition-colors duration-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="relative text-base text-white/70 w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:ease-in-out hover:text-opacity-80 transition-colors duration-300">
                                    Home
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Community</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="relative text-base text-white/70 w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:ease-in-out hover:text-opacity-80 transition-colors duration-300">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="relative text-base text-white/70 w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-left after:ease-in-out hover:text-opacity-80 transition-colors duration-300">
                                    Discord
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="relative text-base text-white/70 w-fit block after:block after:content-[''] after:absolute after:h-[1.5px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-right after:ease-in-out hover:text-opacity-80 transition-colors duration-300">
                                    Twitter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-4 mb-4 md:mb-0">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transform hover:scale-110">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(29,161,242,0.5)] transform hover:scale-110">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="mailto:contact@digitalkitty.com" className="p-2 rounded-full text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transform hover:scale-110">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                        <p className="text-gray-300 flex items-center">
                            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by DigitalKitty &copy; {year}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
