# SPECTRA Dashboard

A modern, responsive React dashboard application built with Vite and Tailwind CSS. SPECTRA provides a comprehensive overview of business metrics with interactive charts, real-time data visualization, and a sleek dark theme design.

![SPECTRA Dashboard](https://via.placeholder.com/800x400/242529/FFFFFF?text=SPECTRA+Dashboard)

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Dark Theme**: Modern dark theme with purple and orange accent colors
- **Interactive Components**: Animated charts, progress indicators, and data visualizations
- **Real-time Data**: Dynamic data updates with smooth animations
- **Mobile-First**: Optimized mobile experience with collapsible sidebar
- **Modern UI/UX**: Clean, professional interface with hover effects and transitions

## Dashboard Components

- **Profit Card**: Displays current profit with percentage change
- **Sales Report**: Interactive chart showing weekly earnings and payments
- **Analytical AI**: Multi-segment circular progress chart with animated segments
- **Invoices Table**: Customer invoice management with status indicators
- **Activity Card**: Overview of transactions, sales, payouts, and reports
- **Circular Progress**: Animated donut charts with gradient fills

## 🛠️ Tech Stack

### Core Technologies

- **React 18.3.1**: Modern React with hooks and functional components
- **Vite 5.4.1**: Fast build tool and development server
- **Tailwind CSS 4.1.11**: Utility-first CSS framework for rapid UI development

### Key Libraries

- **Lucide React 0.525.0**: Beautiful, customizable icons
- **@tailwindcss/vite**: Tailwind CSS integration for Vite

### Development Tools

- **ESLint**: Code linting and formatting
- **TypeScript Support**: Type definitions for React and React DOM

## Installation & Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd final-assignment
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Start development server**

   ```bash
   npm run dev
   ```
4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## Design Decisions

### Color Scheme

- **Primary Background**: `#242529` (Dark gray)
- **Secondary Background**: `#181a20` (Darker gray)
- **Accent Colors**: Purple (`#8B5CF6`) to Orange (`#F59E0B`) gradient
- **Text Colors**: White for primary text, gray-400 for secondary text

### Component Architecture

- **Modular Design**: Each dashboard component is self-contained
- **Reusable Components**: CircularProgress, MiniChart, and cards are reusable
- **State Management**: Local state with React hooks for component-specific data
- **Responsive Grid**: CSS Grid with responsive breakpoints for optimal layout

### Animation Strategy

- **Smooth Transitions**: CSS transitions for hover effects and state changes
- **JavaScript Animations**: RequestAnimationFrame for complex chart animations
- **Staggered Effects**: Sequential animation of chart segments for visual appeal

### Responsive Improvements

- **Mobile-First Design**: All components optimized for mobile screens first
- **Adaptive Spacing**: Dynamic padding and margins based on screen size
- **Flexible Typography**: Font sizes that scale appropriately across devices
- **Smart Grid System**: CSS Grid with responsive breakpoints for optimal layout
- **Touch Optimization**: Larger touch targets and improved mobile navigation

## 📱 Responsive Design

The dashboard is built with a mobile-first approach and optimized for all screen sizes:

### Breakpoints & Layout

- **Mobile (< 640px)**: Single column layout with collapsible sidebar, optimized touch targets
- **Small Tablet (640px - 1024px)**: Responsive grid with adaptive spacing
- **Large Tablet (1024px - 1280px)**: Two-column grid with sidebar
- **Desktop (> 1280px)**: Full three-column grid with persistent sidebar

### Mobile Features

- **Hamburger Menu**: Collapsible sidebar with smooth animations
- **Touch-Friendly**: Optimized button sizes and spacing for mobile interaction
- **Adaptive Typography**: Responsive font sizes that scale appropriately
- **Overlay Sidebar**: Full-screen overlay with backdrop for mobile navigation
- **Optimized Tables**: Horizontal scroll for data tables on small screens

### Responsive Components

- **Cards**: Adaptive padding and font sizes across breakpoints
- **Charts**: Responsive chart dimensions and readable labels
- **Tables**: Smart column hiding and horizontal scroll on mobile
- **Navigation**: Context-aware button placement and sizing

## Component Details

### CircularProgress Component

- Supports both single percentage and multi-segment donut charts
- Smooth animations using RequestAnimationFrame
- Gradient fills and customizable colors
- Responsive sizing with configurable dimensions

### Dashboard Layout

- Fixed sidebar with navigation items
- Dynamic content area with grid layout
- Header with search, notifications, and user profile
- Responsive grid system for optimal content organization

## 🔧 Customization

### Adding New Components

1. Create a new component in `src/component/`
2. Import and add to the Dashboard grid
3. Follow the existing component patterns for consistency

### Modifying Colors

Update the Tailwind CSS classes in components or modify the CSS custom properties for theme colors.

### Data Integration

Replace the mock data in `Dashboard.jsx` with real API calls or data sources.

## Demo & Screenshots

### Live Demo

[Add your deployed application URL here]

### Screen Recordings

[Add links to screen recordings showing the responsive behavior and animations]

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Lucide Icons](https://lucide.dev/) for the beautiful icon set
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the fast build tool
- [Unsplash](https://unsplash.com/) for placeholder images
