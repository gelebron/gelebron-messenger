import React from "react";

import { PlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import useStreamConversations from "@/hooks/useStreamConversations";
import useSendMessage from "@/hooks/useSendMessage";

interface AddressInputProps {
  onInputBlur: () => void;
  value: string;
  setNewValue: (value: string) => void;
  placeholder: string;
}

const AddressInput = ({
  onInputBlur,
  value,
  setNewValue,
  placeholder,
}: AddressInputProps) => {
  const { sendMessage } = useSendMessage(value);
  useStreamConversations();

  const call = () => {
    onInputBlur();
    sendMessage("hi");
  };

  return (
    <div className="flex space-x-3 items-center w-full h-9 overflow-hidden">
      <input
        value={value}
        onChange={(e) => {
          setNewValue(e.target.value);
        }}
        type="text"
        className=" w-full border rounded-lg flex items-center h-9 px-3 resize-none overflow-hidden bg-background focus-visible:ring-none focus-visible:outline-none"
        placeholder={placeholder}
      />
      <Button variant="outline" title="Add new wallet address" onClick={call}>
        <PlusIcon className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default AddressInput;
