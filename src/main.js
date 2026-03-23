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
};

document.querySelector("#app").innerHTML = `
<!-- Nav -->
<nav class="fixed top-0 left-0 right-0 z-50 w-full">
  <div class="container-main py-5 flex items-center justify-between">
    <a href="#" class="text-sm font-semibold tracking-tight text-on-background">nithin<span class="text-primary">.</span></a>
    <button type="button" id="menu-toggle" class="mobile-toggle px-3 py-2 text-on-surface-variant text-sm border border-border rounded-lg" aria-expanded="false" aria-controls="mobile-menu">Menu</button>
    <div class="desktop-nav items-center gap-8">
      <a class="nav-link" href="#about">About</a>
      <a class="nav-link" href="#experience">Experience</a>
      <a class="nav-link" href="#impact">Impact</a>
      <a class="nav-link" href="#building">Building</a>
    </div>
  </div>
  <div id="mobile-menu" class="hidden border-t border-border backdrop-blur-xl" style="background:rgba(10,14,26,0.85);border-color:rgba(125,211,252,0.08)">
    <div class="container-main py-6 flex flex-col gap-4">
      <a class="mobile-nav-link text-on-surface-variant hover:text-on-background transition-colors py-1 text-sm" href="#about">About</a>
      <a class="mobile-nav-link text-on-surface-variant hover:text-on-background transition-colors py-1 text-sm" href="#experience">Experience</a>
      <a class="mobile-nav-link text-on-surface-variant hover:text-on-background transition-colors py-1 text-sm" href="#impact">Impact</a>
      <a class="mobile-nav-link text-on-surface-variant hover:text-on-background transition-colors py-1 text-sm" href="#building">Building</a>
    </div>
  </div>
</nav>

<div class="grain"></div>

<main class="relative w-full">

  <!-- ═══════ HERO ═══════ -->
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
    <div class="orb w-[500px] h-[500px] bg-primary/8 top-1/4 -right-48"></div>
    <div class="orb w-[400px] h-[400px] bg-tertiary/6 bottom-1/4 -left-48"></div>

    <div class="container-narrow relative z-10 text-center">
      <div class="space-y-10">
        <p class="label reveal">Software Engineer & Builder</p>
        <h1 class="heading-xl text-on-background reveal reveal-delay-1">
          I build things<br />that <span class="text-primary text-glow">matter</span>.
        </h1>
        <p class="body-lg max-w-2xl mx-auto reveal reveal-delay-2">
          Engineer at heart, builder by obsession. I design AI systems, ship products fast, and create asymmetric outcomes through relentless execution.
        </p>
        <div class="flex flex-wrap gap-4 justify-center reveal reveal-delay-3">
          <a href="#about" class="btn-primary">More about me</a>
          <a href="mailto:${CONTACT_EMAIL}" class="btn-ghost">Get in touch</a>
        </div>
        <div class="flex items-center justify-center gap-5 pt-2 reveal reveal-delay-4">
          <a href="${SOCIAL.linkedin}" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn">${ICONS.linkedin}</a>
          <a href="${SOCIAL.github}" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="GitHub">${ICONS.github}</a>
          <a href="${SOCIAL.x}" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="X">${ICONS.x}</a>
        </div>
      </div>
    </div>

    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-on-surface-variant/40 text-xs reveal reveal-delay-5">
      <span>Scroll</span>
      <div class="w-px h-8 bg-gradient-to-b from-on-surface-variant/30 to-transparent"></div>
    </div>
  </section>

  <div class="section-divider"></div>

  <!-- ═══════ ABOUT ═══════ -->
  <section class="section-padding" id="about">
    <div class="container-narrow text-center">
      <p class="label mb-8 reveal">Philosophy</p>
      <h2 class="heading-lg text-on-background reveal reveal-delay-1">I don't believe in <span class="text-tertiary">invisible limits</span>.</h2>

      <div class="mt-16 space-y-10 reveal reveal-delay-2">
        <p class="body-lg">
          Most people aren't limited by ability. They're limited by the stories they tell themselves: <em>"This is not for me"</em>, <em>"I can't do that"</em>, <em>"People like me don't build things."</em>
        </p>
        <p class="body-lg">
          I don't buy that. Build the right habits, learn aggressively, execute with urgency — you can build almost anything.
        </p>
      </div>

      <div class="mt-24 reveal reveal-delay-3">
        <p class="label mb-8">Mindset</p>
        <h3 class="heading-md text-on-background">The asymmetric life</h3>
        <div class="mt-8 space-y-6">
          <p class="body-lg">
            Most people live linearly: school, job, salary, repeat. Predictable. Safe. But life doesn't have to be linear. One idea becomes a startup. One risk opens a new direction.
          </p>
          <p class="text-on-background text-lg font-medium">
            You don't need 1,000 moves. You need <span class="text-tertiary">a few asymmetric ones</span>.
          </p>
        </div>
      </div>

      <div class="section-divider my-20"></div>

      <div class="reveal">
        <p class="label mb-10">How I operate</p>
        <div class="grid sm:grid-cols-2 gap-x-16 gap-y-12 text-left max-w-2xl mx-auto">
          <div>
            <p class="text-primary font-mono text-sm mb-2">01</p>
            <p class="text-on-background font-semibold text-lg">Build habits, not motivation</p>
            <p class="text-on-surface-variant text-sm mt-2">Small actions, daily. No negotiation.</p>
          </div>
          <div>
            <p class="text-primary font-mono text-sm mb-2">02</p>
            <p class="text-on-background font-semibold text-lg">Learn by doing</p>
            <p class="text-on-surface-variant text-sm mt-2">Applied learning, not theory.</p>
          </div>
          <div>
            <p class="text-primary font-mono text-sm mb-2">03</p>
            <p class="text-on-background font-semibold text-lg">Execute with urgency</p>
            <p class="text-on-surface-variant text-sm mt-2">Speed > perfection. Always.</p>
          </div>
          <div>
            <p class="text-primary font-mono text-sm mb-2">04</p>
            <p class="text-on-background font-semibold text-lg">Stay around builders</p>
            <p class="text-on-surface-variant text-sm mt-2">Environment shapes ambition.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="section-divider"></div>

  <!-- ═══════ EXPERIENCE ═══════ -->
  <section class="section-padding" id="experience">
    <div class="container-narrow text-center">
      <p class="label mb-8 reveal">Journey</p>
      <h2 class="heading-lg text-on-background reveal reveal-delay-1">Where I've <span class="text-primary">been</span>.</h2>
      <p class="body-lg mt-8 reveal reveal-delay-2">Started with curiosity. Built momentum through execution.</p>

      <div class="mt-24 space-y-16 text-left max-w-2xl mx-auto">
        <div class="timeline-item reveal">
          <p class="label mb-2">Current</p>
          <p class="text-on-background font-semibold text-lg">Independent Builder</p>
          <p class="text-on-surface-variant text-sm mt-3 leading-relaxed">Building agentic AI systems that automate real-world workflows. Launching fast, killing faster.</p>
        </div>
        <div class="timeline-item reveal reveal-delay-1">
          <p class="text-on-surface-variant text-xs font-medium uppercase tracking-wider mb-2">AI/ML Engineering</p>
          <p class="text-on-background font-semibold text-lg">Tanla Platforms</p>
          <p class="text-on-surface-variant text-sm mt-3 leading-relaxed">AI/ML systems at scale. Automation pipelines processing massive data volumes.</p>
        </div>
        <div class="timeline-item reveal reveal-delay-2">
          <p class="text-on-surface-variant text-xs font-medium uppercase tracking-wider mb-2">Product & Integrations</p>
          <p class="text-on-background font-semibold text-lg">Sprinklr</p>
          <p class="text-on-surface-variant text-sm mt-3 leading-relaxed">Built products and integrations with global teams on enterprise-scale systems.</p>
        </div>
        <div class="timeline-item reveal reveal-delay-3">
          <p class="text-on-surface-variant text-xs font-medium uppercase tracking-wider mb-2">Data & Scale</p>
          <p class="text-on-background font-semibold text-lg">Myntra</p>
          <p class="text-on-surface-variant text-sm mt-3 leading-relaxed">Data engineering, scale, and systems thinking at one of India's largest e-commerce platforms.</p>
        </div>
        <div class="timeline-item reveal reveal-delay-4">
          <p class="text-on-surface-variant text-xs font-medium uppercase tracking-wider mb-2">Foundation</p>
          <p class="text-on-background font-semibold text-lg">IIT Kanpur</p>
          <p class="text-on-surface-variant text-sm mt-3 leading-relaxed">Learned how to think. Built the foundation for everything that came after.</p>
        </div>
      </div>

      <div class="mt-16 reveal">
        <p class="text-on-surface-variant text-sm">Won a global AI hackathon (10,000+ teams) &middot; Built products from 0 to launch &middot; Worked across data, product, and AI</p>
      </div>
    </div>
  </section>

  <div class="section-divider"></div>

  <!-- ═══════ IMPACT ═══════ -->
  <section class="section-padding" id="impact">
    <div class="container-wide text-center">
      <p class="label mb-8 reveal">Impact</p>
      <h2 class="heading-lg text-on-background reveal reveal-delay-1">Numbers that <span class="text-primary">speak</span>.</h2>
      <p class="body-lg mt-8 reveal reveal-delay-2">I like building things that actually work.</p>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-12 mt-24">
        <div class="reveal">
          <p class="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">12-55x</p>
          <p class="text-on-surface-variant mt-4 text-sm">Cost reduction via AI</p>
        </div>
        <div class="reveal reveal-delay-1">
          <p class="text-4xl md:text-5xl font-extrabold text-on-background tracking-tight">100+</p>
          <p class="text-on-surface-variant mt-4 text-sm">Campaigns automated</p>
        </div>
        <div class="reveal reveal-delay-2">
          <p class="text-4xl md:text-5xl font-extrabold text-on-background tracking-tight">500M+</p>
          <p class="text-on-surface-variant mt-4 text-sm">Data points analyzed</p>
        </div>
        <div class="reveal reveal-delay-3">
          <p class="text-4xl md:text-5xl font-extrabold text-tertiary tracking-tight">1st</p>
          <p class="text-on-surface-variant mt-4 text-sm">T-Hub Global Hackathon</p>
        </div>
      </div>
    </div>
  </section>

  <div class="section-divider"></div>

  <!-- ═══════ BUILDING ═══════ -->
  <section class="section-padding" id="building">
    <div class="container-narrow text-center">
      <p class="label mb-8 reveal">Now</p>
      <h2 class="heading-lg text-on-background reveal reveal-delay-1">What I'm <span class="text-tertiary">building</span>.</h2>
      <p class="body-lg mt-8 reveal reveal-delay-2">
        I don't wait for perfect ideas. I start. Then figure it out.
      </p>

      <div class="grid sm:grid-cols-2 gap-x-16 gap-y-12 text-left max-w-2xl mx-auto mt-24 reveal reveal-delay-3">
        <div>
          <span class="material-symbols-outlined text-primary text-2xl mb-4 block">smart_toy</span>
          <p class="text-on-background font-semibold text-lg">AI Agents</p>
          <p class="text-on-surface-variant text-sm mt-2">Autonomous systems that do real work, not just demos.</p>
        </div>
        <div>
          <span class="material-symbols-outlined text-tertiary text-2xl mb-4 block">settings_suggest</span>
          <p class="text-on-background font-semibold text-lg">Automation Systems</p>
          <p class="text-on-surface-variant text-sm mt-2">End-to-end pipelines replacing manual workflows.</p>
        </div>
        <div>
          <span class="material-symbols-outlined text-primary text-2xl mb-4 block">storefront</span>
          <p class="text-on-background font-semibold text-lg">Marketplaces</p>
          <p class="text-on-surface-variant text-sm mt-2">Connecting supply and demand in new ways.</p>
        </div>
        <div>
          <span class="material-symbols-outlined text-tertiary text-2xl mb-4 block">science</span>
          <p class="text-on-background font-semibold text-lg">Experiments</p>
          <p class="text-on-surface-variant text-sm mt-2">Rapid prototypes to test ideas in the wild.</p>
        </div>
      </div>

      <div class="section-divider my-20"></div>

      <div class="space-y-16 reveal">
        <div>
          <p class="text-2xl font-bold text-on-background">Be shameless.</p>
          <p class="text-on-surface-variant mt-3">Try things. Fail publicly. Look stupid. Learn faster than everyone.</p>
        </div>
        <div>
          <p class="text-2xl font-bold text-on-background">Feel everything.</p>
          <p class="text-on-surface-variant mt-3">Not just comfort. <span class="text-tertiary">Stress. Fear. Curiosity. Obsession.</span> That's where growth lives.</p>
        </div>
        <div>
          <p class="text-2xl font-bold text-on-background">Stay fit.</p>
          <p class="text-on-surface-variant mt-3">So you can travel, explore, trek, live fully. Not just now. Later too.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="section-divider"></div>

  <!-- ═══════ CTA ═══════ -->
  <section class="section-padding relative overflow-hidden">
    <div class="orb w-[400px] h-[400px] bg-primary/6 top-0 right-0"></div>
    <div class="orb w-[300px] h-[300px] bg-tertiary/5 bottom-0 left-0"></div>
    <div class="container-narrow relative z-10 text-center space-y-10">
      <h2 class="heading-lg text-on-background reveal">You have two choices.</h2>
      <p class="text-2xl sm:text-3xl text-on-surface-variant reveal reveal-delay-1">
        Stay in the loop. Or <span class="text-primary text-glow font-bold">break it</span>.
      </p>
      <p class="text-xl font-bold text-primary reveal reveal-delay-2">Start building.</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4 reveal reveal-delay-3">
        <a href="mailto:${CONTACT_EMAIL}" class="btn-primary">Let's connect</a>
        <a href="${SOCIAL.linkedin}" target="_blank" rel="noopener noreferrer" class="btn-ghost">Join my journey</a>
      </div>
      <div class="flex items-center justify-center gap-5 pt-4 reveal reveal-delay-4">
        <a href="${SOCIAL.linkedin}" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn">${ICONS.linkedin}</a>
        <a href="${SOCIAL.github}" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="GitHub">${ICONS.github}</a>
        <a href="${SOCIAL.x}" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="X">${ICONS.x}</a>
      </div>
    </div>
  </section>

</main>

<!-- Footer -->
<footer class="w-full py-12 border-t border-border">
  <div class="container-main flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-on-surface-variant">
    <span class="text-on-surface-variant/50">&copy; 2026 Nithin Didigam</span>
    <div class="flex items-center gap-5">
      <a href="${SOCIAL.linkedin}" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn">${ICONS.linkedin}</a>
      <a href="${SOCIAL.github}" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="GitHub">${ICONS.github}</a>
      <a href="${SOCIAL.x}" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="X">${ICONS.x}</a>
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
        entry.target.style.animation = "none";
      }
    });
  },
  { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
);
revealElements.forEach((el) => observer.observe(el));

// Immediately reveal elements already in viewport on page load
requestAnimationFrame(() => {
  revealElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add("visible");
      el.style.animation = "none";
    }
  });
});

// ── Nav background on scroll ──
const nav = document.querySelector("nav");
const updateNav = () => {
  if (window.scrollY > 50) {
    nav?.classList.add("backdrop-blur-xl", "border-b", "border-border");
    nav.style.background = "rgba(10, 14, 26, 0.75)";
    nav.style.borderColor = "rgba(125, 211, 252, 0.08)";
  } else {
    nav?.classList.remove("backdrop-blur-xl", "border-b", "border-border");
    nav.style.background = "";
    nav.style.borderColor = "";
  }
};
window.addEventListener("scroll", updateNav, { passive: true });
updateNav();
