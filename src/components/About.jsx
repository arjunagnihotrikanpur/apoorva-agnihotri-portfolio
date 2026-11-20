import { motion } from 'framer-motion'
import { Counter, Reveal, SectionLabel, ease } from './ui'
import { profile } from '../data/content'

const traits = [
  { word: 'Creative thinker', note: 'Finding interesting ways to tell a brand’s story and creating content people actually want to engage with.' },
  { word: 'Trend detective', note: 'Spotting trends before they get old, and figuring out what makes an audience tick.' },
  { word: 'Numbers person', note: 'Letting experiments and analytics decide what works, then doing more of it.' },
]

export default function About() {
  return (
    <section id="about" className="relative bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>About</SectionLabel>
        </Reveal>

        <div className="mt-8 grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal as="h2" className="display text-[clamp(2.6rem,7vw,6rem)] font-bold">
              A little <span className="italic text-coral">about</span> me.
            </Reveal>

            {/* signature statement */}
            <Reveal delay={0.1} className="mt-12">
              <blockquote className="border-l-4 border-coral pl-6 sm:pl-10">
                <p className="display text-[clamp(1.6rem,3.6vw,3rem)] font-medium !leading-[1.1]">
                  I&apos;m part creative thinker, part trend detective, part numbers person.{' '}
                  <span className="text-coral">All things social media.</span>
                </p>
              </blockquote>
            </Reveal>

            <div className="mt-14 grid gap-8 text-base leading-relaxed text-ink/80 sm:grid-cols-2 sm:text-lg">
              <Reveal delay={0.05}>
                <p>
                  I&apos;m a Social Media Specialist with 7+ years of experience making brands more visible,
                  relatable, and memorable across digital platforms. I love being where creativity meets strategy.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  Over the years I&apos;ve worked across different industries, managed brands, led creative teams,
                  experimented with campaigns, and helped businesses find their voice online.
                </p>
              </Reveal>
            </div>
          </div>

          {/* experience counter */}
          <div className="lg:col-span-4">
            <Reveal delay={0.1} className="lg:sticky lg:top-28">
              <div className="relative bg-ink p-8 text-ivory sm:p-10">
                <div className="eyebrow text-ivory/60">Experience</div>
                <div className="display mt-4 flex items-start text-[7.5rem] font-bold leading-[0.8] sm:text-[9rem]">
                  <Counter to={profile.years} />
                  <span className="text-coral">+</span>
                </div>
                <div className="display mt-4 text-2xl font-medium">Years of Experience</div>
                <p className="mt-3 text-sm leading-relaxed text-ivory/65">
                  In social media strategy, brand management and campaigns.
                </p>
                <div aria-hidden="true" className="absolute -bottom-3 -right-3 -z-10 h-full w-full border border-coral" />
              </div>
            </Reveal>
          </div>
        </div>

        {/* three halves of the personality */}
        <div className="mt-20 grid border-y border-ink/20 md:grid-cols-3">
          {traits.map((t, i) => (
            <motion.div
              key={t.word}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.12, ease }}
              className="group border-b border-ink/20 py-9 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <h3 className="display text-3xl font-semibold transition-transform duration-500 group-hover:translate-x-1">
                {t.word}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{t.note}</p>
            </motion.div>
          ))}
        </div>

        {/* AI */}
        <Reveal className="mt-16">
          <div className="grid items-center gap-6 bg-coral p-8 text-ink sm:p-12 md:grid-cols-[auto_1fr] md:gap-12">
            <span className="display text-5xl font-bold sm:text-6xl" aria-hidden="true">
              ✺
            </span>
            <div>
              <h3 className="display text-2xl font-semibold sm:text-3xl">Lately, exploring the AI side of marketing.</h3>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink/85">
                Testing LLMs, building smarter workflows, and finding ways to make everyday marketing work a little
                more creative and a lot more efficient. Basically, I love making things happen on social media — the
                ideas, the experiments, the numbers, the occasional creative chaos, all of it.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
