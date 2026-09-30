/**
 * CHETAN KUMAR N K — CINEMATIC INTERACTIVE PORTFOLIO ENGINE
 * Technologies: Canvas Frame Interpolation, Lucide Icons, Vanilla JS Architecture
 */

(() => {
  'use strict';

  /* ==========================================================================
     1. CONTINUOUS HERO PORTRAIT VIDEO ENGINE & SCROLL STATES
     ========================================================================== */
  function setupBackgroundVideo() {
    const portraitVideo = document.getElementById('hero-portrait-video');

    function ensurePlay() {
      if (portraitVideo && portraitVideo.paused) {
        portraitVideo.play().catch(() => {});
      }
    }

    ensurePlay();
    document.addEventListener('touchstart', ensurePlay, { once: true, passive: true });
    document.addEventListener('click', ensurePlay, { once: true, passive: true });
  }

  /* ==========================================================================
     2. DYNAMIC DOM COMPONENT RENDERERS
     ========================================================================== */

  // Growth Timeline
  function renderGrowthTimeline() {
    const container = document.getElementById('growth-timeline-container');
    if (!container || !PORTFOLIO_DATA.growthTimeline) return;

    container.innerHTML = PORTFOLIO_DATA.growthTimeline.map(item => `
      <div class="growth-node flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="font-mono text-xs px-2 py-0.5 rounded-md bg-crimson/20 text-crimson-light font-bold">${item.phase}</span>
            <span class="font-mono text-xs text-slate-400 font-semibold">${item.year}</span>
          </div>
          <h4 class="font-outfit font-bold text-sm text-white mb-1.5">${item.title}</h4>
          <span class="font-mono text-[11px] text-pink-400 block mb-2">${item.subtitle}</span>
          <p class="font-sans text-xs text-slate-400 leading-relaxed">${item.description}</p>
        </div>
      </div>
    `).join('');
  }

  // Tech Stack & Interactive Filtering
  function renderTechStack(filterCategory = 'all') {
    const container = document.getElementById('tech-stack-container');
    if (!container || !PORTFOLIO_DATA.skills) return;

    const filtered = filterCategory === 'all' 
      ? PORTFOLIO_DATA.skills 
      : PORTFOLIO_DATA.skills.filter(s => s.category === filterCategory);

    container.innerHTML = filtered.map(cat => `
      <div class="glass-card p-6 sm:p-7 rounded-3xl border border-white/10 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-crimson/20 to-magenta/20 border border-crimson/30 flex items-center justify-center text-crimson-light">
              <i data-lucide="${cat.icon || 'cpu'}" class="w-5 h-5"></i>
            </div>
            <div>
              <h3 class="font-outfit font-bold text-base sm:text-lg text-white">${cat.category}</h3>
              <p class="font-sans text-[11px] text-slate-400">${cat.description}</p>
            </div>
          </div>

          <div class="flex flex-wrap gap-2 pt-2">
            ${cat.items.map(skill => `
              <div class="skill-tag flex items-center gap-1.5">
                <span>${skill.name}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  // Projects Section
  function renderProjects() {
    const container = document.getElementById('projects-list-container');
    if (!container || !PORTFOLIO_DATA.projects) return;

    container.innerHTML = PORTFOLIO_DATA.projects.map((proj, idx) => `
      <div class="glass-card p-6 sm:p-9 rounded-3xl border border-white/10 relative overflow-hidden group">
        <div class="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-crimson/10 via-magenta/5 to-transparent rounded-full filter blur-3xl pointer-events-none"></div>

        <div class="flex flex-col lg:flex-row items-start justify-between gap-6 mb-6">
          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-2.5 mb-3">
              <span class="font-mono text-xs px-2.5 py-0.5 rounded-full bg-crimson/20 border border-crimson/40 text-crimson-light font-bold">${proj.number}</span>
              <span class="font-mono text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">${proj.category}</span>
              <span class="font-mono text-xs px-2.5 py-0.5 rounded-full ${proj.status.includes('Grant') || proj.status.includes('Funded') ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'}">${proj.status}</span>
            </div>

            <h3 class="font-outfit font-extrabold text-2xl sm:text-3xl text-white mb-2 group-hover:text-crimson-light transition-colors">${proj.title}</h3>
            <p class="font-sans text-xs sm:text-sm text-pink-300/90 font-medium mb-4">${proj.tagline}</p>
            <p class="font-sans text-sm text-slate-300 leading-relaxed max-w-3xl">${proj.summary}</p>
          </div>

          <div class="flex flex-wrap lg:flex-col items-center gap-2.5 shrink-0 w-full lg:w-auto">
            <button class="view-project-btn w-full lg:w-auto px-5 py-2.5 rounded-xl font-outfit font-semibold text-xs text-white bg-gradient-to-r from-crimson to-magenta hover:brightness-110 shadow-glow transition-all flex items-center justify-center gap-2" data-id="${proj.id}">
              <i data-lucide="scan" class="w-3.5 h-3.5"></i>
              <span>View Deep Dive</span>
            </button>
            ${proj.github ? `
              <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="w-full lg:w-auto px-4 py-2.5 rounded-xl font-mono text-xs text-slate-300 bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                <svg class="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>Repository</span>
              </a>
            ` : ''}
          </div>
        </div>

        <!-- Interactive Architecture Pipeline Flow -->
        <div class="mt-6 pt-6 border-t border-white/10">
          <div class="flex items-center justify-between mb-3">
            <span class="font-mono text-[11px] text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <i data-lucide="workflow" class="w-3.5 h-3.5 text-crimson-light"></i>
              <span>System Architecture & Pipeline Flow</span>
            </span>
          </div>

          <div class="arch-flow">
            <div class="arch-flow-horizontal">
              ${proj.architecture.map((node, nIdx) => `
                <div class="arch-node group/node" title="${node.desc}">
                  <div class="text-white font-semibold mb-0.5 text-[11px] flex items-center gap-1">
                    <span class="text-crimson-light font-bold text-[10px]">${nIdx + 1}.</span>
                    <span>${node.step}</span>
                  </div>
                  <div class="text-[10px] text-slate-400 truncate hidden sm:block">${node.desc}</div>
                </div>
                ${nIdx < proj.architecture.length - 1 ? `<div class="arch-arrow hidden md:flex">→</div>` : ''}
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Tech Stack Pills -->
        <div class="flex flex-wrap items-center gap-1.5 mt-5">
          ${proj.technologies.map(t => `<span class="skill-tag text-[11px] py-0.5">${t}</span>`).join('')}
        </div>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  // Experience Section
  function renderExperience() {
    const container = document.getElementById('experience-container');
    if (!container || !PORTFOLIO_DATA.experience) return;

    container.innerHTML = PORTFOLIO_DATA.experience.map(exp => `
      <div class="relative group">
        <!-- Node indicator dot -->
        <div class="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-tr from-crimson to-magenta border-2 border-obsidian shadow-glow group-hover:scale-125 transition-transform"></div>

        <div class="glass-card p-6 sm:p-7 rounded-3xl border border-white/10">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span class="font-mono text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-pink-400 font-medium mb-1.5 inline-block">${exp.type}</span>
              <h3 class="font-outfit font-extrabold text-xl text-white">${exp.role}</h3>
              <p class="font-mono text-xs text-crimson-light font-semibold">${exp.organization} • <span class="text-slate-400">${exp.location}</span></p>
            </div>
            <span class="font-mono text-xs text-slate-400 shrink-0 bg-white/5 px-3 py-1 rounded-full border border-white/5">${exp.period}</span>
          </div>

          <p class="font-sans text-sm text-slate-300 leading-relaxed mb-4">${exp.description}</p>

          <ul class="space-y-2 border-t border-white/10 pt-4">
            ${exp.bulletPoints.map(pt => `
              <li class="font-sans text-xs sm:text-sm text-slate-400 flex items-start gap-2.5">
                <i data-lucide="check-circle-2" class="w-4 h-4 text-crimson-light shrink-0 mt-0.5"></i>
                <span>${pt}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  // Achievements & Journey
  function renderAchievements() {
    const container = document.getElementById('achievements-container');
    if (!container || !PORTFOLIO_DATA.achievements) return;

    container.innerHTML = PORTFOLIO_DATA.achievements.map(ach => `
      <div class="glass-card p-6 rounded-3xl border border-white/10 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="font-mono text-xs px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold">${ach.badge}</span>
            <span class="font-mono text-xs text-slate-400 font-semibold">${ach.date}</span>
          </div>

          <h4 class="font-outfit font-bold text-base sm:text-lg text-white mb-1.5">${ach.title}</h4>
          <span class="font-mono text-xs text-pink-400 block mb-3">${ach.organization}</span>
          <p class="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">${ach.description}</p>
        </div>

        <div class="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
          <span class="font-mono text-[10px] text-slate-500 uppercase">${ach.category}</span>
          <i data-lucide="award" class="w-4 h-4 text-amber-400/80"></i>
        </div>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  // Certifications Wall
  function renderCertifications() {
    const container = document.getElementById('certifications-container');
    if (!container || !PORTFOLIO_DATA.certifications) return;

    container.innerHTML = PORTFOLIO_DATA.certifications.map(cert => `
      <div class="glass-card p-6 rounded-3xl border border-white/10 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">${cert.badge}</span>
            <i data-lucide="shield-check" class="w-5 h-5 text-emerald-400"></i>
          </div>

          <h4 class="font-outfit font-bold text-base sm:text-lg text-white mb-1">${cert.title}</h4>
          <span class="font-mono text-xs text-pink-400 block mb-2">${cert.issuer}</span>
          <p class="font-sans text-xs text-slate-400 mb-4">${cert.focus}</p>

          <div class="flex flex-wrap gap-1.5">
            ${cert.skills.map(s => `<span class="skill-tag text-[10px] py-0.5">${s}</span>`).join('')}
          </div>
        </div>

        <div class="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
          <span class="font-mono text-[10px] text-slate-500">Verified Credential</span>
          <a href="${cert.credentialUrl}" target="_blank" rel="noopener noreferrer" class="text-xs font-mono text-crimson-light hover:underline flex items-center gap-1">
            <span>Verify on LinkedIn</span>
            <i data-lucide="external-link" class="w-3 h-3"></i>
          </a>
        </div>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  }

  /* ==========================================================================
     3. PROJECT DETAIL MODAL INTERACTION
     ========================================================================== */
  function setupProjectModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    const closeBottomBtn = document.getElementById('modal-close-bottom-btn');
    const modalBody = document.getElementById('modal-project-body');
    const modalTitle = document.getElementById('modal-project-title');
    const modalCategory = document.getElementById('modal-project-category');
    const modalNumber = document.getElementById('modal-project-number');
    const modalStatus = document.getElementById('modal-project-status');
    const modalGithub = document.getElementById('modal-project-github');

    function openModal(projectId) {
      const proj = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
      if (!proj || !modal) return;

      modalTitle.textContent = proj.title;
      modalCategory.textContent = proj.category;
      modalNumber.textContent = proj.number;
      modalStatus.innerHTML = `Status: <span class="text-white font-medium">${proj.status}</span>`;

      if (proj.github) {
        modalGithub.href = proj.github;
        modalGithub.classList.remove('hidden');
      } else {
        modalGithub.classList.add('hidden');
      }

      modalBody.innerHTML = `
        <div class="space-y-6">
          
          <!-- Summary Box -->
          <div class="p-5 rounded-2xl bg-white/5 border border-white/10">
            <h4 class="font-mono text-xs text-crimson-light uppercase tracking-wider mb-2">Executive Summary</h4>
            <p class="font-sans text-sm text-slate-200 leading-relaxed">${proj.summary}</p>
          </div>

          <!-- Problem & Solution 2-Col -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-5 rounded-2xl bg-rose-950/20 border border-rose-800/30">
              <h5 class="font-outfit font-bold text-sm text-rose-300 flex items-center gap-2 mb-2">
                <i data-lucide="alert-circle" class="w-4 h-4"></i>
                <span>Problem Statement</span>
              </h5>
              <p class="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">${proj.problem}</p>
            </div>

            <div class="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-800/30">
              <h5 class="font-outfit font-bold text-sm text-emerald-300 flex items-center gap-2 mb-2">
                <i data-lucide="check-circle" class="w-4 h-4"></i>
                <span>Engineered Solution</span>
              </h5>
              <p class="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">${proj.solution}</p>
            </div>
          </div>

          <!-- Architecture Breakdown -->
          <div>
            <h4 class="font-outfit font-bold text-base text-white mb-3 flex items-center gap-2">
              <i data-lucide="cpu" class="w-4 h-4 text-crimson-light"></i>
              <span>Pipeline & Architecture Steps</span>
            </h4>
            <div class="space-y-2.5">
              ${proj.architecture.map((step, idx) => `
                <div class="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                  <span class="font-mono text-xs px-2 py-0.5 rounded bg-crimson/20 text-crimson-light font-bold shrink-0">${idx + 1}</span>
                  <div>
                    <h6 class="font-outfit font-semibold text-xs sm:text-sm text-white">${step.step}</h6>
                    <p class="font-sans text-xs text-slate-400 mt-0.5">${step.desc}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Key Contributions -->
          <div>
            <h4 class="font-outfit font-bold text-base text-white mb-3 flex items-center gap-2">
              <i data-lucide="user-check" class="w-4 h-4 text-magenta-light"></i>
              <span>Personal Contributions & Engineering Scope</span>
            </h4>
            <ul class="space-y-2">
              ${proj.contributions.map(c => `
                <li class="font-sans text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                  <i data-lucide="chevron-right" class="w-4 h-4 text-magenta-light shrink-0 mt-0.5"></i>
                  <span>${c}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Tech Stack Tags -->
          <div>
            <h4 class="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2.5">Technologies & Toolchains</h4>
            <div class="flex flex-wrap gap-2">
              ${proj.technologies.map(t => `<span class="skill-tag">${t}</span>`).join('')}
            </div>
          </div>

        </div>
      `;

      if (window.lucide) window.lucide.createIcons();

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      if (!modal) return;
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }

    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.view-project-btn');
      if (btn) {
        const id = btn.getAttribute('data-id');
        openModal(id);
      }
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (closeBottomBtn) closeBottomBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
      }
    });
  }

  /* ==========================================================================
     4. ATS COVER LETTER GENERATOR LOGIC
     ========================================================================== */
  const COVER_LETTER_PRESETS = {
    aiml: {
      role: 'AI / Machine Learning Engineer Intern',
      company: 'Anthropic',
      keywords: 'Machine Learning, Deep Learning, Python, FastAPI, Model Context Protocol, IoT, Computer Vision'
    },
    genai: {
      role: 'Generative AI & RAG Developer',
      company: 'OpenAI',
      keywords: 'RAG Architectures, ChromaDB, LangChain, Mistral AI, HuggingFace, Prompt Engineering, Whisper'
    },
    data: {
      role: 'Data Analytics & Insights Intern',
      company: 'Deloitte',
      keywords: 'Data Cleaning, EDA, Customer Segmentation, Python, Pandas, SQL, Tableau, Power BI'
    },
    automation: {
      role: 'AI Workflow Automation Engineer',
      company: 'n8n Enterprise',
      keywords: 'n8n, Workflow Automation, REST APIs, Webhooks, LLM Integration, Autonomous Agents'
    }
  };

  function generateCoverLetter() {
    const company = document.getElementById('cl-company')?.value.trim() || '[Company Name]';
    const role = document.getElementById('cl-role')?.value.trim() || '[Job Title]';
    const keywords = document.getElementById('cl-keywords')?.value.trim() || 'AI, Machine Learning, Python';

    const p = PORTFOLIO_DATA.personal;
    const body = document.getElementById('cl-output-body');
    if (!body) return;

    const letterHtml = `
      <div class="space-y-4">
        <div class="border-b border-white/10 pb-3">
          <p class="font-outfit font-bold text-white text-base">${p.name}</p>
          <p class="font-mono text-xs text-slate-400">${p.location} • ${p.phone} • <a href="mailto:${p.email}" class="text-crimson-light">${p.email}</a></p>
          <p class="font-mono text-xs text-slate-400"><a href="${p.links.linkedin}" target="_blank" class="text-sky-400">linkedin.com/in/chetankumarnk</a> • <a href="${p.links.github}" target="_blank" class="text-slate-300">github.com/chetankumar36</a></p>
        </div>

        <p class="text-slate-300"><strong>Date:</strong> ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <p class="text-slate-300">
          <strong>To:</strong> Hiring Team / Talent Acquisition<br />
          <strong>Company:</strong> ${company}<br />
          <strong>Position:</strong> ${role}
        </p>

        <p class="text-slate-200">
          Dear ${company} Hiring Team,
        </p>

        <p class="text-slate-300">
          I am writing to express my enthusiastic interest in the <strong>${role}</strong> position at <strong>${company}</strong>. As an Information Science & Engineering undergraduate at JNNCE (CGPA: 7.57/10, PUC: 92.00%) with practical engineering experience spanning Machine Learning, Generative AI, RAG pipelines, and autonomous workflow automation, I am excited about the prospect of contributing directly to your technical initiatives.
        </p>

        <p class="text-slate-300">
          My technical portfolio reflects a deep focus on turning intelligent algorithms into tangible systems:
        </p>

        <ul class="list-disc list-inside space-y-1.5 pl-2 text-slate-300">
          <li><strong>Generative AI & Contextual RAG:</strong> Architected <em>VideoMind AI</em>, an intelligent meeting analysis system leveraging Whisper, LangChain, HuggingFace embeddings, and ChromaDB for zero-hallucination question answering.</li>
          <li><strong>Edge AI & Funded Hardware Research:</strong> Awarded a ₹10,000 NewGen IEDC research grant to prototype <em>AID1</em>, an assistive wearable running optimized YOLO computer vision models on Raspberry Pi for real-time obstacle navigation.</li>
          <li><strong>Applied Data Analytics & Automation:</strong> Completed a Data Analytics Internship at <em>Oasis Infobyte</em> executing customer segmentation and EDA workflows, alongside designing production-grade autonomous email triage workflows in <em>n8n</em>.</li>
          <li><strong>Competitive Problem Solving & Community Leadership:</strong> Secured 1st Place at the MCE Hassan Ideathon, won collegiate UI/UX competitions, and actively advocate coding excellence as a HackerRank Campus Crew Member and IEEE Computer Society coordinator.</li>
        </ul>

        <p class="text-slate-300">
          With proven competency in <em>${keywords}</em>, I am eager to apply my analytical rigor and builder mindset to accelerate impactful solutions at <strong>${company}</strong>.
        </p>

        <p class="text-slate-300">
          Thank you for your time and consideration. I welcome the opportunity to discuss how my background and hands-on project experience align with your team's goals.
        </p>

        <p class="text-slate-200 pt-2">
          Sincerely,<br />
          <strong class="text-white">${p.name}</strong><br />
          <span class="font-mono text-xs text-slate-400">Information Science & Engineering • JNNCE</span>
        </p>
      </div>
    `;

    body.innerHTML = letterHtml;
  }

  function setupCoverLetterEvents() {
    const genBtn = document.getElementById('btn-generate-cover-letter');
    const copyBtn = document.getElementById('btn-copy-cl');
    const copyText = document.getElementById('copy-cl-text');
    const downloadBtn = document.getElementById('btn-download-cl');
    const presetBtns = document.querySelectorAll('.preset-btn');

    presetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        presetBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const presetKey = btn.getAttribute('data-preset');
        const p = COVER_LETTER_PRESETS[presetKey];
        if (p) {
          const cField = document.getElementById('cl-company');
          const rField = document.getElementById('cl-role');
          const kField = document.getElementById('cl-keywords');
          if (cField) cField.value = p.company;
          if (rField) rField.value = p.role;
          if (kField) kField.value = p.keywords;
          generateCoverLetter();
        }
      });
    });

    if (genBtn) {
      genBtn.addEventListener('click', generateCoverLetter);
    }

    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const body = document.getElementById('cl-output-body');
        if (!body) return;
        const text = body.innerText;
        navigator.clipboard.writeText(text).then(() => {
          if (copyText) copyText.textContent = 'Copied!';
          setTimeout(() => {
            if (copyText) copyText.textContent = 'Copy';
          }, 2000);
        });
      });
    }

    if (downloadBtn) {
      downloadBtn.addEventListener('click', () => {
        const body = document.getElementById('cl-output-body');
        if (!body) return;
        const text = body.innerText;
        const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Chetan_Kumar_N_K_Cover_Letter_${Date.now()}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });
    }

    generateCoverLetter();
  }

  /* ==========================================================================
     5. CUSTOM MAGNETIC CURSOR (DESKTOP)
     ========================================================================== */
  function setupCustomCursor() {
    const dot = document.getElementById('custom-cursor-dot');
    const ring = document.getElementById('custom-cursor-ring');
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    }, { passive: true });

    function renderCursor() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('a, button, input, textarea, .glass-card, .skill-tag, .arch-node')) {
        document.body.classList.add('cursor-hover');
      } else {
        document.body.classList.remove('cursor-hover');
      }
    });
  }

  /* ==========================================================================
     6. NAVBAR, SCROLL SPY & MOBILE MENU
     ========================================================================== */
  function setupNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('menu-icon-open');
    const iconClose = document.getElementById('menu-icon-close');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener('click', () => {
        const isClosed = mobileMenu.classList.contains('hidden');
        if (isClosed) {
          mobileMenu.classList.remove('hidden');
          mobileMenu.classList.add('flex');
          if (iconOpen) iconOpen.classList.add('hidden');
          if (iconClose) iconClose.classList.remove('hidden');
        } else {
          mobileMenu.classList.add('hidden');
          mobileMenu.classList.remove('flex');
          if (iconOpen) iconOpen.classList.remove('hidden');
          if (iconClose) iconClose.classList.add('hidden');
        }
      });

      document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          mobileMenu.classList.remove('flex');
          if (iconOpen) iconOpen.classList.remove('hidden');
          if (iconClose) iconClose.classList.add('hidden');
        });
      });
    }

    // Scroll spy for active section
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY + 200;

      sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, { passive: true });

    // Category filter buttons in skills
    const filterButtons = document.querySelectorAll('.tech-filter-btn');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-category');
        renderTechStack(cat);
      });
    });
  }

  /* ==========================================================================
     3B. RESUME PDF VIEWER MODAL INTERACTION
     ========================================================================== */
  function setupResumeModal() {
    const resumeModal = document.getElementById('resume-modal');
    const closeBtn = document.getElementById('resume-modal-close-btn');
    const closeBottomBtn = document.getElementById('resume-modal-close-bottom-btn');

    function openResumeModal() {
      if (!resumeModal) return;
      resumeModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeResumeModal() {
      if (!resumeModal) return;
      resumeModal.classList.add('hidden');
      document.body.style.overflow = '';
    }

    document.addEventListener('click', (e) => {
      if (e.target.closest('.open-resume-btn')) {
        e.preventDefault();
        openResumeModal();
      }
    });

    if (closeBtn) closeBtn.addEventListener('click', closeResumeModal);
    if (closeBottomBtn) closeBottomBtn.addEventListener('click', closeResumeModal);

    if (resumeModal) {
      resumeModal.addEventListener('click', (e) => {
        if (e.target === resumeModal) closeResumeModal();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && resumeModal && !resumeModal.classList.contains('hidden')) {
        closeResumeModal();
      }
    });
  }

  /* ==========================================================================
     7. INITIALIZATION
     ========================================================================== */
  function init() {
    renderGrowthTimeline();
    renderTechStack('all');
    renderProjects();
    renderExperience();
    renderAchievements();
    renderCertifications();

    setupProjectModal();
    setupResumeModal();
    setupCoverLetterEvents();
    setupCustomCursor();
    setupNavigation();
    setupBackgroundVideo();

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
