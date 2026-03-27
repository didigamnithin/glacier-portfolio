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
<nav class="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-white/70 backdrop-blur-2xl" id="main-nav">
  <div class="container-main py-5 flex items-center justify-between">
    <a href="#" class="text-2xl font-black tracking-tighter text-gray-900 flex items-center gap-1">
      nithin<span class="w-2.5 h-2.5 rounded-full bg-gray-900 inline-block"></span>
    </a>
    
    <button type="button" id="menu-toggle" class="md:hidden p-2 text-gray-600 rounded-xl border border-gray-100 bg-white/50 backdrop-blur-lg shadow-sm" aria-expanded="false">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
    </button>

    <div class="hidden md:flex items-center gap-10">
      <a class="nav-link" href="#about">About</a>
      <a class="nav-link" href="#experience">Experience</a>
      <a class="nav-link" href="#impact">Impact</a>
      <a class="nav-link" href="#building">Building</a>
      <a href="mailto:${CONTACT_EMAIL}" class="btn-glass-dark py-2.5 px-6 text-sm">Contact</a>
    </div>
  </div>

  <!-- Mobile Menu -->
  <div id="mobile-menu" class="hidden md:hidden bg-white/95 backdrop-blur-3xl border-b border-gray-100 shadow-2xl">
    <div class="container-main py-6 flex flex-col gap-5">
      <a class="mobile-nav-link text-gray-600 font-semibold text-lg" href="#about">About</a>
      <a class="mobile-nav-link text-gray-600 font-semibold text-lg" href="#experience">Experience</a>
      <a class="mobile-nav-link text-gray-600 font-semibold text-lg" href="#impact">Impact</a>
      <a class="mobile-nav-link text-gray-600 font-semibold text-lg" href="#building">Building</a>
      <a class="mobile-nav-link text-gray-900 font-bold text-lg pt-4 border-t border-gray-50 flex items-center justify-between" href="mailto:${CONTACT_EMAIL}">
        Contact ${ICONS.arrowRight}
      </a>
    </div>
  </div>
</nav>

