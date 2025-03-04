"use client";

import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animations";

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
];

export function PriceGuideSection() {
  return (
    <section className="pb-24 bg-beige-100" id="price">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
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
        </div>
      </div>
    </section>
  );
}
