/** @format */

import Footer from "@/components/Footer";
import { Navbar } from "@nextui-org/react";
import React from "react";
import { Inter } from "next/font/google";
import { Providers } from "../providers";

const inter = Inter({ subsets: ["latin"] });
type HomeProps = {
	children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeProps) => {
	return (
		<>
			<div className="">
				<div className="flex-grow flex-1">{children}</div>
				<Footer />
			</div>
		</>
	);
};

export default HomeLayout;
