import Navbar from "@/compontents/Navbar";
import Link from "next/link";
import { articles } from "../data/articles";
import ArticleCard from "../compontents/ArticlesCard"
export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b14] text-white">
<Navbar />
      <section className="relative min-h-[760px] overflow-hidden">
        <img src="/images/hero.jpg" alt="China skyline" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[760px] max-w-7xl flex-col justify-center px-6 pt-24">
          <p className="mb-5 w-fit rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-200 backdrop-blur">
            Doja China Blog
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Оплата Китая, Alipay, WeChat Pay, ВЭД и реальные кейсы бизнеса
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
            Разбираем рабочие способы оплаты поставщиков, пополнения Alipay,
            переводы в юанях, белые инвойсы, комиссии и логистику с Китаем.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="https://t.me/dojaexchange" className="rounded-2xl bg-blue-600 px-7 py-4 text-center text-lg font-bold transition hover:-translate-y-1 hover:bg-blue-500">
              Получить курс в Telegram
            </a>

            <Link href="/articles" className="rounded-2xl border border-white/20 bg-white/10 px-7 py-4 text-center text-lg font-bold backdrop-blur transition hover:-translate-y-1 hover:bg-white/20">
              Читать статьи
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
          Популярные статьи
        </p>
        <h2 className="mt-3 text-4xl font-black">С чего начать</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
         {articles.map((article, index) => (
  <ArticleCard
    key={article.slug}
    title={article.title}
    slug={article.slug}
    category={article.category}
    image={article.image}
    description={article.description}
    index={index}
  />
))}
        </div>
      </section>

      <section id="cases" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-600 to-cyan-500 p-8 shadow-2xl shadow-blue-950/40 md:p-12">
          <p className="text-sm font-bold uppercase tracking-widest text-white/80">
            DojaExchange
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight">
            Нужна оплата поставщика, пополнение Alipay или обмен RUB/CNY/USDT?
          </h2>
          <p className="mt-5 max-w-2xl text-white/80">
            Напишите менеджеру, подберем маршрут, рассчитаем курс и сроки.
          </p>
          <a href="https://t.me/dojaexchange" className="mt-8 inline-block rounded-2xl bg-white px-7 py-4 text-lg font-black text-black transition hover:-translate-y-1 hover:bg-blue-100">
            Написать в Telegram
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-white/40">
        Doja China Blog · материалы про Китай, платежи и бизнес
      </footer>
      <footer className="border-t border-white/10 px-6 py-12 text-white/50">
  <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
    <div>
      <p className="text-xl font-black text-white">Doja China</p>
      <p className="mt-2 text-sm">
        Блог про Китай, платежи, Alipay, WeChat Pay и ВЭД.
      </p>
    </div>

    <div className="flex flex-wrap gap-4 text-sm">
      <a href="/articles" className="hover:text-white">Статьи</a>
      <a href="https://t.me/dojaexchange" className="hover:text-white">Telegram</a>
      <a href="https://t.me/dojaexchange" className="hover:text-white">Связаться</a>
    </div>
  </div>
</footer>
    </main>
  );
}