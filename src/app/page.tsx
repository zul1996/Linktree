"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaArrowUpRightFromSquare,
  FaCheck,
  FaCircleCheck,
  FaEnvelope,
  FaFilePdf,
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaShareNodes,
  FaTelegram,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

interface LinkItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  icon: React.ReactNode;
  iconBg: string;
  badge?: string;
  isDownload?: boolean;
  highlight?: boolean;
}

const TECH_STACK = ["Spring Boot 3", "Kotlin", "Kafka & Redis", "Kubernetes RKE"];

const LINKS: LinkItem[] = [
  {
    id: "website",
    title: "Website Portofolio",
    subtitle: "portofolio-theta-gilt-51.vercel.app",
    url: "https://portofolio-theta-gilt-51.vercel.app/",
    icon: <FaGlobe className="text-lg text-indigo-400" />,
    iconBg: "bg-indigo-500/10 border-indigo-500/20",
    badge: "Website",
    highlight: true,
  },
  {
    id: "cv",
    title: "Curriculum Vitae (CV)",
    subtitle: "Unduh cv.pdf (Technical Resume)",
    url: "/cv.pdf",
    icon: <FaFilePdf className="text-lg text-rose-400" />,
    iconBg: "bg-rose-500/10 border-rose-500/20",
    badge: "PDF",
    isDownload: true,
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    subtitle: "+62 819-3718-6854",
    url: "https://wa.me/6281937186854?text=Halo%20Mas%20Zul,%20salam%20kenal!",
    icon: <FaWhatsapp className="text-lg text-emerald-400" />,
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    badge: "Chat",
  },
  {
    id: "email",
    title: "Email",
    subtitle: "zul.indranto@gmail.com",
    url: "mailto:zul.indranto@gmail.com",
    icon: <FaEnvelope className="text-lg text-sky-400" />,
    iconBg: "bg-sky-500/10 border-sky-500/20",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    subtitle: "linkedin.com/in/muhammad-zulkarnaen-indranto",
    url: "https://www.linkedin.com/in/muhammad-zulkarnaen-indranto/",
    icon: <FaLinkedinIn className="text-lg text-blue-400" />,
    iconBg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    id: "github",
    title: "GitHub",
    subtitle: "github.com/zul1996",
    url: "https://github.com/zul1996",
    icon: <FaGithub className="text-lg text-zinc-300" />,
    iconBg: "bg-zinc-500/10 border-zinc-500/20",
  },
  {
    id: "telegram",
    title: "Telegram",
    subtitle: "t.me/zul1996",
    url: "https://t.me/zul1996",
    icon: <FaTelegram className="text-lg text-cyan-400" />,
    iconBg: "bg-cyan-500/10 border-cyan-500/20",
  },
];

