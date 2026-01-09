"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function isAuth() {
  const COOKIES = await cookies();

  const refresh_token = COOKIES.get("refresh_token")?.value;

  if (!refresh_token) {
    return redirect("/auth/login");
  }

  return { refresh_token };
}
