"use client";
import { useLocale } from "next-intl";

const LANGS = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "te", label: "తెలుగు" },
] as const;

export default function LanguageSwitcher() {
  const current = useLocale();

  function setLocale(code: string) {
    document.cookie = `locale=${code}; path=/; max-age=31536000`;
    window.location.reload();
  }

  return (
    <>
      <div className="hidden sm:flex gap-1">
        {LANGS.map((l) => (
          <button
            key={l.code}
            onClick={() => setLocale(l.code)}
            className={`px-3 h-10 rounded-lg border text-sm font-semibold ${
              current === l.code
                ? "bg-primary text-white border-primary"
                : "bg-card text-text border-border"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>

      <button
        onClick={() => {
          const idx = LANGS.findIndex((l) => l.code === current);
          const next = LANGS[(idx + 1) % LANGS.length];
          setLocale(next.code);
        }}
        className="sm:hidden px-3 h-10 rounded-lg border border-border bg-card text-sm font-semibold"
      >
        {LANGS.find((l) => l.code === current)?.label}
      </button>
    </>
  );
}
