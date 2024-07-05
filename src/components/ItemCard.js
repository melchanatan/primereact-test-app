"use client";
import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";

export default function ItemCard({ showToast }) {
  const header = (
    <img
      alt="Card"
      src="https://primefaces.org/cdn/primereact/images/usercard.png"
    />
  );

  const footer = (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl">100 $</h1>
      <Button
        label="Add to Cart"
        icon="pi pi-check"
        size="small"
        onClick={showToast}
      />
    </div>
  );

  const subTitle = <Tag value="New arrival" severity="info"></Tag>;

  return (
    <div className="card flex justify-content-center">
      <Card
        title="mel's pizza"
        subTitle={subTitle}
        footer={footer}
        header={header}
        className="md:w-25rem"
      ></Card>
    </div>
  );
}
