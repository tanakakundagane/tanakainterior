"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { WallpaperSection } from "./services/wallpaper-section";
import { FlooringSection } from "./services/flooring-section";
import { CurtainSection } from "./services/curtain-section";
import { DynocSection } from "./services/dynoc-section";

export function ServiceSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section ref={sectionRef} className="py-24 bg-beige-300" id="service">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* ヘッダー */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              サービス内容
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              お客様のニーズに合わせた最適な施工と、確かな技術でお応えします。
            </p>
          </motion.div>

          {/* 各サービスセクション */}
          <WallpaperSection />
          <FlooringSection />
          <CurtainSection />
          <DynocSection />
        </motion.div>
      </div>
    </section>
  );
}
