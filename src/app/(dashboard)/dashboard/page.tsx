/** @format */

import { currencies } from "@/data";
import { Button, NativeSelect } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineCall, MdOutlineCallReceived } from "react-icons/md";
import { PiSwapLight } from "react-icons/pi";
import { TbCurrencyNaira } from "react-icons/tb";

const page = () => {
	return (
		<div className="px-5 py-5">
			<div>
				<div>
					<h1 className="text-[25px] font-thin">Dashboard</h1>
				</div>
				{/* --> ==> ASSETS ==> ==> */}
				<div className="bg-[#0C0C16] px-10 py-6">
					<div className="flex items-center justify-between">
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
								leftSection={<TbCurrencyNaira className="text-white bg-[]" />}
								data={currencies}
								className=".mantine-NativeSelect-wrapper"
							/>
						</div>
					</div>
					{/* ==> ==> ACTIVITIES BUTTON ==> ==> */}
					<div className="flex itmes-center gap-7 pt-10 ">
						<div className="flex items-center gap-2">
							<Link
								href={""}
								className=" px-8 py-3 bg-[#FBCA0A0D] text-[#FBCA0A] text-[14px] flex gap-4 items-center justify-center rounded-sm">
								<i>
									<Image
										width={24}
										height={24}
										src={"/withdraw.svg"}
										alt="withdraw icon image"
									/>
								</i>
								Withdraw
							</Link>
						</div>

						<div className="flex items-center gap-2">
							<Link
								href={""}
								className=" px-8 py-3 bg-[#FBCA0A] text-[#181818] text-[14px] flex gap-4 items-center justify-center rounded-sm">
								<i>
									<Image
										width={24}
										height={24}
										src={"/deposit.svg"}
										alt="deposit icon image"
									/>
								</i>
								Deposit
							</Link>
						</div>

						<div className="flex items-center gap-2">
							<Link
								href={""}
								className=" px-8 py-3 bg-[#181822] text-[#FFFFFF] text-[14px] flex gap-4 items-center justify-center rounded-sm">
								<PiSwapLight className="w-[24px] h-[24px]" />
								Swap
							</Link>
						</div>

						<div className="flex items-center gap-2">
							<Link
								href={""}
								className=" px-8 py-3 bg-[#181822] text-[#FFFFFF] text-[14px] flex gap-4 items-center justify-center rounded-sm">
								<MdOutlineCallReceived className="w-[24px] h-[24px]" />
								Receive
							</Link>
						</div>
					</div>
				</div>

				{/* ==> ==> RECENTS TRANSACTIONS ==> ==> */}
				<div></div>

				{/* ==> ==> FAVOURITE MOVERS */}
				<div></div>
			</div>
		</div>
	);
};

export default page;
