"use client";

import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animations";

interface WallpaperType {
  id: number;
  title: string;
  features: string[];
  recommendations: string[];
  icon: string;
}

const wallpaperTypes: WallpaperType[] = [
  {
    id: 1,
    title: "ビニールクロス",
    features: [
      "耐久性があり、汚れに強い",
      "カラーバリエーション・デザインが豊富",
      "価格が比較的リーズナブル",
    ],
    recommendations: ["住宅（リビング・寝室・子ども部屋）", "オフィス", "店舗"],
    icon: "🏠",
  },
  {
    id: 2,
    title: "和紙クロス",
    features: [
      "自然素材で調湿効果があり、カビや湿気対策に◎",
      "和モダンな雰囲気を演出できる",
      "柔らかい風合いで落ち着いた空間に",
    ],
    recommendations: ["和室", "旅館", "料亭", "茶室"],
    icon: "🎋",
  },
  {
    id: 3,
    title: " 珪藻土クロス",
    features: [
      "調湿・消臭効果があり、快適な室内環境を維持",
      "化学物質を含まないため、アレルギー対策にも◎",
      "マットな質感でナチュラルな仕上がり",
    ],
    recommendations: ["子供部屋", "寝室", "ペットがいるご家庭"],
    icon: "🐶",
  },
  {
    id: 4,
    title: " 布クロス",
    features: [
      "高級感があり、ホテルライクな空間を演出",
      "防音・吸音効果があり、静かな空間作りに最適",
      "価格はやや高めだが、質感の良さが魅力",
    ],
    recommendations: ["ホテル", "応接室", "高級マンション"],
    icon: "🏨",
  },
  {
    id: 5,
    title: " 輸入クロス",
    features: [
      "ユニークな柄や個性的なデザインが豊富",
      "おしゃれでインパクトのある空間に",
      "国内製品に比べやや施工コストが高め",
    ],
    recommendations: ["デザイン重視", "カフェ", "カフェ"],
    icon: "🌏",
  },
  {
    id: 6,
    title: " パインクロス（抗菌・防臭・調湿機能付き壁紙）",
    features: [
      "抗菌・防臭効果があり、清潔な室内を維持",
      "調湿効果で湿気をコントロールし、カビ・ダニの発生を抑える",
      "施工後も空気をきれいにする機能が長期間持続",
    ],
    recommendations: ["子供部屋", "寝室", "飲食店"],
    icon: "👦",
  },
  
  // ... 他の壁紙タイプ
];

export function WallpaperSection() {
  return (
    <motion.div variants={itemVariants} className="mb-32 pt-32">
      <h3 className="text-2xl md:text-3xl font-medium mb-12 text-center">
        クロスの種類と特徴
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {wallpaperTypes.map((type) => (
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
                <p className="text-gray-600">
                  {type.recommendations.join("、")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
