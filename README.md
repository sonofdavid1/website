# Star Health Insurance Agent Website

A modern, responsive website for Star Health Insurance agent in Akola, built with React, TypeScript, and Chakra UI.

## Features

- 🎨 Modern UI with smooth animations using Framer Motion
- 📱 Fully responsive design
- 🌓 Dark/Light mode support
- 🗺️ Google Maps integration
- 📝 Contact form with Google Sheets integration
- 💬 WhatsApp integration
- ⚡ Built with Vite for optimal performance

## Tech Stack

- React 18
- TypeScript
- Chakra UI
- Framer Motion
- Google Apps Script (for form handling)
- Vite

## Getting Started

1. Clone the repository:
```bash
git clone [your-repo-url]
cd star-health-insurance
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Environment Setup

1. Update the Google Apps Script URL in `src/components/Contact.tsx`
2. Update contact information in components as needed
3. Configure Google Maps API key if needed

## Project Structure

```
star-health-insurance/
├── public/              # Static assets
├── src/
│   ├── components/     # React components
│   ├── assets/        # Images and other assets
│   ├── App.tsx        # Main App component
│   └── main.tsx       # Entry point
├── index.html
└── package.json
```

## Components

- `Hero`: Landing section with agent introduction
- `About`: Information about Star Health Insurance
- `Features`: Key insurance features and benefits
- `Contact`: Contact form with Google Sheets integration
- `Navbar`: Navigation with dark mode toggle
- `Footer`: Contact information and social links

## Contact Form Integration

The contact form is integrated with Google Sheets using Google Apps Script. Form submissions are automatically saved to a spreadsheet for easy management.

## Deployment

The site can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages

## License

MIT License

## Contact

Dhananjay Masane
- Email: dhananjay.masane@starinsurance.in
- Phone: +91 9527607597
- Location: Shri Nagar, Old RTO Road, Akola - 444001
