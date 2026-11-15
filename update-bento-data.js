const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const portfolioPath = path.join(dataDir, 'portfolio.json');

const currentData = JSON.parse(fs.readFileSync(portfolioPath, 'utf8'));

// Add bento configuration
currentData.bento = {
  introGreeting: "Hi, I'm Rohit —",
  introRole: "Lead Software Developer & AI Specialist, building high-impact web apps and intelligent systems based in Kolkata, India",
  aboutTag: "ABOUT",
  aboutHeadline: "Passionate about software craftsmanship, clean code, and solving real-world problems with AI.",
  resourcesTag: "RESOURCES",
  resourcesHeadline: "Curated tools, verified credentials & frameworks to speed your workflow.",
  newsletterHeadline: "Get design tips & guides straight to your inbox for free!",
  newsletterPlaceholder: "Your email address",
  stackHeading: "Stack I use",
  projectInMindHeadline: "Have a project in mind?",
  darkPhoneMockup: "./uploads/bento_mobile_dark.jpg",
  darkPhoneTag: "Fintech UI · Mobile App",
  darkPhoneProjectId: "proj_cryptopulse",
  lightPhoneMockup: "./uploads/bento_mobile_light.jpg",
  lightPhoneTag: "Zenith Wellness · Mobile UI",
  lightPhoneProjectId: "proj_zenith",
  laptopMockup: "./uploads/bento_laptop.jpg",
  laptopTag: "Synergy SaaS Analytics",
  laptopProjectId: "proj_synergy",
  avatar: "./uploads/avatar.jpg",
  email: "rohitkundu9883@gmail.com"
};

// Add 3 showcase projects matching the Bento mockups
const showcaseProjects = [
  {
    id: "proj_cryptopulse",
    title: "CryptoPulse & Fintech Analytics",
    category: "Fintech",
    shortDesc: "A high-performance crypto portfolio tracking mobile app with real-time candlestick charts, multi-currency balances, and dark glassmorphic design.",
    fullDesc: "CryptoPulse is an enterprise-grade cryptocurrency analytics and portfolio tracking mobile application. Featuring sub-second live price streams via WebSockets, interactive candlestick and depth charts, automated profit/loss tax reporting, multi-wallet connectivity, and instant price anomaly alerts. Engineered with sleek dark-mode glassmorphism and intuitive touch interactions.",
    image: "./uploads/bento_mobile_dark.jpg",
    tags: ["React Native", "TypeScript", "Fintech", "Chart.js", "Web3 APIs"],
    liveUrl: "https://cryptopulse-demo.vercel.app",
    githubUrl: "https://github.com/rohitkundu/cryptopulse-fintech",
    featured: true,
    metrics: "Real-Time WebSocket · 50+ Coins",
    date: "2026"
  },
  {
    id: "proj_zenith",
    title: "Zenith Health & Daily Wellness Flow",
    category: "Web App",
    shortDesc: "A minimalist daily wellness and mindful activity tracker designed for balanced living, personalized meditation routines, and habit tracking.",
    fullDesc: "Zenith Health delivers a calming, distraction-free wellness experience. Users can start daily mindfulness flows, track yoga routines, schedule sleep habits, and review weekly vitality scores. Features clean rounded cards, warm organic palettes, offline audio support, and smooth micro-animations.",
    image: "./uploads/bento_mobile_light.jpg",
    tags: ["React", "TailwindCSS", "Progressive Web App", "Health & Wellness", "Mobile UI"],
    liveUrl: "https://zenith-flow-demo.vercel.app",
    githubUrl: "https://github.com/rohitkundu/zenith-wellness-app",
    featured: true,
    metrics: "PWA Offline · 10k+ Sessions",
    date: "2026"
  },
  {
    id: "proj_synergy",
    title: "Synergy SaaS Analytics Platform",
    category: "AI & Cloud",
    shortDesc: "An enterprise SaaS operations and user analytics dashboard with real-time revenue telemetry, conversion pipelines, and AI anomaly detection.",
    fullDesc: "Synergy Analytics provides engineering and product teams with deep operational clarity. It aggregates event streams across microservices, provides interactive cohort breakdown, monitors system latency, and uses machine learning models to forecast monthly MRR and churn risks.",
    image: "./uploads/bento_laptop.jpg",
    tags: ["Next.js", "Node.js", "TypeScript", "D3.js", "PostgreSQL", "Docker"],
    liveUrl: "https://synergy-analytics-demo.vercel.app",
    githubUrl: "https://github.com/rohitkundu/synergy-saas-platform",
    featured: true,
    metrics: "Sub-50ms Telemetry · AI Anomaly Alerts",
    date: "2026"
  }
];

// Prepend showcase projects if not already present
const existingIds = new Set(currentData.projects.map(p => p.id));
showcaseProjects.forEach(proj => {
  if (!existingIds.has(proj.id)) {
    currentData.projects.unshift(proj);
  }
});

// Add certificates
if (!currentData.certificates || currentData.certificates.length === 0) {
  currentData.certificates = [
    {
      id: "cert_aws",
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services (AWS)",
      issueDate: "2025",
      credentialUrl: "https://aws.amazon.com/certification/",
      badgeIcon: "fa-brands fa-aws",
      verifyText: "Verified Credential"
    },
    {
      id: "cert_meta",
      title: "Full-Stack Web & AI Engineering",
      issuer: "Meta / Coursera Professional",
      issueDate: "2025",
      credentialUrl: "https://coursera.org",
      badgeIcon: "fa-solid fa-brain",
      verifyText: "Verified Professional"
    }
  ];
}

// Update avatar to ./uploads/avatar.jpg
currentData.home.avatar = "./uploads/avatar.jpg";

// Write to all paths
const filesToWrite = [
  path.join(dataDir, 'portfolio.json'),
  path.join(__dirname, '..', 'portfolio.json'),
  path.join(__dirname, '..', 'public', 'data', 'portfolio.json')
];

const safeData = JSON.parse(JSON.stringify(currentData));
if (safeData.adminConfig) {
  delete safeData.adminConfig.password;
}

const safeJson = JSON.stringify(safeData, null, 2);
const fullJson = JSON.stringify(currentData, null, 2);

fs.writeFileSync(filesToWrite[0], fullJson, 'utf8');
fs.writeFileSync(filesToWrite[1], safeJson, 'utf8');
fs.writeFileSync(filesToWrite[2], safeJson, 'utf8');

const jsFallback = `window.__INITIAL_PORTFOLIO_DATA__ = ${safeJson};\n`;
fs.writeFileSync(path.join(dataDir, 'portfolio-data.js'), jsFallback, 'utf8');
fs.writeFileSync(path.join(__dirname, '..', 'public', 'data', 'portfolio-data.js'), jsFallback, 'utf8');

console.log('Successfully updated portfolio data with Bento fields and showcase projects!');
