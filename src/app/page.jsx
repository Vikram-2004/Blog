"use client";
import Card from "@/components/card";
import Navbar from "@/components/Navbar";
import { db, auth } from "@/config/firebase";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  console.log(auth?.currentUser);
  const postsCollectionRef = collection(db, "posts");

  const getPosts = async () => {
    try {
      const q = query(
        postsCollectionRef,
        where("userID", "==", localStorage.getItem("uid"))
      );
      const data = await getDocs(q);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filteredData);
      setPosts(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let authorization = localStorage.getItem("isAuth");
    if (!authorization) {
      window.location.pathname = "/login";
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, []);

  if (!posts) {
    return (
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold mt-[20vh]">loading</h1>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="px-[7vw] flex">
        <div className=" w-[10vw] flex flex-col pr-8 text-xl gap-4 pt-[5vh] h-[93vh] border-r-2 border-slate-950 ">
          <Link href="/" className=" border-b-2 border-slate-600">
            Profile
          </Link>
          <Link href="/" className=" border-b-2 border-slate-600">
            Explore
          </Link>
          <Link href="/createpost" className=" border-b-2 border-slate-600">
            CreatePost
          </Link>
        </div>
        <div className="w-[60vw] max-h-[93vh] flex justify-center overflow-y-scroll">
          <div className="mt-[5vh]">
            {posts.map((post) => {
              return (
                <div className=" pb-12" key={post.id}>
                  <Card
                    title={post.title}
                    context={post.context}
                    username={post.username}
                    date={post.date}
                    time={post.time}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
