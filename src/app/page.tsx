import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">ダッシュボード</h1>

      <Link href="/teacher" className="inline-block px-4 py-2 bg-[#24473b] text-white rounded">
        先生一覧へ
      </Link>
    </div>
  );
}
