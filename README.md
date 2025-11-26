# 🏆 Sports Travel Packages Landing Page

A modern, production-grade, fully responsive landing page for global sports travel package experiences.

---

## 🌟 Screenshots

### Desktop View
![Desktop Landing](./sports-landing-desktop.png)

### Mobile View
![Mobile Landing](./sports-landing-mobile.png)

---

## 🚀 Features

- **Gorgeous Hero Section** — Parallax mountain background, strong bold headline
- **Sticky Navigation Bar** — Responsive, collapsible on mobile
- **Event Spotlight** — F1 Japan premium card with WhatsApp CTA
- **Animated Packages Slider** — Scrollable/tappable on mobile
- **Stats and Why Choose Us** — Live, dynamic numbers and icons
- **Sample Itinerary** — Clean, swipeable experience
- **VIP Addons** — Horizontally scrollable experience cards
- **Framer Motion Animations** — Subtle entrance/hover animations
- **Fully Responsive** — Beautiful on desktop, tablet, and mobile
- **Custom Dropdown** — Accessible, mobile-friendly UI for the form
- **Lead Inquiry Form** — Validation (with inline errors) and success toast
- **Next.js API Route** — Stores leads as `/data/leads.json`
- **Beautiful Footer** — Logo, links, social icons

---

## 🛠️ Tech Stack

- **Next.js 14 (app/ router)**
- **React 18 / TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide Icons**
- **React Hot Toast**

---

## ⚡ Installation

Clone the repo:
```bash
git clone https://github.com/yourusername/sports-travel-landing.git
cd sports-travel-landing
```

Install dependencies:
```bash
npm install
```

Start the local server:
```bash
npm run dev
```
Site will be running on: [http://localhost:3000](http://localhost:3000)

---

## ✨ Functionalities

- **Navigation & Scroll**: NavBar links scroll smoothly to their section, menu collapses on mobile tap.
- **Packages Slider**: Cards animate on hover, horizontal scroll supported everywhere.
- **Stats & Features**: Stat features animate on enter.
- **Lead Inquiry Form**: Custom dropdown, full validation — success triggers toast, stores inquiry in `/data/leads.json`.
- **API**: `/api/lead` accepts POST (name, email, phone, addon, message), stores in a JSON file.
- **Animations**: Every major element animates subtly when it enters viewport or is hovered/tapped.

---

## 📦 Structure

```
components/
  ui/
    Button.tsx
    Card.tsx
    Dropdown.tsx
    SectionHeading.tsx
  NavBar.tsx
  Hero.tsx
  FeaturedEvent.tsx
  Packages.tsx
  WhyChooseUs.tsx
  ItinerarySlider.tsx
  AddOns.tsx
  LeadForm.tsx
  Footer.tsx
data/
  packages.json
  leads.json
app/
  api/lead/route.ts
  layout.tsx
  page.tsx
  globals.css
```

---

## 📱 Responsive Design

- **Desktop** — Multi-column layouts, big cards
- **Tablet** — Two-column grids
- **Mobile** — Fully stacked, smooth horizontal swipe/cards, native-like dropdown and transitions

---

## 🎨 Customization

- **Colors/Fonts** — Change theme in `tailwind.config.ts` and `globals.css`
- **Packages** — Live data in `data/packages.json`
- **Lead Form Data** — All form submissions stored in `data/leads.json`

---

## 📝 License

MIT — use freely for portfolio, demos, and commercial projects!

---



