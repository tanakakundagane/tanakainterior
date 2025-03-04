"use client";

import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-24 bg-beige-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="text-center bg-amber-600 rounded-2xl p-12 shadow-sm"
          >
            <h3 className="text-gray-50 text-2xl font-bold mb-6">無料お見積もり<br className="md:hidden"/>受付中！</h3>
            <p className="text-gray-50 mb-8">
              「どの壁紙が合うかわからない」「施工費用の目安が知りたい」など、
              お気軽にご相談ください！
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button asChild className="gap-2 bg-background-deepgreen hover:bg-gray-200 hover:text-background-deepgreen">
                <Link href="/contact">
                  <FileText className="w-4 h-4" />
                  お問い合わせフォーム
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 