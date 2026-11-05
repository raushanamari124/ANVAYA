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
            className={`px-3 h-10 rounded-lg border text-sm font-semibold transition-colors ${
              current === l.code
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200"
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
        className="sm:hidden px-3 h-10 rounded-lg border border-gray-200 bg-gray-100 text-gray-800 text-sm font-semibold hover:bg-gray-200"
      >
        {LANGS.find((l) => l.code === current)?.label}
      </button>
    </>
  );
}
