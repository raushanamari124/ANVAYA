"use client";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TopBar() {
  const t = useTranslations("app");
  const tFooter = useTranslations("home"); // Footer links ke liye
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-20 bg-white border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-[1200px] mx-auto h-full px-4 flex items-center justify-between gap-3">
          
          {/* Logo aur Name */}
          <Link href="/" className="flex items-center gap-3 min-w-0 hover:opacity-80 transition-opacity">
            <div className="relative w-14 h-14 shrink-0">
              <Image 
                src="/logo.png" 
                alt="THE BLUE POINT Logo" 
                fill 
                className="object-contain" 
                priority
              />
            </div>
            <span className="font-extrabold text-[#1E5AA8] truncate text-2xl tracking-wide hidden sm:block">
              {t("name")}
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />

            {/* Triple Line (Hamburger) Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-2 ml-1 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Open Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7 text-gray-800">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar / Drawer Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Dark Overlay */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Menu Panel */}
          <div className="relative w-80 max-w-[85vw] h-full bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="p-6 flex justify-between items-center border-b border-gray-100">
              <span className="font-extrabold text-[#1E5AA8] text-xl">{t("name")}</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-1">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-gray-50 text-lg font-bold text-gray-800 transition-colors">Home</Link>
              
              <div className="pt-4 pb-2">
                <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Main Portals</p>
              </div>
              <Link href="/register-person" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-gray-50 text-base font-medium text-gray-700 transition-colors">👴 Parents / Person</Link>
              <Link href="/register-family" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-gray-50 text-base font-medium text-gray-700 transition-colors">👨‍👩‍👧 Family Member</Link>
              <Link href="/register-doctor" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-gray-50 text-base font-medium text-gray-700 transition-colors">🩺 Doctor Portal</Link>
              <Link href="/register-helper" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-gray-50 text-base font-medium text-gray-700 transition-colors">🤝 NGO / Helper</Link>

              <div className="pt-4 pb-2">
                <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Information</p>
              </div>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-gray-50 text-base font-medium text-gray-700 transition-colors">{tFooter("footerAbout")}</Link>
              <Link href="/privacy" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-gray-50 text-base font-medium text-gray-700 transition-colors">{tFooter("footerPrivacy")}</Link>
              <Link href="/terms" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-gray-50 text-base font-medium text-gray-700 transition-colors">{tFooter("footerTerms")}</Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-gray-50 text-base font-medium text-gray-700 transition-colors">{tFooter("footerContact")}</Link>
            </div>
            
            <div className="p-6 border-t border-gray-100 text-center text-xs text-gray-400">
              © 2026 THE BLUE POINT
            </div>
          </div>
        </div>
      )}
    </>
  );
}
