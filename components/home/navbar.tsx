"use client";
import React from "react";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Navbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="flex justify-between py-2 px-8 sm:px-16 items-center ">
      <div className="w-5/6 flex gap-4 justify-start items-center">
        <p className="text-2xl sm:text-3xl font-black tracking-tighter font-mono">
          AI News
        </p>

        <div className="hidden sm:block rounded-xl px-3 py-2  bg-gray-200 w-2/5">
          <Search size={18}/>
        </div>
      </div>

      <div className="flex justify-between items-center w-fit gap-4">
        {isSignedIn ? (
          <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <SignInButton>
            <Button variant={"ghost"} className="rounded-xl">Login</Button>
          </SignInButton>
        )}

        <Button
          variant={"default"}
          className="rounded-xl bg-orange-600 hover:bg-orange-400 px-3"
          size={"sm"}
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
