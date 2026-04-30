# Faye Enterprises Website

SMS Lead Generation for Independent Life & Health Insurance Brokers.

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: CSS Modules (zero dependencies)
- **Deployment**: Vercel (one-click)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

### Option 1 — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel
```

### Option 2 — GitHub (recommended)
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click Deploy — Vercel auto-detects Next.js

## Customization Checklist

Before going live, update the following:

### Contact Form
The contact form in `components/Contact.js` currently simulates a submission.
To make it real, connect to one of:
- **Formspree** (easiest): [formspree.io](https://formspree.io) — replace `submit` function with fetch to your form endpoint
- **EmailJS**: client-side email sending
- **Next.js API route**: create `pages/api/contact.js` and use Nodemailer

### Email Address
Replace `zach@fayeenterprises.com` in:
- `components/Contact.js`
- `components/Footer.js`

### Calendly Link
Replace the `#contact` CTA links with your Calendly booking URL:
```js
// Replace href="#contact" with:
href="https://calendly.com/your-link"
```

### Domain
In Vercel dashboard → Settings → Domains → Add your custom domain (fayeenterprises.com)

### SEO Meta Tags
Update `pages/index.js` Head section:
- `og:url` — add your actual domain
- `og:image` — add a 1200x630 preview image

## Project Structure

```
faye-enterprises/
├── components/
│   ├── Navbar.js + .module.css
│   ├── Hero.js + .module.css
│   ├── Problem.js + .module.css
│   ├── HowItWorks.js + .module.css
│   ├── Pricing.js + .module.css
│   ├── Contact.js + .module.css
│   └── Footer.js + .module.css
├── pages/
│   ├── _app.js
│   └── index.js
├── styles/
│   └── globals.css
├── public/
├── next.config.js
├── vercel.json
└── package.json
```
