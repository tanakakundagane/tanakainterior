"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

interface MenuItem {
  href: string;
  label: string;
}

interface MobileNavProps {
  menuItems: MenuItem[];
  handleScroll: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export function MobileNav({ menuItems, handleScroll }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      handleScroll(e, href);
    }
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="md:hidden p-2">
          <Menu className="w-6 h-6" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] bg-white/95 backdrop-blur-md"
      >
        <SheetTitle className="sr-only">ナビゲーションメニュー</SheetTitle>
        <nav className="flex flex-col gap-6 mt-16">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.href.startsWith("#") ? (
                <a
                  href={item.href}
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={(e) => handleClick(e, item.href)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: menuItems.length * 0.1 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-orange-700 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-orange-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              お問い合わせ
            </Link>
          </motion.div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
