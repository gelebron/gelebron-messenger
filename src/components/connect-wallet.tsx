"use client";

import { shortAddress } from "@/lib/utils";
import { WalletContext } from "@/providers/WalletContext";
import { XmtpContext } from "@/providers/XmtpContext";
import { WalletIcon } from "lucide-react";
import React, { useContext } from "react";
import { Button } from "./ui/button";

const ConnectWallet = () => {
  const { connectWallet, disconnectWallet, walletAddress, signer } =
    useContext(WalletContext);
  const [providerState] = useContext(XmtpContext) as [
    any,
    React.Dispatch<React.SetStateAction<any>>
  ];

  const isMetaMaskInstalled =
    typeof window !== "undefined" &&
    window.ethereum &&
    window.ethereum.isMetaMask;

  return (
    <div className="flex justify-center items-center text-sm px-2 md:text-md md:space-y-0 md:space-x-4 cursor-pointer py-3 rounded-lg">
      {walletAddress ? (
        <>
          {!providerState.client ? (
            <Button
              onClick={() => providerState.initClient(signer)}
              className="flex justify-center items-center gap-3"
            >
              <WalletIcon className="hidden md:flex h-4 w-4" />
              Connect to XMTP
            </Button>
          ) : (
            <Button
              className="flex justify-center items-center gap-3"
              onClick={disconnectWallet}
            >
              <WalletIcon className="hidden md:flex h-4 w-4" />
              {shortAddress(walletAddress)}
            </Button>
          )}
        </>
      ) : (
        <Button
          className="flex justify-center items-center gap-3"
          onClick={connectWallet}
        >
          <WalletIcon className="hidden md:flex h-4 w-4 gap-2" />
          {typeof window !== "undefined" &&
          (!window.ethereum || !window.ethereum.isMetaMask)
            ? "Install MetaMask"
            : "Connect Wallet"}
        </Button>
      )}
    </div>
  );
};

export default ConnectWallet;
