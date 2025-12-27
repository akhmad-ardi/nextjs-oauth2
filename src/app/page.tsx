// import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="text-center py-10 px-16">
      <h1 className="text-3xl font-bold mb-8">Logged In</h1>
    
      <Button variant="destructive" className="text-lg">Logout</Button>
    </main>
  );
}
