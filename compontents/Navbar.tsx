"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-2xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group">
          <p className="text-xl font-black tracking-tight text-white transition group-hover:text-blue-300">
            Doja China
          </p>

          <p className="text-xs text-white/40">
            China Payments & Business
          </p>
        </Link>

        <nav className="hidden gap-8 text-sm text-white/70 md:flex">
          <Link href="/" className="transition hover:text-white">
            Главная
          </Link>

          <Link href="/articles" className="transition hover:text-white">
            Статьи
          </Link>

          <a
            href="https://t.me/dojaexchange"
            className="transition hover:text-white"
          >
            Telegram
          </a>
        </nav>

        <a
          href="https://t.me/dojaexchange"
          className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-500"
        >
          Написать
        </a>
      </div>
    </motion.header>
  );
}
