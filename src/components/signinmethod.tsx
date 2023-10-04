"use client";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

import { auth } from "@/lib/firebase";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { setGlobalData } from "@/store/modules/common";
import { serializeUserCredential } from "@/lib/utils";
import ButtonLink from "@/components/ui/buttonlink";

export const SignInWithGoogle = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const globalData = useAppSelector((state) => state.common.globalData);

  const submit = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((res) => {
      dispatch(
        setGlobalData({
          userCredential: serializeUserCredential(res),
        }),
      );
      console.log(globalData);
      if (globalData && globalData.userCredential.user.uid) router.push("/"); // 登录成功跳转
    });
  };
  return (
    <ButtonLink onClick={() => submit()} className="w-4/5 max-w-[340px] bg-white text-black">
      SIGN IN with GOOGLE
    </ButtonLink>
  );
};