<main class="relative w-full overflow-hidden bg-white">

  <!-- ═══ HERO ═══ -->
  <section class="relative min-h-[95vh] flex items-center pt-24 bg-white" id="hero">
    <div class="container-main relative z-10 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
      
      <div class="flex-1 reveal w-full text-center md:text-left">
        <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-xs font-bold text-gray-500 mb-8 shadow-sm tracking-widest uppercase">
          <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Engineering 2026 Standard
        </div>
        
        <h1 class="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 leading-[0.9] text-balance mb-8">
          Build things<br>that <span class="gradient-text">matter.</span>
        </h1>
        
        <p class="text-xl md:text-2xl text-gray-500 max-w-xl text-pretty leading-relaxed mb-12 mx-auto md:mx-0">
          Engineer at heart, builder by design. I design AI systems and ship products fast. High-leverage outcomes only.
        </p>
        
        <div class="flex flex-wrap items-center justify-center md:justify-start gap-5 reveal delay-1">
          <a href="#about" class="btn-glass-dark">
            Let's Talk ${ICONS.arrowRight}
          </a>
          <a href="#building" class="btn-glass-light">
            View Work
          </a>
        </div>
        
        <div class="flex items-center justify-center md:justify-start gap-8 mt-16 reveal delay-2">
          <a href="${SOCIAL.linkedin}" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-900 transition-all transform hover:scale-110" aria-label="LinkedIn">${ICONS.linkedin}</a>
          <a href="${SOCIAL.github}" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-900 transition-all transform hover:scale-110" aria-label="GitHub">${ICONS.github}</a>
          <a href="${SOCIAL.x}" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-900 transition-all transform hover:scale-110" aria-label="X">${ICONS.x}</a>
        </div>
      </div>

      <div class="flex-1 w-full max-w-lg md:max-w-none reveal delay-2">
        <div class="relative aspect-square md:aspect-[4/5] img-container shadow-2xl shadow-gray-200/40 rounded-[2.5rem] animate-float">
          <img src="/images/hero-tech.jpg" alt="Technology Setup" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
        </div>
      </div>

    </div>
  </section>

  <!-- ═══ ABOUT: PHILOSOPHY + MINDSET ═══ -->
  <section class="section-padding bg-white" id="about">
    <div class="container-main">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-center reveal">
        <div class="order-2 md:order-1">
          <span class="text-label">Philosophy</span>
          <h2 class="text-4xl md:text-5xl font-black text-gray-900 mt-6 mb-8 tracking-tighter text-balance">
            I don't believe in invisible limits.
          </h2>
          <p class="text-xl text-gray-500 leading-relaxed text-pretty">
            Build fast, execute aggressively, learn constantly. Most people aren't limited by ability — they're limited by the stories they tell themselves. The gap between an idea and a shipped product is just focus and execution.
          </p>
        </div>
        <div class="order-1 md:order-2 img-container aspect-[4/3] shadow-2xl rounded-[2.5rem]">
          <img src="/images/philosophy.jpg" alt="Mountain peaks" loading="lazy" class="w-full h-full object-cover" />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-center mt-32 reveal">
        <div class="img-container aspect-[4/3] shadow-2xl rounded-[2.5rem]">
          <img src="/images/mindset.jpg" alt="Starry mountains" loading="lazy" class="w-full h-full object-cover" />
        </div>
        <div>
          <span class="text-label">Mindset</span>
          <h2 class="text-4xl md:text-5xl font-black text-gray-900 mt-6 mb-8 tracking-tighter text-balance">
            The asymmetric life.
          </h2>
          <p class="text-xl text-gray-500 leading-relaxed text-pretty mb-10">
            Life doesn't have to be linear. You don't need 1,000 moves — you need a few asymmetric ones. Optimize for learning rate, surround yourself with builders, and create high-leverage outcomes.
          </p>
          <div class="flex flex-wrap gap-4">
            <span class="px-6 py-2.5 rounded-full bg-gray-50 border border-gray-100 text-sm font-bold text-gray-700 shadow-sm">Build habits</span>
            <span class="px-6 py-2.5 rounded-full bg-gray-50 border border-gray-100 text-sm font-bold text-gray-700 shadow-sm">Learn by doing</span>
            <span class="px-6 py-2.5 rounded-full bg-gray-50 border border-gray-100 text-sm font-bold text-gray-700 shadow-sm">Execute with urgency</span>
            <span class="px-6 py-2.5 rounded-full bg-gray-50 border border-gray-100 text-sm font-bold text-gray-700 shadow-sm">Stay around builders</span>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- ═══ EXPERIENCE / JOURNEY ═══ -->
  <section class="section-padding bg-white" id="experience">
    <div class="container-main max-w-6xl">
      <div class="text-center mb-20 reveal max-w-2xl mx-auto">
        <span class="text-label">Evolution</span>
        <h2 class="text-5xl md:text-6xl font-black text-gray-900 mt-6 tracking-tighter">Where I've been</h2>
        <p class="text-xl text-gray-500 mt-6 text-pretty leading-relaxed">Started with curiosity. Built momentum through execution. From deep engineering to orchestrating scale.</p>
      </div>

      <div class="relative reveal delay-1">
        <div class="timeline-line md:left-[50%] md:translate-x-[-1px]"></div>
        
        <div class="flex flex-col gap-20 md:gap-32">
          
          <div class="relative flex flex-col md:flex-row md:justify-between items-start md:items-center">
            <div class="md:w-[45%] md:text-right pb-6 md:pb-0 pl-12 md:pl-0">
              <span class="text-sm font-black text-gray-300 uppercase tracking-widest">Current</span>
              <h3 class="text-3xl font-black text-gray-900 mt-2">Independent Builder</h3>
              <p class="text-lg text-gray-500 mt-4 leading-relaxed">AI systems & workflows — building agentic systems that automate real-world work. Exploring new paradigms of autonomous agents.</p>
            </div>
            <div class="timeline-dot md:left-[50%] md:translate-x-[-12px]"></div>
            <div class="md:w-[45%] hidden md:block pl-16">
              <div class="img-container aspect-video rounded-[2rem] shadow-2xl border border-gray-50 max-w-[400px] transform hover:-translate-y-3 transition-all duration-500">
                <img src="/images/automation.jpg" alt="Automation Illustration" loading="lazy" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div class="relative flex flex-col md:flex-row md:justify-between items-start md:items-center">
            <div class="md:w-[45%] hidden md:block pr-16">
              <div class="img-container aspect-square md:aspect-video rounded-[2rem] shadow-2xl border border-gray-50 max-w-[400px] ml-auto transform hover:-translate-y-3 transition-all duration-500">
                <img src="/images/ai-agents.jpg" alt="AI Analytics" loading="lazy" class="w-full h-full object-cover" />
              </div>
            </div>
            <div class="timeline-dot md:left-[50%] md:translate-x-[-12px]"></div>
            <div class="md:w-[45%] pl-12 md:pl-16">
              <span class="text-sm font-black text-gray-300 uppercase tracking-widest">AI/ML Engineering</span>
              <h3 class="text-3xl font-black text-gray-900 mt-2">Tanla Platforms</h3>
              <p class="text-lg text-gray-500 mt-4 leading-relaxed">Automation & analytics at scale. Processing massive data volumes efficiently. Reduced costs massively through architectural optimizations.</p>
            </div>
          </div>

          <div class="relative flex flex-col md:flex-row md:justify-between items-start md:items-center">
            <div class="md:w-[45%] md:text-right pb-6 md:pb-0 pl-12 md:pl-0">
              <span class="text-sm font-black text-gray-300 uppercase tracking-widest">Product & Integrations</span>
              <h3 class="text-3xl font-black text-gray-900 mt-2">Sprinklr</h3>
              <p class="text-lg text-gray-500 mt-4 leading-relaxed">Enterprise SaaS systems. Built resilient products with global engineering teams, driving core integrations and scale.</p>
            </div>
            <div class="timeline-dot md:left-[50%] md:translate-x-[-12px]"></div>
            <div class="md:w-[45%] hidden md:block pl-16">
               <div class="img-container aspect-video rounded-[2rem] shadow-2xl border border-gray-50 max-w-[400px] transform hover:-translate-y-3 transition-all duration-500">
                <img src="/images/experiments.jpg" alt="Experiments" loading="lazy" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div class="relative flex flex-col md:flex-row md:justify-between items-start md:items-center">
            <div class="md:w-[45%] hidden md:block pr-16">
               <div class="img-container aspect-square md:aspect-video rounded-[2rem] shadow-2xl border border-gray-50 max-w-[400px] ml-auto transform hover:-translate-y-3 transition-all duration-500">
                <img src="/images/marketplace.jpg" alt="Data Scale" loading="lazy" class="w-full h-full object-cover opacity-90" />
              </div>
            </div>
            <div class="timeline-dot md:left-[50%] md:translate-x-[-12px]"></div>
            <div class="md:w-[45%] pl-12 md:pl-16">
              <span class="text-sm font-black text-gray-300 uppercase tracking-widest">Data & Scale</span>
              <h3 class="text-3xl font-black text-gray-900 mt-2">Myntra</h3>
              <p class="text-lg text-gray-500 mt-4 leading-relaxed">Data engineering at one of India's largest e-commerce platforms. Handled high-throughput data pipelines and infrastructure.</p>
            </div>
          </div>

          <div class="relative flex flex-col md:flex-row md:justify-between items-start md:items-center">
            <div class="md:w-[45%] md:text-right pb-6 md:pb-0 pl-12 md:pl-0">
              <span class="text-sm font-black text-gray-300 uppercase tracking-widest">Foundation</span>
              <h3 class="text-3xl font-black text-gray-900 mt-2">IIT Kanpur</h3>
              <p class="text-lg text-gray-500 mt-4 leading-relaxed">Learned how to think. Built the mathematical foundation for everything after. Honed problem-solving under extreme constraints.</p>
            </div>
            <div class="timeline-dot md:left-[50%] md:translate-x-[-12px]"></div>
            <div class="md:w-[45%] hidden md:block"></div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <!-- ═══ IMPACT / STATS ═══ -->
  <section class="section-padding bg-white" id="impact">
    <div class="container-main">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center reveal">
        <div>
          <span class="text-label">Evidence</span>
          <h2 class="text-5xl md:text-6xl font-black text-gray-900 mt-6 tracking-tighter text-balance leading-[1.1]">
            Numbers that speak.
          </h2>
          <p class="text-xl text-gray-500 leading-relaxed text-pretty mt-8 mb-12">
            I measure success in outcomes, not lines of code. Whether it's driving down infrastructure costs or automating complex workflows, the goal is always asymmetric leverage.
          </p>
          
          <div class="grid grid-cols-2 gap-8">
            <div class="p-8 border border-gray-100 rounded-[2rem] bg-white shadow-sm hover:shadow-2xl transition-all duration-500">
              <div class="text-5xl md:text-6xl font-black text-gray-900 mb-2 tracking-tighter">12-55x</div>
              <p class="text-gray-400 text-xs font-bold uppercase tracking-widest">Cost reduction in AI</p>
            </div>
            <div class="p-8 border border-gray-100 rounded-[2rem] bg-white shadow-sm hover:shadow-2xl transition-all duration-500">
              <div class="text-5xl md:text-6xl font-black text-gray-900 mb-2 tracking-tighter">100+</div>
              <p class="text-gray-400 text-xs font-bold uppercase tracking-widest">Campaigns automated</p>
            </div>
            <div class="p-8 border border-gray-100 rounded-[2rem] bg-white shadow-sm hover:shadow-2xl transition-all duration-500">
              <div class="text-5xl md:text-6xl font-black text-gray-900 mb-2 tracking-tighter">500M+</div>
              <p class="text-gray-400 text-xs font-bold uppercase tracking-widest">Data points analyzed</p>
            </div>
            <div class="p-8 border border-gray-100 rounded-[2rem] bg-white shadow-sm hover:shadow-2xl transition-all duration-500">
              <div class="text-5xl md:text-6xl font-black text-gray-900 mb-2 tracking-tighter">1st</div>
              <p class="text-gray-400 text-xs font-bold uppercase tracking-widest">Global Hackathon</p>
            </div>
          </div>
        </div>
        
        <div class="img-container aspect-square md:aspect-[4/3] shadow-2xl rounded-[3rem] border border-gray-50 transform -rotate-2 hover:rotate-0 transition-all duration-500">
          <img src="/images/marketplace.jpg" alt="Impact visualization" loading="lazy" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>

  <!-- ═══ BUILDING / PROJECTS ═══ -->
  <section class="section-padding bg-white" id="building">
    <div class="container-main">
      <div class="flex flex-col md:flex-row justify-between items-end mb-20 reveal">
        <div class="max-w-xl text-center md:text-left">
          <span class="text-label">The Lab</span>
          <h2 class="text-5xl md:text-6xl font-black text-gray-900 mt-6 tracking-tighter text-balance">What I'm building</h2>
          <p class="text-xl text-gray-500 mt-6 text-pretty leading-relaxed">I don't wait for perfect ideas. I start. Then figure it out. Proof of craft in every line.</p>
        </div>
        <div class="hidden md:block">
          <a href="https://github.com/dsrihith" target="_blank" rel="noopener noreferrer" class="btn-glass-light border-gray-100">
            View on GitHub ${ICONS.arrowUpRight}
          </a>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 reveal delay-1">
        
        <div class="bento-card group">
          <div class="aspect-[16/10] overflow-hidden bg-gray-50 relative p-6">
            <img src="/images/ai-agents.jpg" alt="AI visualization" class="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-all duration-700 ease-in-out shadow-lg" loading="lazy" />
          </div>
          <div class="p-10">
            <h3 class="text-3xl font-black text-gray-900 mb-4 tracking-tighter">AI Agents</h3>
            <p class="text-lg text-gray-500 leading-relaxed mb-8">Autonomous systems that drive real outcomes, not just demos. Building workflows that augment human capability.</p>
            <span class="inline-flex items-center text-sm font-black text-gray-900 gap-2 group-hover:gap-4 transition-all uppercase tracking-widest">
              Explore Project ${ICONS.arrowRight}
            </span>
          </div>
        </div>

        <div class="bento-card group">
          <div class="aspect-[16/10] overflow-hidden bg-gray-50 relative p-6">
            <img src="/images/automation.jpg" alt="Automation" class="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-all duration-700 ease-in-out shadow-lg" loading="lazy" />
          </div>
          <div class="p-10">
            <h3 class="text-3xl font-black text-gray-900 mb-4 tracking-tighter">Automation Systems</h3>
            <p class="text-lg text-gray-500 leading-relaxed mb-8">End-to-end pipelines replacing manual workflows. Saving hundreds of hours of repetitive organizational overhead.</p>
            <span class="inline-flex items-center text-sm font-black text-gray-900 gap-2 group-hover:gap-4 transition-all uppercase tracking-widest">
              Explore Project ${ICONS.arrowRight}
            </span>
          </div>
        </div>

        <div class="bento-card group">
          <div class="aspect-[16/10] overflow-hidden bg-gray-50 relative p-6">
            <img src="/images/marketplace.jpg" alt="Marketplaces" class="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-all duration-700 ease-in-out shadow-lg" loading="lazy" />
          </div>
          <div class="p-10">
            <h3 class="text-3xl font-black text-gray-900 mb-4 tracking-tighter">Marketplaces</h3>
            <p class="text-lg text-gray-500 leading-relaxed mb-8">Connecting supply and demand in new ways. Building the infrastructure and liquidity engines for modern trade.</p>
            <span class="inline-flex items-center text-sm font-black text-gray-900 gap-2 group-hover:gap-4 transition-all uppercase tracking-widest">
              Explore Project ${ICONS.arrowRight}
            </span>
          </div>
        </div>

        <div class="bento-card group">
          <div class="aspect-[16/10] overflow-hidden bg-gray-50 relative p-6">
            <img src="/images/experiments.jpg" alt="Experiments" class="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-all duration-700 ease-in-out shadow-lg" loading="lazy" />
          </div>
          <div class="p-10">
            <h3 class="text-3xl font-black text-gray-900 mb-4 tracking-tighter">Experiments</h3>
            <p class="text-lg text-gray-500 leading-relaxed mb-8">Rapid product builds to test ideas fast. Validating assumptions through code and early user feedback.</p>
            <span class="inline-flex items-center text-sm font-black text-gray-900 gap-2 group-hover:gap-4 transition-all uppercase tracking-widest">
              Explore Project ${ICONS.arrowRight}
            </span>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ═══ PRINCIPLES ═══ -->
  <section class="section-padding bg-white border-t border-gray-50">
    <div class="container-main">
      <div class="text-center max-w-2xl mx-auto mb-20 reveal">
        <span class="text-label">Core Values</span>
        <h2 class="text-4xl md:text-5xl font-black text-gray-900 mt-6 tracking-tighter">Guiding Principles</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 reveal delay-1">
        
        <div class="p-12 rounded-[2.5rem] bg-white border border-gray-50 text-center shadow-sm hover:shadow-2xl transition-all duration-500">
          <div class="w-20 h-20 mx-auto bg-gray-900 text-white rounded-3xl flex items-center justify-center mb-8 shadow-xl transform rotate-3">
            ${ICONS.zap}
          </div>
          <h3 class="text-2xl font-black text-gray-900 mb-4 tracking-tighter">Be shameless.</h3>
          <p class="text-gray-500 leading-relaxed">Try things. Fail publicly. Look stupid. Learn faster than everyone else in the room.</p>
        </div>

        <div class="p-12 rounded-[2.5rem] bg-white border border-gray-50 text-center shadow-sm hover:shadow-2xl transition-all duration-500">
          <div class="w-20 h-20 mx-auto bg-gray-50 border border-gray-100 text-gray-900 rounded-3xl flex items-center justify-center mb-8 shadow-xl transform -rotate-3">
            ${ICONS.compass}
          </div>
          <h3 class="text-2xl font-black text-gray-900 mb-4 tracking-tighter">Feel everything.</h3>
          <p class="text-gray-500 leading-relaxed">Not just comfort. Stress. Fear. Curiosity. Obsession. That's where real growth lives.</p>
        </div>

        <div class="p-12 rounded-[2.5rem] bg-white border border-gray-50 text-center shadow-sm hover:shadow-2xl transition-all duration-500">
          <div class="w-20 h-20 mx-auto bg-gray-900 text-white rounded-3xl flex items-center justify-center mb-8 shadow-xl transform rotate-6">
            ${ICONS.activity}
          </div>
          <h3 class="text-2xl font-black text-gray-900 mb-4 tracking-tighter">Stay fit.</h3>
          <p class="text-gray-500 leading-relaxed">So you can travel, explore, trek, live fully. Optimize your health not just for now, but for later too.</p>
        </div>

      </div>
    </div>
  </section>

  <!-- ═══ CTA ═══ -->
  <section class="section-padding bg-white">
    <div class="container-main">
      <div class="bg-gray-900 rounded-[3rem] overflow-hidden shadow-3xl flex flex-col md:flex-row items-stretch reveal border border-white/5">
        
        <div class="p-12 md:p-24 flex-1 flex flex-col justify-center text-center md:text-left">
          <span class="text-label mb-6 block text-gray-400">Next Steps</span>
          <h2 class="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter text-balance leading-[0.9]">
            You have two choices.
          </h2>
          <p class="text-2xl text-gray-400 mb-12 text-pretty leading-relaxed">
            Stay in the loop or <span class="text-white font-black underline decoration-gray-500 underline-offset-8">break it.</span>
          </p>
          
          <div class="flex flex-wrap items-center justify-center md:justify-start gap-6">
            <a href="mailto:${CONTACT_EMAIL}" class="btn-glass-light py-4 px-10 text-lg">
              Start building ${ICONS.arrowRight}
            </a>
            <a href="${SOCIAL.linkedin}" target="_blank" rel="noopener noreferrer" class="btn-glass-dark border-white/20 py-4 px-10 text-lg">
              Join my journey
            </a>
          </div>
        </div>

        <div class="flex-1 w-full min-h-[400px] md:min-h-[600px] relative">
          <img src="/images/cta-bg.jpg" alt="Building the future" class="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000" />
          <div class="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent"></div>
        </div>

      </div>
    </div>
  </section>

