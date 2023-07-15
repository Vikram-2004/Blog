import Link from "next/link";
import Button from "./button";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";

const Navbar = () => {
  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.setItem("isAuth", false);
      window.location.pathname = "login";
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex justify-between px-[7vw] h-[7vh] w-screen items-center border-b-2 border-slate-500 border-spacing-8 shadow-md bg-white">
      <h1 className="text-4xl font-semibold">BLOG.</h1>
      <div className="text-xl">
        <Link href="/" className="mx-4">
          Home
        </Link>
        <Link href="/createpost" className="mx-4">
          CreatePost
        </Link>
        <Link href="/" className="mx-4">
          Contact
        </Link>
      </div>
      <div className="w-[8vw] ">
        <Button label="Logout" onClick={logout} />
      </div>
    </div>
  );
};
export default Navbar;
