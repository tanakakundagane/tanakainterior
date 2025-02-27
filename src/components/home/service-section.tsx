"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, FileText, MessageCircle } from "lucide-react";
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
  // ... 他のクロスタイプも同様に定義
];

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
    service: "ビニールクロス張り替え（一般住宅）",
    price: "1,200円～/㎡",
  },
  {
    service: "和紙クロス張り替え",
    price: "2,500円～/㎡",
  },
  {
    service: "珪藻土クロス張り替え",
    price: "3,000円～/㎡",
  },
  {
    service: "布クロス張り替え",
    price: "3,500円～/㎡",
  },
  {
    service: "輸入クロス張り替え",
    price: "4,000円～/㎡",
  },
  {
    service: "パインクロス張り替え",
    price: "3,000円～/㎡",
  },
  {
    service: "天井クロス張り替え",
    price: "1,500円～/㎡",
  },
  {
    service: "アクセントクロス施工（1面のみ）",
    price: "15,000円～/㎡",
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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* ヘッダー */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-medium mb-6 text-gray-800">
              Service
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              お客様のニーズに合わせた最適な壁紙と、確かな技術でお応えします。
            </p>
          </motion.div>

          {/* クロスの種類と特徴 */}
          <motion.div variants={itemVariants} className="mb-32">
            <h3 className="text-2xl md:text-3xl font-medium mb-12 text-center">
              クロスの種類と特徴
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wallpaperTypes.map((type) => (
                <div
                  key={type.id}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h4 className="text-xl font-bold mb-4">{type.title}</h4>
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
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-4 px-6 text-left">施工内容</th>
                    <th className="py-4 px-6 text-right">料金（税別）</th>
                  </tr>
                </thead>
                <tbody>
                  {priceList.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50"
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
              上記は参考価格です。お部屋の状況や施工面積によって変動しますので、
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
              <Button variant="outline" asChild className="gap-2">
                <Link href="/line">
                  <MessageCircle className="w-4 h-4" />
                  LINEで相談する
                </Link>
              </Button>
              <Button variant="outline" asChild className="gap-2">
                <Link href="tel:000-0000-0000">
                  <Phone className="w-4 h-4" />
                  お電話で相談する
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
