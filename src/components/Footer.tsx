/** @format */

import Image from "next/image";

const Footer = () => {
	return (
		<div className="w-full bg-[#151021] py-5">
			<div className="flex items-center justify-center gap-2 ">
				<Image
					width={50}
					height={50}
					src={"/qudfinance-logo.svg"}
					alt="quadfinance logo"
				/>
				<h1 className="text-2xl font-bold">
					{" "}
					<span className="text-[#FBCA0A]">Quad</span> Finance
				</h1>
			</div>

			<div className="px-5 flex items-center justify-between text-[#C3BEDB]">
				<p>© 2024 Quadd Finance. All Rights Reserved</p>
				<p>Terms and Condition</p>
			</div>
		</div>
	);
};

export default Footer;
