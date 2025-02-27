import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-500 text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              TanaakaInterior
            </h3>
            <p className="text-white">
              美しい壁紙で理想の空間を創造する、 あなたの信頼できるパートナー
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">メニュー</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/works" className="text-black hover:text-white">
                  施工事例
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-black hover:text-white">
                  サービス内容
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-black hover:text-white">
                  お客様の声
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">会社情報</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/company" className="text-black hover:text-white">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-black hover:text-white">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">お問い合わせ</h4>
            <p className="text-white">
              TEL: 03-XXXX-XXXX
              <br />
              営業時間: 9:00-18:00
              <br />
              定休日: 日曜・祝日
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-white">
          <p>&copy; {currentYear} TanakaInterior All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
