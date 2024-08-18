/** @format */

import { Button } from "@nextui-org/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className="mx-auto w-full max-w-screen-xl my-10 md:px-20">
				<div className="flex items-center w-full justify-between">
					<div className="flex flex-col gap-5 w-[50%]">
						<h1 className="font-bold text-6xl">
							<span className="text-[#FBCA0A]">Seamless</span> and Secure Crypto
							and Fiat Transactions.
						</h1>
						<p className="text-1xl font-normal">
							Easily send and receive cryptocurrency and Fiat with confidence,
							whether online or offline, through a streamlined interface
							designed for all users.
						</p>
						<div className="h-[50px]">
							<Link
								href={""}
								className="bg-[#fbca0a] flex items-center justify-between h-full px-5 w-fit">
								<Button className="bg-[#fbca0a] rounded-none flex items-center justify-between">
									Sign Up Now{" "}
									<span>
										<MoveRight className="w-6" />
									</span>
								</Button>
							</Link>
						</div>
					</div>

					<div className="flex flex-col gap-5">
						<Image width={"400"} height={"400"} src={"/quaddcube.svg"} alt="" />
						<div className="flex justify-end">
							<Image width={"165"} height={"30"} src={"/sublogo.svg"} alt="" />
						</div>
					</div>
				</div>
			</div>

			<div className="mx-auto w-full max-w-screen-xl py-5 my-10 md:px-20">
				<div className="">
					<h1 className="text-center text-4xl font-semibold">
						Why <span className="text-[#fbca0a]">Quadd</span> Finance?
					</h1>
					<div>
						
					</div>
				</div>
			</div>
		</>
	);
}
