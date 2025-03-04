"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { WallpaperSection } from "./services/wallpaper-section";
import { FlooringSection } from "./services/flooring-section";
import { CurtainSection } from "./services/curtain-section";
import { DynocSection } from "./services/dynoc-section";

interface InstallationStep {
  step: number;
  title: string;
  description: string;
}

const installationSteps: InstallationStep[] = [
  {
    step: 1,
    title: "お問い合わせ・ご相談",
    description:
      "お電話・LINE・お問い合わせフォームより、お気軽にご相談ください。壁紙の選び方やお見積もりについて無料でご案内いたします。",
  },
  {
    step: 2,
    title: "現地調査・お見積もり（無料）",
    description:
      "実際に現場を確認し、お部屋の広さや状態に応じた適切な施工プランをご提案します。お見積もりをお出しし、ご納得いただければ施工日程を調整します。",
  },
  {
    step: 3,
    title: "施工（クロス張り替え作業）",
    description:
      "経験豊富な職人が、丁寧かつスピーディーにクロスを貼り替えます。家具の移動が必要な場合もご相談ください。",
  },
  {
    step: 4,
    title: "仕上がり確認・お引き渡し",
    description:
      "施工後、お客様と一緒に仕上がりを確認し、ご納得いただいたうえでお引き渡しします。施工後のメンテナンス方法についてもご案内いたします。",
  },
  // ... 他のステップも定義
];

interface PriceInfo {
  service: string;
  price: string;
}

const priceList: PriceInfo[] = [
  {
    service: "SP級",
    price: "1,000円～/㎡",
  },
  {
    service: "AA級",
    price: "1,250円～/㎡",
  },
  {
    service: "クッションフロア",
    price: "2,500円～/㎡",
  },
  {
    service: "フロアタイル",
    price: "3,800円～/㎡",
  },
  {
    service: "タイルカーペット張り替え",
    price: "3,000円～/㎡",
  },

  // ... 他の料金情報も定義
];

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
