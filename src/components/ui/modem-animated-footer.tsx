import React from "react";
import { Mail } from "lucide-react";

export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterProps {
  brandName?: string;
  identityLine?: string;
  brandDescription?: string;
  socialLinks?: SocialLink[];
  navLinks?: FooterLink[];
  creatorName?: string;
  creatorUrl?: string;
  brandIcon?: React.ReactNode;
  className?: string;
}

export const Footer = ({
  brandName = "YourBrand",
  identityLine,
  brandDescription = "Your description here",
  socialLinks = [],
  navLinks = [],
  creatorName,
  creatorUrl,
  brandIcon,
  className,
}: FooterProps) => {
  return (
    <section className={cn("relative w-full mt-0 overflow-hidden bg-[#1D57AF]", className)}>
      <footer className="relative mt-20">
        <div className="max-w-7xl flex flex-col justify-between mx-auto min-h-[30rem] sm:min-h-[35rem] md:min-h-[40rem] relative p-4 py-10 z-10">
          <div className="flex flex-col mb-12 sm:mb-20 md:mb-0 w-full">
            <div className="w-full flex flex-col items-center">
              <div className="space-y-4 flex flex-col items-center flex-1">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-white text-4xl md:text-5xl font-bold font-rubik tracking-tighter">
                    {brandName}
                  </span>
                  {identityLine && (
                    <span className="text-white/80 font-rubik text-lg md:text-xl font-bold tracking-widest uppercase mt-2">
                      {identityLine}
                    </span>
                  )}
                </div>
                <p className="text-white/90 font-medium text-lg md:text-xl text-center w-full max-w-2xl px-4 sm:px-0 leading-relaxed mt-2">
                  {brandDescription}
                </p>
              </div>

              {socialLinks.length > 0 && (
                <div className="flex mb-10 mt-10 gap-8">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="hover:-translate-y-1 duration-300 [&>svg]:w-8 [&>svg]:h-8">
                        {link.icon}
                      </div>
                      <span className="sr-only">{link.label}</span>
                    </a>
                  ))}
                </div>
              )}

              {navLinks.length > 0 && (
                <div className="flex flex-wrap justify-center gap-10 text-base md:text-lg font-bold tracking-[0.15em] text-white/90 max-w-full px-4 mt-4 font-rubik">
                  {navLinks.map((link, index) => (
                    <a
                      key={index}
                      className="hover:text-white duration-300 relative group uppercase"
                      href={link.href}
                    >
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-20 md:mt-24 flex flex-col gap-2 md:gap-1 items-center justify-center md:flex-row md:items-center md:justify-between px-4 md:px-0">
            <p className="text-sm font-light text-white/70 text-center md:text-left">
              ©{new Date().getFullYear()} {brandName}. All rights reserved.
            </p>
            {creatorName && creatorUrl && (
              <nav className="flex gap-4">
                <a
                  href={creatorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-white/70 hover:text-white transition-colors duration-300"
                >
                  Crafted by {creatorName}
                </a>
              </nav>
            )}
          </div>
        </div>

        {/* Large background text */}
        <div 
          className="text-white/10 font-rubik absolute left-1/2 -translate-x-1/2 bottom-40 md:bottom-32 font-black tracking-tighter pointer-events-none select-none text-center px-4 z-0 whitespace-nowrap"
          style={{
            fontSize: 'clamp(4rem, 15vw, 15rem)',
            maxWidth: '100vw',
            lineHeight: 0.8
          }}
        >
          {brandName.toUpperCase()}
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-32 sm:bottom-34 backdrop-blur-sm h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent w-full left-1/2 -translate-x-1/2 z-0"></div>
        
        {/* Bottom Logo Bubble */}
        <div className="absolute hover:border-white/40 duration-400 drop-shadow-[0_0px_20px_rgba(0,0,0,0.3)] bottom-24 md:bottom-20 backdrop-blur-sm rounded-3xl bg-white/10 left-1/2 border border-white/20 flex items-center justify-center p-3 -translate-x-1/2 z-10 cursor-pointer hover:bg-white/20 transition-all">
          <div className="w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg group">
            {brandIcon || (
              <span className="font-rubik font-black text-2xl text-[#1D57AF] group-hover:scale-110 transition-transform">SB</span>
            )}
          </div>
        </div>

      </footer>
    </section>
  );
};
