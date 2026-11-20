import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button, Counter, Reveal, SectionLabel, ease } from './ui'
import Screenshot from './Lightbox'
import { campaignPosts } from '../data/content'
import duck1 from '../assets/images/duck-post-1-analytics.webp'
import duck2 from '../assets/images/duck-post-2-analytics.webp'
import onindus from '../assets/images/onindus-analytics.webp'

const duckPoints = [
  ['Human-centric storytelling', 'Shifted the conversation from safety rules to recognizing real people and their contributions on jobsites.'],
  ['Employee-generated content', 'Encouraged field teams to submit photographs, share personal experiences, and nominate colleagues for recognition.'],
  ['Strong campaign identity', 'Used the safety duck as a memorable, recognizable symbol that made participation simple and engaging.'],
  ['Community engagement', 'Invited employees and industry professionals to share their #DuckItForward moments, with standout stories featured on the STP LinkedIn page.'],
  ['Consistent creative execution', 'Developed campaign-specific captions, recognition stories, visual concepts, and participation-focused CTAs.'],
]

// Post-level analytics read directly from the first screenshot.
const duckStats = [
  { to: 9103, label: 'Impressions' },
  { to: 6150, label: 'Members reached' },
  { to: 844, label: 'Engagements' },
  { to: 9.3, decimals: 1, suffix: '%', label: 'Engagement rate' },
  { to: 566, label: 'Clicks' },
  { to: 9, label: 'Followers gained' },
]

// Growth shown as an index (previous quarter = 100), derived only from the stated % increases.
const growth = [
  { label: 'Impressions', pct: 316, index: 416 },
  { label: 'New followers', pct: 297, index: 397 },
]

