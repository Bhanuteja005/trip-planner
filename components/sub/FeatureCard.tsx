"use client";

import Image from "next/image";

interface Props {
    src: string;
    title: string;
    description: string;
    link: string
}

const ProjectCard = ({ src, title, description, link }: Props) => {
    return (
        <div className="relative rounded-lg shadow-lg border border-[#2A0E61] bg-[#181824] flex flex-col w-[340px] min-h-[420px] max-w-[340px]">
            <div className="w-full h-[210px] relative">
                <Image
                    src={src}
                    alt={title}
                    fill
                    className="object-cover rounded-t-lg cursor-pointer"
                    onClick={() => link && window.open(link)}
                    sizes="340px"
                />
            </div>
            <div className="flex-1 flex flex-col justify-between p-4">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="mt-2 text-gray-300">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;