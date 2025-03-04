"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/hero-bg.jpg",
  "/images/hero-bg2.jpg",
  "/images/hero-bg3.jpg",
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 6000); // 5秒ごとに画像を切り替え

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="relative h-full"
          >
            <Image
              src={images[currentImageIndex]}
              alt="美しい壁紙の施工例"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">美しい壁紙で</h1>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 md:ml-10">
            理想の空間を
          </h1>
          <p className="text-xl mb-8 md:pl-20">
            プロフェッショナルな技術と豊富な経験で、
            お客様の理想の空間づくりをサポートいたします。
          </p>
          {/* <Button size="lg" asChild>
            <a href="/contact">無料見積もりを依頼する</a>
          </Button> */}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentImageIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
