---
permalink: /
title: "Muxin (Murphy) Tian"
author_profile: true
hide_title: true
page_class: home-page
redirect_from: 
  - /about/
  - /about.html
---

<section class="home-hero" aria-labelledby="home-hero-title">
  <div class="home-hero__copy">
    <p class="home-hero__eyebrow">
      <span class="home-hero__status-dot" aria-hidden="true"></span>
      MLSys researcher
    </p>
    <h1 id="home-hero-title">Muxin <span>(Murphy) Tian</span></h1>
    <p class="home-hero__lead">Senior Research Scientist at Tencent, working on agentic reinforcement learning and efficient LLM inference.</p>
    <div class="home-actions">
      <a class="home-action primary" href="{{ '/research/' | relative_url }}">
        Experience <span aria-hidden="true">↗</span>
      </a>
      <a class="home-action" href="{{ '/publications/' | relative_url }}">
        Publications <span aria-hidden="true">→</span>
      </a>
      <a class="home-action home-action--quiet" href="mailto:{{ site.author.email }}">
        Email
      </a>
    </div>
  </div>

  <div class="home-hero__visual" aria-hidden="true">
    <div class="system-orbit system-orbit--outer"></div>
    <div class="system-orbit system-orbit--inner"></div>
    <div class="system-pulse"></div>
    <div class="system-core">
      <span>AI</span>
      <small>systems</small>
    </div>
    <div class="system-node system-node--rl">
      <strong>RL</strong>
      <span>post-training</span>
    </div>
    <div class="system-node system-node--agent">
      <strong>AGENT</strong>
      <span>reasoning</span>
    </div>
    <div class="system-node system-node--serve">
      <strong>SERVE</strong>
      <span>inference</span>
    </div>
    <span class="system-spark system-spark--one"></span>
    <span class="system-spark system-spark--two"></span>
    <span class="system-spark system-spark--three"></span>
  </div>
</section>

<section class="home-intro" data-reveal>
  <div class="home-section-label">About</div>
  <div class="home-intro__body">
    <p>Bachelor's degree in Computer Science from the University of Toronto. Research with Prof. <a href="https://junchengyang.com/">JunCheng Yang</a> on LLM serving and Prof. <a href="https://cs.stanford.edu/people/jiaxuan/">Jiaxuan You</a> on agentic reinforcement learning. Previously at Microsoft Research Asia.</p>
  </div>
</section>

<section class="home-section" aria-labelledby="research-focus-title">
  <header class="home-section__heading" data-reveal>
    <div>
      <p class="home-section-label">Research</p>
      <h2 id="research-focus-title">Focus areas</h2>
    </div>
  </header>

  <div class="focus-grid">
    <article class="focus-item" data-reveal>
      <div class="focus-item__top">
        <span class="focus-item__index">01</span>
        <span class="focus-item__icon" aria-hidden="true"><i class="fas fa-diagram-project"></i></span>
      </div>
      <h3>Post-training &amp; agentic systems</h3>
      <p>Reinforcement learning for agent capabilities and automatic agent system optimization.</p>
      <ul class="focus-tags" aria-label="Research topics">
        <li>Reinforcement learning</li>
        <li>Agents</li>
        <li>AutoML</li>
      </ul>
    </article>

    <article class="focus-item focus-item--violet" data-reveal>
      <div class="focus-item__top">
        <span class="focus-item__index">02</span>
        <span class="focus-item__icon" aria-hidden="true"><i class="fas fa-microchip"></i></span>
      </div>
      <h3>Efficient systems for AI</h3>
      <p>Inference optimization, scheduling, and resource management for serving large language models.</p>
      <ul class="focus-tags" aria-label="Research topics">
        <li>Inference</li>
        <li>Scheduling</li>
        <li>ML systems</li>
      </ul>
    </article>
  </div>
</section>

<p class="home-goal" data-reveal><strong>Long-term goal:</strong> make AI tokens as inexpensive and dependable as basic utilities.</p>

<section class="home-section home-news" aria-labelledby="news-title">
  <header class="home-section__heading" data-reveal>
    <div>
      <p class="home-section-label">Latest updates</p>
      <h2 id="news-title">News</h2>
    </div>
  </header>

  <div class="news-list">
    <article class="news-item" data-reveal>
      <time class="news-date" datetime="2026-05">
        <span>May</span>
        <strong>2026</strong>
      </time>
      <div class="news-text">
        <p><strong>SWE-Bench Mobile</strong> accepted to the <strong>KDD 2026 ADS Track</strong> as a Main Conference presentation.</p>
      </div>
    </article>

    <article class="news-item news-item--linked" data-reveal>
      <time class="news-date" datetime="2026-05">
        <span>May</span>
        <strong>2026</strong>
      </time>
      <div class="news-text">
        <p>Launched <a href="https://freeinference.org/"><strong>FreeInference</strong></a>, a free inference service for open-source, research, and education.</p>
      </div>
      <a class="news-link" href="https://freeinference.org/" aria-label="Visit FreeInference">
        <span aria-hidden="true">↗</span>
      </a>
    </article>

    <article class="news-item" data-reveal>
      <time class="news-date" datetime="2026-03">
        <span>Mar</span>
        <strong>2026</strong>
      </time>
      <div class="news-text">
        <p><strong>OasisSimp</strong> accepted as an oral presentation at <strong>LREC 2026</strong>.</p>
      </div>
    </article>
  </div>
</section>
