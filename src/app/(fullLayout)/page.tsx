import React from "react";
import Image from "next/image";

import ChatBubble from "@/components/ui/chatbubble";
import Wrapper from "@/components/ui/wrapper";
import NavBubble from "@/components/navbubble";

function Home() {
  return (
    <main className="relative flex flex-col items-center pt-24">
      <Wrapper className="gap-6 flex flex-col justify-center items-center">
        <div className="flex w-full items-center justify-center">
          <Image
            className="relative"
            src="/eva.svg"
            alt="Eva Logo"
            width={100}
            height={105}
            priority
          />
          <ChatBubble fontWeight="bold">Hi, I&apos;m Eva. What&apos;s up?</ChatBubble>
        </div>
        <NavBubble />
      </Wrapper>
    </main>
  );
}

export default Home;
