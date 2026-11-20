import { ArrowUp } from 'lucide-react'
import { navItems, profile } from '../data/content'
import { scrollToSection } from './ui'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-ink text-ivory">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mt-20 flex flex-col gap-8 border-t border-ivory/15 py-8 sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-7 gap-y-2 text-sm text-ivory/70">
              {navItems.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} onClick={(e) => scrollToSection(e, n.id)} className="transition-colors hover:text-coral">
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-coral">
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, 'home')}
            className="inline-flex items-center gap-2 text-sm text-ivory/70 transition-colors hover:text-coral"
          >
            Back to top <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div aria-hidden="true" className="display select-none whitespace-nowrap text-center text-[17vw] font-bold leading-[0.8] text-ivory/[0.06]">
        Apoorva Agnihotri
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-8 pt-6 text-xs text-ivory/50 sm:px-8">
        &copy; {currentYear} {profile.name}. Social media strategy, with a point of view.
      </div>
    </footer>
  )
}
