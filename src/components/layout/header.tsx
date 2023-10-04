import React from "react";
import Link from "next/link";

import Wrapper from "@/components/ui/wrapper";
import { ThemeToggle } from "@/components/themetoggle";
import UserBar from "@/components/userbar";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[70px] z-10 bg-white rounded-header shadow-general">
      <Wrapper className="flex flex-row items-center justify-between h-full">
        <Link
          href="/"
          title="Navigate home"
          className="block items-center justify-center text-green"
        >
          LingoBuddy
        </Link>
        <div className="flex gap-6 text-black">
          <ThemeToggle />
          <UserBar />
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
