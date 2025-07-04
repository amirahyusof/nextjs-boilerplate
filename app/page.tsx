import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-10">Welcome to Next.js Boilerplate 🚀</h1>
      <div className="max-w-md text-center my-10">
        <p className="text-md">This is a simple starter template for Next.js applications.</p>
        <p className="text-md">It's consist Next.js, Tailwind CSS and Shadcn UI.</p>
        <p className="text-md">Feel free to customize it as per your requirements.</p>
      </div>
      <div className="">
        <Button className="mt-20 bg-blue-400 hover:bg-black/50">Let's create something amazing!</Button>
      </div>
    </main>
  );
}
