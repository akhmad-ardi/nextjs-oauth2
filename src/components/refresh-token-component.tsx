"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { refreshAccessToken } from "@/server/refresh-token";

export function RefreshTokenComponent() {
  const router = useRouter();
  
  useEffect(() => {
    (async () => {
      const { auth } = await refreshAccessToken();
    
      if (!auth) {
        router.push("/auth/login");
      }
    })();
  }, []);

  return (<></>);
}
