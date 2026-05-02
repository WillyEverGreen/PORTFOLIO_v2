import React from "react";

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
  brandIcon?: React.ReactNode;
  className?: string;
}

export const Footer = ({
  brandName = "YourBrand",
  identityLine,
  brandDescription = "Your description here",
  socialLinks = [],
  navLinks = [],
  className,
}: FooterProps) => {
  return (
    <section
      className={cn(
        "relative w-full mt-0 overflow-hidden bg-[#1D57AF]",
        className,
      )}
    >
      <footer className="relative">
        <div className="max-w-7xl flex flex-col items-center justify-between mx-auto min-h-[28rem] sm:min-h-[36rem] md:min-h-[46rem] relative p-6 py-16 md:py-20 z-10 text-center">
          {/* Top Section: Branding & Bio */}
          <div className="flex flex-col items-center w-full max-w-3xl mx-auto space-y-6">
            <div className="flex flex-col items-center gap-2">
              <span className="text-white text-4xl sm:text-5xl md:text-6xl font-bold font-rubik tracking-tighter">
                {brandName}
              </span>
              {identityLine && (
                <span className="text-white/80 font-rubik text-sm sm:text-base md:text-lg font-bold tracking-[0.3em] uppercase mt-2">
                  {identityLine}
                </span>
              )}
            </div>

            <p className="text-white/90 font-medium text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
              {brandDescription}
            </p>
          </div>

          {/* Middle Section: Socials & Navigation */}
          <div className="flex flex-col items-center gap-20 w-full">
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-8">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-white/70 hover:text-white transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="hover:-translate-y-1 duration-300 [&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-8 sm:[&>svg]:h-8">
                      {link.icon}
                    </div>
                    <span className="sr-only">{link.label}</span>
                  </a>
                ))}
              </div>
            )}

            {navLinks.length > 0 && (
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs sm:text-sm md:text-base font-bold tracking-[0.2em] text-white/60 hover:text-white transition-colors max-w-full px-4 font-rubik">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    className="hover:text-white duration-300 relative group uppercase"
                    href={link.href}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Section - copyright removed to avoid overlap on mobile */}
        </div>

        {/* Large background text watermark in all sizes (footer bg) */}
        <div
          className="absolute left-0 right-0 bottom-0 md:bottom-6 text-white/20 font-rubik font-black tracking-tighter select-none pointer-events-none text-center z-0 whitespace-nowrap leading-none"
          style={{ fontSize: "clamp(2.5rem, 12vw, 32rem)" }}
        >
          {brandName.toUpperCase()}
        </div>

        {/* Bottom line - hidden on mobile */}
        <div className="hidden md:block absolute bottom-32 sm:bottom-34 backdrop-blur-sm h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent w-full left-1/2 -translate-x-1/2 z-0"></div>

        {/* Bottom Logo Bubble removed to prevent overlap on smaller screens */}
      </footer>
    </section>
  );
};
