🏆 Sports Travel Packages Landing Page

A modern, production-grade, fully responsive landing page for global sports-travel experiences — inspired by premium sports event packages worldwide.

🌟 Screenshots
🖥️ Desktop View
<img width="1896" alt="Desktop View 1" src="https://github.com/user-attachments/assets/31799511-da54-4c49-8608-2f458b92dfce" /> <img width="1896" alt="Desktop View 2" src="https://github.com/user-attachments/assets/9dec083e-803a-417d-b16c-a7dfc5eb4121" /> <img width="1896" alt="Desktop View 3" src="https://github.com/user-attachments/assets/b7cea401-c301-47de-80bc-de0d6bc56029" />
📱 Tablet / Medium View
<img width="557" alt="Tablet 1" src="https://github.com/user-attachments/assets/52730f67-48a4-490d-8027-a318c116f750" /> <img width="557" alt="Tablet 2" src="https://github.com/user-attachments/assets/54531d8c-51b4-47a4-afd3-1bdb0db02973" />
📱 Mobile View
<img width="340" alt="Mobile 1" src="https://github.com/user-attachments/assets/0fc21b64-c5e0-4fed-a617-1aa8c04129bc" /> <img width="327" alt="Mobile 2" src="https://github.com/user-attachments/assets/318f9698-f759-429b-91d6-a98f8efebf6a" /> <img width="314" alt="Mobile 3" src="https://github.com/user-attachments/assets/6ff8d6c3-3c6e-435a-8d47-ab5c9f7ca7c1" />
🚀 Features

Stunning Hero Section — Parallax mountain background with bold headline

Sticky, Responsive Navigation — Collapsible mobile menu

Event Spotlight (F1 Japan) — WhatsApp CTA inside card

Animated Packages Slider — Hover effects + horizontal scroll

Why Choose Us Section — Live stats with icons

Sample Itinerary Slider — Smooth mobile/touch experience

VIP Add-Ons — Horizontally scrollable cards

Lead Capture Form

Validation (name, email, phone, dropdown, message)

Inline error handling

Success toast

POST to /api/lead

Framer Motion Animations — Smooth fades, hover scale, staggered entrances

Fully Responsive — Beautiful across all device sizes

🛠️ Tech Stack

Next.js 14 (App Router)

React 18

TypeScript

Tailwind CSS

Framer Motion

Lucide Icons

React Hot Toast

⚡ Installation

Clone the repo:

git clone https://github.com/yourusername/sports-travel-landing.git
cd sports-travel-landing


Install dependencies:

npm install


Run the project:

npm run dev


Visit: http://localhost:3000

✨ Functionalities

Smooth navigation & scroll animations

Clickable, scrollable event packages

Dynamic stats with icons

Lead inquiry form

Validates data

Shows error/success feedback

Submits to API route

Saves into /data/leads.json

Animations on scroll and hover

Dropdown is mobile-friendly and accessible

📦 Folder Structure
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

📱 Responsive Design

Desktop → Multi-column, wide imagery

Tablet → Two-column layouts

Mobile → Smoothly stacked with horizontal sliders

Dropdown → Fully optimized for small screens

🎨 Customization

Theme colors → tailwind.config.ts

Global fonts → globals.css

Package cards → data/packages.json

Lead form submissions → data/leads.json

📝 License

MIT — free for personal or commercial use.
