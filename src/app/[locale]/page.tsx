import HomePage from "./pages/home";

type PageProps = {
  params: { locale: string };
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function LocaleRouter({ searchParams }: PageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const pageParam = resolvedSearchParams?.page;
  const page = Array.isArray(pageParam) ? pageParam[0] : pageParam ?? "home";

  switch (page) {
    case "home":
      return <HomePage />;

    default:
      return <HomePage />;
  }
}
