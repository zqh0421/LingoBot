"use client";

import React from "react";

import Wrapper from "@/components/ui/wrapper";
import ChatBubbleWithIcon from "@/components/ui/chatwithicon";

function Chat() {
  return (
    <main className="relative flex flex-col items-center pt-24">
      <Wrapper>
        <ChatBubbleWithIcon>What problems are you faced with right now?</ChatBubbleWithIcon>
        <ChatBubbleWithIcon option="end" className="mt-6">
          ...
        </ChatBubbleWithIcon>
      </Wrapper>
    </main>
  );
}

export default Chat;
