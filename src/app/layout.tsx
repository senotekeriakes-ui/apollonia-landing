import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const neueBit = localFont({
  src: "../../public/fonts/NeueBit-Bold.otf",
  variable: "--font-neuebit",
  display: "swap",
  weight: "700",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apollonia | The Future of Clinical Vision",
  description:
    "A purpose-built camera system for dental clinicians. Record, review, and transform how you practice, without changing how you work.",
  openGraph: {
    title: "Apollonia | The Future of Clinical Vision",
    description:
      "A purpose-built camera system for dental clinicians. Record, review, and transform how you practice, without changing how you work.",
    type: "website",
    // TODO: Add final OG image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${neueBit.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
