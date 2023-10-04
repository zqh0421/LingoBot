"use client";

import React, { MouseEvent } from "react";
import { getFirestore, collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { useRouter } from "next/navigation";

import Wrapper from "@/components/ui/wrapper";
import ChatBubbleWithIcon from "@/components/ui/chatwithicon";
import { getAnswer } from "@/lib/chat";
import ButtonLink from "@/components/ui/buttonlink";
import { systemTemplate, aiTemplate } from "@/lib/template";

export interface IMessage {
  role: "AI" | "HUMAN" | "SYSTEM" | "AI_ANSWER";
  content: string;
  word?: string;
  context?: string;
}

function Chat() {
  const router = useRouter();
  const [chat, setChat] = React.useState<Array<IMessage>>([
    {
      role: "AI",
      content: aiTemplate,
    },
    {
      role: "HUMAN",
      content: "I want to know more about Travvy Patty, why is it a nickname for Travis Scott?",
    },
  ]);
  const getMessage = async () => {
    const answer = await getAnswer([
      {
        role: "SYSTEM",
        content: systemTemplate,
      },
      ...chat,
    ]);
    answer &&
      setChat([
        ...chat,
        {
          role: "AI_ANSWER",
          content: answer,
        },
      ]);
  };

  const goSearch = (e: MouseEvent, word: string, context: string) => {
    if (context) router.push("/dict/" + word + "/" + context);
    else router.push("/dict/" + word);
  };

  return (
    <main className="relative flex flex-col items-center pt-24">
      <Wrapper>
        {chat.map((message, index) => {
          if (message.role === "AI_ANSWER") {
            const json = JSON.parse(message.content);
            return (
              <>
                {json.introduction && (
                  <ChatBubbleWithIcon key={index} option={"start"} className="mt-6">
                    {json.introduction}
                  </ChatBubbleWithIcon>
                )}
                {json.word && (
                  <ChatBubbleWithIcon key={index} option={"start"} className="mt-6">
                    {json.word}
                  </ChatBubbleWithIcon>
                )}
                {json.context && (
                  <ChatBubbleWithIcon key={index} option={"start"} className="mt-6">
                    {json.context}
                  </ChatBubbleWithIcon>
                )}
                {json.word && (
                  <ButtonLink
                    onClick={(e: MouseEvent) => goSearch(e, json.word, json.context)}
                    className="w-4/5 max-w-[340px] mt-6 mx-auto"
                  >
                    GO SEARCH
                  </ButtonLink>
                )}
              </>
            );
          } else {
            return (
              <ChatBubbleWithIcon
                key={index}
                option={message.role === "HUMAN" ? "end" : "start"}
                className="mt-6"
              >
                {message.content}
              </ChatBubbleWithIcon>
            );
          }
        })}
        <button onClick={() => getMessage()}>test</button>
      </Wrapper>
    </main>
  );
}

export default Chat;
