import Link from "next/link";
import { articles } from "../../data/articles";

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-[#070b14] px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
<Link
  href="/"
  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/70 backdrop-blur transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white"
>
  <span>←</span>
  На главную
</Link>
  <div className="mt-12">
  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
    База знаний
  </p>

<Link
  href="/articles"
  className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold text-white/80 backdrop-blur-xl transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]"
>
  Все статьи

  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</Link>
</div>

        <p className="mt-4 max-w-2xl text-white/60">
          Гайды, кейсы и разборы по оплатам в Китай, Alipay, WeChat Pay, ВЭД и юаням.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:-translate-y-2 hover:bg-white/10"
            >
              <img src={article.image} alt={article.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-7">
                <p className="text-sm font-bold uppercase text-blue-400">{article.category}</p>
                <h2 className="mt-3 text-2xl font-black">{article.title}</h2>
                <p className="mt-4 text-white/60">{article.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}