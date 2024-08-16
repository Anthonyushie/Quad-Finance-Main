/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Quadd Finance",
	description:
		"Easily send and receive cryptocurrency and Fiat with confidence",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="body-wrap h-full">
			<body className={inter.className}>
				<main className="relative flex flex-col min-h-screen">
					<Navbar />
					<div className="flex-grow flex-1">
						{" "}
						<Providers>{children}</Providers>
					</div>
				</main>
			</body>
		</html>
	);
}
