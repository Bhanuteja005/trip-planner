"use client";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const links = [
    {
        name: "Portfolio",
        url: "https://bhanuteja.vercel.app/",
        icon: <HiOutlineGlobeAlt className="text-cyan-400 group-hover:text-cyan-300 transition" />,
    },
    {
        name: "GitHub",
        url: "https://github.com/Bhanuteja005",
        icon: <FaGithub className="text-gray-300 group-hover:text-white transition" />,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bhanu-teja-p-457955253/",
        icon: <FaLinkedin className="text-blue-400 group-hover:text-blue-300 transition" />,
    },
    {
        name: "Medium",
        url: "https://medium.com/@pashikantibhanuteja",
        icon: <FaMedium className="text-green-400 group-hover:text-green-300 transition" />,
    },
];

const Footer = () => {
    return (
        <footer className="w-full bg-transparent py-8 px-4 flex flex-col items-center border-t border-cyan-700 z-20 relative">
            <div className="mb-4 text-[26px] font-bold text-cyan-400">
                My Links
            </div>
            <div className="flex flex-wrap justify-center gap-6 mb-4">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex flex-col items-center p-2 rounded-md hover:bg-cyan-900/10 transition cursor-pointer z-30"
                        style={{ position: "relative" }}
                    >
                        <span className="text-2xl mb-1 pointer-events-none">{link.icon}</span>
                        <span className="text-[15px] text-gray-200 group-hover:text-cyan-200 transition pointer-events-none">{link.name}</span>
                    </a>
                ))}
            </div>
            <div className="mb-1 text-[14px] text-cyan-200 z-30 relative">
                pashikantibhanuteja@gmail.com
            </div>
            <div className="text-[12px] text-gray-400 z-30 relative">
                &copy; CosmicTravel 2025
            </div>
        </footer>
    );
};

export default Footer;