"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ArticleCardProps = {
  title: string;
  slug: string;
  category: string;
  image: string;
  description: string;
  index?: number;
};

export default function ArticleCard({
  title,
  slug,
  category,
  image,
  description,
  index = 0,
}: ArticleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      <Link
        href={`/articles/${slug}`}
        className="group block h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/20 transition hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/10"
      >
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70" />
        </div>

        <div className="p-7">
          <p className="text-sm font-bold uppercase text-blue-400">
            {category}
          </p>
          <h3 className="mt-3 text-2xl font-black">{title}</h3>
          <p className="mt-4 text-white/60">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
}
