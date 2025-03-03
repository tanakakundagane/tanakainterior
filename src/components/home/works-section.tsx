"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef, } from "react";

interface WorkCase {
  id: number;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  category: string;
}

const workCases: WorkCase[] = [
  {
    id: 1,
    title: "モダンなリビングルーム",
    description:
      "落ち着いたグレーを基調とした、シンプルでモダンな空間に生まれ変わりました。",
    beforeImage: "/images/living-before.jpg",
    afterImage: "/images/living-after.jpg",
    category: "リビング",
  },
  {
    id: 2,
    title: "ナチュラルな寝室",
    description:
      "やわらかなベージュのアクセントクロスで、くつろぎの空間を演出。",
    beforeImage: "/images/bedroom-before.jpg",
    afterImage: "/images/bedroom-after.jpg",
    category: "寝室",
  },
  // 必要に応じて事例を追加
];

export function WorksSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  // const [hoveredId, setHoveredId] = useState<number | null>(null);

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
    <section ref={sectionRef} className="py-24 bg-background-deepgreen" id="works">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-200">
              施工事例
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              私たちが手がけた施工事例をご紹介します。
              お客様一人ひとりのご要望に寄り添い、理想の空間を実現してきました。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-20">
            {workCases.map((work) => (
              <motion.div
                key={work.id}
                variants={itemVariants}
                className="relative"
              >
                <div className="text-center mb-8">
                  {/* <span className="text-primary text-sm font-medium">
                    {work.category}
                  </span> */}
                  <h3 className="text-2xl md:text-3xl font-bold mt-2 text-gray-200">
                    {work.title}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="relative h-[400px] rounded-xl overflow-hidden">
                      <Image
                        src={work.beforeImage}
                        alt="施工前"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-white/90 text-gray-900 rounded-full text-sm font-medium shadow-md">
                        Before
                      </span>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="relative h-[400px] rounded-xl overflow-hidden">
                      <Image
                        src={work.afterImage}
                        alt="施工後"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium shadow-md">
                        After
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 max-w-2xl mx-auto text-center">
                  <p className="text-gray-200 mb-6">{work.description}</p>
                  {/* <Button variant="outline" asChild>
                    <Link href={`/works/${work.id}`}>詳しく見る</Link>
                  </Button> */}
                </div>

                {work.id !== workCases.length && (
                  <div className="mt-20 border-t border-gray-200" />
                )}
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-16">
            {/* <Button asChild>
              <Link href="/works">施工事例をもっと見る</Link>
            </Button> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
