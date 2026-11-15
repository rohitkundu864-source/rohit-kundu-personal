const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const cssPath = path.join(rootDir, 'css', 'portfolio.css');
const publicCssPath = path.join(rootDir, 'public', 'css', 'portfolio.css');

let cssContent = fs.readFileSync(cssPath, 'utf8');

const bentoCssReplacement = `/* =========================================================
   TAMER MAGDY INSPIRED DRIBBLE BENTO HERO & SYSTEM
   ========================================================= */
.hero-section {
  padding-top: 6.5rem;
  padding-bottom: 2rem;
  position: relative;
  z-index: 2;
}

/* Outer Tablet Canvas Bezel matching reference Dribbble design */
.bento-canvas-frame {
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  border-radius: 36px;
  background: var(--bento-frame-bg);
  border: 1px solid var(--bento-frame-border);
  box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(255, 255, 255, 0.03);
  padding: 1.35rem;
  position: relative;
  transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

/* 5-Column Bento Grid matching exact reference design */
.bento-grid-dribbble {
  display: grid;
  grid-template-columns: 1.15fr 1fr 1.05fr 1.05fr 0.9fr;
  grid-auto-rows: minmax(135px, auto);
  gap: 1.1rem;
}

/* Base Bento Card */
.bento-card {
  border-radius: 22px;
  background: var(--bento-card-bg);
  border: 1px solid var(--bento-card-border);
  padding: 1.35rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, background 0.3s ease;
}

.bento-card:hover {
  transform: translateY(-2px);
  border-color: var(--bento-card-hover-border);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.4);
}

/* --- TILE 1: Intro Card (Spans Cols 1 & 2) --- */
.bento-card-intro {
  grid-column: 1 / 3;
  grid-row: 1;
  min-height: 200px;
  justify-content: space-between;
  padding: 1.6rem;
  background: var(--bento-card-bg);
}

.bento-intro-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.bento-status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.75rem;
  font-family: var(--font-mono);
  color: #34d399;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.25);
  padding: 0.28rem 0.75rem;
  border-radius: var(--radius-full);
  font-weight: 500;
}

.bento-intro-name {
  font-family: var(--font-heading);
  font-size: 2.15rem;
  font-weight: 700;
  color: var(--bento-text-title);
  line-height: 1.2;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
}

.bento-intro-bio {
  font-size: 0.95rem;
  color: var(--bento-text-body);
  line-height: 1.55;
  max-width: 95%;
}

/* --- MOCKUP CARDS (Tiles 2, 3, 7) --- */
.bento-card-mockup {
  padding: 0;
  cursor: pointer;
  position: relative;
  background: #000000;
}

.mockup-img-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.mockup-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.bento-card-mockup:hover .mockup-img-wrap img {
  transform: scale(1.06);
}

.mockup-badge {
  position: absolute;
  bottom: 0.85rem;
  left: 0.85rem;
  right: 0.85rem;
  padding: 0.4rem 0.75rem;
  border-radius: var(--radius-full);
  background: rgba(15, 17, 26, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #ffffff;
  font-size: 0.75rem;
  font-family: var(--font-mono);
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.25s ease;
  pointer-events: none;
}

.mockup-badge.light-badge {
  background: rgba(255, 255, 255, 0.85);
  color: #0f172a;
  border-color: rgba(0, 0, 0, 0.1);
}

.bento-card-mockup:hover .mockup-badge {
  background: rgba(99, 102, 241, 0.9);
  color: #ffffff;
  border-color: rgba(99, 102, 241, 0.5);
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
}

/* Tile 2: Dark Phone */
.bento-card-phone-dark {
  grid-column: 3;
  grid-row: 1;
  min-height: 200px;
}

/* Tile 3: Light Phone */
.bento-card-phone-light {
  grid-column: 4;
  grid-row: 1;
  min-height: 200px;
}

/* --- TILE 4: Social Icons Grid (Col 5) --- */
.bento-card-socials {
  grid-column: 5;
  grid-row: 1;
  min-height: 200px;
  padding: 1.1rem;
  justify-content: center;
  align-items: center;
}

.bento-socials-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.65rem;
  width: 100%;
}

.bento-social-btn {
  width: 44px;
  height: 44px;
  margin: 0 auto;
  border-radius: 50%;
  background: var(--bento-btn-bg);
  border: 1px solid var(--border-subtle);
  color: var(--bento-text-title);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.05rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.bento-social-btn:hover {
  background: var(--accent-primary);
  color: #ffffff;
  border-color: var(--accent-primary);
  transform: scale(1.12);
  box-shadow: 0 6px 18px rgba(99, 102, 241, 0.4);
}

/* --- TILE 5: Avatar Photo Card (Col 1) --- */
.bento-card-avatar {
  grid-column: 1;
  grid-row: 2;
  min-height: 170px;
  padding: 0;
  background: #000000;
}

.avatar-photo-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.avatar-photo-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: transform 0.4s ease;
}

.bento-card-avatar:hover .avatar-photo-wrap img {
  transform: scale(1.05);
}

.avatar-badge {
  position: absolute;
  bottom: 0.75rem;
  left: 0.75rem;
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-full);
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #ffffff;
  font-size: 0.72rem;
  font-family: var(--font-mono);
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

/* --- TILE 6: ABOUT Card (Col 2) --- */
.bento-card-about {
  grid-column: 2;
  grid-row: 2;
  min-height: 170px;
  justify-content: space-between;
  padding: 1.4rem;
  position: relative;
}

.bento-card-label {
  font-size: 0.72rem;
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--bento-text-muted);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.bento-about-quote {
  font-size: 0.98rem;
  font-weight: 600;
  color: var(--bento-text-title);
  line-height: 1.45;
  max-width: 85%;
}

.bento-arrow-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--bento-btn-bg);
  border: 1px solid var(--border-subtle);
  color: var(--bento-text-title);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.88rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s ease;
  position: absolute;
  right: 1.25rem;
  bottom: 1.25rem;
}

.bento-arrow-btn:hover {
  background: #ffffff;
  color: #090a0f;
  border-color: #ffffff;
  transform: scale(1.1) rotate(6deg);
  box-shadow: 0 6px 18px rgba(255, 255, 255, 0.25);
}

/* --- TILE 7: Laptop Mockup (Cols 3 & 4) --- */
.bento-card-laptop {
  grid-column: 3 / 5;
  grid-row: 2;
  min-height: 170px;
}

/* --- TILE 8: RESOURCES Card (Col 5) --- */
.bento-card-resources {
  grid-column: 5;
  grid-row: 2;
  min-height: 170px;
  justify-content: space-between;
  padding: 1.35rem;
  position: relative;
}

.bento-resources-text {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--bento-text-title);
  line-height: 1.45;
  max-width: 85%;
}

/* --- TILE 9: Newsletter Card (Cols 1 & 2) --- */
.bento-card-newsletter {
  grid-column: 1 / 3;
  grid-row: 3;
  min-height: 145px;
  justify-content: space-between;
  padding: 1.45rem;
}

.newsletter-headline {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--bento-text-title);
  line-height: 1.35;
  margin-bottom: 0.85rem;
}

.newsletter-form {
  width: 100%;
}

.newsletter-input-wrap {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--bento-input-bg);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-full);
  padding: 0.35rem 0.4rem 0.35rem 1rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.newsletter-input-wrap:focus-within {
  border-color: var(--accent-primary);
  box-shadow: 0 0 15px rgba(99, 102, 241, 0.2);
}

.newsletter-input {
  flex-grow: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--bento-text-title);
  font-family: var(--font-body);
  font-size: 0.86rem;
}

.newsletter-input::placeholder {
  color: var(--bento-text-muted);
}

.newsletter-btn {
  padding: 0.45rem 1.15rem;
  border-radius: var(--radius-full);
  background: var(--bento-btn-bg);
  border: 1px solid var(--border-subtle);
  color: var(--bento-text-title);
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.newsletter-btn:hover {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
  color: #ffffff;
  transform: translateY(-1px);
}

/* --- TILE 10: Stack I use (Col 3) --- */
.bento-card-stack {
  grid-column: 3;
  grid-row: 3;
  min-height: 145px;
  padding: 1.25rem;
  justify-content: space-between;
}

.bento-stack-icons {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  flex-wrap: wrap;
}

.stack-icon-pill {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--bento-btn-bg);
  border: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  transition: transform 0.2s ease, background 0.2s ease;
  cursor: pointer;
}

.stack-icon-pill:hover {
  transform: translateY(-3px) scale(1.08);
  background: rgba(255, 255, 255, 0.12);
}

/* --- TILE 11: Theme Switcher Card (Col 4) --- */
.bento-card-theme {
  grid-column: 4;
  grid-row: 3;
  min-height: 145px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 1rem;
}

.theme-switch-pill {
  width: 68px;
  height: 36px;
  border-radius: var(--radius-full);
  background: var(--bento-input-bg);
  border: 1px solid var(--border-subtle);
  position: relative;
  display: flex;
  align-items: center;
  padding: 3px;
  transition: background 0.3s ease, border-color 0.3s ease;
}

.theme-knob {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #ffffff;
  color: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.88rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease, color 0.3s ease;
  transform: translateX(0);
}

[data-theme="light"] .theme-knob {
  transform: translateX(32px);
  background: #f59e0b;
  color: #ffffff;
}

.bento-card-theme:hover .theme-switch-pill {
  border-color: var(--accent-primary);
  box-shadow: 0 0 16px rgba(99, 102, 241, 0.25);
}

/* --- TILE 12: Have a project in mind? (Col 5) --- */
.bento-card-project-mind {
  grid-column: 5;
  grid-row: 3;
  min-height: 145px;
  padding: 1.25rem;
  justify-content: space-between;
}

.project-mind-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--bento-text-title);
  line-height: 1.35;
}

.btn-bento-copy-email {
  width: 100%;
  padding: 0.5rem 0.85rem;
  border-radius: var(--radius-full);
  background: var(--bento-btn-bg);
  border: 1px solid var(--border-subtle);
  color: var(--bento-text-title);
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-bento-copy-email:hover {
  background: var(--accent-primary);
  color: #ffffff;
  border-color: var(--accent-primary);
  transform: translateY(-1px);
}

.btn-bento-copy-email.copied {
  background: rgba(16, 185, 129, 0.25);
  border-color: #10b981;
  color: #34d399;
}

/* =========================================================
   PUBLIC DEVELOPER DASHBOARD SECTION
   ========================================================= */
.public-dashboard-section {
  padding: 2.5rem 0 3.5rem 0;
  position: relative;
  z-index: 2;
}

.public-dashboard-card {
  border-radius: 28px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: 2rem;
  box-shadow: var(--shadow-lg);
}

.dashboard-header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-subtle);
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.dashboard-badge-live {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.72rem;
  font-family: var(--font-mono);
  letter-spacing: 0.08em;
  color: #6366f1;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.25);
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-full);
  margin-bottom: 0.4rem;
  font-weight: 600;
}

.dashboard-title {
  font-size: 1.65rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.01em;
}

.dashboard-subtitle {
  font-size: 0.88rem;
  color: var(--text-secondary);
}

.dashboard-actions-group .admin-portal-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.35);
  color: #a5b4fc;
  font-weight: 600;
  border-radius: var(--radius-full);
  text-decoration: none;
  transition: all 0.2s ease;
}

.dashboard-actions-group .admin-portal-btn:hover {
  background: #6366f1;
  color: #ffffff;
  border-color: #6366f1;
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
  transform: translateY(-2px);
}

.dashboard-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.dash-stat-tile {
  border-radius: 18px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.dash-stat-tile:hover {
  transform: translateY(-2px);
  border-color: var(--border-glow);
}

.stat-icon-wrap {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
}

.dash-stat-tile .stat-content {
  display: flex;
  flex-direction: column;
}

.dash-stat-tile .stat-number {
  font-family: var(--font-heading);
  font-size: 1.85rem;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1.1;
}

.dash-stat-tile .stat-title {
  font-size: 0.78rem;
  color: var(--text-secondary);
  font-weight: 500;
  margin-top: 0.2rem;
}

.dash-stat-tile .stat-delta {
  font-size: 0.74rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--font-mono);
}

.dash-stat-tile .stat-delta.positive {
  color: #34d399;
}

.dashboard-quick-nav {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-subtle);
}

.quick-nav-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-full);
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.quick-nav-pill:hover {
  background: var(--bg-card-hover);
  color: var(--text-primary);
  border-color: var(--border-glow);
  transform: translateY(-1px);
}

.quick-nav-pill.highlight-admin {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.3);
  color: #fca5a5;
  margin-left: auto;
}

.quick-nav-pill.highlight-admin:hover {
  background: #ef4444;
  color: #ffffff;
  border-color: #ef4444;
}

/* =========================================================
   RESPONSIVE MEDIA QUERIES FOR BENTO GRID
   ========================================================= */
@media (max-width: 1024px) {
  .bento-grid-dribbble {
    grid-template-columns: repeat(3, 1fr);
  }
  .bento-card-intro {
    grid-column: 1 / 3;
    grid-row: 1;
  }
  .bento-card-phone-dark {
    grid-column: 3;
    grid-row: 1;
  }
  .bento-card-phone-light {
    grid-column: 1;
    grid-row: 2;
  }
  .bento-card-socials {
    grid-column: 2;
    grid-row: 2;
  }
  .bento-card-avatar {
    grid-column: 3;
    grid-row: 2;
  }
  .bento-card-about {
    grid-column: 1;
    grid-row: 3;
  }
  .bento-card-laptop {
    grid-column: 2 / 4;
    grid-row: 3;
  }
  .bento-card-resources {
    grid-column: 1;
    grid-row: 4;
  }
  .bento-card-newsletter {
    grid-column: 2 / 4;
    grid-row: 4;
  }
  .bento-card-stack {
    grid-column: 1;
    grid-row: 5;
  }
  .bento-card-theme {
    grid-column: 2;
    grid-row: 5;
  }
  .bento-card-project-mind {
    grid-column: 3;
    grid-row: 5;
  }
  .dashboard-stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 680px) {
  .bento-canvas-frame {
    padding: 1rem;
    border-radius: 24px;
  }
  .bento-grid-dribbble {
    grid-template-columns: 1fr;
    gap: 0.85rem;
  }
  .bento-card-intro,
  .bento-card-phone-dark,
  .bento-card-phone-light,
  .bento-card-socials,
  .bento-card-avatar,
  .bento-card-about,
  .bento-card-laptop,
  .bento-card-resources,
  .bento-card-newsletter,
  .bento-card-stack,
  .bento-card-theme,
  .bento-card-project-mind {
    grid-column: 1 !important;
    grid-row: auto !important;
  }
  .bento-intro-name {
    font-size: 1.75rem;
  }
  .dashboard-stats-grid {
    grid-template-columns: 1fr;
  }
  .dashboard-header-bar {
    flex-direction: column;
    align-items: flex-start;
  }
  .quick-nav-pill.highlight-admin {
    margin-left: 0;
  }
}

`;

