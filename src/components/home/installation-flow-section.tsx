"use client";

import { motion } from "framer-motion";
import { itemVariants } from "@/lib/animations";

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
];

export function InstallationFlowSection() {
  return (
    <section className="pt-24 bg-beige-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
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
        </div>
      </div>
    </section>
  );
}
