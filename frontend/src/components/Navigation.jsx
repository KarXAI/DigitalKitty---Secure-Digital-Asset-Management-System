    import React from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import logo from '../assets/logo.jpg';

    const Navigation = () => {
    const location = useLocation();
    const navItems = [
        { name: 'Home', path: '/home' },
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Code', path: '/code' },
        { name: 'Music', path: '/music' },
        { name: 'Collaborate', path: '/collaborate' }
    ];

    return (
        <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
            <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-3">
                <img
                    src={logo}
                    alt="DigitalKitty Logo"
                    className="h-8 w-auto"
                />
                <span className="text-lg font-semibold text-white">DigitalKitty</span>
                </Link>
                <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
                {navItems.map((item) => (
                    <Link
                    key={item.name}
                    to={item.path}
                    className={`${
                        location.pathname === item.path
                        ? 'border-white text-white'
                        : 'border-transparent text-gray-300 hover:text-white'
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}
                    >
                    {item.name}
                    </Link>
                ))}
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <Link
                to="/profile"
                className={`${location.pathname === '/profile' ? 'text-white' : 'text-gray-300'} text-sm hover:text-white transition-colors duration-200`}
                >
                Profile
                </Link>
                <button className="text-sm text-gray-300 hover:text-white transition-colors duration-200">
                Settings
                </button>
            </div>
            </div>
        </div>
        </nav>
    );
    };

    export default Navigation;
