type Props = {
  search: string;
};

export default function SearchForm({ search }: Props) {
  return (
    <form method="GET" className="relative">
      <input
        type="text"
        name="search"
        defaultValue={search}
        placeholder="名前、ログインIDで検索"
        className="w-64 border border-[#d3dad8] rounded-md pl-4 pr-10 py-2 text-sm text-[#4f6c62] focus:outline-none"
      />
      <img
        src="/icon/icon-search.svg"
        alt="検索"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50"
      />
    </form>
  );
}
