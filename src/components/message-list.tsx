import React, { useEffect, useRef } from "react";
import useStreamMessages from "@/hooks/useStreamMessages";
import MessageCard from "./message-card";
import PaymentCard from "./payment-card";

interface MessageListProps {
  isNewMsg: boolean;
  convoMessages: any[];
  selectedConvo: any;
}

const MessageList = ({
  isNewMsg,
  convoMessages,
  selectedConvo,
}: MessageListProps) => {
  useStreamMessages(selectedConvo);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (convoMessages.length > 0) {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [convoMessages.length]);

  return (
    <div className="">
      <div className="">
        {!isNewMsg &&
          convoMessages.map((msg: any) => {
            if (msg.content && msg.content.split(":")[0] === "Transaction ") {
              return <PaymentCard key={msg.id} msg={msg} />;
            }
            return <MessageCard key={msg.id} msg={msg} />;
          })}
        <div ref={ref} />
      </div>
    </div>
  );
};

export default MessageList;
