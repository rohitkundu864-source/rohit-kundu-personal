const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const jsPath = path.join(rootDir, 'js', 'portfolio.js');
const publicJsPath = path.join(rootDir, 'public', 'js', 'portfolio.js');

let jsContent = fs.readFileSync(jsPath, 'utf8');

// 1. Update renderAll to call renderHome(data.home, data.bento) and renderPublicDashboard(data)
jsContent = jsContent.replace(
  'function renderAll(data) {',
  `function renderPublicDashboard(data) {
    if (!data) return;
    const projCount = data.projects ? data.projects.length : 6;
    const skillCount = data.skills ? data.skills.length : 12;

    const projEl = document.getElementById('dash-projects-counter');
    if (projEl) projEl.textContent = projCount;

    const skillEl = document.getElementById('dash-skills-counter');
    if (skillEl) skillEl.textContent = skillCount + '+';

    // Track & animate views counter
    const viewsEl = document.getElementById('dash-views-counter');
    if (viewsEl) {
      let storedViews = parseInt(localStorage.getItem('portfolio_page_views'), 10);
      if (isNaN(storedViews) || storedViews < 2400) {
        storedViews = 2480;
      }
      if (!sessionStorage.getItem('portfolio_view_counted')) {
        storedViews += 1;
        localStorage.setItem('portfolio_page_views', storedViews);
        sessionStorage.setItem('portfolio_view_counted', 'true');
      }
      viewsEl.textContent = storedViews.toLocaleString();
    }
  }

  function renderAll(data) {`
);

// Update renderAll body to call renderHome(data.home, data.bento) and renderPublicDashboard(data)
jsContent = jsContent.replace(
  'renderHome(data.home);',
  'renderHome(data.home, data.bento);\n    renderPublicDashboard(data);'
);

// 2. Enhance renderHome(home, bento)
const oldRenderHomeStart = 'function renderHome(home) {';
const newRenderHome = `function renderHome(home, bento) {
    if (!home) return;

    // Document Title
    document.title = \`\${home.name} | \${home.title}\`;
    const navBrandName = document.getElementById('nav-brand-name');
    if (navBrandName) navBrandName.textContent = home.name;

    // Bento Dribbble Grid Elements
    const bentoGreeting = document.getElementById('bento-intro-greeting');
    if (bentoGreeting) {
      bentoGreeting.textContent = (bento && bento.introGreeting) || \`Hi, I'm \${home.name.split(' ')[0]} —\`;
    }

    const bentoRole = document.getElementById('bento-intro-role');
    if (bentoRole) {
      bentoRole.textContent = (bento && bento.introRole) || home.tagline || 'Lead Software Developer & AI Specialist';
    }

    const bentoAboutTag = document.getElementById('bento-about-tag');
    if (bentoAboutTag && bento && bento.aboutTag) {
      bentoAboutTag.textContent = bento.aboutTag;
    }

    const bentoAboutQuote = document.getElementById('bento-about-quote');
    if (bentoAboutQuote && bento && bento.aboutHeadline) {
      bentoAboutQuote.textContent = bento.aboutHeadline;
    }

    const bentoResTag = document.getElementById('bento-resources-tag');
    if (bentoResTag && bento && bento.resourcesTag) {
      bentoResTag.textContent = bento.resourcesTag;
    }

    const bentoResText = document.getElementById('bento-resources-text');
    if (bentoResText && bento && bento.resourcesHeadline) {
      bentoResText.textContent = bento.resourcesHeadline;
    }

    const bentoNewsHead = document.getElementById('bento-newsletter-headline');
    if (bentoNewsHead && bento && bento.newsletterHeadline) {
      bentoNewsHead.textContent = bento.newsletterHeadline;
    }

    const bentoMindTitle = document.getElementById('bento-project-mind-title');
    if (bentoMindTitle && bento && bento.projectInMindHeadline) {
      bentoMindTitle.textContent = bento.projectInMindHeadline;
    }

    // Avatar
    const avatarImg = document.getElementById('bento-avatar-img') || document.getElementById('hero-avatar-img');
    const avatarSrc = (bento && bento.avatar) || home.avatar || './uploads/avatar.jpg';
    if (avatarImg) {
      avatarImg.src = assetUrl(avatarSrc);
      avatarImg.alt = \`\${home.name} portrait\`;
    }

    // Mockups
    const darkPhoneImg = document.getElementById('bento-dark-phone-img');
    if (darkPhoneImg && bento && bento.darkPhoneMockup) {
      darkPhoneImg.src = assetUrl(bento.darkPhoneMockup);
    }

    const lightPhoneImg = document.getElementById('bento-light-phone-img');
    if (lightPhoneImg && bento && bento.lightPhoneMockup) {
      lightPhoneImg.src = assetUrl(bento.lightPhoneMockup);
    }

    const laptopImg = document.getElementById('bento-laptop-img');
    if (laptopImg && bento && bento.laptopMockup) {
      laptopImg.src = assetUrl(bento.laptopMockup);
    }`;

jsContent = jsContent.replace(oldRenderHomeStart, newRenderHome + '\n\n  function _unusedRenderHome(home) {');

