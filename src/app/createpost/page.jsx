"use client";
import Navbar from "@/components/Navbar";
import Button from "@/components/button";
import { useState, useEffect } from "react";
import { auth, db } from "@/config/firebase";
import { addDoc, collection } from "firebase/firestore";
import Link from "next/link";

const Page = () => {
  const [title, setTitle] = useState("");
  const [context, setContext] = useState("");
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    let authorization = localStorage.getItem("isAuth");
    if (!authorization) {
      window.location.pathname = "/login";
    }
  }, []);

  const createPost = async () => {
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    await addDoc(postsCollectionRef, {
      title,
      context,
      date,
      time,
      userID: auth?.currentUser?.uid,
      username: auth?.currentUser?.displayName,
    });
  };

  return (
    <div>
      <Navbar />
      <div className="w-screen flex justify-center mt-20">
        <div className="w-1/3 ">
          <h1 className="text-4xl font-semibold mb-8">Create post</h1>
          <div className="flex flex-col gap-8">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="title"
              type="text"
              className="border-2 border-slate-900 px-4 w-full py-3 rounded-md text-lg font-mono"
            />
            <textarea
              rows="5"
              className="border-2 border-slate-900 px-4 w-full py-3 rounded-md text-lg font-mono"
              placeholder="Context......"
              tabIndex={4}
              value={context}
              onChange={(e) => setContext(e.target.value)}
            ></textarea>
          </div>
          <div className="w-full mt-8 flex ">
            <div className="w-[40%]">
              <Link href="/">
                <Button label="Create Post" onClick={createPost} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
