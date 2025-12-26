"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function SignupModal() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="
        fixed inset-0 z-20
        flex items-center justify-center
        px-4
      "
    >
      <div className="flex flex-col items-center">
        <div
          className="
          w-full max-w-sm
          rounded-2xl
          bg-black/50
          px-12 text-center py-10
          backdrop-blur-md
        "
        >
          {/* Logo */}
          <div className="flex justify-center mb-2">
            <Image src="/logo.gif" alt="Forescribe" width={40} height={40} />
          </div>

          {/* Heading */}
          <h1 className="text-white text-lg font-semibold mb-6 font-sans">
            Welcome to Forescribe
          </h1>

          {/* Google button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="
                  w-full mb-3
                  rounded-lg
                  bg-[#8B3DFF]
                  py-3 text-sm font-normal 
                  text-white
                  flex items-center justify-center gap-3
                "
          >
            <Image
              src="/icons/google.png"
              alt="Google"
              width={18}
              height={18}
            />
            Continue with Google
          </motion.button>

          {/* Microsoft button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="
                w-full
                rounded-lg
                bg-[#4B4B4B]
                py-3 text-sm font-normal 
                text-white
                flex items-center justify-center gap-3
              "
          >
            <Image
              src="/icons/microsoft.png"
              alt="Microsoft"
              width={18}
              height={18}
            />
            Continue with Microsoft
          </motion.button>

          {/* Terms */}
          {/* Terms – outside modal */}
        </div>
        <p className="mt-1 max-w-sm text-center text-xs text-gray-400 leading-relaxed">
          By clicking “Continue with Google/Microsoft” above, you acknowledge
          that you have read and understood, and agree to Forescribe&apos;s{" "}
          <a href="#" className="text-purple-400 hover:underline">
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-purple-400 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </motion.div>
  );
}
