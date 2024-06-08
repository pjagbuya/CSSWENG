import React from 'react'

const Logo = ({ className, lightText }) => {
  const textColor = lightText ? 'text-primary-foreground' : 'text-primary'

  return (
    <h1 className={`font-bold ${className}`}>
      <a className={`flex items-center gap-2 text-2xl ${textColor}`} href="">
        <img width='55' src="icons/gdsc-logo.png" alt="GDSC Logo" />  
        GD Finances
      </a>
    </h1>
  );
};

export default Logo;