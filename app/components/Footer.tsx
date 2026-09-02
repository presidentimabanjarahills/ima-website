import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-16 overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy-dark text-white">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-brand-gold via-brand-teal to-brand-gold" />

      {/* Decorative glow orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-brand-teal/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-brand-gold/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
            {/* Logo & About */}
            <div className="lg:col-span-2">
              <div className="flex flex-col items-center md:items-start">
                <Image
                  src="/imalogo.png"
                  alt="IMA India Logo"
                  width={320}
                  height={96}
                  className="w-48 h-14 sm:w-56 sm:h-16 md:w-64 md:h-18 lg:w-72 lg:h-20 xl:w-80 xl:h-24 object-contain mb-5 filter brightness-0 invert"
                />
                <p className="text-brand-surface/80 text-sm sm:text-base leading-relaxed text-center md:text-left max-w-md">
                  IMA Banjara Hills advances healthcare access, protects patients, and supports
                  medical professionals through community outreach, advocacy, and humanitarian
                  response across Telangana and beyond.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-1">
                Quick Links
              </h4>
              <div className="w-8 h-0.5 bg-brand-gold mb-4 sm:mb-6" />
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { href: "/news", label: "News" },
                  { href: "/membership", label: "Membership" },
                  { href: "/initiatives", label: "Initiatives" },
                  { href: "/awards", label: "Awards" },
                  { href: "/partners", label: "Partners" },
                  { href: "/legal/privacy", label: "Privacy Policy" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-brand-surface hover:text-white transition-colors text-sm sm:text-base"
                    >
                      <span className="text-brand-gold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                        →
                      </span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-1">
                Contact Info
              </h4>
              <div className="w-8 h-0.5 bg-brand-gold mb-4 sm:mb-6" />
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
                    <svg className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-brand-surface/70 text-xs sm:text-sm">Email</p>
                    <p className="text-white text-sm sm:text-base break-all">presidentimabanjarahills@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
                    <svg className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-brand-surface/70 text-xs sm:text-sm">Phone</p>
                    <p className="text-white text-sm sm:text-base">+91 99892-20003</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
                    <svg className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-brand-surface/70 text-xs sm:text-sm mb-1">Address</p>
                    <a
                      href="https://maps.app.goo.gl/ZCu58bikwGTUqWij7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm sm:text-base leading-relaxed hover:text-brand-gold transition-colors duration-200"
                    >
                      <div className="font-semibold text-brand-surface mb-1 hover:text-brand-gold">Dr Prabhu Life Multispeciality Clinics and Hospital</div>
                      <div>House No 3-2-10/6, 3rd Floor</div>
                      <div>Chaitanyanagar Colony, Manikonda</div>
                      <div>Hyderabad 500089</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-white/10 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-brand-surface text-sm sm:text-base font-medium">Follow Us:</span>
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href="https://www.facebook.com/prabhukumar.challagali?rdid=FRwj9Eov9cwhr3tQ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19ohATfMHj%2F#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="min-w-[44px] min-h-[44px] bg-white/10 hover:bg-brand-gold hover:text-brand-navy rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.326v21.348C0 23.404.595 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.41c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.765v2.314h3.59l-.467 3.696h-3.123V24h6.116C23.405 24 24 23.404 24 22.674V1.326C24 .595 23.405 0 22.675 0z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@dr.prabhuhealthtv29"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="min-w-[44px] min-h-[44px] bg-white/10 hover:bg-brand-gold hover:text-brand-navy rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center sm:text-right">
              <p className="text-brand-surface/80 text-xs sm:text-sm">
                © {year} IMA Banjara Hills. All Rights Reserved.
              </p>
              <p className="text-brand-surface/50 text-xs mt-1">
                <a href="/legal/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
