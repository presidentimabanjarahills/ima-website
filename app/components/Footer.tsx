import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Logo & About */}
            <div className="lg:col-span-2">
              <div className="flex flex-col items-center md:items-start mb-6">
                 <Image 
                   src="/imalogo.png"
                   alt="IMA India Logo"
                   width={320}
                   height={96}
                   className="w-48 h-14 sm:w-56 sm:h-16 md:w-64 md:h-18 lg:w-72 lg:h-20 xl:w-80 xl:h-24 object-contain mb-4 filter brightness-0 invert"
                 />
               
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-brand-surface mb-4 sm:mb-6">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="/news" className="text-brand-surface hover:text-white transition-colors text-sm sm:text-base">News</a></li>
                <li><a href="/membership" className="text-brand-surface hover:text-white transition-colors text-sm sm:text-base">Membership</a></li>
                <li><a href="/initiatives" className="text-brand-surface hover:text-white transition-colors text-sm sm:text-base">Initiatives</a></li>
                <li><a href="/awards" className="text-brand-surface hover:text-white transition-colors text-sm sm:text-base">Awards</a></li>
                <li><a href="/partners" className="text-brand-surface hover:text-white transition-colors text-sm sm:text-base">Partners</a></li>
                <li><a href="/legal/privacy" className="text-brand-surface hover:text-white transition-colors text-sm sm:text-base">Privacy Policy</a></li>
                <li><a href="/legal/terms" className="text-brand-surface hover:text-white transition-colors text-sm sm:text-base">Terms of Use</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-brand-surface mb-4 sm:mb-6">Contact Info</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand-navy mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <div>
                    <p className="text-brand-surface text-xs sm:text-sm">Email</p>
                    <p className="text-white text-sm sm:text-base">presidentimabanjarahills@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand-navy mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <p className="text-brand-surface text-xs sm:text-sm">Phone</p>
                    <p className="text-white text-sm sm:text-base">+91 99892-20003</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-brand-navy mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-brand-surface text-xs sm:text-sm mb-2">Address</p>
                    <a 
                      href="https://maps.app.goo.gl/ZCu58bikwGTUqWij7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white text-sm sm:text-base leading-relaxed hover:text-brand-surface transition-colors duration-200"
                    >
                      <div className="font-semibold text-brand-surface mb-1 hover:text-white">Dr Prabhu Life Multispeciality Clinics and Hospital</div>
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
        <div className="border-t border-brand-navy py-6 sm:py-8">
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
                  className="min-w-[44px] min-h-[44px] bg-brand-navy hover:bg-brand-navy-dark rounded-full flex items-center justify-center transition-colors"
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
                  className="min-w-[44px] min-h-[44px] bg-brand-navy hover:bg-brand-navy-dark rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Copyright */}
            {/* <div className="text-center sm:text-right">
              <p className="text-brand-surface text-xs sm:text-sm">
                © 2020 Indian Medical Association. All Rights Reserved.
              </p>
              <p className="text-brand-navy text-xs mt-1">
                T&C | Powered by ITindustries.com | Last Updated: 14-09-2023
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
