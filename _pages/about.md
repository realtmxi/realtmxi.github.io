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
      <span>systems</span>
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
    <p>Hi, I'm Murphy Tian, a MLSys researcher. I received my bachelor degree from University of Toronto, Computer Science Department. I am fortunate to work with talented research advisors: Prof. <a href="https://junchengyang.com/">JunCheng Yang</a> at Harvard MadSys Lab on LLM serving systems and Prof. <a href="https://cs.stanford.edu/people/jiaxuan/">Jiaxuan You</a> at U Lab on agentic reinforcement learning. I am now a senior research scientist in Tencent. I also spent a wonderful year as a research intern in Microsoft Research Asia.</p>
    <p>Feel free to reach out to explore potential research opportunities.</p>
  </div>
</section>

<section class="home-section" aria-labelledby="research-focus-title">
  <header class="home-section__heading" data-reveal>
    <div>
      <p class="home-section-label">Research</p>
      <h2 id="research-focus-title">Focus areas</h2>
      <p class="home-section__lead">My research focuses on building more capable and accessible intelligence through two complementary directions:</p>
    </div>
  </header>

  <div class="focus-grid">
    <article class="focus-item" data-reveal>
      <div class="focus-item__top">
        <span class="focus-item__index">01</span>
        <span class="focus-item__icon" aria-hidden="true"><i class="fas fa-diagram-project"></i></span>
      </div>
      <h3>Post-training and agentic systems</h3>
      <p>Exploring reinforcement learning methods for agent capabilities and frameworks for automatic agentic system generation and optimization.</p>
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
      <p>Building inference optimization, scheduling, and resource management infrastructure to reduce the cost of serving large language models.</p>
      <ul class="focus-tags" aria-label="Research topics">
        <li>Inference</li>
        <li>Scheduling</li>
        <li>ML systems</li>
      </ul>
    </article>
  </div>
</section>

<p class="home-goal" data-reveal><strong>My long-term goal</strong> is to make AI tokens as inexpensive and dependable as basic utilities, so that advanced AI capabilities can become accessible to the broader public.</p>

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
        <p>Our paper <strong>SWE-Bench Mobile</strong> has been accepted to the <strong>KDD 2026 ADS Track</strong> as a Main Conference presentation.</p>
      </div>
    </article>

    <article class="news-item news-item--linked" data-reveal>
      <time class="news-date" datetime="2026-05">
        <span>May</span>
        <strong>2026</strong>
      </time>
      <div class="news-text">
        <p><a href="https://freeinference.org/"><strong>FreeInference</strong></a> is alive. Try it out at <a href="https://freeinference.org/">freeinference.org</a>.</p>
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
        <p>Our paper on open-source Asian-English sentence simplification (<strong>OasisSimp</strong>) has been accepted as an oral presentation at <strong>LREC 2026</strong>.</p>
      </div>
    </article>
  </div>
</section>
