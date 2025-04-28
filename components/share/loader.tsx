// components/Loader.tsx
"use client";

import React from "react";

const Loader = () => {
  return (
    <div className="relative inline-block mt-10 text-white text-5xl tracking-wider font-sans">
      <span className="loader-text">Load&nbsp;ng</span>
      <span className="loader-before"></span>
      <span className="loader-after"></span>
    </div>
  );
};

export default Loader;
