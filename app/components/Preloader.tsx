'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion';

// NOTE: A sessionStorage flag (e.g. "ima-preloader-seen") could be added
// here later to gate this to play only once per tab session, skipping it on
// repeat hard refreshes. Intentionally left OFF for now so it always plays
// on a fresh load.

const MIN_SHOW_MS = 1800;
const MAX_SHOW_MS = 3000;
const REDUCED_MOTION_SHOW_MS = 600;

// Sequenced timing (seconds) for the full-motion choreography - each phase
// starts once the previous one finishes, driven declaratively via
// transition delays rather than setTimeout chains.
const IMA_LETTER_COUNT = 3;
const IMA_STAGGER = 0.06;
const IMA_LETTER_DURATION = 0.4;
const IMA_DONE_AT = (IMA_LETTER_COUNT - 1) * IMA_STAGGER + IMA_LETTER_DURATION;

const RULE_DURATION = 0.4;
const RULE_DONE_AT = IMA_DONE_AT + RULE_DURATION;

const BANJARA_TEXT = 'Banjara Hills';
const BANJARA_STAGGER = 0.025;
const BANJARA_LETTER_DURATION = 0.35;

const imaContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: IMA_STAGGER } },
};

const imaLetterVariants: Variants = {
  hidden: { opacity: 0, y: -12, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: IMA_LETTER_DURATION, ease: 'easeOut' },
  },
};

const banjaraContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { delayChildren: RULE_DONE_AT, staggerChildren: BANJARA_STAGGER },
  },
};

const banjaraLetterVariants: Variants = {
  hidden: { opacity: 0, y: -8, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: BANJARA_LETTER_DURATION, ease: 'easeOut' },
  },
};

// Curtain-lift exit: translateY off the top of the viewport.
const CURTAIN_EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

function Letters({
  text,
  variants,
  className,
  style,
}: {
  text: string;
  variants: Variants;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          variants={variants}
          className={className}
          style={{ display: 'inline-block', willChange: 'transform, opacity, filter', ...style }}
        >
          {char === ' ' ? ' ' : char}
        </motion.span>
      ))}
    </>
  );
}

export default function Preloader() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const pageLoadedRef = useRef(false);
  const minTimeElapsedRef = useRef(false);

  // Toggle inert on the real content tree while the preloader covers it, so
  // keyboard focus and screen readers can't reach it underneath.
  useEffect(() => {
    const content = document.getElementById('app-content');
    if (!content) return;
    content.toggleAttribute('inert', showPreloader);
    return () => {
      content.toggleAttribute('inert', false);
    };
  }, [showPreloader]);

  useEffect(() => {
    if (prefersReducedMotion) {
      const timer = setTimeout(() => setIsExiting(true), REDUCED_MOTION_SHOW_MS);
      return () => clearTimeout(timer);
    }

    const tryExit = () => {
      if (pageLoadedRef.current && minTimeElapsedRef.current) {
        setIsExiting(true);
      }
    };

    const minTimer = setTimeout(() => {
      minTimeElapsedRef.current = true;
      tryExit();
    }, MIN_SHOW_MS);

    const maxTimer = setTimeout(() => setIsExiting(true), MAX_SHOW_MS);

    const handleLoad = () => {
      pageLoadedRef.current = true;
      tryExit();
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
      window.removeEventListener('load', handleLoad);
    };
  }, [prefersReducedMotion]);

  const handleExitComplete = () => setShowPreloader(false);

  const exitAnimation = prefersReducedMotion
    ? { opacity: 0, transition: { duration: 0.35, ease: 'easeInOut' as const } }
    : { y: '-100%', transition: { duration: 0.65, ease: CURTAIN_EASE } };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {showPreloader && (
        <motion.div
          key="preloader"
          role="status"
          aria-live="polite"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-brand-navy"
          initial={false}
          animate={isExiting ? exitAnimation : {}}
          style={{ willChange: isExiting ? 'transform, opacity' : undefined }}
        >
          <span className="sr-only">Loading IMA Banjara Hills</span>

          <div className="relative flex flex-col items-center px-4">
            {prefersReducedMotion ? (
              <>
                <div
                  aria-hidden="true"
                  className="flex text-brand-gold font-bold text-5xl sm:text-7xl tracking-[0.3em]"
                >
                  IMA
                </div>
                <div className="h-[2px] w-24 sm:w-32 bg-brand-gold mt-3 sm:mt-4" />
                <div
                  aria-hidden="true"
                  className="flex text-white/90 font-light text-xl sm:text-3xl tracking-widest mt-3 sm:mt-4"
                >
                  Banjara&nbsp;Hills
                </div>
              </>
            ) : (
              <>
                {/* EKG line - the one literal "medical" reference, kept
                    low-key behind the wordmark. Drawn once via Framer's
                    pathLength (which animates stroke-dasharray/
                    stroke-dashoffset under the hood). Skipped entirely
                    under reduced motion. */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 400 60"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute w-64 sm:w-96 h-auto opacity-25"
                >
                  <motion.path
                    d="M0,30 L140,30 L162,8 L184,52 L206,30 L400,30"
                    fill="none"
                    stroke="var(--color-brand-gold)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: RULE_DONE_AT + 1, ease: 'easeInOut' }}
                  />
                </svg>

                <motion.div
                  variants={imaContainerVariants}
                  initial="hidden"
                  animate="visible"
                  aria-hidden="true"
                  className="flex text-brand-gold font-bold text-5xl sm:text-7xl tracking-[0.3em]"
                >
                  <Letters text="IMA" variants={imaLetterVariants} />
                </motion.div>

                <motion.div
                  className="h-[2px] w-24 sm:w-32 bg-brand-gold mt-3 sm:mt-4 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: IMA_DONE_AT, duration: RULE_DURATION, ease: 'easeInOut' }}
                  style={{ willChange: 'transform' }}
                />

                <motion.div
                  variants={banjaraContainerVariants}
                  initial="hidden"
                  animate="visible"
                  aria-hidden="true"
                  className="flex text-white/90 font-light text-xl sm:text-3xl tracking-widest mt-3 sm:mt-4"
                >
                  <Letters text={BANJARA_TEXT} variants={banjaraLetterVariants} />
                </motion.div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
