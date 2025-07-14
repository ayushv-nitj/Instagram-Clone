# InstaVibe - Modern Instagram Clone

A beautiful, responsive Instagram clone built with Next.js 14, TypeScript, and Tailwind CSS. Features a modern dark theme with a unique color palette and smooth animations.

## ✨ Features

- **Modern Dark Theme**: Beautiful dark color scheme with blue, purple, and orange accents
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Stories**: Instagram-style stories with gradient borders and hover effects
- **Post Feed**: Full-featured posts with likes, comments, and save functionality
- **User Suggestions**: Sidebar with user suggestions and follow/unfollow functionality
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Glass Morphism**: Modern glass-like effects on header and cards
- **Gradient Text**: Beautiful gradient text effects for branding

## 🎨 Design Highlights

- **Color Palette**: 
  - Primary: Blue (#0ea5e9)
  - Secondary: Purple (#d946ef) 
  - Accent: Orange (#f97316)
  - Background: Dark navy (#0f0f23)
  - Cards: Deep blue (#16213e)

- **Typography**: Inter font family for modern, clean look
- **Animations**: Smooth hover effects, scale transitions, and fade-ins
- **Glass Effects**: Backdrop blur and transparency for modern UI

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd instagram-clone
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge
- **Images**: Unsplash (for demo content)

## 📱 Responsive Design

The app is fully responsive and optimized for:
- **Desktop**: Full layout with sidebar
- **Tablet**: Adaptive layout with collapsible sidebar
- **Mobile**: Mobile-first design with touch-friendly interactions

## 🎯 Key Components

- **Header**: Navigation with search and action buttons
- **Stories**: Horizontal scrollable stories with gradient borders
- **Posts**: Interactive posts with like, comment, and save functionality
- **Sidebar**: User profile and suggestions panel
- **UI Components**: Reusable Button, Avatar, and utility components

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  primary: { /* Blue shades */ },
  secondary: { /* Purple shades */ },
  accent: { /* Orange shades */ },
  background: '#0f0f23',
  surface: '#1a1a2e',
  card: '#16213e',
}
```

### Animations
Custom animations are defined in the Tailwind config and can be modified to match your preferences.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📸 Screenshots

The app features:
- Dark theme with modern gradients
- Interactive stories with hover effects
- Responsive post feed
- User suggestions sidebar
- Smooth animations and transitions

---

Built with ❤️ using Next.js and Tailwind CSS 