// Replace from "/* === HERO / HOME SECTION" up to "/* === ABOUT ME SECTION"
const heroStartIdx = cssContent.indexOf('/* =========================================================\n   HERO / HOME SECTION');
const altHeroStartIdx = heroStartIdx !== -1 ? heroStartIdx : cssContent.indexOf('/* =========================================================\r\n   HERO / HOME SECTION');
const aboutStartIdx = cssContent.indexOf('/* =========================================================\n   ABOUT ME SECTION');
const altAboutStartIdx = aboutStartIdx !== -1 ? aboutStartIdx : cssContent.indexOf('/* =========================================================\r\n   ABOUT ME SECTION');

const startIdx = heroStartIdx !== -1 ? heroStartIdx : altHeroStartIdx;
const endIdx = aboutStartIdx !== -1 ? aboutStartIdx : altAboutStartIdx;

if (startIdx !== -1 && endIdx !== -1) {
  cssContent = cssContent.substring(0, startIdx) + bentoCssReplacement + cssContent.substring(endIdx);
  fs.writeFileSync(cssPath, cssContent, 'utf8');
  fs.writeFileSync(publicCssPath, cssContent, 'utf8');
  console.log('Successfully updated portfolio.css and public/css/portfolio.css!');
} else {
  console.error('Could not find markers:', { startIdx, endIdx });
}

// Also sync index.html to public/index.html
const indexPath = path.join(rootDir, 'index.html');
const publicIndexPath = path.join(rootDir, 'public', 'index.html');
fs.copyFileSync(indexPath, publicIndexPath);
console.log('Synced index.html to public/index.html!');
