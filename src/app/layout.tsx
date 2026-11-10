import type { Metadata } from "next";
import { Nunito, Pacifico, Playfair_Display } from "next/font/google";
import "./globals.css";

/**
 * Typography rule (CODEX/MASTER-PROMPT.md §6.2): every face must ship the
 * `vietnamese` subset. Pacifico is the only handwritten face — Caveat is
 * deliberately absent because it lacks Vietnamese diacritics.
 */
const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

const pacifico = Pacifico({
  subsets: ["latin", "vietnamese"],
  weight: "400",
  variable: "--font-pacifico",
  display: "swap",
});

export const metadata: Metadata = {
  title: "A Little World For You",
  description:
    "Một thế giới nhỏ được chuẩn bị bằng tất cả sự chân thành — một lá thư, vài kỷ niệm và một cái ôm.",
  applicationName: "A Little World For You",
  // The photos show identifiable people plus a student ID card and a
  // university logo, so the gift stays unindexed. See MASTER-PROMPT §19.
  robots: { index: false, follow: false, nocache: true },
  openGraph: {
    title: "A Little World For You",
    description: "Anh có một điều nhỏ muốn gửi em…",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`${playfair.variable} ${nunito.variable} ${pacifico.variable}`}>
      <body>{children}</body>
    </html>
  );
}
