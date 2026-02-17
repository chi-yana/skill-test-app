import IconAngleLeft from "@/components/Icons/IconAngleLeft";
import IconAngleRight from "@/components/Icons/IconAngleRight";

type Props = {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  start: number;
  end: number;
  search?: string;
};

export default function Pagination({
  currentPage,
  totalPages,
  totalCount,
  start,
  end,
  search,
}: Props) {
  return (
    <div className="flex items-center justify-between mt-6">
      <div className="text-sm text-gray-600">
        {totalCount === 0 ? "" : `${totalCount}件中 ${start}〜${end}件を表示`}
      </div>

      <div className="flex items-center gap-2">
        <a
          href={
            currentPage > 1 ? `?page=${currentPage - 1}${search ? `&search=${search}` : ""}` : "#"
          }
          className={`flex items-center justify-center w-12 h-8 rounded bg-gray-100 ${
            currentPage === 1
              ? "opacity-30 pointer-events-none cursor-not-allowed"
              : "hover:bg-gray-200"
          }`}
        >
          <IconAngleLeft className="w-4 h-4 text-[#24473b]" />
        </a>

        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1;
          const isActive = page === currentPage;

          return (
            <a
              key={page}
              href={`?page=${page}${search ? `&search=${search}` : ""}`}
              className={`flex items-center justify-center w-8 h-8 rounded text-sm ${
                isActive ? "bg-[#24473b] text-white" : "bg-white "
              }`}
            >
              {page}
            </a>
          );
        })}

        <a
          href={
            currentPage < totalPages
              ? `?page=${currentPage + 1}${search ? `&search=${search}` : ""}`
              : "#"
          }
          className={`flex items-center justify-center w-12 h-8 rounded bg-gray-100 ${
            currentPage === totalPages
              ? "opacity-30 pointer-events-none cursor-not-allowed"
              : "hover:bg-gray-200"
          }`}
        >
          <IconAngleRight className="w-4 h-4 text-[#24473b]" />
        </a>
      </div>
    </div>
  );
}
