"use client";
import Input from "@/components/Input";
import { auth, googleProvider } from "../../../config/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import Link from "next/link";
import Button from "@/components/button";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHidden, setIsHidden] = useState("password");
  console.log(auth?.currentUser);

  const handleHidden = () => {
    setIsHidden((currentValue) => {
      return currentValue === "password" ? "text" : "password";
    });
  };
  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("isAuth", true);
      window.location.pathname = "/";
    } catch (err) {
      console.log(err);
    }
  };
  const signInWithGoogle = async () => {
    try {
      await setPersistence(auth, browserLocalPersistence);
      await signInWithPopup(auth, googleProvider);
      console.log(auth?.currentUser);
    } catch (err) {
      console.error(err);
    }
  };
  const logout = async () => {
    try {
      await signOut(auth);
      console.log(auth?.currentUser);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-slate-50 overflow-x-hidden h-screen w-screen bg-[url('/images/beach.jpg')] bg-cover bg-center bg-no-repeat ">
      <h1 className="text-4xl text-black font-semibold mb-20 ml-20 mt-6">
        BLOG.
      </h1>

      <div className="flex justify-center pb-[25vh]">
        <div className=" bg-black lg:w-1/4 rounded-lg px-16 py-16 self-center bg-opacity-75">
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
          <div className="flex justify-between">
            <Button label="Sign In" onClick={signIn} />
            <Button label="Google" onClick={signInWithGoogle} />
          </div>
          <p className="text-white text-center ">
            Dont have an account?{"  "}
            <Link
              href="/register"
              className="text-neutral-300 hover:underline "
            >
              Create an account
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
