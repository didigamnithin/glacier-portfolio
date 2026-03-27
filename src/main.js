import "./style.css";

const CONTACT_EMAIL = "nithin.didigam@gmail.com";

const SOCIAL = {
  linkedin: "https://linkedin.com/in/didigamnithin",
  github: "https://github.com/dsrihith",
  x: "https://x.com/soul4tech",
};

const ICONS = {
  linkedin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  github: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
  x: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  arrowRight: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
  arrowUpRight: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`,
  zap: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
  compass: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`,
  activity: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`
};

document.querySelector("#app").innerHTML = `
<!-- Navigation -->
<nav class="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300" id="main-nav">
  <div class="container-main py-4 flex items-center justify-between">
    <a href="#" class="text-xl font-bold tracking-tight text-gray-900 flex items-center gap-1">
      nithin<span class="w-2 h-2 rounded-full bg-gray-900 inline-block"></span>
    </a>
    
    <button type="button" id="menu-toggle" class="md:hidden p-2 text-gray-600 rounded-md border border-gray-200" aria-expanded="false">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
    </button>

    <div class="hidden md:flex items-center gap-8">
      <a class="nav-link" href="#about">About</a>
      <a class="nav-link" href="#experience">Experience</a>
      <a class="nav-link" href="#impact">Impact</a>
      <a class="nav-link" href="#building">Building</a>
      <a href="mailto:\${CONTACT_EMAIL}" class="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-black transition-colors">Contact</a>
    </div>
  </div>

  <!-- Mobile Menu -->
  <div id="mobile-menu" class="hidden md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
    <div class="container-main py-4 flex flex-col gap-4">
      <a class="mobile-nav-link text-gray-600 font-medium" href="#about">About</a>
      <a class="mobile-nav-link text-gray-600 font-medium" href="#experience">Experience</a>
      <a class="mobile-nav-link text-gray-600 font-medium" href="#impact">Impact</a>
      <a class="mobile-nav-link text-gray-600 font-medium" href="#building">Building</a>
      <a class="mobile-nav-link text-gray-900 font-medium pt-2 border-t border-gray-100" href="mailto:\${CONTACT_EMAIL}">Contact</a>
    </div>
  </div>
</nav>

<main class="relative w-full overflow-hidden">

  <!-- ═══ HERO ═══ -->
  <section class="relative min-h-[90vh] flex items-center pt-20" id="hero">
    <div class="bg-grid"></div>
    <div class="container-main relative z-10 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
      
      <div class="flex-1 reveal w-full">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-sm font-medium text-gray-700 mb-6">
          <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Building AI Systems
        </div>
        
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight text-balance">
          I build things<br>that <span class="gradient-text">matter.</span>
        </h1>
        
        <p class="mt-6 text-lg md:text-xl text-gray-600 max-w-xl text-pretty leading-relaxed">
          Engineer at heart, builder by design. I design AI systems and ship products fast. Work hard, work smart, build asymmetric outcomes.
        </p>
        
        <div class="flex flex-wrap items-center gap-4 mt-10 reveal delay-1">
          <a href="#about" class="btn-primary">
            Let's Talk \${ICONS.arrowRight}
          </a>
          <a href="#building" class="btn-secondary">
            View Work
          </a>
        </div>
        
        <div class="flex items-center gap-6 mt-12 reveal delay-2">
          <a href="\${SOCIAL.linkedin}" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-900 transition-colors" aria-label="LinkedIn">\${ICONS.linkedin}</a>
          <a href="\${SOCIAL.github}" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-900 transition-colors" aria-label="GitHub">\${ICONS.github}</a>
          <a href="\${SOCIAL.x}" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-900 transition-colors" aria-label="X">\${ICONS.x}</a>
        </div>
      </div>

      <div class="flex-1 w-full max-w-lg md:max-w-none reveal delay-2">
        <div class="relative aspect-square md:aspect-[4/5] img-container shadow-2xl shadow-gray-200/50">
          <img src="/images/hero-tech.jpg" alt="Technology Setup" />
          <div class="absolute inset-0 bg-gradient-to-tr from-gray-900/20 to-transparent"></div>
        </div>
      </div>

    </div>
  </section>

  <!-- ═══ ABOUT: PHILOSOPHY + MINDSET ═══ -->
  <section class="section-padding bg-gray-50" id="about">
    <div class="container-main">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center reveal">
        <div class="order-2 md:order-1">
          <span class="text-label">Philosophy</span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6 tracking-tight text-balance">
            I don't believe in invisible limits.
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed text-pretty">
            Build fast, execute aggressively, learn constantly. Most people aren't limited by ability — they're limited by the stories they tell themselves. The gap between an idea and a shipped product is just focus and execution.
          </p>
        </div>
        <div class="order-1 md:order-2 img-container aspect-[4/3] shadow-lg">
          <img src="/images/philosophy.jpg" alt="Mountain peaks" loading="lazy" />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center mt-24 reveal">
        <div class="img-container aspect-[4/3] shadow-lg">
          <img src="/images/mindset.jpg" alt="Starry mountains" loading="lazy" />
        </div>
        <div>
          <span class="text-label">Mindset</span>
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6 tracking-tight text-balance">
            The asymmetric life.
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed text-pretty mb-8">
            Life doesn't have to be linear. You don't need 1,000 moves — you need a few asymmetric ones. Optimize for learning rate, surround yourself with builders, and create high-leverage outcomes.
          </p>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">Build habits</span>
            <span class="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">Learn by doing</span>
            <span class="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">Execute with urgency</span>
            <span class="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">Stay around builders</span>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- ═══ EXPERIENCE / JOURNEY ═══ -->
  <section class="section-padding bg-white" id="experience">
    <div class="container-main max-w-3xl">
      <div class="text-center mb-16 reveal">
        <span class="text-label">Journey</span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mt-4 tracking-tight">Where I've been</h2>
        <p class="text-lg text-gray-600 mt-4">Started with curiosity. Built momentum through execution.</p>
      </div>

      <div class="relative reveal delay-1 pl-4 md:pl-0">
        <div class="timeline-line md:left-[50%] md:translate-x-[-1px]"></div>
        
        <div class="flex flex-col gap-12">
          
          <div class="relative flex flex-col md:flex-row md:justify-between items-start md:items-center">
            <div class="md:w-[45%] md:text-right pb-4 md:pb-0 pl-10 md:pl-0">
              <span class="text-sm font-bold text-gray-400">Current</span>
              <h3 class="text-xl font-bold text-gray-900 mt-1">Independent Builder</h3>
              <p class="text-gray-600 mt-2 text-sm leading-relaxed">AI systems & workflows — building agentic systems that automate real-world work.</p>
            </div>
            <div class="timeline-dot md:left-[50%] md:translate-x-[-12px]"></div>
            <div class="md:w-[45%] hidden md:block"></div>
          </div>

          <div class="relative flex flex-col md:flex-row md:justify-between items-start md:items-center">
            <div class="md:w-[45%] hidden md:block"></div>
            <div class="timeline-dot md:left-[50%] md:translate-x-[-12px]"></div>
            <div class="md:w-[45%] pl-10 md:pl-8">
              <span class="text-sm font-bold text-gray-400">AI/ML Engineering</span>
              <h3 class="text-xl font-bold text-gray-900 mt-1">Tanla Platforms</h3>
              <p class="text-gray-600 mt-2 text-sm leading-relaxed">Automation & analytics at scale. Processing massive data volumes efficiently.</p>
            </div>
          </div>

          <div class="relative flex flex-col md:flex-row md:justify-between items-start md:items-center">
            <div class="md:w-[45%] md:text-right pb-4 md:pb-0 pl-10 md:pl-0">
              <span class="text-sm font-bold text-gray-400">Product & Integrations</span>
              <h3 class="text-xl font-bold text-gray-900 mt-1">Sprinklr</h3>
              <p class="text-gray-600 mt-2 text-sm leading-relaxed">Enterprise SaaS systems. Built resilient products with global engineering teams.</p>
            </div>
            <div class="timeline-dot md:left-[50%] md:translate-x-[-12px]"></div>
            <div class="md:w-[45%] hidden md:block"></div>
          </div>

          <div class="relative flex flex-col md:flex-row md:justify-between items-start md:items-center">
            <div class="md:w-[45%] hidden md:block"></div>
            <div class="timeline-dot md:left-[50%] md:translate-x-[-12px]"></div>
            <div class="md:w-[45%] pl-10 md:pl-8">
              <span class="text-sm font-bold text-gray-400">Data & Scale</span>
              <h3 class="text-xl font-bold text-gray-900 mt-1">Myntra</h3>
              <p class="text-gray-600 mt-2 text-sm leading-relaxed">Data engineering at one of India's largest e-commerce platforms.</p>
            </div>
          </div>

          <div class="relative flex flex-col md:flex-row md:justify-between items-start md:items-center">
            <div class="md:w-[45%] md:text-right pb-4 md:pb-0 pl-10 md:pl-0">
              <span class="text-sm font-bold text-gray-400">Foundation</span>
              <h3 class="text-xl font-bold text-gray-900 mt-1">IIT Kanpur</h3>
              <p class="text-gray-600 mt-2 text-sm leading-relaxed">Learned how to think. Built the mathematical foundation for everything after.</p>
            </div>
            <div class="timeline-dot md:left-[50%] md:translate-x-[-12px]"></div>
            <div class="md:w-[45%] hidden md:block"></div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <!-- ═══ IMPACT / STATS ═══ -->
  <section class="py-20 bg-gray-900 text-white" id="impact">
    <div class="container-main">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 reveal">
        <div class="text-center p-6 border-l border-white/10 first:border-l-0">
          <div class="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">12-55x</div>
          <p class="text-gray-400 text-sm font-medium uppercase tracking-wider">Cost reduction in AI</p>
        </div>
        <div class="text-center p-6 border-l border-white/10 first:border-l-0">
          <div class="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">100+</div>
          <p class="text-gray-400 text-sm font-medium uppercase tracking-wider">Campaigns automated</p>
        </div>
        <div class="text-center p-6 border-l border-white/10 first:border-l-0">
          <div class="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">500M+</div>
          <p class="text-gray-400 text-sm font-medium uppercase tracking-wider">Data points analyzed</p>
        </div>
        <div class="text-center p-6 border-l border-white/10 first:border-l-0">
          <div class="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">1st</div>
          <p class="text-gray-400 text-sm font-medium uppercase tracking-wider">Global Hackathon</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ BUILDING / PROJECTS ═══ -->
  <section class="section-padding bg-gray-50" id="building">
    <div class="container-main">
      <div class="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
        <div class="max-w-xl">
          <span class="text-label">Work</span>
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mt-4 tracking-tight text-balance">What I'm building</h2>
          <p class="text-lg text-gray-600 mt-4 text-pretty">I don't wait for perfect ideas. I start. Then figure it out.</p>
        </div>
        <div class="hidden md:block">
          <a href="https://github.com/dsrihith" target="_blank" rel="noopener noreferrer" class="text-gray-900 font-medium inline-flex items-center gap-2 hover:opacity-70 transition-opacity">
            View all on GitHub \${ICONS.arrowUpRight}
          </a>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 reveal delay-1">
        
        <div class="group bg-white rounded-2xl border border-gray-200 overflow-hidden card-hover">
          <div class="aspect-[16/9] overflow-hidden bg-gray-100">
            <img src="/images/ai-agents.jpg" alt="AI visualization" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" loading="lazy" />
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">AI Agents</h3>
            <p class="text-gray-600 leading-relaxed mb-6">Autonomous systems that drive real outcomes, not just demos. Building workflows that augment human capability.</p>
            <span class="inline-flex items-center text-sm font-semibold text-gray-900 gap-1 group-hover:gap-2 transition-all">
              Explore Project \${ICONS.arrowRight}
            </span>
          </div>
        </div>

        <div class="group bg-white rounded-2xl border border-gray-200 overflow-hidden card-hover">
          <div class="aspect-[16/9] overflow-hidden bg-gray-100">
            <img src="/images/automation.jpg" alt="Automation" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" loading="lazy" />
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Automation Systems</h3>
            <p class="text-gray-600 leading-relaxed mb-6">End-to-end pipelines replacing manual workflows. Saving hundreds of hours of repetitive organizational overhead.</p>
            <span class="inline-flex items-center text-sm font-semibold text-gray-900 gap-1 group-hover:gap-2 transition-all">
              Explore Project \${ICONS.arrowRight}
            </span>
          </div>
        </div>

        <div class="group bg-white rounded-2xl border border-gray-200 overflow-hidden card-hover">
          <div class="aspect-[16/9] overflow-hidden bg-gray-100">
            <img src="/images/marketplace.jpg" alt="Marketplaces" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" loading="lazy" />
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Marketplaces</h3>
            <p class="text-gray-600 leading-relaxed mb-6">Connecting supply and demand in new ways. Building the infrastructure and liquidity engines for modern trade.</p>
            <span class="inline-flex items-center text-sm font-semibold text-gray-900 gap-1 group-hover:gap-2 transition-all">
              Explore Project \${ICONS.arrowRight}
            </span>
          </div>
        </div>

        <div class="group bg-white rounded-2xl border border-gray-200 overflow-hidden card-hover">
          <div class="aspect-[16/9] overflow-hidden bg-gray-100">
            <img src="/images/experiments.jpg" alt="Experiments" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" loading="lazy" />
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Experiments</h3>
            <p class="text-gray-600 leading-relaxed mb-6">Rapid product builds to test ideas fast. Validating assumptions through code and early user feedback.</p>
            <span class="inline-flex items-center text-sm font-semibold text-gray-900 gap-1 group-hover:gap-2 transition-all">
              Explore Project \${ICONS.arrowRight}
            </span>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ═══ PRINCIPLES ═══ -->
  <section class="section-padding bg-white">
    <div class="container-main">
      <div class="text-center max-w-2xl mx-auto mb-16 reveal">
        <span class="text-label">Core Values</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-4 tracking-tight">Guiding Principles</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 reveal delay-1">
        
        <div class="p-8 rounded-2xl bg-gray-50 border border-gray-100 text-center card-hover">
          <div class="w-14 h-14 mx-auto bg-gray-900 text-white rounded-full flex items-center justify-center mb-6">
            \${ICONS.zap}
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Be shameless.</h3>
          <p class="text-gray-600 text-sm leading-relaxed">Try things. Fail publicly. Look stupid. Learn faster than everyone else in the room.</p>
        </div>

        <div class="p-8 rounded-2xl bg-gray-50 border border-gray-100 text-center card-hover">
          <div class="w-14 h-14 mx-auto bg-gray-900 text-white rounded-full flex items-center justify-center mb-6">
            \${ICONS.compass}
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Feel everything.</h3>
          <p class="text-gray-600 text-sm leading-relaxed">Not just comfort. Stress. Fear. Curiosity. Obsession. That's where real growth lives.</p>
        </div>

        <div class="p-8 rounded-2xl bg-gray-50 border border-gray-100 text-center card-hover">
          <div class="w-14 h-14 mx-auto bg-gray-900 text-white rounded-full flex items-center justify-center mb-6">
            \${ICONS.activity}
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Stay fit.</h3>
          <p class="text-gray-600 text-sm leading-relaxed">So you can travel, explore, trek, live fully. Optimize your health not just for now, but for later too.</p>
        </div>

      </div>
    </div>
  </section>

  <!-- ═══ CTA ═══ -->
  <section class="relative py-32 bg-gray-900 overflow-hidden">
    <div class="absolute inset-0 opacity-20 mix-blend-overlay">
      <img src="/images/cta-bg.jpg" alt="" class="w-full h-full object-cover" />
    </div>
    
    <div class="container-main relative z-10 text-center reveal">
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">You have two choices.</h2>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto mb-10 text-pretty">
        Stay in the loop or <span class="text-white font-semibold">break it.</span>
      </p>
      
      <div class="flex flex-wrap items-center justify-center gap-4">
        <a href="mailto:\${CONTACT_EMAIL}" class="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-gray-900 font-bold hover:bg-gray-100 transition-colors shadow-xl">
          Start building \${ICONS.arrowRight}
        </a>
        <a href="\${SOCIAL.linkedin}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent border border-gray-600 text-white font-medium hover:border-white hover:bg-white/5 transition-all">
          Join my journey
        </a>
      </div>
    </div>
  </section>

</main>

<!-- Footer -->
<footer class="site-footer py-12">
  <div class="container-main flex flex-col md:flex-row justify-between items-center gap-6">
    <div class="flex items-center gap-2">
      <span class="text-lg font-bold text-gray-900">nithin<span class="w-1.5 h-1.5 rounded-full bg-gray-900 inline-block"></span></span>
      <span class="text-sm text-gray-500 ml-2">&copy; 2026 Nithin Didigam. All rights reserved.</span>
    </div>
    
    <div class="flex items-center gap-6">
      <a href="\${SOCIAL.linkedin}" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-900 transition-colors" aria-label="LinkedIn">\${ICONS.linkedin}</a>
      <a href="\${SOCIAL.github}" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-900 transition-colors" aria-label="GitHub">\${ICONS.github}</a>
      <a href="\${SOCIAL.x}" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-900 transition-colors" aria-label="X">\${ICONS.x}</a>
    </div>
  </div>
</footer>
`;

// ── Mobile menu toggle ──
document.querySelector("#menu-toggle")?.addEventListener("click", () => {
  const menu = document.querySelector("#mobile-menu");
  const btn = document.querySelector("#menu-toggle");
  menu?.classList.toggle("hidden");
  if (btn) btn.setAttribute("aria-expanded", menu?.classList.contains("hidden") ? "false" : "true");
});

document.querySelectorAll(".mobile-nav-link").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector("#mobile-menu")?.classList.add("hidden");
    document.querySelector("#menu-toggle")?.setAttribute("aria-expanded", "false");
  });
});

// ── Scroll reveal ──
const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
);

revealElements.forEach((el) => observer.observe(el));

// Check on load
requestAnimationFrame(() => {
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });
});

// ── Nav background on scroll ──
const nav = document.querySelector("#main-nav");
const updateNav = () => {
  if (window.scrollY > 20) {
    nav?.classList.add("glass-nav");
    nav?.classList.remove("bg-transparent", "py-4");
    nav?.classList.add("py-3");
  } else {
    nav?.classList.remove("glass-nav", "py-3");
    nav?.classList.add("bg-transparent", "py-4");
  }
};
window.addEventListener("scroll", updateNav, { passive: true });
updateNav();
