import React from "react";

type CustomLayoutprops = {
  children: React.ReactNode;
  className: string;
};

const CustomLayout: React.FC<CustomLayoutprops> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 xl:p-24 lg:p-16 md:p-12 ${className}`}
    >
      {children}
    </div>
  );
};

export default CustomLayout;
