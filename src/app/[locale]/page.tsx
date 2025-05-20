import HomePage from "./pages/home";
// Import other pages when you're ready
// import AboutPage from "@/pages/about";
// import ServicesPage from "@/pages/services";
// import ContactPage from "@/pages/contact";

type Props = {
  searchParams?: { page?: string };
};

export default function LocaleRouter({ searchParams }: Props) {
  const page = searchParams?.page ?? "home";

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
