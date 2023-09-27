"use client";
import { signOut } from "next-auth/react";
export default function Home() {
  return (
    <>
      <main className=" flex flex-col justify-center items-center space-y-8 h-screen">
        <button
          onClick={signOut}
          className="bg-red-500 rounded-md py-2 px-12 hover:bg-red-600 hover:text-white"
        >
          Logout
        </button>

        <h1 className="text-grey-800 text-center text-2xl font-bold uppercase">
          You have logged in!
        </h1>
        <img src="/home.png" alt="treasure chest illustration" />
      </main>
    </>
  );
}
