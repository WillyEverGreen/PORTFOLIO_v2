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
      <footer className="relative">
        <div className="max-w-7xl flex flex-col items-center justify-between mx-auto min-h-[30rem] sm:min-h-[35rem] md:min-h-[40rem] relative p-6 py-16 z-10 text-center">
          
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
          <div className="flex flex-col items-center gap-12 w-full">
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

          {/* Bottom Section: Copyright & Credits */}
          <div className="mt-auto pt-12 flex flex-col gap-4 items-center justify-center md:flex-row md:items-center md:justify-between w-full px-4 md:px-0">
            <p className="text-[10px] sm:text-xs font-light text-white/50 text-center md:text-left uppercase tracking-widest">
              ©{new Date().getFullYear()} {brandName}. All rights reserved.
            </p>
            {creatorName && creatorUrl && (
              <nav>
                <a
                  href={creatorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] sm:text-xs font-light text-white/50 hover:text-white transition-colors duration-300 uppercase tracking-widest"
                >
                  Crafted by {creatorName}
                </a>
              </nav>
            )}
          </div>
        </div>

        {/* Large background text - Moved further down and lowered opacity to avoid clashing */}
        <div 
          className="text-white/[0.05] font-rubik absolute left-1/2 -translate-x-1/2 bottom-10 md:bottom-20 font-black tracking-tighter pointer-events-none select-none text-center z-0 w-full overflow-hidden"
          style={{
            fontSize: 'clamp(3rem, 15vw, 15rem)',
            lineHeight: 0.8
          }}
        >
          {brandName.toUpperCase()}
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-32 sm:bottom-34 backdrop-blur-sm h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent w-full left-1/2 -translate-x-1/2 z-0"></div>
        
        {/* Bottom Logo Bubble */}
        <div className="absolute hover:border-white/40 duration-400 drop-shadow-[0_0px_20px_rgba(0,0,0,0.3)] bottom-12 md:bottom-16 backdrop-blur-sm rounded-3xl bg-white/10 left-1/2 border border-white/20 flex items-center justify-center p-3 -translate-x-1/2 z-20 cursor-pointer hover:bg-white/20 transition-all">
          <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group">
            {brandIcon || (
              <span className="font-rubik font-black text-lg sm:text-xl text-[#1D57AF] group-hover:scale-110 transition-transform">SB</span>
            )}
          </div>
        </div>
      </footer>
    </section>
  );
}