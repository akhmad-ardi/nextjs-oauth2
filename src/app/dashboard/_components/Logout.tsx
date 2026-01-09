"use client";

import { Logout } from "@/server/logout";
import { Button } from "@/components/ui/button";

export function LogoutComponent() {
  async function onClick() {
    await Logout();
  }

  return (
    <Button variant="destructive" className="text-lg" onClick={onClick}>Logout</Button>
  );
}
