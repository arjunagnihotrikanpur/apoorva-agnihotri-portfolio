import { Counter, Reveal, SectionLabel } from './ui'
import { achievementHighlights, achievementStats } from '../data/content'

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

        {/* the numbers */}
        <Reveal delay={0.1}>
          <dl className="mt-14 grid gap-px bg-ink/25 sm:grid-cols-2 lg:grid-cols-3">
            {achievementStats.map((s) => (
              <div key={s.label} className="bg-coral p-7 sm:p-9">
                <dd className="display text-[clamp(2.8rem,5.4vw,4.75rem)] font-bold !leading-none">
                  <Counter to={s.to} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
                </dd>
                <dt className="display mt-4 text-lg font-semibold leading-snug">{s.label}</dt>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/75">{s.detail}</p>
              </div>
            ))}
          </dl>
        </Reveal>

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
