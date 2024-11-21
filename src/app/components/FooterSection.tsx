import React, { Children } from "react";

interface FooterSectionProps {
	title: string;
	children: React.ReactNode;
}

const FooterSection = ({ title, children}: FooterSectionProps) => (
	<div className="w-1/2">
		<h3 className="mb-4 text-xl font-bold">{title}</h3>
		{children}
	</div>
);

export default FooterSection;