export default function Campaigns() {
  return (
    <section id="campaigns" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>Successful campaigns</SectionLabel>
        </Reveal>
        <Reveal as="h2" className="display mt-8 text-[clamp(2.6rem,7vw,6rem)] font-bold">
          Ideas that <span className="italic text-coral">moved</span> the numbers.
        </Reveal>

        {/* ---------- Campaign: #DuckItForward ---------- */}
        <article className="mt-16 sm:mt-24" aria-labelledby="duck-title">
          {/* Lead with the proof: the 9,103-impression analytics screenshot comes first. */}
          <div className="grid items-start gap-10 border-t-2 border-ink pt-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="eyebrow text-coral-deep">Engagement campaign</div>
              <h3 id="duck-title" className="display mt-4 break-words text-[clamp(2.2rem,3.7vw,3.4rem)] font-bold">
                #DuckItForward
              </h3>
              <dl className="mt-8 grid grid-cols-2 gap-5 text-sm">
                <div>
                  <dt className="eyebrow text-stone">Client</dt>
                  <dd className="mt-1.5 text-base">Safe-T Professionals (STP)</dd>
                </div>
                <div>
                  <dt className="eyebrow text-stone">Platform</dt>
                  <dd className="mt-1.5 text-base">LinkedIn</dd>
                </div>
              </dl>
              <p className="mt-8 text-base leading-relaxed text-ink/80">
                The campaign was launched to turn everyday jobsite safety actions into meaningful employee recognition.
                Through real field photographs, employee spotlights, and story-driven LinkedIn posts, it encouraged
                workers to celebrate colleagues who demonstrated proactive safety behaviors, shared safety saves, and
                went the extra mile to protect their teams.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col lg:items-stretch">
                {campaignPosts.map((p) => (
                  <Button key={p.href} href={p.href} external variant="solid" icon={<ArrowUpRight size={16} />}>
                    <span className="whitespace-nowrap">View Campaign Post</span>{' '}<span className="whitespace-nowrap text-ivory/60">· {p.label}</span>
                  </Button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.05} className="lg:col-span-7">
              <Screenshot
                src={duck1}
                width={862}
                height={691}
                alt="LinkedIn post analytics for a #DuckItForward post: 9,103 impressions, 6,150 members reached, 844 engagements, 9.3% engagement rate"
                caption="Post analytics: the #DuckItForward recognition story."
              />
            </Reveal>
          </div>

          {/* post-level numbers from the first screenshot */}
          <Reveal className="mt-14">
            <div className="eyebrow text-stone">Post-level analytics, single post</div>
            <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
              {duckStats.map((s) => (
                <div key={s.label} className="border-t border-ink/30 pt-3">
                  <dd className="display text-4xl font-bold xl:text-5xl">
                    <Counter to={s.to} decimals={s.decimals} suffix={s.suffix} />
                  </dd>
                  <dt className="mt-1 text-xs uppercase tracking-widest text-stone">{s.label}</dt>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-xs leading-relaxed text-stone">
              These figures are from one campaign post, not campaign totals.
            </p>
          </Reveal>

          {/* why it worked */}
          <Reveal className="mt-20">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h4 className="display text-2xl font-semibold">What made it successful</h4>
                <div className="mt-8 hidden lg:block">
                  <Screenshot
                    src={duck2}
                    width={867}
                    height={718}
                    alt="LinkedIn post analytics for a Safe-T Professionals safety leadership post"
                    caption="Post analytics: a safety leadership post from the same page."
                  />
                </div>
              </div>
              <ul className="divide-y divide-ink/15 border-y border-ink/15 lg:col-span-8">
                {duckPoints.map(([title, text]) => (
                  <li key={title} className="group py-4">
                    <h5 className="display text-lg font-semibold transition-transform duration-300 group-hover:translate-x-1">
                      {title}
                    </h5>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">{text}</p>
                  </li>
                ))}
              </ul>
              <div className="lg:hidden">
                <Screenshot
                  src={duck2}
                  width={867}
                  height={718}
                  alt="LinkedIn post analytics for a Safe-T Professionals safety leadership post"
                  caption="Post analytics: a safety leadership post from the same page."
                />
              </div>
            </div>
          </Reveal>

          {/* impact */}
          <Reveal className="mt-14">
            <div className="grid gap-8 bg-coral p-8 text-ink sm:p-12 lg:grid-cols-12">
              <div className="eyebrow lg:col-span-3">Overall impact</div>
              <p className="display text-[clamp(1.4rem,2.6vw,2.2rem)] font-medium !leading-[1.2] lg:col-span-9">
                A repeatable, employee-led recognition initiative that helped humanize the STP brand, encourage field
                participation, and reinforce a proactive safety culture.
              </p>
            </div>
          </Reveal>
        </article>
      </div>

      {/* ---------- Campaign: OnIndus ---------- */}
      <article className="mt-24 bg-ink py-20 text-ivory sm:mt-32 sm:py-28" aria-labelledby="onindus-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="eyebrow flex flex-wrap gap-x-6 gap-y-1 text-ivory/70">
              <span className="text-coral">OnIndus · LinkedIn</span>
              <span>B2B audience growth &amp; webinar signups</span>
            </div>
          </Reveal>

          <Reveal as="h3" delay={0.05} className="display mt-8 text-[clamp(2.4rem,6.6vw,6.2rem)] font-bold" >
            <span id="onindus-title">One quarter.</span>
            <br />
            <span className="text-coral">
              <Counter to={76995} /> impressions.
            </span>
            <br />
            <Counter to={719} /> new followers.
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/75">
              That&apos;s what I delivered for OnIndus, a B2B client, with impressions increasing by 316% and new
              followers growing by 297% compared to the previous quarter.
            </p>
            <p className="eyebrow mt-4 text-ivory/50">Quarter: July 1 – September 30, 2026</p>
          </Reveal>

          {/* big stats */}
          <div className="mt-14 grid gap-px bg-ivory/20 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { to: 76995, label: 'Impressions' },
              { to: 719, label: 'New followers' },
              { to: 316, suffix: '%', prefix: '+', label: 'Increase in impressions', hot: true },
              { to: 297, suffix: '%', prefix: '+', label: 'Increase in new followers', hot: true },
            ].map((s) => (
              <div key={s.label} className="bg-ink p-7 sm:p-8">
                <div className={`display text-5xl font-bold sm:text-6xl ${s.hot ? 'text-coral' : ''}`}>
                  <Counter to={s.to} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-xs uppercase tracking-widest text-ivory/60">{s.label}</div>
              </div>
            ))}
          </div>

          {/* growth visualisation + screenshot */}
          <div className="mt-16 grid items-start gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="eyebrow text-ivory/60">Before → after</div>
              <h4 className="display mt-3 text-2xl font-semibold">Growth vs. the previous quarter</h4>

              <div className="mt-8 space-y-10">
                {growth.map((g) => (
                  <div key={g.label}>
                    <div className="mb-3 flex items-baseline justify-between">
                      <span className="text-sm text-ivory/80">{g.label}</span>
                      <span className="display text-2xl font-bold text-coral">+{g.pct}%</span>
                    </div>
                    <div className="space-y-2" role="img" aria-label={`${g.label}: up ${g.pct} percent on the previous quarter`}>
                      <div className="flex items-center gap-3">
                        <span className="w-14 shrink-0 text-[11px] uppercase tracking-wider text-ivory/50">Before</span>
                        <motion.div
                          className="h-3 origin-left bg-ivory/35"
                          style={{ width: `${(100 / g.index) * 100}%` }}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease }}
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-14 shrink-0 text-[11px] uppercase tracking-wider text-coral">After</span>
                        <motion.div
                          className="h-3 origin-left bg-coral"
                          style={{ width: '100%' }}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.4, delay: 0.3, ease }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs leading-relaxed text-ivory/50">
                Bars are indexed to the previous quarter (= 100) using the reported percentage increases.
              </p>

              <dl className="mt-10 grid grid-cols-3 border-t border-ivory/20 pt-6">
                {[
                  [649, 'Reactions'],
                  [13, 'Comments'],
                  [26, 'Reposts'],
                ].map(([n, l]) => (
                  <div key={l}>
                    <dd className="display text-3xl font-bold">
                      <Counter to={n} />
                    </dd>
                    <dt className="mt-1 text-xs uppercase tracking-widest text-ivory/50">{l}</dt>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-7">
              <Screenshot
                src={onindus}
                width={1203}
                height={886}
                alt="OnIndus LinkedIn analytics for July 1 to September 30, 2026: 76,995 impressions up 316.4%, 649 reactions, 13 comments, 26 reposts, with an impressions chart"
                caption="OnIndus LinkedIn page analytics, Jul 1 – Sep 30, 2026."
                className="[&_figcaption]:text-ivory/55"
              />
            </Reveal>
          </div>
        </div>
      </article>
    </section>
  )
}
