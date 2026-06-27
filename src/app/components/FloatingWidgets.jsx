"use client";
import dynamic from "next/dynamic";

const ChatBot = dynamic(() => import("@/app/components/ChatBot"), {
  ssr: false,
});

const WhatsAppButton = dynamic(() => import("@/app/components/WhatsAppButton"), {
  ssr: false,
});

export default function FloatingWidgets() {
  return (
    <>
      <ChatBot />
      <WhatsAppButton />
    </>
  );
}
