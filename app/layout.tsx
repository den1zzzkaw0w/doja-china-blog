import type { Metadata } from "next";
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

export const metadata = {
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
