"use client";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="border-b px-6 py-3">
      <Link href="/" className="text-xl font-bold">
        PromptShare
      </Link>
    </nav>
  );
};

export default NavBar;
