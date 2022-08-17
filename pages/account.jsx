import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

function Account() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="pt-[100px] flex flex-col max-w-[400px] w-full mx-auto p-4 ">
        <h2 className="text-2xl font-bold">Welcome {session.user.name}</h2>
        <p className="py-4">Sign in as {session.user.email}</p>
        <div className="pb-4 m-auto">
          <Image
            src={session.user.image}
            alt="/"
            width="100"
            height="100"
            className="rounded-full"
          />
        </div>
        <button
          className="flex items-center justify-center p-3 bg-gray-600 border border-gray-600 "
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  }
  return (
    <div className="pt-[100px] flex flex-col max-w-[400px] w-full mx-auto p-4 ">
      <h2 className="text-3xl font-bold py-4">Login</h2>
      <p>Choose the account to sign in with</p>
      <button
        className="flex items-center justify-center p-3 bg-gray-600 border border-gray-600 my-2 "
        onClick={() => signIn()}
      >
        <FaGithub className="mr-2" /> Sign in with{" "}
        <span className="font-bold pl-1">GitHub</span>
      </button>
      <button
        className="flex items-center justify-center p-3 bg-blue-600 border border-gray-blue my-2 "
        onClick={() => signIn()}
      >
        <FaGithub className="mr-2" /> Sign in with{" "}
        <span className="font-bold pl-1">Google</span>
      </button>
    </div>
  );
}

export default Account;
