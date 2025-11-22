---
layout: archive
title: "Experience"
permalink: /research/
author_profile: true
---

{% include base_path %}

<style>
  .research-container {
    max-width: 900px;
    margin: 0 auto;
  }
  
  .research-entry {
    margin-bottom: 2.5em;
    padding: 1.5em;
    background: #ffffff;
    border-left: 4px solid #4a90e2;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    gap: 1.5em;
  }
  
  .research-entry:hover {
    border-left-color: #2563eb;
    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
    transform: translateY(-2px);
  }
  
  .research-logo {
    flex-shrink: 0;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .research-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 8px;
  }
  
  .research-logo-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    color: #cbd5e0;
  }
  
  .research-body {
    flex: 1;
    min-width: 0;
  }
  
  .research-header {
    margin-bottom: 0.8em;
  }
  
  .research-title {
    font-size: 1.2em;
    font-weight: 700;
    color: #1a202c;
    margin-bottom: 0.2em;
    line-height: 1.4;
  }
  
  .research-role {
    font-size: 0.95em;
    color: #4a5568;
    font-weight: 500;
    margin-bottom: 0.3em;
  }
  
  .research-meta {
    font-size: 0.85em;
    color: #718096;
    display: flex;
    align-items: center;
    gap: 0.5em;
    margin-bottom: 0.5em;
  }
  
  .research-meta::before {
    content: "📅";
    font-size: 1em;
  }
  
  .research-location {
    font-size: 0.85em;
    color: #718096;
    font-style: italic;
  }
  
  .research-content {
    color: #2d3748;
    line-height: 1.6;
    font-size: 0.95em;
  }
  
  .research-description {
    margin-bottom: 0.6em;
    color: #4a5568;
  }
  
  .advisor-info {
    margin-top: 1em;
    padding-top: 0;
    border-top: none;
    font-size: 0.9em;
    color: #4a5568;
  }
  
  .advisor-info strong {
    color: #2d3748;
  }
  
  .advisor-info a {
    color: #4a90e2;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
  }
  
  .advisor-info a:hover {
    color: #2563eb;
    text-decoration: underline;
  }
  
  /* Normalize advisor block line-height for consistent selection box height */
  .advisor-info { 
    line-height: 1.5; 
  }
  .advisor-info a,
  .advisor-info strong { 
    line-height: inherit;
    vertical-align: baseline;
  }
  
  .project-name {
    font-weight: 600;
    color: #2563eb;
  }
  
  .project-name a {
    color: inherit;
    text-decoration: none !important;
    border-bottom: 1px solid transparent;
    transition: border-bottom-color 0.2s ease;
  }
  
  .project-name a:hover {
    border-bottom-color: #2563eb;
    text-decoration: none !important;
  }
  
  .submission-status {
    font-style: italic;
    color: #718096;
    font-size: 0.9em;
  }
  
  /* Responsive design */
  @media (max-width: 768px) {
    .research-entry {
      flex-direction: column;
      gap: 1em;
      padding: 1.2em;
    }
    
    .research-logo {
      width: 60px;
      height: 60px;
      align-self: flex-start;
    }
  }
  
  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    .research-entry {
      background: #1a202c;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }
    
    .research-logo {
      background: #2d3748;
    }
    
    .research-title {
      color: #f7fafc;
    }
    
    .research-role,
    .research-content li {
      color: #cbd5e0;
    }
    
    .research-meta,
    .research-location {
      color: #a0aec0;
    }
    
    .advisor-info {
      color: #cbd5e0;
    }
    
    .advisor-info strong {
      color: #e2e8f0;
    }
    
    .project-highlight {
      background: #2d3748;
      border-left-color: #4a90e2;
    }
  }

  /* Refined selection style for elegant look */
  ::selection {
    background: rgba(37, 99, 235, 0.18);
    color: #0f172a;
    text-shadow: 0 0 0 #0f172a; /* helps anti-aliasing on some platforms */
  }
  ::-moz-selection {
    background: rgba(37, 99, 235, 0.18);
    color: #0f172a;
  }
  a::selection {
    background: rgba(37, 99, 235, 0.18);
    color: #0f172a;
  }

  /* Advisor info: continuous underline that doesn't break on partial selection */
  .advisor-info a {
    display: inline;
    text-decoration: none;
    position: relative;
  }

  /* Remove harsh tap highlight on mobile */
  * { -webkit-tap-highlight-color: transparent; }
</style>

