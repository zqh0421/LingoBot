"use client";

import React from "react";
import Image from "next/image";

import {useAppSelector, useAppDispatch} from "@/store/hooks";
import {setGlobalData} from "@/store/modules/common";
import Wrapper from "@/components/ui/wrapper";
import {ThemeToggle} from "@/components/themetoggle";

const Header = () => {
  const dispatch = useAppDispatch();
  const globalData = useAppSelector((state) => state.common.globalData);

  return (
    <div className="fixed top-0 left-0 w-full h-[70px] z-10 bg-white rounded-header shadow-general">
      <Wrapper className="flex flex-row items-center justify-between h-full">
        <a href="/" title="Navigate home" className="block items-center justify-center text-green">
          LingoBuddy
        </a>
        <div className="flex gap-6 text-black">
          <ThemeToggle />
          <button>Sign Up</button>
          <button>Log In</button>
        </div>
      </Wrapper>
    </div>
  );
  return (
    <div className="z-10 w-full items-center justify-between font-mono text-sm bg-white lg:flex">
      <Wrapper>
        {/* 
  <div
    onClick={() => {
      dispatch(setGlobalData({role: "admin"}));
    }}
  >
    click change role: {globalData.role}
  </div>
  <div
    onClick={() => {
      router.push("/test");
    }}
  >
    click to testPage
  </div>
  <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    <a
      className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
      href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      By{" "}
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
    </a>
  </div> */}
      </Wrapper>
    </div>
  );
};

export default Header;
