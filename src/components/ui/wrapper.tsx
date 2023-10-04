import { cn } from "@/lib/utils";
import { type ElementRef, type HTMLAttributes, type ReactNode, forwardRef } from "react";

type WrapperHTMLElement = ElementRef<"div">;

interface WrapperProps extends HTMLAttributes<WrapperHTMLElement> {
  children: ReactNode;
}

const Wrapper = forwardRef<WrapperHTMLElement, WrapperProps>(
  ({ children, className, ...props }, ref) => (
    <div className={cn("mx-auto my-1/24 w-4/5 max-w-7xl", className)} ref={ref} {...props}>
      {children}
    </div>
  ),
);
Wrapper.displayName = "Wrapper";

export default Wrapper;
