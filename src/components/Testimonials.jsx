import { Quote } from 'lucide-react'
import { Reveal, SectionLabel } from './ui'
import { profile, testimonials } from '../data/content'

export default function Testimonials() {
  const hasTestimonials = testimonials.length > 0

  return (
    <section id="testimonials" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel>Client testimonials</SectionLabel>
        </Reveal>

        {hasTestimonials ? (
          <div className="mt-12 grid gap-px bg-ink/20 md:grid-cols-2">
            {testimonials.map((t) => (
              <Reveal key={t.name} className="bg-ivory p-8 sm:p-12">
                <Quote className="text-coral" size={32} aria-hidden="true" />
                <blockquote className="display mt-6 text-2xl font-medium !leading-[1.25]">{t.quote}</blockquote>
                <p className="mt-8 text-sm">
                  <span className="font-semibold">{t.name}</span>
                  <span className="text-stone">
                    {' '}
                    — {t.role}, {t.company}
                  </span>
                </p>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.05} className="mt-10">
            <div className="relative overflow-hidden border border-ink/25 bg-paper px-6 py-16 text-center sm:px-12 sm:py-24">
              <span
                aria-hidden="true"
                className="display pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[42%] select-none text-[22rem] font-bold leading-none text-sand/70 sm:text-[30rem]"
              >
                &ldquo;
              </span>
              <div className="relative">
                <p className="display mx-auto max-w-3xl text-[clamp(2rem,5vw,4rem)] font-bold !leading-[1.05]">
                  Great work speaks through <span className="italic text-coral">results.</span>
                </p>
                <p className="mx-auto mt-6 max-w-md text-base text-ink/70">Client stories coming soon.</p>
                <p className="mt-10 text-sm text-ink/70">
                  Worked with Apoorva?{' '}
                  <a
                    className="font-medium text-ink underline decoration-coral decoration-2 underline-offset-4 transition-colors hover:text-coral"
                    href={`mailto:${profile.email}?subject=${encodeURIComponent('A few words about working together')}`}
                  >
                    Share a few words
                  </a>
                </p>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
