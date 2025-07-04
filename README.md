# 🚀 Next.js Boilerplate

This is a modern **Next.js 14 (React 19)** boilerplate with:

✅ TypeScript  
✅ Tailwind CSS  
✅ shadcn/ui (accessible, beautiful React components)  
✅ App Router & latest Next.js features

---

## 🌟 Features

- Next.js 14 (React 19 stable)
- TypeScript support
- Tailwind CSS fully configured
- shadcn/ui component library integrated
- App Router (`/app` directory)
- Pre-configured folder structure

---

## 💻 Quick Start

### 1️⃣ Use this template

Click **"Use this template"** at the top of this repo to create a fresh new project **without copying git history**.

### 2️⃣ Clone your new repo

```bash
git clone https://github.com/yourusername/your-new-repo-name.git
cd your-new-repo-name
```

### 3️⃣ Install dependencies
```bash
npm install
```

### 4️⃣ Run development server
````bash
npm run dev
```
Open http://localhost:3000 and start building!

## ♻️ Manual copy method (if not using template)
```bash
git clone https://github.com/yourusername/nextjs-boilerplate.git my-new-app
cd my-new-app
rm -rf .git
git init
git add .
git commit -m "Start new project from boilerplate"
npm install
npm run dev
```

## ✨ Example usage
``tsx
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to My New Project 🚀</h1>
      <Button>Click Me</Button>
    </main>
  );
}
```

## 🛠️ Customize
Update project name in package.json
Change global styles in app/globals.css
Adjust Tailwind theme in tailwind.config.js
Add new shadcn/ui components using:

```bash
npx shadcn-ui@latest add <component>
```

## 💬 Need help?
Feel free to open an issue or discussion. Happy coding! 💖
