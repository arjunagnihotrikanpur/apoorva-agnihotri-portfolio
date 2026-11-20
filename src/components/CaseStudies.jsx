import { Reveal, SectionLabel } from './ui'
import Screenshot from './Lightbox'
import hiringPost from '../assets/images/safet-hiring-post-analytics.webp'

const company = [
  'Planned and managed LinkedIn content calendars.',
  'Developed content around workplace safety, EHS insights, industry trends, and company updates.',
  'Refined content guidelines to maintain consistency in brand communication.',
  'Revamped existing posts based on client feedback.',
  'Worked on improving page visibility and attracting relevant followers.',
  'Made technical topics easier to understand through engaging content.',
]

const anna = [
  'Managed content planning and LinkedIn posting.',
  'Developed content ideas aligned with her leadership role and industry expertise.',
  'Worked on building a consistent professional voice.',
  'Focused on thought leadership, industry conversations, and meaningful engagement.',
  'Helped position her profile as a platform for business insights and leadership perspectives.',
]

const services = ['LinkedIn Management', 'B2B Content Strategy', 'Personal Branding']

function List({ items }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink/80">
          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-coral" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function CaseStudies() {
  return (
    <section id="work" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel number="02">Proof of work</SectionLabel>
        </Reveal>

        <div className="mt-8 grid items-end gap-6 lg:grid-cols-12">
          <Reveal as="h2" className="display text-[clamp(2.6rem,7vw,6rem)] font-bold lg:col-span-8">
            Not just posting.
            <br />
            <span className="italic text-coral">Building brands.</span>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4">
            <p className="text-base leading-relaxed text-ink/75">
              A few of the profiles and brands I&apos;ve handled — and what I learned from each.
            </p>
          </Reveal>
        </div>

        {/* Case study 01 */}
        <article className="mt-16 border-t-2 border-ink pt-10 sm:mt-24">
          <div className="grid gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <div className="eyebrow text-coral">Case study 01</div>
              <h3 className="display mt-4 text-4xl font-bold sm:text-5xl">
                Safe-T Professionals <span className="text-coral">&amp;</span> Anna Martinez
              </h3>
              <dl className="mt-8 space-y-5 text-sm">
                <div>
                  <dt className="eyebrow text-stone">Industry</dt>
                  <dd className="mt-1.5 text-base">Environmental, Health &amp; Safety (EHS)</dd>
                </div>
                <div>
                  <dt className="eyebrow text-stone">Services</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {services.map((s) => (
                      <span key={s} className="border border-ink/30 px-3 py-1.5 text-xs font-medium">
                        {s}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-8">
              <div className="eyebrow text-stone">The challenge</div>
              <p className="display mt-4 text-[clamp(1.4rem,2.6vw,2.2rem)] font-medium !leading-[1.2] tracking-tight">
                Safe-T Professionals helps businesses with safety staffing, consulting, training, and risk management.
                The challenge was to make an industry that can often feel technical and formal{' '}
                <span className="text-coral">more approachable on LinkedIn</span>, while building credibility and
                keeping the audience engaged.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/75">
                Alongside the company page, I also worked on strengthening the personal brand of Anna Martinez,
                President &amp; CEO of Safe-T Professionals.
              </p>
            </Reveal>
          </div>

          {/* Two voices */}
          <div className="mt-16 grid gap-px bg-ink/20 md:grid-cols-2">
            <Reveal className="bg-ivory py-2 md:pr-10">
              <div className="eyebrow text-coral">Voice one</div>
              <h4 className="display mt-3 text-2xl font-semibold">Company LinkedIn Management</h4>
              <List items={company} />
            </Reveal>
            <Reveal delay={0.1} className="bg-ivory py-2 md:pl-10">
              <div className="eyebrow text-coral">Voice two</div>
              <h4 className="display mt-3 text-2xl font-semibold">Anna Martinez — Personal Branding</h4>
              <List items={anna} />
            </Reveal>
          </div>

          {/* Approach + visual (alternating layout) */}
          <div className="mt-20 grid items-center gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Screenshot
                src={hiringPost}
                width={859}
                height={715}
                alt="LinkedIn analytics for a Safe-T Professionals hiring post showing impressions, members reached, engagements, engagement rate and clicks"
                caption="Post analytics from the Safe-T Professionals page — a hiring post, and how it supports page credibility."
              />
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7 lg:pl-8">
              <div className="eyebrow text-stone">My approach</div>
              <p className="display mt-4 text-[clamp(1.6rem,3vw,2.6rem)] font-medium !leading-[1.15]">
                A company page should do more than announce services, and a CEO&apos;s profile should do more than
                share company updates.
              </p>
              <div className="mt-8 grid gap-6 text-[15px] leading-relaxed text-ink/80 sm:grid-cols-2">
                <p>
                  <strong className="font-semibold text-ink">For STP,</strong> the focus was on building industry
                  credibility and making safety-related conversations more engaging.
                </p>
                <p>
                  <strong className="font-semibold text-ink">For Anna,</strong> the focus was on bringing the person
                  behind the business forward — her experience, leadership, perspectives, and understanding of the
                  industry.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Learning */}
          <Reveal className="mt-20">
            <div className="relative bg-ink p-8 text-ivory sm:p-14">
              <div className="eyebrow text-coral">What this project taught me</div>
              <p className="display mt-5 max-w-4xl text-[clamp(1.5rem,3vw,2.6rem)] font-medium !leading-[1.15]">
                Managing two LinkedIn identities within the same business taught me how important it is to maintain two
                distinct voices while keeping both connected to the same brand story.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/70">
                Because sometimes, people connect with a company&apos;s expertise, but they remember the people behind
                it.
              </p>
            </div>
          </Reveal>
        </article>
      </div>
    </section>
  )
}
