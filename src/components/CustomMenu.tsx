import React from "react";

interface CustomMenuProps {
	title: string;
	onClick: () => void;
	icon: React.ReactNode;
}

const CustomMenu: React.FC<CustomMenuProps> = ({
	title,
	onClick,
	icon,
}) => {
	return (
		<div className="p-4 flex items-center cursor-pointer" onClick={onClick}>
			{icon ?(
				<span className="m-1 w-10 h-10">{icon}</span>
			) : null}
			<p>{title}</p>
		</div>
	);
};

export default CustomMenu;
