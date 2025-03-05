"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function ConceptSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-[#FDF6F4] overflow-hidden"
      id="concept"
    >
      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0">
        {/* メインの大きな円 */}
        <div
          className="absolute -left-40 -top-40 w-[800px] h-[800px] rounded-full bg-[#FDDCD4]/60"
          style={{ filter: "blur(60px)" }}
        />

        {/* 装飾的な曲線 */}
        <svg
          className="absolute right-0 top-0 h-full w-1/2 text-[#FDDCD4]/30"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M100 0C60 20 40 60 40 100h60V0z" fill="currentColor" />
        </svg>

        {/* ドット装飾 */}
        <div className="absolute top-20 right-20 opacity-60">
          <div className="grid grid-cols-5 gap-2">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#FDDCD4]" />
            ))}
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-medium mb-6 text-gray-800">
              お客様に寄り添い<br className="md:hidden" />
              理想のインテリアを叶えます
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={itemVariants}
              className="relative mx-auto w-5/6 h-[300px] md:w-full md:h-[500px] rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/images/concept.jpg"
                alt="シンプル＆モダンな空間"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                迅速な対応で安心のサービスを提供
              </h3>
              <p className="text-gray-600 leading-relaxed">
              お客様にご満足いただけるよう、スピーディーな対応を心がけています。
              現地見積もりのご案内から施工日時の調整、ご連絡まで、できる限り早く対応 いたします。
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">プロフェッショナルな提案</h4>
                    <p className="text-gray-600">
                      豊富な経験と知識を活かし、最適な壁紙をご提案します。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">カスタマイズ可能</h4>
                    <p className="text-gray-600">
                      お客様のライフスタイルに合わせた空間デザインを実現します。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
