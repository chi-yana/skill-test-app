import Pagination from "@/components/Pagination";
import SearchForm from "@/components/SearchForm";
import { getTeachers } from "@/lib/teachers";

export default async function TeacherPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; search?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Number(params.page ?? "1");
  const search = params.search ?? "";
  const limit = 10;
  const { data: teacherList, totalCount } = await getTeachers(currentPage, limit, search);

  const totalPages = Math.ceil(totalCount / limit);
  const start = (currentPage - 1) * limit + 1;
  const end = Math.min(currentPage * limit, totalCount);

  return (
    <div className="p-8 min-h-screen text-[#212423]">
      <div className="max-w-200 mx-auto bg-white overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <img src="/icon/icon-teacher.svg" alt="先生アイコン" className="w-8 h-8" />
            <h1 className="font-bold text-2xl">先生</h1>
          </div>
          <SearchForm search={search} />
        </div>
        {teacherList.length > 0 && (
          <div className="flex bg-[#4f6c62] font-semibold text-sm border border-[#d3dad8]">
            <div className="basis-1/3 p-3 border-r border-[#a7b5b1] text-white bg-[#24473b]">
              名前
            </div>
            <div className="basis-1/3 p-3 text-white border-r border-[#a7b5b1]">ログインID</div>
          </div>
        )}

        {teacherList.length === 0 ? (
          <div className="p-8 text-left text-[#4f6c62]">該当するデータはありません</div>
        ) : (
          teacherList.map((teacher, index) => (
            <div
              key={teacher.id}
              className={`flex border-t border border-[#d3dad8] ${
                index % 2 === 0 ? "bg-white" : "bg-[#f8f9f9]"
              }`}
            >
              <div className="basis-1/3 p-3">{teacher.name}</div>
              <div className="basis-2/3 p-3">{teacher.loginId}</div>
            </div>
          ))
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalCount={totalCount}
          start={start}
          end={end}
          search={search}
        />
      </div>
    </div>
  );
}
