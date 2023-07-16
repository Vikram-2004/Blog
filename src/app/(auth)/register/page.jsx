"use client";
import { auth, googleProvider } from "@/config/firebase";
import Link from "next/link";
import Button from "@/components/button";
import Input from "@/components/Input";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHidden, setIsHidden] = useState("password");
  const [userName, setUserName] = useState("");

  const handleHidden = () => {
    setIsHidden((currentValue) => {
      return currentValue === "password" ? "text" : "password";
    });
  };
  console.log(auth?.currentUser);
  const signInGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("uid", auth?.currentUser?.uid);
      localStorage.setItem("displayName", userName);
      window.location.pathname = "/";
    } catch (error) {
      console.log(error);
    }
  };
  const signIn = async () => {
    try {
      if (password.length >= 8) {
        console.log(email, password);
        await createUserWithEmailAndPassword(auth, email, password);
        localStorage.setItem("isAuth", true);
        localStorage.setItem("uid", auth?.currentUser?.uid);
        window.location.pathname = "/";
      } else {
        alert("password musht have more than or equals to 8 characters");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-slate-50 overflow-x-hidden overflow-y-hidden h-screen w-screen bg-[url('/images/beach.jpg')] bg-cover bg-center bg-no-repeat ">
      <h1 className="text-4xl text-black font-semibold mb-20 ml-20 mt-6">
        BLOG.
      </h1>

      <div className="flex justify-center pb-[25vh]">
        <div className=" bg-black md:w-2/4 lg:w-1/4 rounded-lg px-16 py-16 self-center w-full bg-opacity-75">
          <h1 className="text-white text-3xl font-semibold mb-8">Register</h1>
          <div className="flex flex-col gap-8 rounded-md mb-8">
            <Input
              label="Username"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
            <Input
              label="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Input
              label="password"
              type={isHidden}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="flex justify-between">
            <div className="w-[45%] mb-8">
              <Button label="Register" onClick={signIn} />
            </div>
            <div className="w-[45%] mb-8">
              <Button label="Google" onClick={signInGoogle} />
            </div>
          </div>

          <p className="text-white text-center ">
            Have an account?{"  "}
            <Link href="/login" className="text-neutral-300 hover:underline ">
              Login to it
            </Link>
          </p>
        </div>
      </div>
      <button onClick={handleHidden}>clickme</button>
    </div>
  );
};
export default Page;
