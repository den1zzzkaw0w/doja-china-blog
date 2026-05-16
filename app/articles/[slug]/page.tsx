import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "../../../data/articles";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#070b14] text-white">
      <section className="relative min-h-[460px] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] to-transparent" />

        <div className="relative mx-auto flex min-h-[460px] max-w-4xl flex-col justify-end px-6 pb-16 pt-24">
<Link
  href="/articles"
  className="group mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white"
>
  <span className="transition-transform duration-300 group-hover:-translate-x-1">
    ←
  </span>

  Все статьи
</Link>

          <p className="w-fit rounded-full bg-blue-600 px-4 py-2 text-sm font-bold uppercase">
            {article.category}
          </p>

          <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            {article.title}
          </h1>

          <p className="mt-5 text-xl text-white/70">
            {article.description}
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-14">
        {article.content.map((paragraph, index) => (
          <p
            key={index}
            className="mb-6 text-xl leading-relaxed text-white/75"
          >
            {paragraph}
          </p>
        ))}

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl font-black">
            Нужна помощь с оплатой в Китай?
          </h2>

          <p className="mt-4 text-white/60">
            DojaExchange помогает с Alipay, WeChat Pay, юанями, USDT и оплатой поставщиков.
          </p>

          <a
            href="https://t.me/dojaexchange"
            className="mt-6 inline-block rounded-2xl bg-blue-600 px-7 py-4 font-bold transition hover:bg-blue-500"
          >
            Написать в Telegram
          </a>
        </div>
      </article>
    </main>
  );
}
