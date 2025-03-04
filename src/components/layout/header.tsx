"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";
import { useRouter, usePathname } from "next/navigation";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "ホーム" },
    { href: "#concept", label: "Concept" },
    { href: "#works", label: "施工事例" },
    { href: "#service", label: "サービス内容" },
    { href: "/about", label: "会社概要" },
    { href: "/contact", label: "お問い合わせ" },
  ];

  const handleScroll = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    if (!href.startsWith("#")) return;

    const targetId = href.replace("#", "");

    // 現在のパスがルートでない場合は、ルートページの該当セクションに直接遷移
    if (pathname !== "/") {
      router.push(`/${href}`);
      return;
    }

    // ルートページの場合は直接スクロール
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 68;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = window.scrollY + elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed w-full bg-beige-50/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            TanakaInterior
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) =>
              item.href.startsWith("#") ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
            <Button variant="default" asChild>
              <Link href="/contact">無料見積もり</Link>
            </Button>
          </div>

          <MobileNav menuItems={menuItems} handleScroll={handleScroll} />
        </nav>
      </div>
    </header>
  );
}
