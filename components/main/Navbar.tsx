"use client";

const Navbar = () => {
    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <a
                    href="#about"
                    className="h-auto w-auto flex flex-row items-center"
                >
                    <span className="font-bold ml-[10px] hidden md:block text-gray-300 text-lg">
                        CosmicTravel
                    </span>
                </a>
                <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        <a href="#hero" className="cursor-pointer">
                            Home
                        </a>
                        <a href="#tripplanner" className="cursor-pointer">
                            Planner
                        </a>
                        <a href="#gallery" className="cursor-pointer">
                            Gallery
                        </a>
                        <a href="#projects" className="cursor-pointer">
                            Features
                        </a>
                    </div>
                </div>
                <div className="flex flex-row gap-5">
                </div>
            </div>
        </div>
    );
};

export default Navbar;