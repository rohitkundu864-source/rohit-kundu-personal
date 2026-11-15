const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const adminHtmlPath = path.join(rootDir, 'admin.html');
const publicAdminHtmlPath = path.join(rootDir, 'public', 'admin.html');
const adminJsPath = path.join(rootDir, 'js', 'admin.js');
const publicAdminJsPath = path.join(rootDir, 'public', 'js', 'admin.js');

let adminHtml = fs.readFileSync(adminHtmlPath, 'utf8');

const bentoAdminPanel = `
        <!-- Bento Grid Hero Customizer Panel -->
        <div class="admin-panel" style="margin-top: 1.75rem;">
          <div class="admin-panel-header">
            <div class="panel-header-title">
              <i class="fa-solid fa-shapes" style="color: var(--admin-primary);"></i>
              <div>
                <h4>Bento Grid Showcase Layout</h4>
                <p>Customize the 12 tiles in your iconic Dribbble Bento Grid hero</p>
              </div>
            </div>
            <button type="button" class="admin-btn admin-btn-primary" id="btn-save-bento">
              <i class="fa-solid fa-floppy-disk"></i> Save Bento Changes
            </button>
          </div>

          <form id="form-bento" class="admin-form-grid">
            <div>
              <label class="admin-label">Intro Greeting (Tile 1)</label>
              <input type="text" id="bento-introGreeting" class="admin-input" placeholder="Hi, I'm Rohit —">
            </div>

            <div>
              <label class="admin-label">Intro Role & Location (Tile 1)</label>
              <input type="text" id="bento-introRole" class="admin-input" placeholder="Lead Software Developer & AI Specialist...">
            </div>

            <div class="form-col-full">
              <label class="admin-label">ABOUT Card Quote (Tile 6)</label>
              <textarea id="bento-aboutHeadline" class="admin-textarea" rows="2" placeholder="Passionate about software craftsmanship, clean code..."></textarea>
            </div>

            <div>
              <label class="admin-label">RESOURCES Card Headline (Tile 8)</label>
              <input type="text" id="bento-resourcesHeadline" class="admin-input" placeholder="Resources & tools to speed your workflow">
            </div>

            <div>
              <label class="admin-label">Newsletter Card Headline (Tile 9)</label>
              <input type="text" id="bento-newsletterHeadline" class="admin-input" placeholder="Get design tips & guides straight to your inbox for free!">
            </div>

            <div>
              <label class="admin-label">Dark Phone Mockup Image (Tile 2)</label>
              <input type="text" id="bento-darkPhoneMockup" class="admin-input" placeholder="./uploads/bento_mobile_dark.jpg">
            </div>

            <div>
              <label class="admin-label">Light Phone Mockup Image (Tile 3)</label>
              <input type="text" id="bento-lightPhoneMockup" class="admin-input" placeholder="./uploads/bento_mobile_light.jpg">
            </div>

            <div class="form-col-full">
              <label class="admin-label">Laptop Mockup Image (Tile 7)</label>
              <input type="text" id="bento-laptopMockup" class="admin-input" placeholder="./uploads/bento_laptop.jpg">
            </div>

            <div>
              <label class="admin-label">Project In Mind Email (Tile 12)</label>
              <input type="email" id="bento-email" class="admin-input" placeholder="rohitkundu9883@gmail.com">
            </div>
          </form>
        </div>
      </section>`;

// Replace closing </section> of tab-home
if (!adminHtml.includes('id="btn-save-bento"')) {
  adminHtml = adminHtml.replace(
    /<\/form>\s*<\/div>\s*<\/section>\s*<!-- ==================== TAB 3: ABOUT ME ==================== -->/,
    `</form>\n        </div>\n${bentoAdminPanel}\n\n      <!-- ==================== TAB 3: ABOUT ME ==================== -->`
  );
  fs.writeFileSync(adminHtmlPath, adminHtml, 'utf8');
  fs.writeFileSync(publicAdminHtmlPath, adminHtml, 'utf8');
  console.log('Updated admin.html and public/admin.html with Bento panel!');
}

