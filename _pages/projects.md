---
title: "Projects"
layout: archive
permalink: /projects/
author_profile: true
---

{% include base_path %}

<style>
  .project-entry {
    margin-bottom: 2.5em;
    border-left: 4px solid #ccc;
    padding: 1.5em;
    background: #f8f9fa;
    border-radius: 8px;
    transition: all 0.3s ease;
  }
  .project-entry:hover {
    border-left: 4px solid #007bff;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transform: translateY(-2px);
  }
  .project-title {
    font-size: 1.4em;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 0.5em;
  }
  .project-description {
    color: #555;
    line-height: 1.6;
    margin-bottom: 1em;
  }
  .project-links {
    margin-top: 1em;
  }
  .project-btn {
    display: inline-block;
    padding: 8px 16px;
    background: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-size: 0.9em;
    transition: background 0.3s ease;
  }
  .project-btn:hover {
    background: #0056b3;
    color: white;
    text-decoration: none;
  }
</style>


<div class="project-entry">
  <div class="project-title">OpenManus-RL</div>
  <div class="project-description">
    An open-source initiative collaboratively led by Ulab-UIUC and MetaGPT, extending the original <a href="https://github.com/FoundationAgents/OpenManus">@OpenManus</a> project. . Inspired by successful RL tunning for reasoning LLM such as Deepseek-R1, we explore new paradigms for RL-based LLM agent tuning, particularly building upon foundations.
  </div>
  <div class="project-links">
    <a href="https://github.com/OpenManus/OpenManus-RL" class="project-btn">View on GitHub</a>
  </div>
</div>

<div class="project-entry">
  <div class="project-title">ChromiumOS</div>
  <div class="project-description">
    Selected as a Google Summer of Code 2025 contributor, this project enhances ChromiumOS's farfetchd service by implementing advanced kernel tracing and replaying capabilities, achieving significant reductions in application cold start latency.
  </div>
  <div class="project-links">
    <a href="https://summerofcode.withgoogle.com/programs/2025/projects/w9IS12mr" class="project-btn">View on GSoC</a>
  </div>
</div>
