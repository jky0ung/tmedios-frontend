"use client";

import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

interface DisableContextMenuProps {
  children: React.ReactNode;
}

const Main = ({ children }: DisableContextMenuProps) => {
  useEffect(() => {
    window.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
    window.addEventListener("dragstart", (e) => {
      e.preventDefault();
    });
    window.addEventListener("drop", (e) => {
      e.preventDefault();
    });
  }, []);
  return (
    <main>
      {children}
      <Toaster />
    </main>
  );
};

export default Main;
