import React from "react";
import { RefreshTokenComponent } from "@/components/refresh-token-component";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RefreshTokenComponent />
      {children}
    </>
  );
}