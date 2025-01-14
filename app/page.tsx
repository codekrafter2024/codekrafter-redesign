import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
// import { ProductDemo } from "@/components/product-demo";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
// import { Pricing } from "@/components/pricing";
// import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Team } from "@/components/team";

const Homepage = () => {
	return (
		<>
			<Navbar />
			<main className='mx-auto relative max-w-7xl'>
				<Hero />
				{/* <ProductDemo /> */}
				<Features />
				<Testimonials />
				<Team />
				{/* <Pricing /> */}
				{/* <FAQ /> */}
			</main>
			<Footer />
		</>
	);
};

export default Homepage;
