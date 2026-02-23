"use client";

import { useEffect } from "react";

type LoaderProps = {
  text?: string;
};

export default function Loader({ text = "Loading..." }: LoaderProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 bg-white/10 backdrop-blur-sm animate-fadeIn">
      <div className="h-14 w-14 border-5 border-black border-t-transparent rounded-full animate-spin"></div>
      <p className="text-black text-lg font-medium tracking-wide">{text}</p>
    </div>
  );
}
