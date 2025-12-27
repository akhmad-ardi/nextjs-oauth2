import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { FormRegistration } from "./_components/FormRegistration";

export default function page() {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center">
      <Card className="w-3/4 lg:w-1/3">
        <CardContent>
          <h3 className="text-2xl text-center font-bold mb-5">Registration</h3>
          
          <FormRegistration />

          <p className="text-center">
            <Link href="/login" className="underline">Login</Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}