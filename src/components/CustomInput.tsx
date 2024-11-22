import React from "react";

interface CustomInputProps {
    type: string;
    id: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const CustomInput: React.FC<CustomInputProps> = ({ type,id, placeholder, value, onChange }) => {
    return(
        <input
            type={type}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full mt-5 p-3 border-2 border-white bg-transparent rounded-full text-white outline-none placeholder-white placeholder-opacity-50"
        />
    );
}

export default CustomInput;