import React from 'react'

const Logo = ({ className }) => {
  return (
    <h1 className={`font-bold text-white ${className}`}>
      <a className="flex items-center gap-2 text-2xl" href="">
        <img width='55' src="icons/gdsc-logo.png" alt="GDSC Logo" />  
        GD Finances
      </a>
    </h1>
  );
};

export default Logo;