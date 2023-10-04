import { ReactNode, MouseEvent } from "react";
import { Lato } from "next/font/google";

import { cn } from "@/lib/utils";

const latoBold = Lato({
  subsets: ["latin"],
  weight: "700",
});

function ButtonLink(props: {
  children: ReactNode;
  onClick: (e: MouseEvent) => void;
  className?: string;
}) {
  return (
    <button
      className={cn(
        "block bg-green text-white rounded-2xl min-h-[42px] p-3 shadow-general text-center",
        latoBold.className,
        props.className,
      )}
      onClick={(e: MouseEvent) => props.onClick(e)}
    >
      {props.children}
    </button>
  );
}

export default ButtonLink;
