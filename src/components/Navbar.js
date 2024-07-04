"use client";
import React, { useEffect, useRef } from "react";
import { useMountEffect } from "primereact/hooks";
import { Messages } from "primereact/messages";

import { Avatar } from "primereact/avatar";
import { AvatarGroup } from "primereact/avatargroup"; //Optional for grouping
import { Button } from "primereact/button";
import { Ripple } from "primereact/ripple";
import { Tooltip } from "primereact/tooltip";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";

const Navbar = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <nav className="flex w-full justify-between px-10 py-5 items-center shadow-md">
      <p>logo</p>

      <Avatar
        label="V"
        size="small"
        style={{ backgroundColor: "#2196F3", color: "#ffffff" }}
      />
      <div className="flex flex-column md:flex-row justify-content-between my-5">
        <Button
          type="button"
          label="Button 1"
          className="mb-3 md:mb-0 p-ripple"
        >
          <Ripple />
        </Button>
        <Button
          type="button"
          label="Button 2"
          className="p-button-secondary mb-3 md:mb-0"
        ></Button>
        <Button
          type="button"
          label="Button 3"
          className="p-button-help"
        ></Button>
        <Checkbox
          onChange={(e) => setChecked(e.checked)}
          checked={checked}
        ></Checkbox>
      </div>
    </nav>
  );
};

export default Navbar;
