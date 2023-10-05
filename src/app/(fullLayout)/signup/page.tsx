"use client";

import React, { MouseEvent } from "react";
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";

import ChatBubble from "@/components/ui/chatbubble";
import Wrapper from "@/components/ui/wrapper";
import ButtonLink from "@/components/ui/buttonlink";
import { auth } from "@/lib/firebase";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { setGlobalData } from "@/store/modules/common";
import { serializeUserCredential } from "@/lib/utils";
import { SignInWithGoogle } from "@/components/signinmethod";

function SignUp() {
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwdConfirm, setPwdConfirm] = React.useState("");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const globalData = useAppSelector((state) => state.common.globalData);

  if (globalData.userCredential.user.uid) {
    router.push("/");
  }

  const signup = (e: MouseEvent) => {
    console.log(email, pwd);
    if (pwd === pwdConfirm) {
      // signup
      return createUserWithEmailAndPassword(auth, email, pwd);
    } else {
      console.error("incorrect pwd");
    }
  };

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
          <ChatBubble fontWeight="bold">
            <p className="text-center">Meow~ Nice to meet you!</p>
          </ChatBubble>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-bold text-black">What is your email?</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-bold text-black">What is your password?</span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-bold text-black">Re-enter your password.</span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => {
              setPwdConfirm(e.target.value);
            }}
          />
        </div>
        <ButtonLink onClick={(e: MouseEvent) => signup(e)} className="w-4/5 max-w-[340px] mt-6">
          SIGN UP
        </ButtonLink>
        <SignInWithGoogle />
      </Wrapper>
    </main>
  );
}

export default SignUp;
