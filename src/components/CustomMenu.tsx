import React from "react";

interface CustomMenuProps {
	alt: string;
	link: string;
	title: string;
	onClick: () => void;
}

const CustomMenu: React.FC<CustomMenuProps> = ({
	alt,
	link,
	title,
	onClick,
}) => {
	return (
		<div className="p-4 flex items-center cursor-pointer" onClick={onClick}>
			<img src={link} alt={alt} className="m-1 w-10 h-10"/>
            <p>
                {title}
            </p>
		</div>
	);
};

export default CustomMenu;