import React from "react";

const Spinner = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex items-center justify-center space-x-2">
        <div
          className="inline-block h-[23rem] w-[23rem] animate-spin rounded-full border-t-[12px] border-dotted border-[#EE3824] border-r-deep-orange-50 border-b-deep-orange-200/70 border-l-deep-orange-400 align-[-0.125em] motion-reduce:animate-[spin_5.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