</main>

<!-- Footer -->
<footer class="site-footer py-16">
  <div class="container-main flex flex-col md:flex-row justify-between items-center gap-10">
    <div class="flex items-center gap-3">
      <span class="text-2xl font-black text-gray-900 tracking-tighter">nithin<span class="w-2 h-2 rounded-full bg-gray-900 inline-block"></span></span>
      <span class="text-sm text-gray-400 font-medium ml-4">&copy; 2026 Nithin Didigam. Built for the future.</span>
    </div>
    
    <div class="flex items-center gap-10">
      <a href="${SOCIAL.linkedin}" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-gray-900 transition-all transform hover:scale-125" aria-label="LinkedIn">${ICONS.linkedin}</a>
      <a href="${SOCIAL.github}" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-gray-900 transition-all transform hover:scale-125" aria-label="GitHub">${ICONS.github}</a>
      <a href="${SOCIAL.x}" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-gray-900 transition-all transform hover:scale-125" aria-label="X">${ICONS.x}</a>
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
    nav?.classList.remove("bg-white", "py-5");
    nav?.classList.add("py-3");
  } else {
    nav?.classList.remove("glass-nav", "py-3");
    nav?.classList.add("bg-white", "py-5");
  }
};
window.addEventListener("scroll", updateNav, { passive: true });
updateNav();