const SOCIALS = [
  { label: "Website", href: "https://portofolio-theta-gilt-51.vercel.app/", icon: <FaGlobe className="w-4 h-4" /> },
  { label: "GitHub", href: "https://github.com/zul1996", icon: <FaGithub className="w-4 h-4" /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-zulkarnaen-indranto/", icon: <FaLinkedinIn className="w-4 h-4" /> },
  { label: "WhatsApp", href: "https://wa.me/6281937186854?text=Halo%20Mas%20Zul,%20salam%20kenal!", icon: <FaWhatsapp className="w-4 h-4" /> },
  { label: "Instagram", href: "https://www.instagram.com/zul_indr/", icon: <FaInstagram className="w-4 h-4" /> },
  { label: "X / Twitter", href: "https://twitter.com/Flaatena_", icon: <FaXTwitter className="w-4 h-4" /> },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCwLr4n2CPBi-oJsy9Gnv05w", icon: <FaYoutube className="w-4 h-4" /> },
];

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "https://github.com/zul1996";
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Muhammad Zulkarnaen Indranto — Links",
          url,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // noop
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-between px-4 py-12 overflow-x-hidden selection:bg-indigo-500/20 selection:text-indigo-200">
      {/* Subtle ambient gradient mesh in the background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-indigo-600/15 via-sky-500/15 to-transparent blur-3xl rounded-full" />
        <div className="absolute top-1/2 -right-40 w-[400px] h-[300px] bg-gradient-to-bl from-purple-600/10 via-emerald-600/10 to-transparent blur-3xl rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[300px] bg-gradient-to-tr from-blue-600/10 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="w-full max-w-lg mx-auto flex flex-col items-center">
        {/* Top bar with quick Share button */}
        <div className="w-full flex justify-end mb-4">
          <button
            onClick={handleShare}
            aria-label="Share profile"
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-zinc-400 bg-zinc-900/80 border border-zinc-800/80 hover:text-zinc-200 hover:border-zinc-700 transition-all duration-200 active:scale-95"
          >
            {copied ? (
              <>
                <FaCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Tersalin!</span>
              </>
            ) : (
              <>
                <FaShareNodes className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                <span>Bagikan</span>
              </>
            )}
          </button>
        </div>

        {/* Profile Card Header */}
        <section className="flex flex-col items-center text-center">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-500 via-sky-400 to-emerald-400 opacity-60 blur-sm group-hover:opacity-90 transition duration-500" />
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-zinc-900/80 shadow-2xl bg-zinc-900">
              <Image
                src="/profile.jpeg"
                alt="Muhammad Zulkarnaen Indranto"
                fill
                priority
                sizes="112px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Live status indicator */}
            <span
              title="Aktif & Terbuka untuk Kolaborasi"
              className="absolute bottom-1 right-1 flex h-4 w-4"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-zinc-950" />
            </span>
          </div>

          <div className="mt-5 flex items-center justify-center gap-1.5">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">
              Muhammad Zulkarnaen Indranto
            </h1>
            <FaCircleCheck
              className="text-sky-400 text-lg flex-shrink-0"
              title="Terverifikasi"
            />
          </div>

          <p className="mt-1.5 text-xs sm:text-sm font-semibold text-indigo-400 tracking-wide uppercase">
            Backend Developer & IT Infrastructure Specialist
          </p>

          <p className="mt-2.5 max-w-sm text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Engineering enterprise-grade core financing systems & national-scale BUMN architectures using Spring Boot 3, Kotlin, Kafka event pipelines, and cloud container infrastructure.
          </p>

          {/* Tech tags */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 max-w-md">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-zinc-900 border border-zinc-800 text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-400">
              <FaLocationDot className="text-[11px] text-zinc-500" />
              Sidoarjo, Indonesia (UTC+07)
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-400">
              4+ Yrs Enterprise Exp
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for Architecture & Projects
            </span>
          </div>
        </section>

        {/* Links Stack */}
        <section className="w-full mt-7 flex flex-col gap-3">
          {LINKS.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              download={item.isDownload ? "CV - Muhammad Zulkarnaen Indranto" : undefined}
              target={item.url.startsWith("http") || item.isDownload ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`group relative flex items-center justify-between p-3.5 sm:p-4 rounded-xl border transition-all duration-200 active:scale-[0.99] ${
                item.highlight
                  ? "bg-gradient-to-r from-indigo-950/40 via-zinc-900/80 to-zinc-900/80 border-indigo-500/40 hover:border-indigo-400/70 shadow-lg shadow-indigo-950/30"
                  : "bg-zinc-900/60 hover:bg-zinc-900/90 border-zinc-800/80 hover:border-zinc-700/90 shadow-sm"
              }`}
            >
              <div className="flex items-center gap-3.5 min-w-0 pr-2">
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 border transition-transform duration-200 group-hover:scale-105 ${item.iconBg}`}
                >
                  {item.icon}
                </div>
                <div className="flex flex-col min-w-0 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors truncate">
                      {item.title}
                    </span>
                    {item.badge && (
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                          item.highlight
                            ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
                            : "bg-zinc-800 text-zinc-400 border-zinc-700"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-zinc-400 truncate mt-0.5 group-hover:text-zinc-300 transition-colors">
                    {item.subtitle}
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0 text-zinc-500 group-hover:text-zinc-200 transition-colors p-1">
                <FaArrowUpRightFromSquare className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </section>

        {/* Social Icons Strip */}
        <section className="w-full mt-8 flex flex-col items-center">
          <p className="text-xs uppercase tracking-wider text-zinc-500 font-medium mb-3">
            Connect & Follow
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {SOCIALS.map((soc) => (
              <Link
                key={soc.label}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={soc.label}
                title={soc.label}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-600 hover:bg-zinc-800 hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                {soc.icon}
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-xs text-zinc-500">
        <p>
          © {new Date().getFullYear()} Muhammad Zulkarnaen Indranto • Linktree
        </p>
      </footer>
    </main>
  );
}
