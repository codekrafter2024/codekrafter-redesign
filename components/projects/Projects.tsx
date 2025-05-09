import { projects } from "@/constants/data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
	return (
		<div className='max-w-7xl mx-auto text-center pt-4'>
			<h2 className='text-3xl lg:text-4xl  mx-auto text-center font-bold  bg-gradient-to-r from-[#FF9A8B] via-[#FF6A88] to-[#FF99AC] inline-block text-transparent bg-clip-text'>
				Recent Projects
			</h2>
			<p className='my-5 max-w-sm text-sm lg:text-lg text-center mx-auto lg:max-w-xl '>
				Codekrafters projects feature innovative designs, intuitive
				interfaces, and tailored solutions for clients.
			</p>
			<div className='max-w-6xl container mx-auto'>
				<div className='grid grid-cols-1 lg:grid-cols-2 lg:px-0 gap-y-12'>
					{projects.map((project) => (
						<ProjectCard key={project.name} {...project} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
