/** @format */

import React from "react";
type DashboardProps = {
	children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardProps) => {
	return (
		<div className="flex">
			<div>
				<h1>Navbar</h1>
			</div>
			<div>{children}</div>
		</div>
	);
};

export default DashboardLayout;
