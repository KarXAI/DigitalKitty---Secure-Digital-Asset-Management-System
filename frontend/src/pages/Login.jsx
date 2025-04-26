import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Sparkles } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                alert("✅ Login successful!");
                localStorage.setItem("token", data.token);

                // Redirect user based on role
                if (data.user.role === "admin") {
                    window.location.href = "/AdminDashboard";
                } else {
                    window.location.href = "/UserDashboard";
                }
            } else {
                alert("❌ " + (data.error || "Login failed"));
            }
        } catch (error) {
            console.error("❌ Login error:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="min-h-screen bg-black flex overflow-hidden">
            {/* Animated background gradient */}
            <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black animate-gradient-shift"></div>

            {/* Floating particles */}
            <div className="fixed inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400/20 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${15 + Math.random() * 10}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* Mouse follow effect */}
            <div
                className="fixed w-[500px] h-[500px] rounded-full pointer-events-none blur-[100px] opacity-20 bg-purple-500 transition-transform duration-1000"
                style={{
                    transform: `translate(${mousePosition.x - 250}px, ${mousePosition.y - 250}px)`,
                }}
            ></div>

            {/* Login Form Container */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 relative">
                <div className="w-full max-w-md space-y-8 relative z-10">
                    <div className="text-center">
                        <Link
                            to="/"
                            className="inline-block group perspective"
                        >
                            <div className="relative transform transition-all duration-300 group-hover:rotate-y-180">
                                <img
                                    src={logo}
                                    alt="DigitalKitty Logo"
                                    className="h-16 w-auto mx-auto drop-shadow-2xl transform transition-transform duration-300 group-hover:opacity-0"
                                />
                                <Sparkles className="absolute inset-0 h-16 w-16 mx-auto text-purple-400 opacity-0 group-hover:opacity-100 rotate-y-180" />
                            </div>

                        </Link>

                        <h2 className="mt-6 text-5xl font-bold text-white animate-fade-in relative">
                            Welcome Back
                            <span className="absolute -bottom-2 left-1/2 w-1/4 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent transform -translate-x-1/2 animate-width"></span>
                        </h2>
                        <p className="mt-3 text-gray-400 text-sm animate-fade-in-up">
                            Enter your credentials to access your account
                        </p>
                    </div>

                    <form className="mt-12 space-y-8" onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            <div className="group transform-gpu transition-all duration-300 hover:translate-x-1">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                                    </div>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="block w-full pl-10 pr-3 py-4 bg-white/[0.03] border border-purple-500/20 rounded-xl
                             text-white placeholder-gray-500
                             focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500/30
                             hover:border-purple-500/30 transition-all duration-300
                             backdrop-blur-sm transform-gpu hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                                        placeholder="Email address"
                                    />
                                </div>
                            </div>

                            <div className="group transform-gpu transition-all duration-300 hover:translate-x-1">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                                    </div>
                                    <input
                                        id="password"
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="block w-full pl-10 pr-3 py-4 bg-white/[0.03] border border-purple-500/20 rounded-xl
                             text-white placeholder-gray-500
                             focus:ring-2 focus:ring-purple-500/30 focus:border-purple-500/30
                             hover:border-purple-500/30 transition-all duration-300
                             backdrop-blur-sm transform-gpu hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between animate-fade-in-up">
                            <label className="flex items-center space-x-2 group cursor-pointer">
                                <div className="relative">
<input type="checkbox" className="peer hidden" onChange={(e) => setRememberMe(e.target.checked)} />
                                        <div className="h-5 w-5 border-2 border-purple-500/30 rounded-md transition-all duration-300
                                peer-checked:bg-purple-500 peer-checked:border-purple-500
                                group-hover:border-purple-400"></div>
                                    <div className="absolute top-1 left-1 h-3 w-3 bg-white scale-0 transition-transform duration-300
                                peer-checked:scale-100"></div>
                                </div>
                                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    Remember me
                                </span>
                            </label>

                            <Link to="/forgot-password"
                                className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-all duration-300
                         relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0
                         hover:after:w-full after:bg-purple-300 after:transition-all after:duration-300">
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="group relative w-full flex items-center justify-center py-4 px-4
                       border border-purple-500/30 rounded-xl text-sm font-medium
                       text-white bg-purple-500/10
                       hover:bg-purple-500/20 hover:border-purple-500/50
                       focus:outline-none focus:ring-2 focus:ring-purple-500/30
                       transition-all duration-300 transform-gpu hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
                       disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    Sign in
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="text-center text-sm text-gray-400">
                        New to DigitalKitty?{' '}
                        <Link to="/signup"
                            className="font-medium text-purple-400 hover:text-purple-300 transition-all duration-300
                       relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0
                       hover:after:w-full after:bg-purple-300 after:transition-all after:duration-300">
                            Create an account
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right side - Image Background */}
            <div className="hidden lg:block w-1/2 relative">
                <div className="absolute inset-0">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1733342554594-102b8e2d0623?q=80&w=1431&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay gradients */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 p-16 w-full">
                    <div className="max-w-md space-y-4">
                        <h3 className="text-4xl font-bold text-white">
                            Experience Digital Innovation
                        </h3>
                        <p className="text-gray-300">
                            Where creativity meets technology
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
