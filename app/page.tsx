import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center space-y-6">
      <h1 className="text-3xl font-bold">Welcome to Next.js Boilerplate 🚀</h1>
      <div className="max-w-md text-center rounded-lg shadow-lg">
        <p className="text-md">This is a simple starter template for Next.js applications.</p>
        <p className="text-md">It's consist Next.js, Tailwind CSS and Shadcn UI.</p>
        <p className="text-md">Feel free to customize it as per your requirements.</p>
      </div>
      <div>
        <Button className="p-5 bg-blue-400 hover:bg-black/50">Let's create something amazing!</Button>
      </div>
    </main>
  );
}
