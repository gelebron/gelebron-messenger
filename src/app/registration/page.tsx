import { cookies } from "next/headers";
import { ChatLayout } from "@/components/chat/chat-layout";
import ConnectWallet from "@/components/connect-wallet";
import Image from "next/image";

export default function Registration() {
  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

  return (
    <main className="flex h-screen flex-col p-4 md:px-24 pb-10 pt-6 md:pb-10 md:pt-10 space-y-8 gap-4 bg-[#F5C8BD]">
      <div className="flex justify-between w-full items-center pb-10">
        <Image
          src="/assets/gelebron-no-bg.png"
          alt="Gelebron Logo"
          width={200}
          height={200}
        />
        <ConnectWallet />
      </div>

      <div className="relative z-10 border-2 border-[#FCEDE9] rounded-lg w-full h-3/4 text-sm lg:flex">
        {/* add an input field here */}
      </div>
    </main>
  );
}
