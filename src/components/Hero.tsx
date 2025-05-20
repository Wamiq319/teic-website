type HeroProps = {
  title: string;
  subtitle: string;
  cta1: string;
  cta2: string;
};

export default function Hero({ title, subtitle, cta1, cta2 }: HeroProps) {
  return (
    <section className="text-center py-12">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-4 text-lg">{subtitle}</p>
      <div className="mt-6 flex justify-center gap-4">
        <a
          href="#email-form"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {cta1}
        </a>
        <a
          href="#book-call"
          className="border border-blue-600 px-4 py-2 rounded"
        >
          {cta2}
        </a>
      </div>
    </section>
  );
}
