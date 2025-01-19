"use client";

import Image from "next/image";

const ProjectCard = ({
  name,
  image,
  description,
  link,
}: {
  name: string;
  image: string;
  description: string;
  link: string;
}) => {
  return (
    <div
      onClick={() => link && window.open(link, "_blank")}
      className="cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] hover:scale-105 transition-all duration-300"
    >
      <Image
        className="w-full h-52 rounded-lg"
        src={image}
        alt={name}
        width={600}
        height={300}
      />
      <div className="text-start p-2">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="text-sm text-white mt-1">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
