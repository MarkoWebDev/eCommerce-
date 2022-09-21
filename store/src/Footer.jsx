import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div>
      <div className="w-full flex justify-center bg-black">
        <p className="font-semibold text-sm font-mono tracking-wide text-white no-underline normal-case">
          Copyright &copy; {date} by Web Marko Dev
        </p>
      </div>
    </div>
  );
};

export default Footer;
