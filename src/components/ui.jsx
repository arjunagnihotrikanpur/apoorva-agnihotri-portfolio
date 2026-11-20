import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion, animate } from 'framer-motion'

export const ease = [0.22, 1, 0.36, 1]

/** Fades and lifts content into view once. */
export function Reveal({ children, delay = 0, y = 28, className = '', as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </Tag>
  )
}

/** Number that counts up the first time it scrolls into view. */
export function Counter({ to, decimals = 0, suffix = '', prefix = '', className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(reduce ? to : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, to, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(v),
    })
    return () => controls.stop()
  }, [inView, to, reduce])

  const text = value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span ref={ref} className={className}>
      {prefix}
      {text}
      {suffix}
    </span>
  )
}

export function SectionLabel({ number, children, light = false }) {
  return (
    <div className={`eyebrow flex items-center gap-3 ${light ? 'text-ivory/70' : 'text-stone'}`}>
      <span className="text-coral">{number}</span>
      <span className={`h-px w-10 ${light ? 'bg-ivory/30' : 'bg-ink/25'}`} />
      <span>{children}</span>
    </div>
  )
}

export function Button({ href, children, variant = 'solid', icon, external = false, onClick, className = '' }) {
  const base =
    'group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 will-change-transform'
  const styles = {
    solid: 'bg-ink text-ivory hover:bg-coral',
    coral: 'bg-coral text-ink hover:bg-ivory',
    outline: 'border border-ink/80 text-ink hover:bg-ink hover:text-ivory',
    outlineLight: 'border border-ivory/60 text-ivory hover:bg-ivory hover:text-ink',
  }
  return (
    <motion.a
      href={href}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
          {icon}
        </span>
      )}
    </motion.a>
  )
}

export function scrollToSection(e, id) {
  const el = document.getElementById(id)
  if (!el) return
  e.preventDefault()
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  history.replaceState(null, '', `#${id}`)
}
