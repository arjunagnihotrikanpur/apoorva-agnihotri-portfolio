import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  Mail,
  Phone,
  AlertCircle,
} from "lucide-react";
import { Reveal, SectionLabel, ease } from "./ui";
import { profile } from "../data/content";
import { isFirebaseConfigured, saveContactMessage } from "../firebase/config";

const empty = { name: "", email: "", subject: "", message: "" };

function Field({ id, label, children }) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow mb-2 block text-ivory/60">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full border-0 border-b border-ivory/30 bg-transparent px-0 py-3 text-base text-ivory placeholder:text-ivory/30 transition-colors focus:border-coral focus:outline-none focus:ring-0";

function buildMailto({ name, email, subject, message }) {
  const body = `${message}\n\n— ${name} (${email})`;
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject || "Hello from your portfolio")}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error | fallback

  const onChange = (e) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;

    // No Firebase credentials: be honest and hand off to the visitor's email app.
    if (!isFirebaseConfigured) {
      setStatus("fallback");
      window.location.href = buildMailto(values);
      return;
    }

    setStatus("loading");
    try {
      await saveContactMessage(values);
      setStatus("success");
      setValues(empty);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-ink pt-24 text-ivory sm:pt-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel light>
            Contact
          </SectionLabel>
        </Reveal>

        <div className="mt-8 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal
              as="h2"
              className="display text-[clamp(2.6rem,6.5vw,5.8rem)] font-bold"
            >
              Have a brand that deserves to{" "}
              <span className="italic text-coral">stand out?</span>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-ivory/75">
                Let&apos;s turn good ideas into meaningful digital experiences.
                Whether you&apos;re building a brand, growing an audience, or
                exploring something new, I&apos;d love to hear about it.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <ul className="mt-12 divide-y divide-ivory/15 border-y border-ivory/15">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-coral"
                  >
                    <span className="flex items-center gap-4">
                      <Mail size={20} aria-hidden="true" />
                      <span className="break-all text-base sm:text-lg">
                        {profile.email}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={profile.phoneHref}
                    className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-coral"
                  >
                    <span className="flex items-center gap-4">
                      <Phone size={20} aria-hidden="true" />
                      <span className="text-base sm:text-lg">
                        {profile.phone}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-5 transition-colors hover:text-coral"
                  >
                    <span className="flex items-center gap-4">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                      </svg>
                      <span className="text-base sm:text-lg">
                        Connect on LinkedIn
                      </span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-6">
            <form
              onSubmit={onSubmit}
              className="space-y-7 border border-ivory/20 p-6 sm:p-10"
              noValidate={false}
            >
              <div className="eyebrow text-coral">Send a message</div>

              <div className="grid gap-7 sm:grid-cols-2">
                <Field id="name" label="Name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={values.name}
                    onChange={onChange}
                    className={inputCls}
                    placeholder="Your name"
                  />
                </Field>
                <Field id="email" label="Email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={values.email}
                    onChange={onChange}
                    className={inputCls}
                    placeholder="you@company.com"
                  />
                </Field>
              </div>
              <Field id="subject" label="Subject">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={values.subject}
                  onChange={onChange}
                  className={inputCls}
                  placeholder="What’s this about?"
                />
              </Field>
              <Field id="message" label="Message">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={values.message}
                  onChange={onChange}
                  className={`${inputCls} resize-none`}
                  placeholder="Tell me about your brand and what you have in mind…"
                />
              </Field>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={status === "loading" ? undefined : { y: -2 }}
                whileTap={status === "loading" ? undefined : { scale: 0.98 }}
                className="flex w-full items-center justify-center gap-2 bg-coral px-6 py-4 text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-ivory disabled:cursor-wait disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2
                      size={16}
                      className="animate-spin"
                      aria-hidden="true"
                    />{" "}
                    Sending…
                  </>
                ) : (
                  <>
                    Send message <ArrowUpRight size={16} aria-hidden="true" />
                  </>
                )}
              </motion.button>

              <div aria-live="polite" role="status" className="min-h-6">
                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.p
                      key="ok"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease }}
                      className="flex items-start gap-2 text-sm text-ivory"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-coral"
                        aria-hidden="true"
                      />
                      Thank you — your message has been sent. I&apos;ll get back
                      to you soon.
                    </motion.p>
                  )}
                  {status === "error" && (
                    <motion.p
                      key="err"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease }}
                      className="flex items-start gap-2 text-sm text-ivory"
                    >
                      <AlertCircle
                        size={18}
                        className="mt-0.5 shrink-0 text-coral"
                        aria-hidden="true"
                      />
                      <span>
                        Something went wrong and your message wasn&apos;t sent.
                        Please try again, or email{" "}
                        <a
                          className="underline decoration-coral underline-offset-4"
                          href={buildMailto(values)}
                        >
                          {profile.email}
                        </a>{" "}
                        directly.
                      </span>
                    </motion.p>
                  )}
                  {status === "fallback" && (
                    <motion.p
                      key="fb"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease }}
                      className="flex items-start gap-2 text-sm text-ivory"
                    >
                      <AlertCircle
                        size={18}
                        className="mt-0.5 shrink-0 text-coral"
                        aria-hidden="true"
                      />
                      <span>
                        The message hasn&apos;t been sent yet — your email app
                        should have opened with it ready to send. If nothing
                        happened,{" "}
                        <a
                          className="underline decoration-coral underline-offset-4"
                          href={buildMailto(values)}
                        >
                          open it here
                        </a>
                        .
                      </span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
