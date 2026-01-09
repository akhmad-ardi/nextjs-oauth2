"use server";

import { cookies } from "next/headers";
import axios, { AxiosError } from "axios";
import { clearAccessToken, setAccessToken } from "./access-token";
import { isAuth as isAuthServer } from "./auth";

export async function refreshAccessToken() {
  const isAuth = await isAuthServer();

  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_URL_BACKEND}/authentications/refresh-access-token`, {}, {
      headers: {
        Authorization: `Bearer ${isAuth?.refresh_token}`,
      }
    });
  
    await setAccessToken(res.data.data.access_token);

    return { auth: true };
  } catch (error) {
    if (error instanceof AxiosError) { 
      await clearRefreshToken();
      await clearAccessToken();
    }

    return { auth: false }; 
  }
}

export async function setRefreshToken(refresh_token: string) {
  const COOKIES = await cookies();

  COOKIES.set("refresh_token", refresh_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function getRefreshToken() {
  const COOKIES = await cookies();

  return COOKIES.get("refresh_token")?.value;
}

export async function clearRefreshToken() {
  const COOKIES = await cookies();

  COOKIES.delete("refresh_token");
}
