"use client"

const AboutText = () => {
    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 py-14 px-4 md:px-20">
            {/* Cosmic Gallery Visual */}
            <div className="relative flex items-center justify-center w-full md:w-1/2 h-[370px] md:h-[440px]">
                {/* Cosmic Circles */}
                <div className="absolute rounded-full border-2 border-purple-500/40 w-64 h-64 md:w-96 md:h-96 animate-pulse blur-[2px]" />
                <div className="absolute rounded-full border-2 border-cyan-400/30 w-44 h-44 md:w-64 md:h-64 blur-[1px]" />
                <div className="absolute rounded-full border-2 border-purple-400/20 w-28 h-28 md:w-40 md:h-40" />
                {/* Shooting Star */}
                <div className="absolute left-1/4 top-1/4 w-24 h-1 bg-gradient-to-r from-cyan-400/80 to-transparent rounded-full animate-pulse" />
                {/* Gallery Nodes/Planets */}
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full shadow-2xl flex items-center justify-center border-2 border-white/30 ring-4 ring-cyan-400/30 animate-bounce">
                        <span className="text-lg text-white font-bold drop-shadow">1</span>
                    </div>
                    <span className="block text-sm text-purple-200 mt-2 font-medium tracking-wide">Arrival</span>
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full shadow-2xl flex items-center justify-center border-2 border-white/30 ring-4 ring-purple-400/30 animate-spin-slow">
                        <span className="text-lg text-white font-bold drop-shadow">2</span>
                    </div>
                    <span className="block text-sm text-cyan-200 mt-2 font-medium tracking-wide">Adventure</span>
                </div>
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full shadow-2xl flex items-center justify-center border-2 border-white/30 ring-4 ring-purple-300/30 animate-pulse">
                        <span className="text-lg text-white font-bold drop-shadow">3</span>
                    </div>
                    <span className="block text-sm text-purple-200 mt-2 font-medium tracking-wide">Memory</span>
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-400 rounded-full shadow-2xl flex items-center justify-center border-2 border-white/30 ring-4 ring-cyan-300/30 animate-spin-reverse">
                        <span className="text-lg text-white font-bold drop-shadow">4</span>
                    </div>
                    <span className="block text-sm text-cyan-200 mt-2 font-medium tracking-wide">Discovery</span>
                </div>
                {/* Center Node */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-700 via-cyan-600 to-purple-900 rounded-full shadow-2xl flex items-center justify-center border-4 border-white/40 ring-8 ring-cyan-400/10 animate-glow">
                        <span className="text-4xl text-white font-extrabold animate-pulse drop-shadow-lg">✦</span>
                    </div>
                </div>
            </div>
            {/* Textual Features */}
            <div className="w-full md:w-1/2 flex flex-col gap-7">
                <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-600 mb-3 drop-shadow-lg text-left tracking-tight leading-tight">
                    Welcome to the Cosmic Travel Gallery
                </h2>
                <div className="bg-transparent rounded-2xl shadow-none p-0 border-0">
                    <p className="text-2xl text-cyan-100 font-semibold leading-relaxed mb-3">
                        Explore your journeys as shining stars in a cosmic gallery. Each photo opens a new world—just click to expand and relive your favorite destinations in vivid detail.
                    </p>
                    <p className="text-lg text-purple-200 font-medium leading-relaxed mb-2">
                        Our interface is designed to be immersive and easy to use, letting you discover, remember, and enjoy your adventures with a single click.
                    </p>
                    <p className="text-lg text-cyan-200 font-medium leading-relaxed mb-2">
                        Stay organized for your next adventure with our Trip Countdown and Daily Planner. Track the days until your journey begins and jot down notes for each day to make every moment count.
                    </p>
                    <p className="text-base text-cyan-300 italic">
                        Start your interstellar adventure and see travel in a whole new light.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutText;