"use client";
import React, { useRef, useState } from "react";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import ItemCard from "@/components/ItemCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { Skeleton } from "primereact/skeleton";

export default function Home() {
  const toast = useRef(null);
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  const show = () => {
    toast.current.show({
      severity: "success",
      summary: "Info",
      detail: "Message Content",
    });
  };

  const fetchMoreData = async () => {
    await new Promise((r) => setTimeout(r, 1500));

    setItems([...items, ...Array.from({ length: 6 }, (_, i) => i + 1)]);
  };

  const ItemLoadingSkeleton = (
    <>
      <div className="animate-pulse w-full max-w-[518px] h-[200px] bg-gray-300 rounded-lg"></div>
      <div className="animate-pulse w-full max-w-[518px] h-[200px] bg-gray-300 rounded-lg"></div>
      <div className="animate-pulse w-full max-w-[518px] h-[200px] bg-gray-300 rounded-lg"></div>
    </>
  );

  return (
    <>
      <Toast ref={toast} />
      <main>
        <InfiniteScroll
          className="grid grid-cols-2 md:grid-cols-3 items-start justify-center px-5 gap-5 [&>*]:justify-self-center"
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={true}
          loader={ItemLoadingSkeleton}
        >
          {items.map((i, index) => (
            <ItemCard showToast={show} />
          ))}
        </InfiniteScroll>
      </main>
    </>
  );
}
