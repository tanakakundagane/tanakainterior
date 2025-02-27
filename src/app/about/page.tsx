import { Metadata } from "next";
import { Phone, Mail, Clock, MapPin, Car, Train } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "会社概要 | 〇〇クロス",
  description:
    "お客様の暮らしをより快適に、美しくするために、丁寧な施工と高品質なクロスをご提供しています。",
};

export default function AboutPage() {
  return (
    <main className="py-24">
      {/* ヘッダーセクション */}
      <section className="relative h-[300px] mb-24 overflow-hidden bg-[#FDF6F4]">
        <Image
          src="/images/about-header.jpg"
          alt="施工現場の様子"
          fill
          className="object-cover"
        />
        
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">会社概要</h1>
            <p className="text-lg">
              お客様の暮らしをより快適に、美しくするために、丁寧な施工と高品質なクロスをご提供しています。
              個人経営ならではのきめ細やかな対応で、お客様一人ひとりのご要望にお応えします。
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* 代表挨拶 */}
          <section className="mb-24">
            <div className="bg-beige-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-medium mb-8 text-center">
                代表挨拶
              </h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  はじめまして。
                  <br />
                  当店のホームページをご覧いただき、ありがとうございます。
                </p>
                <p>
                  私はこれまで〇〇年以上、クロスの施工に携わり、多くのお客様の理想の空間作りをお手伝いしてきました。
                  壁紙は、お部屋の印象を大きく左右する重要な要素です。デザイン性だけでなく、耐久性や機能性も考慮し、
                  お客様にとって最適なご提案ができるよう心掛けています。
                </p>
                <div className="bg-white rounded-xl p-6 my-8">
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      「クロスを張り替えたいけど、どんなデザインがいいかわからない」
                    </li>
                    <li>
                      「なるべくコストを抑えながら、おしゃれな部屋にしたい」
                    </li>
                    <li>
                      「古くなった壁を新しくしたいけど、どこに頼めばいいかわからない」
                    </li>
                  </ul>
                </div>
                <p>
                  このようなお悩みをお持ちの方は、ぜひ一度ご相談ください。
                  個人だからこそできる柔軟な対応と、責任を持った丁寧な施工で、お客様にご満足いただける仕上がりをお約束します。
                </p>
                <p>
                  お部屋の壁紙を変えることで、毎日の暮らしがもっと楽しく、心地よいものになるように。
                  そんな思いを込めて、一つひとつの施工に向き合っています。
                </p>
                <p>どうぞ、お気軽にお問い合わせください。</p>
                <p className="text-right mt-8">代表：〇〇 〇〇</p>
              </div>
            </div>
          </section>

          {/* 会社情報 */}
          <section className="mb-24">
            <h2 className="text-2xl md:text-3xl font-medium mb-12 text-center">
              会社情報
            </h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4 p-6 rounded-xl bg-white shadow-sm">
                <div className="font-medium">屋号（店舗名）</div>
                <div>〇〇クロス</div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 p-6 rounded-xl bg-white shadow-sm">
                <div className="font-medium">代表者名</div>
                <div>〇〇 〇〇</div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 p-6 rounded-xl bg-white shadow-sm">
                <div className="font-medium">所在地</div>
                <div>〇〇県〇〇市〇〇町〇〇-〇〇</div>
              </div>
              {/* ... 他の会社情報も同様に */}
            </div>
          </section>

          {/* 対応エリア */}
          <section className="mb-24">
            <h2 className="text-2xl md:text-3xl font-medium mb-12 text-center">
              対応エリア
            </h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <p className="mb-6">
                当店は、〇〇県全域でクロス張り替え・施工を承っております。
                また、〇〇市や〇〇町などの隣接地域も対応可能ですので、お気軽にご相談ください。
              </p>
              <h3 className="font-medium mb-4">主な対応地域:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  〇〇市
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  〇〇市
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  〇〇町
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  〇〇町
                </div>
              </div>
            </div>
          </section>

          {/* アクセス */}
          <section className="mb-24">
            <h2 className="text-2xl md:text-3xl font-medium mb-12 text-center">
              アクセス
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium mb-2">所在地</div>
                  <p>〇〇県〇〇市〇〇町〇〇-〇〇</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Car className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium mb-2">お車でお越しの方</div>
                  <p>〇〇ICから〇〇分（駐車場完備）</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Train className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium mb-2">
                    公共交通機関をご利用の方
                  </div>
                  <p>〇〇駅から徒歩〇分</p>
                </div>
              </div>
            </div>
          </section>

          {/* 当店のこだわり */}
          <section className="mb-24">
            <h2 className="text-2xl md:text-3xl font-medium mb-12 text-center">
              当店のこだわり
            </h2>
            <div className="grid gap-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-4">
                  個人経営ならではのきめ細やかな対応
                </h3>
                <p className="text-gray-600">
                  お客様のご要望をしっかりお伺いし、最適なご提案をいたします。
                </p>
              </div>
              {/* ... 他のこだわりポイントも同様に */}
            </div>
          </section>

          {/* お問い合わせ */}
          <section>
            <div className="bg-beige-50 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl font-bold mb-6">
                お問い合わせ・ご相談はお気軽に！
              </h2>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button asChild className="gap-2">
                  <Link href="/contact">
                    <Mail className="w-4 h-4" />
                    お問い合わせフォーム
                  </Link>
                </Button>
                <Button variant="outline" asChild className="gap-2">
                  <Link href="/line">LINE公式アカウント</Link>
                </Button>
                <Button variant="outline" asChild className="gap-2">
                  <Link href="tel:000-0000-0000">
                    <Phone className="w-4 h-4" />
                    お電話で相談する
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
