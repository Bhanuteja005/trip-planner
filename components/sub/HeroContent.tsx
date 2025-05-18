"use client";

import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
            id="hero"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[5px] border border-[#7042f88b] opacity-[0.9]  "
                >
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 " />
                    <h1 className="Welcome-text text-[13px] hidden sm:block">
                        Travel Gallery: Explore Destinations Across the Universe
                    </h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <span>
                        Discover the
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "} Wonders of Travel {" "}
                        </span>
                        Through Our Cosmic Gallery
                    </span>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    Journey through breathtaking destinations, each captured as a star in our gallery. Click on any photo to expand and immerse yourself in the story behind every adventure—where every trip is a leap across the universe. 
                    <span className="block mt-3 text-cyan-300">
                        Plan your next cosmic journey with our Trip Countdown and Daily Planner—never miss a moment!
                    </span>
                </motion.p>
                <motion.a
                    variants={slideInFromLeft(1)}
                    href="#gallery"
                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                >
                    Explore the Gallery!
                </motion.a>
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center"
            >
                <Image
                    src="/icon-tra-removebg.png"
                    alt="travel icons"
                    height={650}
                    width={650}
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;