// Update admin.js to handle populating and saving Bento fields
let adminJs = fs.readFileSync(adminJsPath, 'utf8');

const populateBentoSnippet = `
    // Populate Bento Fields
    const b = portfolioData.bento || {};
    const bGreeting = document.getElementById('bento-introGreeting');
    if (bGreeting) bGreeting.value = b.introGreeting || '';
    const bRole = document.getElementById('bento-introRole');
    if (bRole) bRole.value = b.introRole || '';
    const bAbout = document.getElementById('bento-aboutHeadline');
    if (bAbout) bAbout.value = b.aboutHeadline || '';
    const bRes = document.getElementById('bento-resourcesHeadline');
    if (bRes) bRes.value = b.resourcesHeadline || '';
    const bNews = document.getElementById('bento-newsletterHeadline');
    if (bNews) bNews.value = b.newsletterHeadline || '';
    const bDarkPhone = document.getElementById('bento-darkPhoneMockup');
    if (bDarkPhone) bDarkPhone.value = b.darkPhoneMockup || '';
    const bLightPhone = document.getElementById('bento-lightPhoneMockup');
    if (bLightPhone) bLightPhone.value = b.lightPhoneMockup || '';
    const bLaptop = document.getElementById('bento-laptopMockup');
    if (bLaptop) bLaptop.value = b.laptopMockup || '';
    const bEmail = document.getElementById('bento-email');
    if (bEmail) bEmail.value = b.email || '';
`;

if (!adminJs.includes('bento-introGreeting')) {
  adminJs = adminJs.replace(
    'document.getElementById(\'home-avatar-preview\').src = h.avatar || \'./uploads/avatar.jpg\';',
    `document.getElementById('home-avatar-preview').src = h.avatar || './uploads/avatar.jpg';\n${populateBentoSnippet}`
  );

  const saveBentoSnippet = `
    // SAVE BENTO HERO GRID
    const btnSaveBento = document.getElementById('btn-save-bento');
    if (btnSaveBento) {
      btnSaveBento.addEventListener('click', async () => {
        const origText = btnSaveBento.innerHTML;
        btnSaveBento.disabled = true;
        btnSaveBento.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Saving Bento...';

        try {
          const body = {
            introGreeting: document.getElementById('bento-introGreeting').value.trim(),
            introRole: document.getElementById('bento-introRole').value.trim(),
            aboutHeadline: document.getElementById('bento-aboutHeadline').value.trim(),
            resourcesHeadline: document.getElementById('bento-resourcesHeadline').value.trim(),
            newsletterHeadline: document.getElementById('bento-newsletterHeadline').value.trim(),
            darkPhoneMockup: document.getElementById('bento-darkPhoneMockup').value.trim(),
            lightPhoneMockup: document.getElementById('bento-lightPhoneMockup').value.trim(),
            laptopMockup: document.getElementById('bento-laptopMockup').value.trim(),
            email: document.getElementById('bento-email').value.trim()
          };

          const res = await authFetch('/api/bento', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
          });

          if (!res.ok) throw new Error('Failed to save Bento configuration');
          showToast('Bento Showcase updated and synced live in real time! ✨', 'success');
          notifyLiveSync();
        } catch (err) {
          showToast(err.message, 'error');
        } finally {
          btnSaveBento.disabled = false;
          btnSaveBento.innerHTML = origText;
        }
      });
    }
`;

  adminJs = adminJs.replace(
    '// 1. SAVE HOME / HERO',
    `${saveBentoSnippet}\n    // 1. SAVE HOME / HERO`
  );

  fs.writeFileSync(adminJsPath, adminJs, 'utf8');
  fs.writeFileSync(publicAdminJsPath, adminJs, 'utf8');
  console.log('Updated js/admin.js and public/js/admin.js with Bento handlers!');
}
