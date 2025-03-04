"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText } from "lucide-react";
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

          {/* 施工の流れ */}
          <motion.div variants={itemVariants} className="mb-32">
            <h3 className="text-2xl md:text-3xl font-medium mb-12 text-center">
              施工の流れ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {installationSteps.map((step) => (
                <div
                  key={step.step}
                  className="relative flex gap-6 items-start p-6 rounded-xl bg-gray-50"
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 料金目安 */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-medium mb-12 text-center">
              料金目安
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-background-deepgreen">
                    <th className="py-4 px-6 text-left">施工内容</th>
                    <th className="py-4 px-6 text-right">料金（税別）</th>
                  </tr>
                </thead>
                <tbody>
                  {priceList.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-background-deepgreen hover:bg-gray-50"
                    >
                      <td className="py-4 px-6">{item.service}</td>
                      <td className="py-4 px-6 text-right">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              ※
              上記は参考価格です。お部屋の状況や施工面積,材料によって変動しますので、
              詳細なお見積もりはお問い合わせください。
            </p>
          </motion.div>

          {/* お問い合わせ */}
          <motion.div
            variants={itemVariants}
            className="mt-20 text-center bg-gray-50 rounded-2xl p-12"
          >
            <h3 className="text-2xl font-bold mb-6">無料お見積もり受付中！</h3>
            <p className="text-gray-600 mb-8">
              「どの壁紙が合うかわからない」「施工費用の目安が知りたい」など、
              お気軽にご相談ください！
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button asChild className="gap-2">
                <Link href="/contact">
                  <FileText className="w-4 h-4" />
                  お問い合わせフォーム
                </Link>
              </Button>
              {/* <Button variant="outline" asChild className="gap-2">
                <Link href="/line">
                  <MessageCircle className="w-4 h-4" />
                  LINEで相談する
                </Link>
              </Button> */}
              {/* <Button variant="outline" asChild className="gap-2">
                <Link href="tel:000-0000-0000">
                  <Phone className="w-4 h-4" />
                  お電話で相談する
                </Link>
              </Button> */}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
