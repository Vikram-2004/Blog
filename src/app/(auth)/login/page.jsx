"use client";
import Input from "@/components/Input";
import { auth, googleProvider } from "../../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import Link from "next/link";
import Button from "@/components/button";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHidden, setIsHidden] = useState("password");

  const handleHidden = () => {
    setIsHidden((currentValue) => {
      return currentValue === "password" ? "text" : "password";
    });
  };

  return (
    <div className="bg-slate-50 overflow-x-hidden overflow-y-hidden">
      <nav className="bg-slate-950 h-[7vh] mb-32 flex items-center justify-center">
        <h1 className="text-2xl text-white font-semibold">BLOG.</h1>
      </nav>
      <div className="flex justify-center pb-[25vh]">
        <div className=" bg-black lg:w-1/4 rounded-lg px-16 py-16 self-center ">
          <h1 className="text-white text-3xl font-semibold mb-8">Sign in</h1>
          <div className="flex flex-col gap-8 rounded-md mb-8">
            <Input
              label="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="password"
              type={isHidden}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <Button label="Sign In" />
          </div>
          <div className="flex justify-center">
            <Button label="Sign In With Google" />
          </div>
          <p className="text-white text-center">
            Dont have an account?
            <Link href="/register" className="text-neutral-300">
              {"  "}Create an account
            </Link>
          </p>
        </div>
      </div>
      <button onClick={handleHidden}> clickme</button>
    </div>
  );
};
export default Page;
