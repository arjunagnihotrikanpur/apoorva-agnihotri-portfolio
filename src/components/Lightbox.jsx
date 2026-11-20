import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Maximize2, X } from 'lucide-react'

/**
 * A framed screenshot that opens full-size in a modal when clicked.
 * Images are shown at their natural aspect ratio (never cropped or stretched).
 */
export default function Screenshot({ src, alt, caption, width, height, priority = false, className = '' }) {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const trigger = triggerRef.current
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus() // keyboard users land inside the dialog
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
      trigger?.focus() // ...and return to where they were
    }
  }, [open])

  return (
    <>
      <figure className={className}>
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Enlarge: ${alt}`}
          className="group relative block w-full cursor-zoom-in overflow-hidden border border-ink/15 bg-paper shadow-[0_24px_50px_-28px_rgba(22,20,15,0.45)] transition-shadow duration-500 hover:shadow-[0_34px_60px_-28px_rgba(22,20,15,0.55)]"
        >
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.015]"
          />
          <span className="absolute right-3 top-3 flex items-center gap-1.5 bg-ink px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-widest text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
            <Maximize2 size={12} aria-hidden="true" /> View
          </span>
        </button>
        {caption && <figcaption className="mt-3 text-xs leading-relaxed text-stone">{caption}</figcaption>}
      </figure>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/90 p-4 sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
          >
            <button
              ref={closeRef}
              type="button"
              aria-label="Close enlarged image"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center bg-ivory text-ink transition-colors hover:bg-coral sm:right-8 sm:top-8"
            >
              <X size={20} />
            </button>
            <motion.img
              src={src}
              alt={alt}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-full max-w-full bg-paper object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
