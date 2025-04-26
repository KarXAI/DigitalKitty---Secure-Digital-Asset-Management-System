import React, { useState, useEffect } from 'react';
import { LogOut, Users, UploadCloud, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const navigate = useNavigate();

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const handleNavigate = (route) => {
        navigate(route); // You can later define these routes: /manage-users, etc.
    };

    return (
        <div className="min-h-screen bg-black relative overflow-hidden text-white">
            {/* Background Effects */}
            <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black animate-gradient-shift"></div>
            <div className="fixed inset-0 pointer-events-none z-0">
                {[...Array(25)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400/20 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${10 + Math.random() * 10}s`,
                        }}
                    ></div>
                ))}
            </div>
            <div
                className="fixed w-[500px] h-[500px] rounded-full pointer-events-none blur-[120px] opacity-25 bg-purple-500 transition-transform duration-1000 z-0"
                style={{
                    transform: `translate(${mousePosition.x - 250}px, ${mousePosition.y - 250}px)`,
                }}
            ></div>

            <div className="relative z-10 p-10">
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-4xl font-bold text-purple-200">Welcome Admin 👑</h1>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 bg-purple-600/10 text-white border border-purple-400 px-4 py-2 rounded-xl hover:bg-purple-500/20 transition-all duration-300"
                    >
                        <LogOut className="w-5 h-5" /> Logout
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card icon={<Users />} label="Manage Users" onClick={() => handleNavigate('/manage-users')} />
                    <Card icon={<UploadCloud />} label="Upload Files" onClick={() => handleNavigate('/upload-files')} />
                    <Card icon={<Eye />} label="View All Files" onClick={() => handleNavigate('/view-files')} />
                </div>
            </div>
        </div>
    );
};

const Card = ({ icon, label, onClick }) => (
    <div
        onClick={onClick}
        className="bg-white/5 p-6 rounded-xl border border-purple-500/20 backdrop-blur-sm cursor-pointer hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
    >
        <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-600/20 rounded-full text-purple-300">{icon}</div>
            <h3 className="text-xl font-semibold text-purple-300">{label}</h3>
        </div>
    </div>
);

export default AdminDashboard;
