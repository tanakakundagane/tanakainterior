"use client";

import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animations";

const dynocTypes = [
  {
    id: 1,
    title: "ダイノックシート施工",
    features: [
      "本物の素材に近い高級感ある仕上がり",
      "短工期でリノベーション可能",
      "コストを抑えた空間の刷新",
    ],
    recommendations: ["店舗内装", "オフィス", "住宅リフォーム"],
    icon: "🎨",
  },
];

export function DynocSection() {
  return (
    <motion.div variants={itemVariants} className="mb-32 ">
      <h3 className="text-2xl md:text-3xl font-medium mb-12 text-center">
        ダイノックシートの特徴
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {dynocTypes.map((type) => (
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