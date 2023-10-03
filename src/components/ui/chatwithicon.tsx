import {ReactNode} from "react";
import {Lato} from "next/font/google";
import Image from "next/image";

import {cn} from "@/lib/utils";

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

const latoBold = Lato({
  subsets: ["latin"],
  weight: "700",
});

function ChatBubbleWithIcon(props: {
  children: ReactNode;
  className?: string;
  option?: "start" | "end";
  fontWeight?: "normal" | "bold";
}) {
  return (
    <div
      className={cn(
        "chat",
        props.option === "end" ? "chat-end" : "chat-start",
        props.className,
        props.fontWeight === "bold" ? latoBold.className : lato.className,
      )}
    >
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <Image src="/eva.svg" alt="Eva Logo" width={100} height={105} priority />
        </div>
      </div>
      <div className="chat-bubble bg-white shadow-general text-black">{props.children}</div>
    </div>
  );
}

export default ChatBubbleWithIcon;
