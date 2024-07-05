"use client";
import React, { useEffect, useRef } from "react";
import { Menubar } from "primereact/menubar";

import { Avatar } from "primereact/avatar";
import "primeicons/primeicons.css";
import Cart from "./Cart";

const Navbar = () => {
  const [checked, setChecked] = React.useState(false);
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
    <Menubar start={start} end={end} className="m-5 px-10" />

    // <nav className="flex w-full justify-between px-10 py-5 items-center shadow-md">
    //   <img src="/logo.png" alt="" className="w-7 aspect-square" />

    //   <div className="flex items-center gap-[4vw]">
    //     <Cart />
    //     <Avatar
    //       label="V"
    //       size="small"
    //       style={{ backgroundColor: "#2196F3", color: "#ffffff" }}
    //     />
    //   </div>
    // </nav>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { Dropdown } from "primereact/dropdown";

// export default function CheckmarkDemo() {
//   const [selectedCity, setSelectedCity] = useState(null);
//   const cities = [
//     { name: "New York", code: "NY" },
//     { name: "Rome", code: "RM" },
//     { name: "London", code: "LDN" },
//     { name: "Istanbul", code: "IST" },
//     { name: "Paris", code: "PRS" },
//   ];

//   return (
//     <div className="card flex justify-content-center">
//       <Dropdown
//         value={selectedCity}
//         onChange={(e) => setSelectedCity(e.value)}
//         options={cities}
//         optionLabel="name"
//         placeholder="Select a City"
//         className="w-full md:w-14rem"
//         checkmark={true}
//         highlightOnSelect={false}
//       />
//       <Button
//         type="button"
//         label="Button 2"
//         className="p-button-secondary mb-3 md:mb-0"
//       ></Button>
//     </div>
//   );
// }
