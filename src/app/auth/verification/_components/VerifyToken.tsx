"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardTitle } from "@/components/ui/card";

export function VerifyToken() {
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  useEffect(() => {
    console.log(token);
  }, []);

  return (
    <>
      <Card className="w-11/12 lg:w-1/2 mx-auto">
        <CardTitle className="text-center text-2xl">Verifikasi Email</CardTitle>
        <CardTitle className="text-center text-lg font-normal animate-pulse">Loading...</CardTitle>
      </Card>
    </>
  );
}
