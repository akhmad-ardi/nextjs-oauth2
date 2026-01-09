"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function isGuest() {
  const COOKIES = await cookies();

  const refresh_token = COOKIES.get("refresh_token")?.value;
  
  if (refresh_token) {
    return redirect("/dashboard");
  }
}
