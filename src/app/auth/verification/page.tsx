import { VerifyToken } from "./_components/VerifyToken";

export default async function page() {
  return (
    <main className="container mx-auto h-screen grid items-center">
      <VerifyToken />
    </main>
  );
}