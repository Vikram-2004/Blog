"use client";
import Navbar from "@/components/Navbar";
import Card from "@/components/card";
import { auth, db } from "@/config/firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "users");

  useEffect(() => {
    let authorization = localStorage.getItem("isAuth");
    if (!authorization) {
      window.location.pathname = "/login";
    }
    const getUsers = async () => {
      try {
        const data = await getDocs(userCollectionRef);
        const filteredUsers = data.docs.map((doc) => ({ ...doc.data() }));
        setUsers(filteredUsers);
      } catch (err) {
        console.error(err);
      }
    };
    getUsers();
  }, [userCollectionRef]);
  return (
    <div>
      <Navbar />
      <div className="px-[7vw] flex">
        <div className=" w-[10vw] flex flex-col pr-4 text-xl gap-4 pt-[7vh] h-[93vh] border-r-2 border-slate-400">
          <Link href="/profile" className=" border-b-2 border-slate-600">
            Profile
          </Link>
          <Link href="/explore" className=" border-b-2 border-slate-600">
            Explore
          </Link>
          <Link href="/createpost" className=" border-b-2 border-slate-600">
            CreatePost
          </Link>
        </div>
        <div className="w-[60vw] h-[93vh] flex justify-center">
          <Card title="helo" />
        </div>
        <div className="w-[15vw] pt-[7vh] border-l-2 border-slate-400 p-8">
          <h1 className="text-2xl underline underline-offset-2 mb-2">Users</h1>
          {users.map((user) => {
            return (
              <p key={user.uid} className="mb-1">
                {user.username}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
