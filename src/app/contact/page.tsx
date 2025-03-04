import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-32 bg-beige-100" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
            お問い合わせ
          </h1>

          <div className="bg-white rounded-xl p-6 md:p-10 shadow-sm">
            <form className="space-y-8">
              <div className="space-y-4">
                <label className="block">
                  <span className="text-gray-700">
                    お名前 <span className="text-red-500">*</span>
                  </span>
                  <Input
                    type="text"
                    placeholder="田中 太郎"
                    className="mt-1 block w-full"
                    required
                  />
                </label>

                <label className="block">
                  <span className="text-gray-700">
                    電話番号 <span className="text-red-500">*</span>
                  </span>
                  <Input
                    type="tel"
                    placeholder="090-1234-5678"
                    className="mt-1 block w-full"
                    required
                  />
                </label>

                <label className="block">
                  <span className="text-gray-700">
                    メールアドレス <span className="text-red-500">*</span>
                  </span>
                  <Input
                    type="email"
                    placeholder="example@example.com"
                    className="mt-1 block w-full"
                    required
                  />
                </label>

                <label className="block">
                  <span className="text-gray-700">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </span>
                  <Textarea
                    placeholder="お問い合わせ内容をご記入ください"
                    className="mt-1 block w-full min-h-[150px]"
                    required
                  />
                </label>
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full">
                  送信する
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
