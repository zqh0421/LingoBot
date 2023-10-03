import {ReactNode} from "react";
import {Lato} from "next/font/google";

import {cn} from "@/lib/utils";

const latoBold = Lato({
  subsets: ["latin"],
  weight: "700",
});

function Button(props: {children: ReactNode; className?: string}) {
  return (
    <button
      className={cn(
        "bg-green text-white rounded-2xl min-h-[42px] p-3 shadow-general",
        latoBold.className,
      )}
    >
      {props.children}
    </button>
  );
}

export default Button;
