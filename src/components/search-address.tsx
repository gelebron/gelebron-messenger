"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { shortAddress } from "@/lib/utils";
import AddressInput from "./address-input";
import { vns } from "@nest25/ens-lib";

interface ChatBottombarProps {
  isNewMsg: string;
  onInputBlur: (newAddress: any) => void;
  errorMsg: string;
  selectedConvo: string | null;
}

// create a new instance of the VNS class
const VNS = new vns();

const SearchAddress = ({
  isNewMsg,
  onInputBlur,
  errorMsg,
  selectedConvo,
}: ChatBottombarProps) => {
  const [newAddress, setNewAddress] = useState("");
  const [resolvedAddress, setResolvedAddress] = useState<string | null>(null);

  const resolveVNS = async (vnsName: string) => {
    try {
      // resolve the VNS name
      const resolved = await VNS.resolveVNS(vnsName);
      // update state with resolved address
      setResolvedAddress(resolved);
    } catch (error) {
      console.error("Error resolving VNS:", error);
      setResolvedAddress(null);
    }
  };

  return (
    <div className="flex ">
      <motion.div
        key="input"
        className={`w-full relative flex flex-col ${isNewMsg ? "flex-1" : ""}`}
        layout
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1 }}
        transition={{
          opacity: { duration: 0.05 },
          layout: {
            type: "spring",
            bounce: 0.15,
          },
        }}
      >
        {isNewMsg ? (
          <>
            <AddressInput
              setNewValue={(value: string) => {
                setNewAddress(value);
                resolveVNS(value); // Resolve VNS when input value changes
              }}
              placeholder="Type wallet address ..."
              value={newAddress}
              onInputBlur={() => onInputBlur(newAddress)}
            />
            {resolvedAddress && (
              <span className="text-xs text-[#4CAF50] text-start ml-1 mt-2 flex flex-col">
                Resolved address: {resolvedAddress}
              </span>
            )}
            {errorMsg && (
              <span className="text-xs text-[#ff5656] text-start ml-1 mt-2 flex flex-col">
                {errorMsg}
              </span>
            )}
          </>
        ) : (
          <b>{shortAddress(selectedConvo!)}</b>
        )}
      </motion.div>
    </div>
  );
};

export default SearchAddress;
