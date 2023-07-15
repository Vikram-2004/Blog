"use client";
import { auth } from "@/config/firebase";

export default function Home() {
  console.log(auth?.currentUser?.displayName);
  return <div>hello {auth?.currentUser?.displayName}</div>;
}
