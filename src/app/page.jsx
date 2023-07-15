"use client";
import Navbar from "@/components/Navbar";
import { auth } from "@/config/firebase";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let authorization = localStorage.getItem("isAuth");
    if (!authorization) {
      window.location.pathname = "/login";
    }
  });
  return (
    <div>
      <Navbar />
    </div>
  );
}
