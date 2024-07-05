"use client";
import React, { useRef } from "react";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import ItemCard from "@/components/ItemCard";

export default function Home() {
  const toast = useRef(null);

  const show = () => {
    toast.current.show({
      severity: "success",
      summary: "Info",
      detail: "Message Content",
    });
  };

  return (
    <>
      <Toast ref={toast} />
      <main className="grid grid-cols-4 items-start justify-start px-5">
        <ItemCard showToast={show} />
      </main>
    </>
  );
}
