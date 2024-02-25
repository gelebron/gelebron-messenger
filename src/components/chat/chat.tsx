import ChatTopbar from "./chat-topbar";
import { ChatList } from "./chat-list";
import React, { useContext, useState } from "react";
import { XmtpContext } from "@/providers/XmtpContext";
import { WalletContext } from "@/providers/WalletContext";
import SearchAddressMobile from "../search-address-mobile";
import ChatBottombar from "./chat-bottombar";
import SearchVnsMobile from "../search-vns-mobile";
import { vns } from "@nest25/ens-lib";

export function Chat() {
  const [providerState, setProviderState] = useContext(XmtpContext) as [
    any,
    React.Dispatch<React.SetStateAction<any>>
  ];

  const { convoMessages, client } = providerState;
  const [errorMsg, setErrorMsg] = useState("");
  const { selectedConvo, setSelectedConvo } = useContext(WalletContext);

  const checkIfOnNetwork = async (address: string) => {
    return (await client?.canMessage(address)) || false;
  };

  const onInputBlur = async (newAddress: any) => {
    if (!newAddress.startsWith("0x") || newAddress.length !== 42) {
      setErrorMsg("Invalid address");
    } else {
      const isOnNetwork = await checkIfOnNetwork(newAddress);
      if (!isOnNetwork) {
        setErrorMsg("Address not on XMTP network");
      } else {
        setSelectedConvo(newAddress);
        setErrorMsg("");
      }
    }
  };

  const VNS = new vns();

  const onInputBlurVns = async (newVns: any) => {
    if (newVns.startsWith("0x")) {
      setErrorMsg("Invalid .vlry name");
    } else {
      const receipt = await VNS.resolveVNS(`${newVns}.vlry`);
      if (receipt.receipt) {
        const isOnNetwork = await checkIfOnNetwork(receipt.receipt);
        console.log(receipt.receipt);
        if (!isOnNetwork) {
          setErrorMsg(".vlry name does not exist");
        } else {
          setSelectedConvo(receipt.receipt);
          setErrorMsg("");
        }
      } else {
        setErrorMsg("Invalid receipt");
      }
    }
  };

  return (
    <div className="flex flex-col justify-between w-full h-[100%]">
      <SearchAddressMobile
        isNewMsg="hi"
        onInputBlur={onInputBlur}
        errorMsg={errorMsg}
        selectedConvo={selectedConvo}
      />
      <SearchVnsMobile
        isNewMsg="hi"
        onInputBlurVns={onInputBlurVns}
        errorMsg={errorMsg}
        selectedConvo={selectedConvo}
      />

      {selectedConvo && <ChatTopbar selectedConvo={selectedConvo} />}

      <ChatList />

      {selectedConvo && <ChatBottombar />}
    </div>
  );
}
