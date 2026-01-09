import React from "react";
import { isGuest } from "@/server/guest";

export default async function layout({ children }: { children: React.ReactNode }) {
  await isGuest();
  
  return <>{children}</>;
}