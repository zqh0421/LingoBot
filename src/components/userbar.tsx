"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useDispatch } from "react-redux";

import { resetAll } from "@/store/modules/common";
import { useAppSelector } from "@/store/hooks";
import ButtonLink from "@/components/ui/buttonlink";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown";

function SignUpLink() {
  return <Link href="/signup">Sign Up</Link>;
}

function LogInLink() {
  return <Link href="/login">Log In</Link>;
}

function UserBar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const globalData = useAppSelector((state) => state.common.globalData);
  const pathname = usePathname();

  const { uid, displayName, email, photoURL } = globalData.userCredential.user;

  const logout = () => {
    signOut(auth)
      .then((res) => {
        console.log("User signed out");
        dispatch(resetAll());
        router.push("/");
      })
      .catch((err) => {
        console.error("Error signing out:", err);
      });
  };

  return (
    <div className="h-full flex flex-col justify-center items-center">
      {globalData && globalData.userCredential.user.uid ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="clean" className="pl-0">
              {photoURL ? (
                <Image
                  className="w-6 h-6 transition-opacity duration-300 rounded-full select-none ring-1 ring-zinc-100/10 hover:opacity-80"
                  src={photoURL ? photoURL : "/eva.svg"}
                  alt={displayName ?? "Avatar"}
                  height={48}
                  width={48}
                />
              ) : (
                <div className="flex items-center justify-center text-xs font-medium uppercase rounded-full select-none h-7 w-7 shrink-0 bg-muted/50 text-muted-foreground">
                  {displayName ? displayName : null}
                </div>
              )}
              <span className="ml-2">{displayName}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={8} align="start" className="w-[180px]">
            <DropdownMenuItem className="flex-col items-start">
              <div className="text-xs font-medium">{displayName}</div>
              <div className="text-xs text-zinc-500">{email}</div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => logout()} className="text-xs">
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : pathname === "/login" ? (
        <SignUpLink />
      ) : pathname === "/signup" ? (
        <LogInLink />
      ) : (
        <div className="flex flex-row gap-6">
          <SignUpLink />
          <LogInLink />
        </div>
      )}
    </div>
  );
}

export default UserBar;