<script>
  (function() {
    function clearSelection() {
      var sel = window.getSelection ? window.getSelection() : null;
      if (sel && !sel.isCollapsed) {
        sel.removeAllRanges();
      }
      if (document.activeElement && typeof document.activeElement.blur === 'function') {
        document.activeElement.blur();
      }
    }

    // Right-click opens context menu: clear selection immediately
    document.addEventListener('contextmenu', function() {
      clearSelection();
    }, true);

    // Mouse right button release: also clear (covers some browsers)
    document.addEventListener('mouseup', function(e) {
      if (e.button === 2) {
        clearSelection();
      }
    }, true);

    // Touch long-press on mobile can leave selection; clear on touchstart
    document.addEventListener('touchstart', function() {
      clearSelection();
    }, { passive: true });
  })();
</script>

<h2 style="margin-bottom: 1.5em; color: #1a202c; font-size: 1.8em; font-weight: 700; border-bottom: 3px solid #4a90e2; padding-bottom: 0.5em;">Research Experience</h2>

<div class="research-container">

<div class="research-entry">
  <div class="research-logo">
    <img src="/images/logos/harvard.png" alt="Harvard University" loading="lazy" decoding="async">
  </div>
  <div class="research-body">
    <div class="research-header">
      <div class="research-title">Harvard Systems Lab, Harvard University</div>
      <div class="research-role">Research Intern</div>
      <div class="research-meta">Jun 2025 – Present</div>
      <div class="research-location">Remote</div>
    </div>
    <div class="research-content">
      <div class="research-description">
        Working on <span class="project-name"><a href="https://github.com/HarvardSys/Nimbus" target="_blank">Nimbus</a></span>, a hybrid LLM inference system that meets TTFT SLOs under bursty workloads by combining local GPU deployments with serverless APIs. Built full-stack inference gateway integrating vLLM/SGLang backends with multiple external providers.
      </div>
      <div class="advisor-info">
        <strong>Supervisor:</strong> Prof. <a href="https://junchengyang.com/">Juncheng Yang</a>
      </div>
    </div>
  </div>
</div>

<div class="research-entry">
  <div class="research-logo">
    <img src="/images/logos/uiuc-logo.png" alt="UIUC" loading="lazy" decoding="async">
  </div>
  <div class="research-body">
    <div class="research-header">
      <div class="research-title">ULab, University of Illinois Urbana-Champaign</div>
      <div class="research-role">Research Intern</div>
      <div class="research-meta">Feb 2025 – Present</div>
      <div class="research-location">Remote</div>
    </div>
    <div class="research-content">
      <div class="research-description">
        Co-leading <span class="project-name"><a href="https://github.com/OpenManus/OpenManus-RL" target="_blank">OpenManus-RL</a></span>, an agentic reinforcement learning framework for fine-tuning LLM agents on environments such as ALFWorld, WebShop, and GAIA. Co-developed <span class="project-name"><a href="https://arxiv.org/abs/2509.25370" target="_blank">AgentDebug</a></span>, a framework that analyzes LLM agent trajectories with a modular error taxonomy to localize root-cause failures.
      </div>
      <div class="advisor-info">
        <strong>Supervisor:</strong> Prof. <a href="https://cs.stanford.edu/people/jiaxuan/">Jiaxuan You</a><br>
        <strong>Guided by:</strong> <a href="https://kunlun-zhu.github.io/">Kunlun Zhu</a>
      </div>
    </div>
  </div>
</div>

<div class="research-entry">
  <div class="research-logo">
    <img src="/images/logos/msra.png" alt="Microsoft Research" loading="lazy" decoding="async">
  </div>
  <div class="research-body">
    <div class="research-header">
      <div class="research-title">Microsoft Research Asia</div>
      <div class="research-role">Research Intern</div>
      <div class="research-meta">Jan 2025 – Present</div>
      <div class="research-location">Beijing, China</div>
    </div>
    <div class="research-content">
      <div class="research-description">
        Developed <span class="project-name">AutoForge</span>, a framework that formulates automatic agentic system generation and optimization as a searching problem using Monte Carlo Tree Search (MCTS) to explore agent architectures. The framework incorporates cost-aware optimization by intelligently assigning heterogeneous LLMs based on task-specific capabilities, maintaining strong performance while significantly reducing inference costs.
      </div>
      <div class="advisor-info">
        <strong>Mentor:</strong> <a href="https://www.microsoft.com/en-us/research/people/zhogu/">Zhongxin Guo</a>
      </div>
    </div>
  </div>
</div>

