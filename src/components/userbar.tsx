"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { useAppSelector } from "@/store/hooks";

function SignUpLink() {
  return <Link href="/signup">Sign Up</Link>;
}

function LogInLink() {
  return <Link href="/login">Log In</Link>;
}

function UserBar() {
  const globalData = useAppSelector((state) => state.common.globalData);
  const pathname = usePathname();
  console.log(globalData.userCredential.user);
  console.log(pathname);

  return (
    <>
      {globalData && globalData.userCredential.user.uid ? (
        <div>welcome {globalData.userCredential.user.displayName}</div>
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
    </>
  );
}

export default UserBar;
