"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b">
      <nav className="mx-auto max-w-5xl flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">Fantasy Liga Portugal</Link>
        <div className="flex gap-4">
          <Link href="/sobre" className="hover:underline">Sobre</Link>
          <Link href="/contactos" className="hover:underline">Contactos</Link>
        </div>
      </nav>
    </header>
  );
}
