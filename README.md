# Apoorva Agnihotri — portfolio

Single-page portfolio built with React, Vite, Tailwind CSS v4 and Framer Motion.
Firebase (Cloud Firestore) is used only for the contact form.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build in dist/
npm run preview   # serve the production build
npm run lint      # oxlint
```

## Where things live

| What | Where |
| --- | --- |
| Name, phone, email, LinkedIn, nav items, campaign post links | `src/data/content.js` |
| **Client testimonials** | `testimonials` array in `src/data/content.js` |
| Sections | `src/components/` (Hero, About, CaseStudies, Campaigns, Testimonials, Contact, Footer) |
| Colours and fonts | `@theme` block in `src/index.css` |
| Real screenshots and portrait | `src/assets/images/` (extracted from the supplied PDF) |
| Firebase | `src/firebase/config.js` |

### Adding testimonials

Add objects to `testimonials` in `src/data/content.js`. The "coming soon" panel
is replaced automatically as soon as the array has an entry:

```js
export const testimonials = [
  { quote: '…', name: '…', role: '…', company: '…' },
]
```

## Contact form

Messages are saved to the `messages` collection in Cloud Firestore (project `apoorva-agnihotri`).
The Firebase web config is already in `.env` (git-ignored; `.env.example` shows the shape).
When deploying (Netlify, Vercel, etc.) add the same six `VITE_FIREBASE_*` variables in the host's settings.

**One-time setup in the Firebase console** (the form cannot work until this is done):

1. Build → Firestore Database → **Create database**.
2. Firestore → **Rules** → paste the rules below → **Publish**. They let visitors create a message but never read, change or delete any.

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /messages/{id} {
      allow create: if request.resource.data.keys().hasOnly(['name','email','subject','message','createdAt'])
                    && request.resource.data.message.size() < 5000;
      allow read, update, delete: if false;
    }
  }
}
```

New messages appear under Firestore Database → Data → `messages`.

If the write fails the form shows an error after 12 seconds, keeps the visitor's text,
and links to a pre-filled email. The exact cause (for example `permission-denied`) is logged
in the browser console. Without the `.env` values it opens the visitor's email app instead and
never claims the message was sent.

## Before you deploy

- Set `og:image` in `index.html` to an absolute URL on your domain
  (for example `https://yourdomain.com/og-image.jpg`) so link previews work.
- Fonts (Space Grotesk, DM Sans) load from Google Fonts.
