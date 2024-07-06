"use client";
import React, { useRef } from "react";
import { Menubar } from "primereact/menubar";
import { Menu } from "primereact/menu";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import "primeicons/primeicons.css";
import Cart from "./Cart";

const Navbar = () => {
  const start = <img src="/logo.png" alt="" className="w-7 aspect-square" />;
  const menuRight = useRef(null);
  const items = [
    {
      label: "Options",
      items: [
        {
          label: "Refresh",
          icon: "pi pi-refresh",
        },
        {
          label: "Export",
          icon: "pi pi-upload",
        },
      ],
    },
  ];

  const end = (
    <div className="flex items-center gap-4">
      <Cart />
      <Button
        text
        onClick={(event) => menuRight.current.toggle(event)}
        className="flex gap-3 px-2 py-1"
      >
        <div class="flex flex-col items-end">
          <p>melchs_</p>
          <p className="text-sm text-gray-400">@chanatanmel</p>
        </div>
        <Avatar
          label="V"
          size="small"
          style={{ backgroundColor: "#2196F3", color: "#ffffff" }}
        />
      </Button>
      <Menu
        model={items}
        popup
        ref={menuRight}
        id="popup_menu_right"
        popupAlignment="right"
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
