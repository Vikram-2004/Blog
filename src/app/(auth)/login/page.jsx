"use client";
import Input from "@/components/Input";
import { auth, googleProvider } from "../../../config/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import Link from "next/link";
import Button from "@/components/button";
console.log(auth?.currentUser);
const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHidden, setIsHidden] = useState("password");

  const handleHidden = () => {
    setIsHidden((currentValue) => {
      return currentValue === "password" ? "text" : "password";
    });
  };
  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log(email, password);
    } catch (err) {
      console.log(err);
    }
  };
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (ere) {
      console.error(ere);
    }
  };
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
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
              value={email}
            />
            <Input
              label="password"
              type={isHidden}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="flex justify-center">
            <Button label="Sign In" onClick={signIn} />
          </div>
          <div className="flex justify-center">
            <Button label="Sign In With Google" onClick={signInWithGoogle} />
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
      <button onClick={logout}>logout</button>
    </div>
  );
};
export default Page;
