"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { vns } from "@nest25/ens-lib"; // Assuming you have a function to resolve ENS names

import AddressInput from "./address-input";

interface SearchAddressProps {
  isNewMsg: boolean;
  onInputBlur: (address: string) => void;
  errorMsg: string;
  selectedConvo: string | null;
}

const SearchAddress = ({
  isNewMsg,
  onInputBlur,
  errorMsg,
  selectedConvo,
}: SearchAddressProps) => {
  const [inputValue, setInputValue] = useState("");
  const { vns } = require("@nest25/ens-lib");
  const VNS = new vns();

  const handleInputBlur = async () => {
    try {
      const resolvedAddress = await VNS.resolveVNS(inputValue); // Resolve ENS name to address
      onInputBlur(resolvedAddress);
    } catch (error) {
      console.error("Error resolving ENS:", error);
      // Handle error, e.g., display error message
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
              setNewValue={setInputValue}
              placeholder="Input Addres or ENS name..." // Update placeholder text
              value={inputValue}
              onInputBlur={handleInputBlur}
            />
            {errorMsg && (
              <span className="text-xs text-[#ff5656] text-start ml-1 mt-2 flex flex-col">
                {errorMsg}
              </span>
            )}
          </>
        ) : (
          <b>{selectedConvo}</b> // Assuming selectedConvo is the resolved ENS name or address
        )}
      </motion.div>
    </div>
  );
};

export default SearchAddress;
