import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DojaExchange — Оплата Китая, Alipay, WeChat Pay, ВЭД",
  
  description:
    "DojaExchange — блог про оплату Китая, Alipay, WeChat Pay, ВЭД, переводы в юанях и реальные кейсы бизнеса.",

  keywords: [
    "DojaExchange",
    "оплата Китая",
    "Alipay",
    "WeChat Pay",
    "ВЭД Китай",
    "переводы в Китай",
    "оплата поставщиков Китай",
  ],

  verification: {
    google: "sbhhHcDLMuyd-fNxTR3P9SraH879SG-h-6g5UlGc8qs",
    yandex: "a864c63c7b13335c",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}