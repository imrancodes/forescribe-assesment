import BackgroundGrid from "@/components/background/BackgroundGrid";
import { SignupModal } from "@/components/modal/SignupModal";
import { Overlay } from "@/components/ui/Overlay";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1e1e1e]">
      <BackgroundGrid />
      <Overlay />
      {/* Top-left logo */}
      <div className="fixed top-6 left-6 z-20 flex items-center justify-center text-2xl">
        <Image src="/logo.png" alt="Forescribe" width={45} height={45} />
        <span className="text-white font-normal tracking-wide mb-2 -ml-1">forescribe</span>
      </div>

      <SignupModal />
    </main>
  );
}
