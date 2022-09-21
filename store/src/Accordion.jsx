import React, { useState } from "react";

const Accordion = ({ title, text }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="flex flex-col w-96 pb-2">
      <div
        className="flex justify-between p-2 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
        onClick={handleOpen}
      >
        <div className="font-bold text-base font-mono tracking-wide text-black pb-10">
          {title}
        </div>
      </div>
      <div>{open ? "-" : "+"}</div>
      {open && (
        <div className="text-sm font-mono items-center font-normal text-center text-gray-700 no-underline normal-case">
          {text}
        </div>
      )}
    </div>
  );
};

export default Accordion;
