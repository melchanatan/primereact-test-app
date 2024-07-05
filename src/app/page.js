"use client";
import React, { useRef, useState } from "react";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import ItemCard from "@/components/ItemCard";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const toast = useRef(null);
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const show = () => {
    toast.current.show({
      severity: "success",
      summary: "Info",
      detail: "Message Content",
    });
  };

  const fetchMoreData = () => {
    setItems([...items, ...Array.from({ length: 10 }, (_, i) => i + 1)]);
  };

  return (
    <>
      <Toast ref={toast} />
      <main>
        <InfiniteScroll
          className="grid grid-cols-2 md:grid-cols-3 items-start justify-start px-5 gap-5"
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {items.map((i, index) => (
            <ItemCard showToast={show} />
          ))}
        </InfiniteScroll>
      </main>
    </>
  );
}
