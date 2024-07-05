import React, { useEffect, useState } from "react";

const NavItemCollapse = ({ title, children, icon, name, activeNavName, setActiveNavName }) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if (activeNavName !== name) {
            setIsChecked(false);
        }
    }, [activeNavName, name]);


    return (
        <div className="d-collapse d-collapse-arrow bg-base-200  rounded-none py-2">
            <input
                type="checkbox"
                className=""
                checked={name === activeNavName}
                onChange={() => {
                    setActiveNavName(name);
                    setIsChecked(!isChecked);
                }}
            />
            <div
                className={`d-collapse-title font-medium min-h-0 py-0 pl-0 flex items-center gap-x-2 text-lg ${isChecked
                    ? "font-bold text-primaryColor"
                    : "font-semibold text-[#A5A5A5]"
                    }`}
            >
                {icon}
                {title}
            </div>
            <div className="d-collapse-content">
                <div className="mt-2 flex flex-col gap-y-5">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default NavItemCollapse;
