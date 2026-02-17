"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-lg p-6 w-80 shadow-lg text-center">
        <p className="mb-6 text-gray-800 font-medium">通信エラーが発生しました。</p>

        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-[#24473b] text-white rounded hover:bg-[#1d3a30] transition"
        >
          リトライ
        </button>
      </div>
    </div>
  );
}
