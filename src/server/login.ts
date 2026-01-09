"use server";

import { redirect } from "next/navigation";
import axios, { AxiosError } from "axios";
import { FieldValues } from "react-hook-form";
import { setAccessToken } from "./access-token";
import { setRefreshToken } from "./refresh-token";

export async function Login(data: FieldValues) { 
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_URL_BACKEND}/authentications/login`, { ...data });

    await setAccessToken(res.data.data.access_token);
    await setRefreshToken(res.data.data.refresh_token);
  } catch(error) {
    if (error instanceof AxiosError) {
      return error.code;
    }
  } 

  return redirect("/dashboard");
}
