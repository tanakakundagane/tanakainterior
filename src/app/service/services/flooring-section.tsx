"use client";

import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animations";

const flooringTypes = [
  {
    id: 1,
    title: "クッションフロア",
    features: [
      "衝撃を吸収し、歩行音を軽減",
      "お手入れが簡単で耐久性に優れる",
      "豊富なデザインで様々な空間に対応",
    ],
    recommendations: ["キッチン", "洗面所", "子ども部屋"],
    icon: "🏠",
  },
  {
    id: 2,
    title: "フロアタイル",
    features: [
      "高級感のある本物の質感",
      "部分交換が可能で経済的",
      "防水性に優れ、水回りにも最適",
    ],
    recommendations: ["オフィス", "店舗", "エントランス"],
    icon: "🏢",
  },
];

export function FlooringSection() {
  return (
    <motion.div variants={itemVariants} className="mb-32">
      <h3 className="text-2xl md:text-3xl font-medium mb-12 text-center">
        床材の種類と特徴
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {flooringTypes.map((type) => (
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