import React from "react";

interface PropTypes {
  field_name: string;
}

interface InputProps {
    id: string;
    onChange: any;
    value: string;
    type?: string;
    label: string;
}

export default function InputComponent({
  id,
  onChange,
  value,
  label,
  type
}: InputProps) {
  return (
    <div className="relative">
      <input
        className="black rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus: outline-none focus: ring-0 peer"
        placeholder=""
        value={value}
        onChange={onChange}
        id={id}
        type={type}
      />
      <label
        htmlFor="email"
        className="text-md absolute text-zinc-400 duration-150 transform 
        -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 
        peer-placeholder-shown:scale-100
        peer-placeholder-shown: translate-y-0
        peer-focus: scale-75
        peer-focus: -translate-y-3
        "
      >
        {label}
      </label>
    </div>
  );
}
