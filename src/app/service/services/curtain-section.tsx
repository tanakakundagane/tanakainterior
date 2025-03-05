"use client";

import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animations";

const curtainTypes = [
  {
    id: 1,
    title: "オーダーカーテン",
    features: [
      "豊富な生地とデザインから選択可能",
      "空間の雰囲気に合わせた提案",
      "遮光・断熱などの機能性も充実",
    ],
    recommendations: ["リビング", "寝室", "書斎"],
    icon: "🪟",
  },
  {
    id: 2,
    title: "ブラインド",
    features: [
      "光の調整が細かく可能",
      "スッキリとした見た目でモダンな空間に",
      "メンテナンスが容易",
    ],
    recommendations: ["オフィス", "モダンな住宅", "店舗"],
    icon: "🎠",
  },
];

export function CurtainSection() {
  return (
    <motion.div variants={itemVariants} className="mb-32">
      <h3 className="text-2xl md:text-3xl font-medium mb-12 text-center">
        カーテン・ブラインドの種類と特徴
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {curtainTypes.map((type) => (
          <div
            key={type.id}
            className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            {/* <div className="text-4xl mb-4">{type.icon}</div> */}
            <h4 className="text-xl font-bold mb-4">◎{type.title}</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium mb-2">特徴:</h5>
                <ul className="space-y-2">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">おすすめの用途:</h5>
                <p className="text-gray-600">{type.recommendations.join("、")}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
} 