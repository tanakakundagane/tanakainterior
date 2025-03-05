"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

interface ServiceItem {
  title: string;
}

const services: ServiceItem[] = [
  { title: "壁紙の張り替え" },
  { title: "クッションフロアの張り替え" },
  { title: "カーペットタイルの施工" },
  { title: "絨毯の施工" },
  { title: "塩ビ系長尺床材の施工" },
  { title: "カーテンレールの取り付け・カーテンの取り換え" },
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

          {/* サービス一覧 */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="bg-[#FDF6F4] border-2 border-[#FDDCD4] rounded-2xl p-8 md:p-12 shadow-sm">
              <h3 className="text-2xl font-bold text-center mb-12">
                内装・インテリア工事
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-xl hover:bg-gray-50 transition-colors "
                  >
                    <div className="w-2 h-2 rounded-full bg-background-deepgreen flex-shrink-0 " />
                    <h4 className="text-lg">{service.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 詳細セクションへのリンク */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link href="/service">
              <h3 className="text-2xl font-bold text-center mb-8 bg-black text-white hover:bg-gray-800 transition-colors rounded-lg p-4 w-fit mx-auto">
                詳細を見る
              </h3>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
