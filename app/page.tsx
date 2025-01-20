import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import { Team } from "@/components/team";
import { Projects } from "@/components/projects";

const Homepage = () => {
	return (
		<div className='bg-black'>
			<Navbar />
			<main className='mx-auto relative max-w-7xl'>
				<Hero />
				<Features />
				<Projects />
				<Testimonials />
				<Team />
			</main>
			<Footer />
		</div>
	);
};

export default Homepage;
