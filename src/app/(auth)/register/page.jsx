"use client";
import { auth, googleProvider, db } from "@/config/firebase";
import Link from "next/link";
import Button from "@/components/button";
import Input from "@/components/Input";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

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
  const usersCollectionRef = collection(db, "users");
  const signInGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log(auth?.currentUser);
      await addDoc(usersCollectionRef, {
        uid: auth?.currentUser?.uid,
        username: auth?.currentUser?.displayName,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const signIn = async () => {
    try {
      if (password.length >= 8) {
        console.log(email, password);
        await createUserWithEmailAndPassword(auth, email, password);
        await addDoc(usersCollectionRef, {
          uid: auth?.currentUser?.uid,
          username: userName,
        });
      } else {
        alert("password musht have more than or equals to 8 characters");
      }
    } catch (error) {
      console.log(error);
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
        <div className=" bg-black md:w-2/4 lg:w-1/4 rounded-lg px-16 py-16 self-center w-full">
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
          <div className="flex justify-center">
            <Button label="Register" onClick={signIn} />
          </div>
          <div className="flex justify-center">
            <Button label="Sign In With Google" onClick={signInGoogle} />
          </div>
          <p className="text-white text-center">
            Have an account?
            <Link href="/login" className="text-neutral-300">
              {"  "}Login to it
            </Link>
          </p>
        </div>
      </div>
      <button onClick={handleHidden}>clickme</button>
      <button onClick={logout}>logout</button>
    </div>
  );
};
export default Page;
