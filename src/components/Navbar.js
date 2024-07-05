"use client";
import React from "react";
import { Menubar } from "primereact/menubar";

import { Avatar } from "primereact/avatar";
import "primeicons/primeicons.css";
import Cart from "./Cart";

const Navbar = () => {
  const start = <img src="/logo.png" alt="" className="w-7 aspect-square" />;

  const end = (
    <div className="flex items-center gap-4">
      <Cart />
      <div class="flex flex-col items-end ml-[4vw]">
        <p>melchs_</p>
        <p className="text-sm text-gray-400">@chanatanmel</p>
      </div>
      <Avatar
        label="V"
        size="small"
        style={{ backgroundColor: "#2196F3", color: "#ffffff" }}
      />
    </div>
  );

  return (
    <Menubar
      start={start}
      end={end}
      className="m-5 px-10 sticky top-3 z-[100]"
    />
  );
};

export default Navbar;
