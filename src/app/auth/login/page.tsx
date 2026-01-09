import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { FormLogin } from "./_components/FormLogin";

export default function page() {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center">
      <Card className="w-3/4 lg:w-1/3">
        <CardContent>
          <h3 className="text-2xl text-center font-bold mb-5">Login</h3>
          
          <FormLogin />

          <p className="text-center">
            <Link href="/auth/registration" className="underline">Registration</Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}