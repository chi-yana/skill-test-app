import { Teacher } from "@/types/teacher";

export async function getTeachers(
  page: number,
  limit: number,
  search?: string,
): Promise<{ data: Teacher[]; totalCount: number }> {
  try {
    const url = new URL(
      "https://frontend-assessment-630736206587.asia-northeast1.run.app/api/facilitators",
    );

    url.searchParams.set("page", page.toString());
    url.searchParams.set("limit", limit.toString());

    if (search) {
      url.searchParams.set("search", search);
    }

    const res = await fetch(url.toString(), {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error();
    }

    return await res.json();
  } catch {
    throw new Error("通信エラーが発生しました。");
  }
}