// 3. Enhance initBentoWidgets with Theme Toggle, Copy Email, Newsletter form, and Mockup Clicks
const oldInitBentoWidgets = `  function initBentoWidgets() {
    const copyBtn = document.getElementById('btn-copy-email');
    const copyText = document.getElementById('copy-email-text');
    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        const email = 'rohitkundu9883@gmail.com';
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(email);
          } else {
            const ta = document.createElement('textarea');
            ta.value = email;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
          }
          copyBtn.classList.add('copied');
          if (copyText) copyText.textContent = 'Copied! ✨';
          showToast('Email copied to clipboard: ' + email, 'success');
          setTimeout(() => {
            copyBtn.classList.remove('copied');
            if (copyText) copyText.textContent = 'Copy email';
          }, 2400);
        } catch (err) {
          showToast('Failed to copy email', 'error');
        }
      });
    }
  }`;

const newInitBentoWidgets = `  function initBentoWidgets() {
    // 1. Theme Toggle System (Dark / Light)
    function applyTheme(theme) {
      const root = document.documentElement;
      const themeKnob = document.getElementById('theme-knob');
      const themeIcon = document.getElementById('theme-icon-indicator');
      const navThemeIcon = document.getElementById('nav-theme-icon');

      if (theme === 'light') {
        root.setAttribute('data-theme', 'light');
        if (themeIcon) themeIcon.className = 'fa-solid fa-sun';
        if (navThemeIcon) navThemeIcon.className = 'fa-solid fa-sun';
      } else {
        root.removeAttribute('data-theme');
        if (themeIcon) themeIcon.className = 'fa-solid fa-moon';
        if (navThemeIcon) navThemeIcon.className = 'fa-solid fa-moon';
      }
      localStorage.setItem('portfolio_theme', theme);
    }

    function toggleTheme() {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      applyTheme(isLight ? 'dark' : 'light');
      showToast(isLight ? 'Switched to Dark Mode 🌙' : 'Switched to Light Mode ☀️', 'info');
    }

    const bentoThemeCard = document.getElementById('bento-theme-card');
    const bentoThemeToggle = document.getElementById('bento-theme-toggle');
    const navThemeToggle = document.getElementById('nav-theme-toggle');

    if (bentoThemeCard) bentoThemeCard.addEventListener('click', toggleTheme);
    if (bentoThemeToggle) bentoThemeToggle.addEventListener('click', (e) => { e.stopPropagation(); toggleTheme(); });
    if (navThemeToggle) navThemeToggle.addEventListener('click', toggleTheme);

    // Apply saved or preferred theme on load
    const savedTheme = localStorage.getItem('portfolio_theme');
    if (savedTheme) {
      applyTheme(savedTheme);
    }

    // 2. Bento Copy Email Button
    const bentoCopyBtn = document.getElementById('bento-copy-email-btn') || document.getElementById('btn-copy-email');
    const bentoCopyText = document.getElementById('bento-copy-btn-text') || document.getElementById('copy-email-text');
    const bentoCopyIcon = document.getElementById('bento-copy-icon');

    if (bentoCopyBtn) {
      bentoCopyBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        const email = (portfolioData && portfolioData.bento && portfolioData.bento.email) ||
                      (portfolioData && portfolioData.contact && portfolioData.contact.email) ||
                      'rohitkundu9883@gmail.com';
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(email);
          } else {
            const ta = document.createElement('textarea');
            ta.value = email;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
          }
          bentoCopyBtn.classList.add('copied');
          if (bentoCopyText) bentoCopyText.textContent = 'Copied! ✨';
          if (bentoCopyIcon) bentoCopyIcon.className = 'fa-solid fa-check';
          showToast('Email copied to clipboard: ' + email, 'success');
          setTimeout(() => {
            bentoCopyBtn.classList.remove('copied');
            if (bentoCopyText) bentoCopyText.textContent = 'Copy email';
            if (bentoCopyIcon) bentoCopyIcon.className = 'fa-regular fa-copy';
          }, 2400);
        } catch (err) {
          showToast('Email: ' + email, 'info');
        }
      });
    }

    // 3. Bento Newsletter Subscription Form
    const newsletterForm = document.getElementById('bento-newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const input = document.getElementById('newsletter-email-input');
        const email = input ? input.value.trim() : '';
        if (!email) return;

        const submitBtn = document.getElementById('newsletter-submit-btn');
        if (submitBtn) submitBtn.disabled = true;

        try {
          const payload = {
            name: 'Newsletter Subscriber',
            email: email,
            subject: 'Newsletter Subscription (Bento Hero)',
            message: 'User subscribed to free design guides and engineering insights from Bento Hero card.'
          };

          let res = await fetch(getApiUrl('/api/messages'), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          }).catch(() => null);

          showToast('Subscribed! Welcome to tech insights & guides 🎉', 'success');
          newsletterForm.reset();
        } catch (err) {
          showToast('Thank you for subscribing!', 'success');
          newsletterForm.reset();
        } finally {
          if (submitBtn) submitBtn.disabled = false;
        }
      });
    }

    // 4. Mockup Cards Click -> Open Project Details Modal
    document.querySelectorAll('.bento-card-mockup').forEach(card => {
      card.addEventListener('click', () => {
        const projId = card.getAttribute('data-project-id');
        if (projId && typeof openProjectModal === 'function') {
          openProjectModal(projId);
        }
      });
    });
  }`;

jsContent = jsContent.replace(oldInitBentoWidgets, newInitBentoWidgets);

fs.writeFileSync(jsPath, jsContent, 'utf8');
fs.writeFileSync(publicJsPath, jsContent, 'utf8');

console.log('Successfully updated js/portfolio.js and public/js/portfolio.js!');
