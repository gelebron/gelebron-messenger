"use client";

import RegisterVNS from "@/components/register-vns";
import Background from "@/components/shared/background";
import { Button } from "@/components/ui/button";
import { Github, Globe, LogIn, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const openNewTab = (url: any) => {
    window.open(url, "_blank");
  };

  return (
    <Background>
      <div className="w-screen h-screen">
        <div className="py-14 px-5">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/assets/gelebron-no-bg.png"
              alt="logo"
              width={250}
              height={250}
            />
          </Link>
          <div className="flex items-center gap-1">
            <div className="block md:hidden"></div>
          </div>
        </div>
        <div className="flex-col items-center justify-center w-full mt-4">
          <div className="flex flex-col items-center text-center">
            <p className="mt-5 text-4xl font-bold leading-tight text-[#000000] sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
              Encrypted Instant
              <span className="relative inline-flex sm:inline">
                <span className="bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#FFFFFF] blur-lg filter w-full h-full absolute inset-0"></span>
                <span className="relative"> Messaging </span>
              </span>
              &
              <span className="relative inline-flex sm:inline">
                <span className="bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#FFFFFF] blur-lg filter w-full h-full absolute inset-0"></span>
                <span className="relative"> Payments </span>
              </span>
              Protocol
            </p>
            <p className="mt-5 text-4xl font-semibold leading-tight text-[#000000] sm:leading-tight sm:text-xl lg:text-2xl lg:leading-tight font-pj">
              ⛓️ Chat and Send cUSD to anyone on Celo using Gelebron Messenger
              ⛓️
            </p>
            <div className="mt-16"></div>
            <div className="flex-col justify-center">
              <RegisterVNS />
            </div>
          </div>
          <div className="flex items-center justify-center align-center gap-5 mt-16">
            <Button
              onClick={() => openNewTab("https://github.com/gelebron")}
              className="h-10 px-5 bg-[#2a2a2a] hover:bg-[#fcede9] text-[#fcede9] hover:text-[#2a2a2a] rounded-3xl font-semibolt text-base gap-2"
            >
              <Github className="cursor-pointer w-5 h-5" />
              Source Code
            </Button>
          </div>
        </div>
      </div>
    </Background>
  );
}
