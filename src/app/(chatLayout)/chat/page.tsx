"use client";

import React, { MouseEvent } from "react";
import { getFirestore, collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Renderable, Toast, ValueFunction, toast } from "react-hot-toast";

import { InputPanel } from "@/components/inputpanel";
import { useChat } from "@/hooks/useChat";

import Wrapper from "@/components/ui/wrapper";
import ChatBubbleWithIcon from "@/components/ui/chatwithicon";
import ButtonLink from "@/components/ui/buttonlink";
import { aiTemplate } from "@/lib/template";
import { IMessage } from "@/components/inputpanel";

function Chat() {
  const router = useRouter();
  const initialMessages: IMessage[] = [
    {
      role: "AI",
      content: aiTemplate,
    },
    // {
    //   role: "HUMAN",
    //   content: "I want to know more about Travvy Patty, why is it a nickname for Travis Scott?",
    // },
  ];
  const { messages, append, reload, stop, isLoading, input, setInput } = useChat({
    initialMessages,
    onResponse(response: Response) {
      if (response.status === 401) {
        toast.error(response.statusText);
      }
    },
  });

  const goSearch = (e: MouseEvent, word: string, context: string) => {
    if (context) router.push("/dict/" + word + "/" + context);
    else router.push("/dict/" + word);
  };

  return (
    <main className="relative flex flex-col items-center pt-24 pb-[200px]">
      <Wrapper>
        {messages.map((message, index) => {
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
      </Wrapper>
      <InputPanel
        isLoading={isLoading}
        stop={stop}
        append={append}
        reload={reload}
        messages={messages}
        input={input}
        setInput={setInput}
      />
    </main>
  );
}

export default Chat;
