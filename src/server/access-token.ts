"use server";

import { cookies } from "next/headers";

export async function setAccessToken(access_token: string) {
  const COOKIES = await cookies();

  COOKIES.set("access_token", access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 15,
  });
}

export async function getAccessToken() {
  const COOKIES = await cookies();

  return COOKIES.get("access_token")?.value;
}

export async function clearAccessToken() {
  const COOKIES = await cookies();

  COOKIES.delete("access_token"); 
}