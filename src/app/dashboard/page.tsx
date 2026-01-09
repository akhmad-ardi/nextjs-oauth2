import { LogoutComponent } from "./_components/Logout";

export default async function Home() {
  return (
    <main className="text-center py-10 px-16">
      <h1 className="text-3xl font-bold mb-8">Logged In</h1>
    
      <LogoutComponent />
    </main>
  );
}