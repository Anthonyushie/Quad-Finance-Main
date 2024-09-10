/** @format */

import { currencies } from "@/data";
import { NativeSelect } from "@mantine/core";
import React from "react";

const page = () => {
	return (
		<div className="px-5 py-5">
			<div>
				<div>
					<h1 className="text-[25px] font-thin">Dashboard</h1>
				</div>
				{/* --> ==> ASSETS ==> ==> */}
				<div className="bg-[#0C0C16] px-10 py-5">
					<div>
						{/* ==> ==> Assets otems */}
						<div className="flex flex-col gap-4">
							<p className="text-[#CECECE] text-[14px]">Total Assets</p>
							<h3 className="text-[25px]">
								<span>₦</span> 20,000.45
							</h3>
						</div>

						{/* ==> ==> ASSETS MENU (DROP DOWN) */}
						<div>
							<NativeSelect
								data={currencies}
								className=".mantine-NativeSelect-wrapper"
							/>
						</div>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default page;
