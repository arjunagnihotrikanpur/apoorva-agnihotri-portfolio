import { Counter, Reveal, SectionLabel } from './ui'
import Screenshot from './Lightbox'
import {
  achievementAward,
  achievementGrowth,
  achievementHighlights,
  achievementIntro,
  achievementStats,
  achievementSystems,
  achievementTeam,
} from '../data/content'
import awardPhoto from '../assets/images/insidea-awards-ceremony.webp'

function StatGrid({ stats, cols = 'lg:grid-cols-3' }) {
  return (
    <dl className={`grid gap-px bg-ink/25 sm:grid-cols-2 ${cols}`}>
      {stats.map((s) => (
        <div key={s.label} className="bg-coral p-7 sm:p-9">
          <dd className="display text-[clamp(2.8rem,5.4vw,4.75rem)] font-bold !leading-none">
            <Counter to={s.to} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
          </dd>
          <dt className="display mt-4 text-lg font-semibold leading-snug">{s.label}</dt>
          <p className="mt-1.5 text-sm leading-relaxed text-ink/75">{s.detail}</p>
        </div>
      ))}
    </dl>
  )
}

function Pillar({ title, children }) {
  return (
    <Reveal className="mt-20">
      <h3 className="display mb-8 text-[clamp(1.75rem,3.4vw,2.75rem)] font-bold">{title}</h3>
      {children}
    </Reveal>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="bg-coral py-24 text-ink sm:py-32" aria-labelledby="achievements-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel onAccent>Achievements</SectionLabel>
        </Reveal>
        <Reveal as="h2" className="display mt-8 max-w-4xl text-balance text-[clamp(2.6rem,7vw,6rem)] font-bold">
          <span id="achievements-title">Results I&apos;m proud of.</span>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/85">{achievementIntro}</p>
        </Reveal>

        {/* the award */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Screenshot
              src={awardPhoto}
              width={1600}
              height={882}
              alt="Four people on stage at the INSIDEA Awards Ceremony, holding a trophy in front of the Awards Ceremony screen"
              caption={achievementAward.caption}
              className="[&_figcaption]:text-ink/70"
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="eyebrow">Award</div>
            <h3 className="display mt-4 text-balance text-[clamp(2.4rem,4.6vw,4.25rem)] font-bold !leading-[1.02]">
              &ldquo;{achievementAward.title}&rdquo;
            </h3>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/85">{achievementAward.text}</p>
          </Reveal>
        </div>

        <Pillar title="Growth you can measure">
          <StatGrid stats={achievementGrowth} cols="lg:grid-cols-4" />
          <h4 className="display mb-6 mt-14 text-xl font-semibold">Recent campaign results</h4>
          <StatGrid stats={achievementStats} />
        </Pillar>

        <Pillar title="Teams that deliver">
          <StatGrid stats={achievementTeam} cols="lg:grid-cols-2" />
        </Pillar>

        <Pillar title="Systems that scale">
          <div className="grid gap-6 border-y border-ink/25 py-8 lg:grid-cols-12">
            <h4 className="display text-2xl font-semibold lg:col-span-4">{achievementSystems.title}</h4>
            <p className="max-w-2xl text-base leading-relaxed text-ink/85 sm:text-lg lg:col-span-8">
              {achievementSystems.text}
            </p>
          </div>
        </Pillar>

        {/* beyond the numbers */}
        <Reveal className="mt-20">
          <div className="grid gap-8 lg:grid-cols-12">
            <h3 className="display text-2xl font-semibold lg:col-span-4">Beyond the numbers</h3>
            <ul className="divide-y divide-ink/25 border-y border-ink/25 lg:col-span-8">
              {achievementHighlights.map((a) => (
                <li key={a.title} className="group py-6">
                  <h4 className="display text-xl font-semibold transition-transform duration-300 group-hover:translate-x-1">
                    {a.title}
                  </h4>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/80 sm:text-base">{a.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
