---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<style>
  .cv-container {
    max-width: 900px;
    margin: 0 auto;
  }

  .cv-header {
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: #f8fafc;
    border-left: 4px solid #4a90e2;
    border-radius: 8px;
  }

  .cv-header h2 {
    margin: 0 0 0.45rem 0;
    color: #1a202c;
    font-size: 1.45rem;
  }

  .cv-links {
    color: #4a5568;
    line-height: 1.7;
  }

  .cv-links a {
    color: #4a90e2;
    font-weight: 600;
    text-decoration: none;
  }

  .cv-section {
    margin: 2.2rem 0;
  }

  .cv-section h2 {
    margin-bottom: 1rem;
    padding-bottom: 0.35rem;
    border-bottom: 2px solid #e2e8f0;
    color: #1a202c;
    font-size: 1.25rem;
    letter-spacing: -0.01em;
  }

  .cv-item {
    margin-bottom: 1.35rem;
  }

  .cv-item-header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.2rem;
  }

  .cv-title {
    color: #1a202c;
    font-weight: 700;
  }

  .cv-meta {
    color: #718096;
    font-size: 0.9rem;
    white-space: nowrap;
  }

  .cv-subtitle {
    color: #4a5568;
    font-style: italic;
    margin-bottom: 0.45rem;
  }

  .cv-item ul {
    margin: 0.45rem 0 0 1.2rem;
  }

  .cv-item li {
    margin-bottom: 0.35rem;
    color: #2d3748;
    line-height: 1.55;
  }

  .cv-publication {
    margin-bottom: 1rem;
    color: #2d3748;
    line-height: 1.55;
  }

  .cv-publication .paper-title {
    color: #1a202c;
    font-weight: 700;
  }

  .cv-note {
    color: #718096;
    font-size: 0.9rem;
  }

  @media (max-width: 640px) {
    .cv-item-header {
      flex-direction: column;
      gap: 0.1rem;
    }

    .cv-meta {
      white-space: normal;
    }
  }

  @media (prefers-color-scheme: dark) {
    .cv-header {
      background: #1a202c;
    }

    .cv-header h2,
    .cv-section h2,
    .cv-title,
    .cv-publication .paper-title {
      color: #f7fafc;
    }

    .cv-links,
    .cv-subtitle,
    .cv-item li,
    .cv-publication {
      color: #cbd5e0;
    }

    .cv-section h2 {
      border-bottom-color: #2d3748;
    }

    .cv-meta,
    .cv-note {
      color: #a0aec0;
    }
  }
</style>

<div class="cv-container">

<div class="cv-header">
  <h2>Muxin (Murphy) Tian</h2>
  <div class="cv-links">
    murphy.tian@mail.utoronto.ca ·
    <a href="https://www.linkedin.com/in/murphytian/" target="_blank" rel="noopener noreferrer">LinkedIn</a> ·
    <a href="https://github.com/realtmxi" target="_blank" rel="noopener noreferrer">GitHub</a> ·
    <a href="https://scholar.google.com/citations?user=XKDCtCoAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a> ·
    <a href="https://realtmxi.github.io/" target="_blank" rel="noopener noreferrer">Website</a> ·
    <a href="/files/research_resume.pdf">Download PDF</a>
  </div>
</div>

<div class="cv-section">
  <h2>Education</h2>
  <div class="cv-item">
    <div class="cv-item-header">
      <div class="cv-title">University of Toronto, St. George Campus</div>
      <div class="cv-meta">Sep 2021 – Jun 2026</div>
    </div>
    <div class="cv-subtitle">Bachelor of Computer Science, Arts &amp; Science Internship Program · Toronto, Canada</div>
  </div>
</div>

<div class="cv-section">
  <h2>Selected Publications</h2>
  <p class="cv-note">* denotes equal contribution.</p>

  <div class="cv-publication">
    <span class="paper-title">RouteWise: Latency–Cost Optimization for Multi-Provider LLM Routing.</span>
    Muxin Tian, Haoran Ni, Yiyan Zhai, Yangsun Park, Juncheng Yang.
    Submitted to EuroSys 2027.
  </div>

  <div class="cv-publication">
    <span class="paper-title">SWE-Bench Mobile: Can Large Language Model Agents Develop Industry-Level Mobile Applications?</span>
    Muxin Tian*, Zhe Wang*, Zhenwei Tang, Blair Yang, Kunlun Zhu, Honghua Dong, Hanchen Li, Guangjing Wang, Jiaxuan You.
    KDD 2026 ADS Track Main Conference.
  </div>

  <div class="cv-publication">
    <span class="paper-title">Where LLM Agents Fail and How They Can Learn From Failures.</span>
    Kunlun Zhu*, Muxin Tian*, Zijia Liu*, Bingxuan Li*, Yingxuan Yang, Jiaxun Zhang, Pengrui Han, Qipeng Xie, Fuyang Cui, Weijia Zhang, Xiaoteng Ma, Xiaodong Yu, Gowtham Ramesh, Jialian Wu, Zicheng Liu, Pan Lu, James Zou, Jiaxuan You.
  </div>

  <div class="cv-publication">
    <span class="paper-title">OasisSimp: An Open-source Asian-English Sentence Simplification Dataset.</span>
    Hannah Liu*, Muxin Tian*, Iqra Ali, Haonan Gao, Qiaoyiwen Wu, Blair Yang, Uthayasanker Thayasivam, Annie Lee, Pakawat Nakwijit, Surangika Dayani Ranathunga, Ravi Shekhar.
    LREC 2026 Oral.
  </div>