<div class="research-entry">
  <div class="research-logo">
    <img src="/images/logos/uoft.svg" alt="University of Toronto" loading="lazy" decoding="async">
  </div>
  <div class="research-body">
    <div class="research-header">
      <div class="research-title">University of Toronto, MIE Department</div>
      <div class="research-role">Research Intern</div>
      <div class="research-meta">May 2024 – Aug 2025</div>
      <div class="research-location">Toronto, ON</div>
    </div>
    <div class="research-content">
      <div class="research-description">
        Developed <span class="project-name"><a href="https://github.com/realtmxi/BEDEO" target="_blank">BEDEO</a></span>, a multi-agent ontology-based LLM recommendation framework that enhanced interpretability and recommendation quality for Canada Ontario residents. Integrated ontological knowledge structures with LLM reasoning to improve recommendation transparency.
      </div>
      <div class="advisor-info">
        <strong>Supervisors:</strong> Dr. <a href="https://www.linkedin.com/in/daniela-rosu-704828/">Daniela Rosu</a> and Prof. <a href="http://www.eil.utoronto.ca/members/msf/">Mark S. Fox</a>
      </div>
    </div>
  </div>
</div>

<div class="research-entry">
  <div class="research-logo">
    <img src="/images/logos/uoft.svg" alt="University of Toronto" loading="lazy" decoding="async">
  </div>
  <div class="research-body">
    <div class="research-header">
      <div class="research-title">L³ Lab, University of Toronto</div>
      <div class="research-role">Research Intern</div>
      <div class="research-meta">May 2023 – May 2024</div>
      <div class="research-location">Toronto, ON</div>
    </div>
    <div class="research-content">
      <div class="research-description">
        Led the creation of <span class="project-name"><a href="https://oasissimpdataset.github.io/" target="_blank" rel="noopener noreferrer">OasisSimp</a></span>, a multilingual text simplification dataset for English, Sinhala, Tamil, and Thai. Implemented and fine-tuned mT5 using the MUSS framework for unsupervised text simplification.
      </div>
      <div class="advisor-info">
        <strong>Supervisors:</strong> Prof. <a href="https://shekharravi.github.io/">Ravi Shekhar</a> and Prof. <a href="https://www.cs.toronto.edu/~ealee/">Annie En-Shiun Lee</a> <a href="https://www.cs.toronto.edu/~ealee/"></a>
      </div>
    </div>
  </div>
</div>

</div>

<h2 style="margin-top: 3em; margin-bottom: 1.5em; color: #1a202c; font-size: 1.8em; font-weight: 700; border-bottom: 3px solid #4a90e2; padding-bottom: 0.5em;">Industry Experience</h2>

<div class="research-container">

<div class="research-entry">
  <div class="research-logo">
    <img src="/images/logos/Chromium_Logo.svg" alt="Google" loading="lazy" decoding="async">
  </div>
  <div class="research-body">
    <div class="research-header">
      <div class="research-title">Google</div>
      <div class="research-role">GSoC Open Source Developer</div>
      <div class="research-meta">May 2025 – Sep 2025</div>
      <div class="research-location">Remote</div>
    </div>
    <div class="research-content">
      <div class="research-description">
        Selected as a Google Summer of Code 2025 contributor to enhance ChromiumOS's farfetchd service with kernel tracing and replay capabilities.
      </div>
      <div class="advisor-info">
        <strong>Mentors:</strong> <a href="https://www.linkedin.com/in/sarthakkukreti/">Sarthak Kukreti</a> and Alexis Savery
      </div>
    </div>
  </div>
</div>

<div class="research-entry">
  <div class="research-logo">
    <img src="/images/logos/Microsoft.svg" alt="Microsoft" loading="lazy" decoding="async">
  </div>
  <div class="research-body">
    <div class="research-header">
      <div class="research-title">Microsoft</div>
      <div class="research-role">Software Engineer Intern</div>
      <div class="research-meta">Oct 2024 – Dec 2025</div>
      <div class="research-location">Suzhou, China</div>
    </div>
    <div class="research-content">
      <div class="research-description">
        Designed and implemented an internal front-end component library for Microsoft Edge team.
      </div>
      <div class="advisor-info">
        <strong>Mentor:</strong> <a href="https://www.linkedin.com/in/xiaoyuin/">Storm Yin</a>
      </div>
    </div>
  </div>
</div>

<div class="research-entry">
  <div class="research-logo">
    <img src="/images/logos/rednote-xiaohongshu.png" alt="RedNote" loading="lazy" decoding="async">
  </div>
  <div class="research-body">
    <div class="research-header">
      <div class="research-title">RedNote</div>
      <div class="research-role">Mobile Software Engineer, iOS Platform Intern</div>
      <div class="research-meta">Jul 2024 – Oct 2024</div>
      <div class="research-location">Shanghai, China</div>
    </div>
    <div class="research-content">
      <div class="research-description">
        Led the group's first on-device learning project.
      </div>
      <div class="advisor-info">
        <strong>Mentor:</strong> <a href="https://www.linkedin.com/in/zhe-wang-bb6a36184/">Zhe Wang</a>
      </div>
    </div>
  </div>
</div>

</div>