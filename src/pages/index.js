import React, { useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { productData, productDataTwo } from "../components/Products/data";
import Feature from "../components/Feature";

import Sidebar from "../components/SIdebar";
import Footer from "../components/Footer";

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<Navbar toggle={toggle} />
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Hero />
			<Products heading="Choose your favorite" data={productData} />
			<Feature />
			<Products heading="Top Destination" data={productDataTwo} />
			<Footer />
		</>
	);
};

export default Home;
