"use client";

import { useRouter } from "next/navigation";

import ButtonLink from "@/components/ui/buttonlink";
import ChatBubble from "@/components/ui/chatbubble";
import { useAppSelector, useAppDispatch } from "@/store/hooks";

const navButtonLinks = [
  {
    title: "a context-based dictionary.",
    href: "/chat",
  },
  {
    title: "a select mode to improve my vocab.",
    href: "/",
  },
  {
    title: "chat-based language study games.",
    href: "/",
  },
  {
    title: "an overview of my study history.",
    href: "/",
  },
];

function NavBubble() {
  const router = useRouter();
  const globalData = useAppSelector((state) => state.common.globalData);

  return (
    <ChatBubble option="end" fontWeight="bold">
      <p className="mt-[12.5px]">Hi, I&apos;m looking for ...</p>
      <nav className="flex flex-col gap-[10px] p-[10px] mt-[10px]">
        {navButtonLinks.map((link) => (
          <ButtonLink
            key={link.title}
            onClick={(e: React.MouseEvent) => {
              router.push(globalData.userCredential.user.uid ? link.href : "/signup");
            }}
          >
            {link.title}
          </ButtonLink>
        ))}
      </nav>
    </ChatBubble>
  );
}

export default NavBubble;