</div>

<div class="cv-section">
  <h2>Research Experience</h2>

  <div class="cv-item">
    <div class="cv-item-header">
      <div class="cv-title">Harvard MadSys Lab, Harvard University</div>
      <div class="cv-meta">Jun 2025 – Present</div>
    </div>
    <div class="cv-subtitle">Research Intern, supervised by Prof. Juncheng Yang</div>
    <ul>
      <li>Build and operate FreeInference, an open LLM inference platform serving MIT and Harvard campuses.</li>
      <li>Proposed RouteWise, a cost-latency routing system for multi-provider LLM inference with primal-dual competitive guarantees and smart hedging, reducing API cost by 40% and P99 latency by 4.5x.</li>
      <li>Proposed Nimbus, a hybrid inference system that outsources requests to serverless APIs under bursty workloads via cache-displacement-aware knapsack optimization, achieving 19x TTFT improvement over baselines.</li>
    </ul>
  </div>

  <div class="cv-item">
    <div class="cv-item-header">
      <div class="cv-title">ULab, UIUC</div>
      <div class="cv-meta">Feb 2025 – Feb 2026</div>
    </div>
    <div class="cv-subtitle">Research Intern, supervised by Prof. Jiaxuan You</div>
    <ul>
      <li>Co-led OpenManus-RL, an agentic reinforcement learning framework for fine-tuning LLM agents on ALFWorld, WebShop, and GAIA.</li>
      <li>Co-developed AgentDebug, a framework that analyzes LLM agent trajectories with a modular error taxonomy to localize root-cause failures and provide targeted feedback.</li>
      <li>Initiated and led SWE-Bench Mobile, reconstructing real-world iOS/Android workflows from PRDs, Figma designs, and production codebases, resulting in a KDD 2026 ADS Track Main Conference paper.</li>
    </ul>
  </div>
</div>

<div class="cv-section">
  <h2>Work Experience</h2>

  <div class="cv-item">
    <div class="cv-item-header">
      <div class="cv-title">Microsoft Research</div>
      <div class="cv-meta">Jan 2025 – Dec 2025</div>
    </div>
    <div class="cv-subtitle">Research Intern, mentored by Zhongxin Guo</div>
    <ul>
      <li>Developed AutoForge, a framework that formulates agentic system design as a search problem over architectures, task decompositions, and tools using Monte Carlo Tree Search.</li>
      <li>Designed a trajectory-guided hierarchical optimization loop over orchestration, decomposition, components, and parameters.</li>
      <li>Extended the search space to cost-aware assignments of heterogeneous base LLMs using capability-specific leaderboards and model pricing.</li>
    </ul>
  </div>

  <div class="cv-item">
    <div class="cv-item-header">
      <div class="cv-title">Microsoft</div>
      <div class="cv-meta">Oct 2024 – Jan 2025</div>
    </div>
    <div class="cv-subtitle">Software Engineer Intern</div>
    <ul>
      <li>Designed and implemented an internal front-end component library using TypeScript and Lit for Microsoft Edge, with Storybook documentation for cross-browser UI development.</li>
      <li>Developed Microsoft Edge Mobile features on Android and iOS, addressing responsive layout inconsistencies across devices.</li>
    </ul>
  </div>
</div>

<div class="cv-section">
  <h2>Open-Source Experience</h2>
  <div class="cv-item">
    <ul>
      <li><strong>ChromiumOS</strong> — Google Summer of Code 2025 Contributor; enhanced the farfetchd service with tracing and replay support for disk I/O during app startup.</li>
      <li><strong>OpenManus-RL</strong> — Project leader; built online RL training infrastructure based on veRL and verl-agent.</li>
      <li><strong>libCacheSim</strong> — Contributor; bridged high-performance C++ cache simulation with JavaScript through a Node.js binding and published the package to npm.</li>
    </ul>
  </div>
</div>

<div class="cv-section">
  <h2>Skills</h2>
  <div class="cv-item">
    <ul>
      <li><strong>Languages:</strong> Java, Python, C/C++, JavaScript, TypeScript, Go, SQL, Swift, Objective-C, Kotlin, HTML5/CSS3.</li>
      <li><strong>Frameworks &amp; Libraries:</strong> React, Node.js, Lit, Spring Boot, Spring Cloud, Django, Flask, Spring Data JPA.</li>
      <li><strong>Databases &amp; Cloud Platforms:</strong> MySQL, PostgreSQL, MongoDB, AWS, Google Cloud Platform.</li>
      <li><strong>Tools &amp; Systems:</strong> Git, Jenkins, CI/CD, Docker, Kubernetes, Kafka, RabbitMQ, Nginx, Prometheus, Grafana.</li>
    </ul>
  </div>
</div>

<div class="cv-section">
  <h2>Service</h2>
  <div class="cv-item">
    <ul>
      <li>ACL 2025, 2026 Reviewer</li>
      <li>ICML 2026 Reviewer</li>
    </ul>
  </div>
</div>

<div class="cv-section">
  <h2>Relevant Courses</h2>
  <div class="cv-item">
    Operating Systems, Database Systems, Distributed Systems, Algorithm Design and Analysis, Computer Networking,
    Software Engineering, Web Development, Compilers, Machine Learning, Deep Learning, Reinforcement Learning,
    Image Understanding, Natural Language Computing, Business of Software.
  </div>
</div>

</div>
