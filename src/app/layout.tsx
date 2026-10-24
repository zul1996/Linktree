import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Muhammad Zulkarnaen Indranto — Links & Profile",
  description:
    "Backend Developer & IT Infrastructure Specialist. Explore portfolio, CV, social profiles, and contact channels.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Muhammad Zulkarnaen Indranto — Links & Profile",
    description:
      "Backend Developer & IT Infrastructure Specialist. Explore portfolio, CV, social profiles, and contact channels.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <body className={`${epilogue.className} bg-zinc-950 text-zinc-100 antialiased selection:bg-indigo-500/30 selection:text-indigo-200 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
