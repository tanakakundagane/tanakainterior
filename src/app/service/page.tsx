import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "サービス内容 | TanakaInterior",
  description:
    "壁紙、床材、カーテンなど、インテリアに関する施工サービスをご提供しています。",
};

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  color: string;
  features: string[];
  points: {
    title: string;
    description: string;
  }[];
}

const services: ServiceCategory[] = [
  {
    id: "wallpaper",
    title: "壁紙",
    description:
      "空間の印象を大きく変える壁紙。お好みのデザインで理想の空間を。",
    image: "/images/service/wallpaper.jpg",
    color: "bg-rose-100",
    features: [
      "豊富な柄・色から選択可能",
      "防かび・抗菌などの機能性壁紙",
      "丁寧な下地処理",
      "プロの技術による美しい仕上がり",
    ],
    points: [
      {
        title: "デザイン性",
        description: "和モダンからシンプルモダンまで、幅広いデザインをご用意",
      },
      {
        title: "機能性",
        description: "防かび、消臭、調湿など、様々な機能付き壁紙をご提案",
      },
    ],
  },
  {
    id: "flooring",
    title: "床材",
    description:
      "快適な暮らしの土台となる床材。耐久性と美しさを兼ね備えた製品を。",
    image: "/images/service/flooring.jpg",
    color: "bg-amber-100",
    features: ["クッションフロア", "フローリング", "カーペット", "長尺シート"],
    points: [
      {
        title: "耐久性",
        description: "毎日の生活に耐える高い耐久性と、美しさの両立を実現",
      },
      {
        title: "メンテナンス性",
        description: "お手入れのしやすさを考慮した床材をご提案",
      },
    ],
  },
  {
    id: "curtain",
    title: "カーテン",
    description: "光と影のバランスを整え、空間を彩るカーテン。",
    image: "/images/service/curtain.jpg",
    color: "bg-blue-100",
    features: [
      "オーダーカーテン",
      "ブラインド",
      "ロールスクリーン",
      "アコーディオンカーテン",
    ],
    points: [
      {
        title: "遮光性",
        description: "生活スタイルに合わせた遮光性のカーテンをご提案",
      },
      {
        title: "デザイン",
        description: "インテリアの雰囲気に合わせた色柄をセレクト",
      },
    ],
  },
];

export default function ServicePage() {
  return (
    <main className="pt-16 pb-32">
      {/* ヘッダー */}
      <section className="relative h-[300px] mb-24 overflow-hidden bg-gradient-to-r from-orange-100 to-amber-100">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              サービス内容
            </h1>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto">
              壁紙、床材、カーテンなど、インテリアに関する施工サービスを
              ご提供しています
            </p>
          </div>
        </div>
      </section>

      {/* サービス一覧 */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <section key={service.id} id={service.id} className="relative">
              {/* 装飾的な背景 */}
              <div
                className={`absolute inset-0 ${service.color} rounded-3xl -z-10`}
              />

              <div className="grid md:grid-cols-1 gap-8 p- md:p-12">

                {/* コンテンツセクション */}
                <div className="space-y-6 p-8 md:p-0">
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">施工内容</h3>
                    <ul className="grid grid-cols-1 gap-4 ">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 bg-white/80 p-3 rounded-lg text-sm md:text-base"
                        >
                          <span className="w-2 h-2 rounded-full bg-gray-900" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">特徴</h3>
                    <div className="grid gap-4">
                      {service.points.map((point, i) => (
                        <div key={i} className="bg-white/80 p-4 rounded-lg">
                          <h4 className="font-bold mb-2">{point.title}</h4>
                          <p className="text-gray-600 text-sm">
                            {point.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* お問い合わせセクション */}
        <div className="mt-32 text-center">
          <h2 className="text-2xl font-bold mb-6">お気軽にご相談ください</h2>
          <Button
            asChild
            className="gap-2 bg-orange-700 hover:bg-white hover:text-orange-700"
          >
            <Link href="/contact">
              <FileText className="w-4 h-4" />
              お問い合わせフォーム
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
