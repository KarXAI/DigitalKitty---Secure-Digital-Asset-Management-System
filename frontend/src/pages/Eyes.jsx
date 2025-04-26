import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-8">
            Interactive Eyes
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Follow Your Movement</span>
          </h1>
          <p className="text-xl text-gray-300 mb-16">Move your cursor around to see the magic happen</p>
        </div>

        <div className="eyes w-full h-[300px] md:h-[600px] overflow-hidden rounded-3xl bg-zinc-900/50 backdrop-blur-lg border border-white/10">
          <div className="w-full relative h-full flex items-center justify-center">
            <div className={`absolute flex gap-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}>
              <div className="w-[24vw] md:w-[15vw] h-[24vw] md:h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full shadow-2xl transition-transform duration-300 hover:scale-105">
                <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
                  <div
                    style={{
                      transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                    }}
                    className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
                  >
                    <div className="w-[3vw] h-[3vw] rounded-full bg-zinc-100 shadow-lg"></div>
                  </div>
                </div>
              </div>
              <div className="w-[24vw] md:w-[15vw] h-[24vw] md:h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full shadow-2xl transition-transform duration-300 hover:scale-105">
                <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
                  <div
                    style={{
                      transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                    }}
                    className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
                  >
                    <div className="w-[3vw] h-[3vw] rounded-full bg-zinc-100 shadow-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`text-center mt-12 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-gray-400">Built with React and Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
}

export default Eyes;