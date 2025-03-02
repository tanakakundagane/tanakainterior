"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const menuItems = [
  { href: "/", label: "ホーム" },
  { href: "/concept", label: "Concept" },
  { href: "/works", label: "施工事例" },
  { href: "/service", label: "サービス内容" },
  { href: "/about", label: "会社概要" },
  { href: "/contact", label: "お問い合わせ" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="md:hidden p-2">
          <Menu className="w-6 h-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-white/95 backdrop-blur-md">
        {/* SheetTitleを追加（見出しとして利用） */}
        <SheetTitle className="sr-only">ナビゲーションメニュー</SheetTitle>
        <nav className="flex flex-col gap-6 mt-16">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: menuItems.length * 0.1 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              無料見積もり
            </Link>
          </motion.div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
