"use client";
import React, { useRef, useState } from "react";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { Badge } from "primereact/badge";

const Cart = () => {
  const [visibleRight, setVisibleRight] = useState(false);
  return (
    <div>
      <Button
        rounded
        text
        className="!p-4"
        onClick={() => setVisibleRight(true)}
      >
        <i
          className="pi pi-shopping-cart p-overlay-badge text-2xl"
          rounded
          text
        >
          <Badge value="2" severity="danger"></Badge>
        </i>
      </Button>

      <Sidebar
        visible={visibleRight}
        position="right"
        onHide={() => setVisibleRight(false)}
      >
        <h2 className="font-bold text-2xl">Your cart</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Sidebar>
    </div>
  );
};

export default Cart;
