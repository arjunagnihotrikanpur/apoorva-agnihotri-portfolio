// All site copy lives here so it is easy to edit and to extend later
// (for example, adding real client testimonials).

export const profile = {
  name: 'Apoorva Agnihotri',
  role: 'Social Media Strategist',
  years: 7,
  phone: '7985741559',
  phoneHref: 'tel:+917985741559',
  email: 'apoorva220696@gmail.com',
  linkedin: 'https://www.linkedin.com/in/apoorva-agnihotri-b3b42b171/',
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'campaigns', label: 'Campaigns' },
  { id: 'work', label: 'Work' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export const marqueeWords = [
  'Creative thinker',
  'Trend detective',
  'Numbers person',
  'LinkedIn strategy',
  'B2B content',
  'Personal branding',
  'Campaigns',
]

// Achievements section. Everything here comes from Apoorva's own material
// (campaign analytics and case studies), so only add things that can be backed up.
// Awards, certifications or press mentions can go in `achievementHighlights` as
// { title: '…', text: '…' } once there are real ones to show.
export const achievementStats = [
  { to: 76995, label: 'Impressions in one quarter', detail: 'OnIndus, LinkedIn, Jul 1 – Sep 30, 2026' },
  { to: 719, label: 'New followers in that quarter', detail: 'OnIndus, LinkedIn' },
  { to: 316, prefix: '+', suffix: '%', label: 'Growth in impressions', detail: 'Compared with the previous quarter, OnIndus' },
  { to: 297, prefix: '+', suffix: '%', label: 'Growth in new followers', detail: 'Compared with the previous quarter, OnIndus' },
  { to: 9103, label: 'Impressions on a single post', detail: '#DuckItForward, Safe-T Professionals, 6,150 members reached' },
  { to: 9.3, decimals: 1, suffix: '%', label: 'Engagement rate on that post', detail: '844 engagements on one LinkedIn post' },
]

// New achievements from Apoorva's updated PDF. They follow her own three pillars:
// growth you can measure, teams that deliver, systems that scale.
export const achievementIntro =
  "I've spent 7+ years running social for agencies and in-house B2B teams, and my work comes down to three things."

export const achievementAward = {
  title: 'Client Satisfaction Star',
  text: 'Awarded at the INSIDEA conference, Thailand 2026.',
  caption: 'INSIDEA Awards Ceremony.',
}

export const achievementGrowth = [
  { to: 30, prefix: '+', suffix: '%', label: 'Client engagement', detail: 'Campaigns led at WebWise Digital' },
  { to: 25, prefix: '+', suffix: '%', label: 'Organic reach', detail: 'Campaigns led at WebWise Digital' },
  { to: 20, prefix: '+', suffix: '%', label: 'Conversion rates', detail: 'Campaigns led at WebWise Digital' },
  { to: 40, prefix: '+', suffix: '%', label: 'Engagement lift', detail: 'Recruitment content for AVA Consulting, on LinkedIn and Facebook' },
]

export const achievementTeam = [
  { to: 10, suffix: '+', label: 'Specialists led and mentored', detail: 'Social and digital teams' },
  { to: 7, suffix: '×', label: 'Employee of the Month', detail: 'Named seven times' },
]

export const achievementSystems = {
  title: 'SOP Champion at INSIDEA',
  text: "Responsible for automating and standardising the process: documenting workflows and automating the repetitive parts so the team spends its time on content, not process.",
}

export const achievementHighlights = [
  {
    title: 'Built a repeatable recognition campaign',
    text: '#DuckItForward turned everyday jobsite safety actions into employee recognition, humanizing the Safe-T Professionals brand and reinforcing a proactive safety culture.',
  },
  {
    title: 'Gave one business two distinct LinkedIn voices',
    text: 'Managed the Safe-T Professionals company page and the personal brand of its President & CEO, Anna Martinez, keeping both connected to one brand story.',
  },
  {
    title: 'Made a technical industry approachable',
    text: 'Reworked Environmental, Health & Safety content on LinkedIn so a formal, technical subject felt easier to understand while building credibility.',
  },
  {
    title: 'Led teams and managed brands for 7+ years',
    text: 'Worked across different industries, managed brands, led creative teams, and ran campaigns from idea to analytics.',
  },
]

// Add genuine testimonials here when available, e.g.
// { quote: '…', name: '…', role: '…', company: '…' }
export const testimonials = []

export const campaignPosts = [
  {
    label: 'First post',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7452016864047833089/',
  },
  {
    label: 'Second post',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7454552459126951936/',
  },
]
