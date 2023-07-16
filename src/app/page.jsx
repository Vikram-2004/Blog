"use client";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import { db } from "@/config/firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const postsCollectionRef = collection(db, "posts");
  const getPosts = async () => {
    try {
      const data = await getDocs(postsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
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

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="px-[7vw] flex">
        <div className=" w-[10vw] flex flex-col pr-8 text-xl gap-4 pt-[5vh] h-[93vh] border-r-2 border-slate-950 ">
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
        <div className="w-[60vw] max-h-[93vh] flex justify-center overflow-y-scroll">
          <div className="mt-[5vh]">
            {posts.map((post) => {
              return (
                <div className=" pb-12" key={post.id}>
                  <Card
                    title={post.title}
                    context={post.context}
                    username={post.username}
                    date={posts.date}
                    time={posts.time}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[15vw] pt-[5vh] p-8">
          <h1 className="text-2xl underline underline-offset-2 mb-2">Users</h1>
        </div>
      </div>
    </div>
  );
}
