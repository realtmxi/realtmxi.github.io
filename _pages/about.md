---
permalink: /
title: "Muxin (Murphy) Tian"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
  .page__content a {
    text-decoration: none;
    color: #2d3748;
    font-weight: 500;
    transition: color 0.2s ease;
  }
  
  .page__content a:hover {
    color: #1a202c;
    text-decoration: none;
  }

  .news-list {
    margin-top: 1.1rem;
    display: grid;
    gap: 0.15rem;
  }

  .news-item {
    display: grid;
    grid-template-columns: 7.5rem 1fr;
    gap: 1rem;
    align-items: start;
    padding: 0.8rem 0;
    border-bottom: 1px solid #edf2f7;
  }

  .news-date {
    width: fit-content;
    padding: 0.18rem 0.65rem;
    border-radius: 999px;
    background: #eef6ff;
    color: #2b6cb0;
    font-size: 0.82rem;
    font-weight: 700;
    white-space: nowrap;
  }

  .news-text {
    color: #2d3748;
    line-height: 1.55;
  }

  .news-text strong {
    color: #1a202c;
  }

  @media (max-width: 600px) {
    .news-item {
      grid-template-columns: 1fr;
      gap: 0.35rem;
      padding: 0.85rem 0;
    }
  }

  @media (prefers-color-scheme: dark) {
    .news-item {
      border-bottom-color: #2d3748;
    }

    .news-date {
      background: #1e3a5f;
      color: #90cdf4;
    }

    .news-text {
      color: #cbd5e0;
    }

    .news-text strong {
      color: #f7fafc;
    }
  }
</style>

Hi, I'm Murphy Tian, an undergraduate researcher graduated from University of Toronto. I am fortunate to work with talented research advisors: Prof. [Jiaxuan You](https://cs.stanford.edu/people/jiaxuan/) at U Lab on agentic reinforcement learning and Prof. [JunCheng Yang](https://junchengyang.com/) at Harvard MadSys Lab on LLM serving systems. I have open-source experience as a core contributor of [OpenManus](https://github.com/FoundationAgents/OpenManus) and a Google Summer of Code contributor to ChromiumOS, along with industry background from working at Microsoft Research Asia and Microsoft. I was previously advised by Dr. [Daniela Rosu](https://www.linkedin.com/in/daniela-rosu-704828/).

**Email:** murphy[dot]tian[at]mail[dot]toronto[dot]ca

My research focuses on building more capable and accessible intelligence through two complementary directions: 
(1) **Post-training and agentic systems** — exploring reinforcement learning methods for agent capabilities and frameworks for automatic agentic system generation and optimization; 
(2) **Efficient systems for AI** — building inference optimization, scheduling, and resource management infrastructure to reduce the cost of serving large language models. 

My long-term goal is to make AI tokens as inexpensive and dependable as basic utilities, so that advanced AI capabilities can become accessible to the broader public. 

Feel free to reach out to explore potential research opportunities.

---

## News

<div class="news-list">
  <div class="news-item">
    <div class="news-date">May 2026</div>
    <div class="news-text">Our paper <strong>SWE-Bench Mobile</strong> has been accepted to the <strong>KDD 2026 ADS Track</strong> as a Main Conference presentation.</div>
  </div>
  <div class="news-item">
    <div class="news-date">May 2026</div>
    <div class="news-text"><a href="https://freeinference.org/">FreeInference</a> is alive. Try it out at <a href="https://freeinference.org/">freeinference.org</a>.</div>
  </div>
  <div class="news-item">
    <div class="news-date">Mar 2026</div>
    <div class="news-text">Our paper on open-source Asian-English sentence simplification (<strong>OasisSimp</strong>) has been accepted as an oral presentation at <strong>LREC 2026</strong>.</div>
  </div>
</div>
