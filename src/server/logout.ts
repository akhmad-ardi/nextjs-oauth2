"use server";

import { redirect } from "next/navigation";
import { clearAccessToken } from "@/server/access-token";
import { clearRefreshToken } from "@/server/refresh-token";

export async function Logout() {
    await clearAccessToken();
    await clearRefreshToken();

    return redirect("/auth/login");
}
