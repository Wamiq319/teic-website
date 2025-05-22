import HomePage from "./pages/home";
// import AboutPage from "@/pages/about";
// import ServicesPage from "@/pages/services";
// import ContactPage from "@/pages/contact";

type Props = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function LocaleRouter({ searchParams }: Props) {
  const pageParam = searchParams?.page;
  const page = Array.isArray(pageParam) ? pageParam[0] : pageParam ?? "home";

  switch (page) {
    case "home":
      return <HomePage />;
    // case "about":
    //   return <AboutPage />;
    // case "services":
    //   return <ServicesPage />;
    // case "contact":
    //   return <ContactPage />;
    default:
      return <HomePage />;
  }
}
