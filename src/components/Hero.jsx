import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import portrait from '../assets/images/apoorva-portrait.webp'
import { marqueeWords, profile } from '../data/content'
import { Button, scrollToSection, ease } from './ui'

const lines = ['Making brands', 'impossible', 'to ignore.']
const currentYear = new Date().getFullYear()

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-6%'])

  return (
    <section id="home" ref={ref} className="relative flex min-h-svh flex-col overflow-hidden pt-[4.5rem] sm:pt-20">
      {/* oversized background wordmark */}
      <div
        aria-hidden="true"
        className="display pointer-events-none absolute -right-6 top-24 select-none text-[34vw] font-bold leading-none text-sand/60 wide:text-[24vw]"
      >
        AA
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl flex-1 content-center gap-[clamp(1rem,3svh,2.5rem)] px-5 py-[clamp(1rem,3svh,2.5rem)] sm:px-8 wide:grid-cols-12 wide:items-center wide:gap-6">
        {/* Copy */}
        <motion.div style={{ y: textY }} className="order-2 flex flex-col justify-center wide:order-1 wide:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="display text-[clamp(1.4rem,min(3.6vw,4.4svh),3rem)] font-semibold !leading-none"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="eyebrow mb-[clamp(0.75rem,2.4svh,1.75rem)] mt-[clamp(0.5rem,1.5svh,1rem)] flex flex-wrap items-center gap-x-4 gap-y-2 text-ink/70"
          >
            <span>{profile.role}</span>
            <span>{profile.years}+ Years of Experience</span>
          </motion.div>

          <p className="display text-[clamp(2rem,min(9.4vw,10.2svh),8.25rem)] font-bold">
            {lines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className={`block ${i === 1 ? 'italic text-coral' : ''}`}
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 1, delay: 0.15 + i * 0.12, ease }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
            className="mt-[clamp(0.75rem,3svh,2rem)] max-w-xl [@media(max-height:500px)]:hidden max-md:[@media(max-height:700px)]:hidden text-[15px] leading-relaxed text-ink/75 sm:text-base wide:text-[clamp(0.9rem,2.3svh,1.125rem)]"
          >
            I&apos;m Apoorva — a social media strategist who blends creative storytelling, audience insights, and
            data-driven thinking to help brands build meaningful digital presence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease }}
            className="mt-[clamp(1rem,3.4svh,2.25rem)] flex flex-wrap gap-2.5 sm:gap-3"
          >
            <Button href="#campaigns" onClick={(e) => scrollToSection(e, 'campaigns')} icon={<ArrowDownRight size={16} />}>
              Explore My Work
            </Button>
            <Button
              href="#contact"
              variant="outline"
              onClick={(e) => scrollToSection(e, 'contact')}
              icon={<ArrowUpRight size={16} />}
            >
              Let&apos;s Connect
            </Button>
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <div className="order-1 wide:order-2 wide:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.1, ease }}
            // width is derived from a viewport-height-limited height so the 4:5 cover always fits on screen
            className="relative mx-auto w-full max-w-md wide:max-w-none wide:w-[min(100%,calc((100svh-15rem)*0.8),32rem)]"
          >
            {/* offset colour block gives the "magazine cover" depth */}
            <div aria-hidden="true" className="absolute -bottom-4 -right-4 h-full w-full bg-coral sm:-bottom-5 sm:-right-5" />
            <div className="relative h-[min(26svh,16rem)] overflow-hidden bg-sand sm:h-[min(30svh,20rem)] wide:aspect-[4/5] wide:h-auto">
              <motion.img
                src={portrait}
                alt="Portrait of Apoorva Agnihotri, social media strategist"
                width="1100"
                height="1100"
                fetchPriority="high"
                style={{ y: imgY }}
                className="absolute inset-0 h-[112%] w-full object-cover object-[50%_28%]"
              />
              <div
                aria-hidden="true"
                className="eyebrow absolute left-0 top-0 bg-ink px-3 py-2 text-[10px] text-ivory"
              >
                Portfolio · {currentYear}
              </div>
            </div>

            {/* availability indicator */}
            <motion.a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease }}
              className="absolute bottom-3 left-3 flex items-center gap-2.5 bg-paper px-3 py-2 wide:-left-8 wide:bottom-8 wide:gap-3 wide:px-4 wide:py-3 shadow-[0_18px_40px_-18px_rgba(22,20,15,0.5)]"
            >
              <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-coral" aria-hidden="true" />
              <span className="text-xs leading-tight">
                <span className="block font-semibold">Open to new projects</span>
                <span className="hidden text-stone wide:inline">Say hello &rarr;</span>
              </span>
            </motion.a>

            {/* experience stamp */}
            <motion.div
              initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
              animate={{ opacity: 1, rotate: -8, scale: 1 }}
              transition={{ duration: 0.9, delay: 1.2, ease }}
              className="display absolute -right-2 top-4 flex h-16 w-16 flex-col items-center justify-center rounded-full bg-ink text-ivory sm:-right-6 sm:top-6 sm:h-24 sm:w-24 wide:h-28 wide:w-28"
              aria-hidden="true"
            >
              <span className="text-xl font-bold leading-none sm:text-3xl wide:text-4xl">{profile.years}+</span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.16em]">Years</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* marquee */}
      <div className="border-y border-ink/15 bg-ink py-3 text-ivory sm:py-4 [@media(max-height:500px)]:hidden max-sm:hidden" aria-hidden="true">
        <div className="flex w-max marquee-track">
          {[0, 1].map((n) => (
            <div key={n} className="flex shrink-0 items-center">
              {marqueeWords.map((w) => (
                <span key={w + n} className="display flex items-center text-xl font-medium sm:text-2xl">
                  <span className="px-6 sm:px-9">{w}</span>
                  <span className="text-coral">✺</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
