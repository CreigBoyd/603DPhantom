603-design-wizard/
│
├── .env                         # Environment variables configuration
├── .eslintrc                    # ESLint configuration file
├── .gitignore                   # Git ignore rules
├── jsconfig                     # JavaScript/TypeScript config (path aliases etc.)
├── LICENSE                      # Project license file
├── next.config                  # Next.js configuration
├── package.json                 # Node.js package manifest
├── package-lock.json            # Auto-generated lock file for dependencies
├── postcss.config               # PostCSS configuration
├── README.md                    # Project documentation (this file)
├── tailwind.config.js           # Tailwind CSS configuration file
│
├── .github/                     # GitHub-specific configs, workflows, actions
├── .next/                      # Next.js build output (auto-generated)
├── node_modules/                # Project dependencies (auto-generated)
│
├── public/                     # Static files served by Next.js
│   ├── audio/                  # Audio assets
│   │   └── birds39-forest-20772
│   ├── background/             # Background images
│   │   └── phantom.png
│   ├── models/                 # 3D models and related assets
│   │   └── phantom.glb
│   ├── 603D_logo.svg           # Logo SVG file
│   ├── favicon.ico             # Browser favicon
│   ├── next.html               # Custom Next.js html template
│   ├── resume.pdf              # Resume PDF file
│   ├── site.manifest           # Web app manifest
│   └── vercel.html             # Vercel specific static file
│
├── src/                        # Application source code
│   ├── api/                   # API routes used by the app
│   │   └── contact/
│   │       └── route.js       # API handler for contact form submission
│   │
│   ├── app/                   # Next.js App Router pages & layouts
│   │   ├── about/
│   │   │   ├── head.js        # Head metadata for About page
│   │   │   └── page.js        # About page component
│   │   ├── contact/
│   │   │   ├── head.js        # Head metadata for Contact page
│   │   │   └── page.js        # Contact page component
│   │   ├── projects/
│   │   │   ├── head.js        # Head metadata for Projects page
│   │   │   ├── page.js        # Projects page component
│   │   │   └── services/      
│   │   │       ├── head.js    # Head metadata for Services page
│   │   │       ├── page.js    # Services page component
│   │   │       └── details/   
│   │   │           └── page.js # Detailed services page component
│   │   ├── layout.js          # Root layout for the app directory
│   │   └── main/
│   │       └── page.js        # Main landing/home page component
│   │
│   ├── components/            # Reusable React components organized by domain
│   │   ├── about/             # Components related to About pages/features
│   │   │   ├── index.jsx
│   │   │   └── itemLayout.jsx
│   │   ├── contact/           # Contact form and related UI components
│   │   │   └── Form.jsx
│   │   ├── footer/            # Footer component shared across app
│   │   │   └── Footer.jsx
│   │   ├── hooks/             # Custom React hooks (e.g. screen size)
│   │   │   └── useScreenSize.jsx
│   │   ├── logo603D/          # Brand logo component
│   │   │   └── Logo603D.jsx
│   │   ├── modal/             # Modal dialog component
│   │   │   └── Modal.jsx
│   │   ├── models/            # React components for 3D model rendering
│   │   │   └── Phanton.jsx
│   │   ├── navigation/       # Navigation components (Note: Check spelling!)
│   │   │   ├── index.jsx
│   │   │   └── NavButton.jsx
│   │   ├── projects/          # Project components and layouts
│   │   │   ├── index.jsx
│   │   │   └── ProjectLayout.jsx
│   │   ├── FireFliesBackground.jsx  # Background animation component
│   │   ├── HomeBtn.jsx               # Home button component
│   │   ├── MysticalSplash.jsx        # Animated splash UI component
│   │   ├── RenderModel.jsx           # 3D model rendering component
│   │   ├── ResponsiveComponent.jsx  # Responsive UI helper component
│   │   └── Sound.jsx                 # Sound management component
│   │
│   ├── data.js               # Data sources or constants
│   ├── globals.css           # Global tailwind and app styles
│   ├── layout.js             # Global layout for the site root
│   └── page.js               # Root page (may redirect or serve home)
│
└── README.md                 # Project overview and documentation (this file)