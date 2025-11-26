# 🏆 Sports Travel Packages — Landing Page

A modern, production-grade, fully responsive landing page for global sports-travel experiences — inspired by premium sports event packages worldwide.

---

## 🌟 Screenshots

### 🖥️ Desktop View

<img width="1896" src="https://github.com/user-attachments/assets/31799511-da54-4c49-8608-2f458b92dfce" /> 
<img width="1896" src="https://github.com/user-attachments/assets/9dec083e-803a-417d-b16c-a7dfc5eb4121" /> 
<img width="1896" src="https://github.com/user-attachments/assets/b7cea401-c301-47de-80bc-de0d6bc56029" />

### 📱 Tablet / Medium View

<img width="557" src="https://github.com/user-attachments/assets/52730f67-48a4-490d-8027-a318c116f750" /> 
<img width="557" src="https://github.com/user-attachments/assets/54531d8c-51b4-47a4-afd3-1bdb0db02973" />

### 📱 Mobile View

<img width="340" src="https://github.com/user-attachments/assets/0fc21b64-c5e0-4fed-a617-1aa8c04129bc" /> 
<img width="327" src="https://github.com/user-attachments/assets/318f9698-f759-429b-91d6-a98f8efebf6a" /> 
<img width="314" src="https://github.com/user-attachments/assets/6ff8d6c3-3c6e-435a-8d47-ab5c9f7ca7c1" />

---

## 🚀 Features

### 🔥 Core Highlights

- **Stunning Hero Section:** Parallax mountain background
- **Sticky Navigation:** Mobile-friendly
- **Event Spotlight (F1 Japan):** WhatsApp CTA
- **Animated Package Slider**
- **Why Choose Us:** Live stats & icons
- **Sample Itinerary Slider**
- **VIP Add-Ons:** Horizontal scroll
- **Fully responsive** across all devices

### 📝 Lead Capture Form

- Validates: name, email, phone, dropdown, message
- Inline error handling
- Success toast
- POST request to `/api/lead`
- Stores leads in `/data/leads.json`

### 🎞 Animations

- Fade-ins
- Hover scaling
- Staggered entrances
- Scroll-based animations

---

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide Icons**
- **React Hot Toast**

---

## ⚡ Installation

**1️⃣ Clone Repository**

```bash
git clone [https://github.com/yourusername/sports-travel-landing.git](https://github.com/Namrata0407/SRVIZ-Sports-Travel-.git)
cd SPVIZ-Sports-Travel
```

**2️⃣ Install Dependencies**

```bash
npm install
```

**3️⃣ Start Development Server**

```bash
npm run dev
```

Visit → [http://localhost:3000](http://localhost:3000)

---

## ✨ Functionalities

- Smooth navigation
- Event package sliders
- Animated stats
- Validated lead form
- JSON-based backend storage
- Mobile-friendly dropdown
- Scroll & hover animations

---

## 📦 Folder Structure

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

- **Desktop:** Multi-column layout
- **Tablet:** Two-column layout
- **Mobile:** Stacked with horizontal sliders
- **Dropdown:** Optimized for small screens

---

## 🎨 Customization

- **Colors:** `tailwind.config.ts`
- **Fonts:** `globals.css`
- **Packages:** `/data/packages.json`
- **Lead storage:** `/data/leads.json`

---

## 📝 License

MIT — free for personal or commercial use.
