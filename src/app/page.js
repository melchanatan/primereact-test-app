import Image from "next/image";
import Navbar from "@/components/Navbar";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Navbar />
    </main>
  );
}
