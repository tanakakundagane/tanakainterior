"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {

  const menuItems = [
    { href: "/", label: "ホーム" },
    { href: "/concept", label: "Concept" },
    { href: "/works", label: "施工事例" },
    { href: "/service", label: "サービス内容" },
    { href: "/about", label: "会社概要" },
    { href: "/contact", label: "お問い合わせ" },
  ];

  return (
    <header className="fixed w-full bg-beige-50/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            TanakaInterior
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="default" asChild>
              <Link href="/contact">無料見積もり</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
