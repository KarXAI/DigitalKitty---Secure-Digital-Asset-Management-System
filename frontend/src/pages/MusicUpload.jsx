import React, { useState } from 'react';
import { Music2, Upload, Image as ImageIcon, Play, Pause, Clock, ChevronRight } from 'lucide-react';

const MusicUpload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [recentTracks] = useState([
    {
      name: 'Summer Vibes',
      genre: 'Electronic',
      timestamp: '15 minutes ago',
      duration: '3:45',
      plays: 124
    },
    {
      name: 'Midnight Jazz',
      genre: 'Jazz',
      timestamp: '1 hour ago',
      duration: '4:20',
      plays: 89
    }
  ]);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file drop
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-8">
            Music Upload
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Share Your Sound</span>
          </h1>
          <p className="text-xl text-gray-300 mb-16 animate-fade-in-delay">
            Upload and manage your music tracks with style
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm shadow-2xl rounded-2xl p-8 mb-12 animate-slide-up">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Music2 className="w-6 h-6 mr-2" />
                New Track
              </h2>
            </div>

            <div className="space-y-8">
              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2">Track Name</label>
                <input 
                  type="text" 
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500
                    focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-300
                    hover:border-white/20"
                  placeholder="Enter track name"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2">Genre</label>
                <select 
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white
                    focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-300
                    hover:border-white/20"
                >
                  <option value="">Select genre</option>
                  <option value="electronic">Electronic</option>
                  <option value="rock">Rock</option>
                  <option value="jazz">Jazz</option>
                  <option value="hiphop">Hip Hop</option>
                  <option value="classical">Classical</option>
                </select>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                <textarea 
                  rows="4"
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500
                    focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-300
                    hover:border-white/20"
                  placeholder="Describe your track"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div 
                  className={`group border-2 border-dashed rounded-xl p-10 text-center transition-all duration-300
                    ${isDragging ? 'border-white bg-white/10' : 'border-white/10 hover:border-white/30'}`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <Music2 className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-300 mb-2">Drag and drop your audio file</p>
                  <p className="text-sm text-gray-400">or</p>
                  <button className="mt-4 px-6 py-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors duration-300">
                    Browse Files
                  </button>
                </div>

                <div 
                  className={`group border-2 border-dashed rounded-xl p-10 text-center transition-all duration-300
                    ${isDragging ? 'border-white bg-white/10' : 'border-white/10 hover:border-white/30'}`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <ImageIcon className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-300 mb-2">Add cover art</p>
                  <p className="text-sm text-gray-400">or</p>
                  <button className="mt-4 px-6 py-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors duration-300">
                    Browse Images
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="inline-flex items-center px-6 py-3 rounded-full bg-white text-black shadow-lg 
                  hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:bg-opacity-90">
                  <Upload className="w-5 h-5 mr-2" />
                  Upload Track
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm shadow-2xl rounded-2xl p-8 animate-slide-up-delay">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Clock className="w-6 h-6 mr-2" />
                Recent Tracks
              </h2>
            </div>
            <div className="space-y-4">
              {recentTracks.map((track, index) => (
                <div 
                  key={track.name}
                  className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-white/10
                    hover:border-white/30 transition-all duration-300 transform hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={togglePlay}
                      className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors duration-300"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6 text-white" />
                      ) : (
                        <Play className="w-6 h-6 text-white" />
                      )}
                    </button>
                    <div>
                      <h3 className="text-sm font-medium text-white">{track.name}</h3>
                      <p className="text-sm text-gray-400">
                        {track.genre} • {track.duration} • {track.plays} plays • {track.timestamp}
                      </p>
                    </div>
                  </div>
                  <button className="group flex items-center text-sm text-white hover:text-gray-300 transition-colors duration-300">
                    View
                    <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicUpload;
