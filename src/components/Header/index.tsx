import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#24473b] text-white shadow-md">
      <div className="max-w-300 mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Image src="/icon/logo-white.svg" alt="ロゴ" width={276} height={28} />
          <button className="font-semibold text-[16px] tracking-wide border border-amber-50 px-3 py-1 rounded">
            アカウント管理
          </button>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Image src="/icon/icon-account.svg" alt="ロゴ" width={32} height={32} />
          <span className="hidden sm:block text-[16px]">因幡深雪</span>
        </div>
      </div>
    </header>
  );
}
