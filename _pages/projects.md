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
  .project-header {
    display: flex;
    align-items: center;
    margin-bottom: 0.5em;
    gap: 12px;
  }
  .project-title {
    font-size: 1.4em;
    font-weight: bold;
    color: #2c3e50;
    margin: 0;
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
  .github-stars {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background-color: #f6f8fa;
    border: 1px solid #d1d5da;
    padding: 2px 8px;
    border-radius: 6px;
    font-size: 0.8em;
    color: #24292e;
    font-weight: 600;
    line-height: 1.2;
  }
  .github-stars::before {
    content: url('data:image/svg+xml,%3Csvg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="14" height="14"%3E%3Cpath d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 13.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.192L.644 6.374a.75.75 0 0 1 .416-1.28l4.21-.61L7.127.668A.75.75 0 0 1 8 .25Z"%3E%3C/path%3E%3C/svg%3E');
    color: #f1c40f; /* Gold color for the star */
    position: relative;
    top: 1px;
  }
</style>


<div class="project-entry">
  <div class="project-header">
    <div class="project-title">OpenManus-RL</div>
    <div class="github-stars">3k stars</div>
  </div>
  <div class="project-description">
    An open-source initiative collaboratively led by Ulab-UIUC and MetaGPT, extending the original <a href="https://github.com/FoundationAgents/OpenManus">@OpenManus</a> project. Inspired by successful RL tuning for reasoning LLM such as DeepSeek-R1, we explore new paradigms for RL-based LLM agent tuning, particularly building upon foundations.
  </div>
  <div class="project-links">
    <a href="https://github.com/OpenManus/OpenManus-RL" class="project-btn">View on GitHub</a>
  </div>
</div>

<div class="project-entry">
  <div class="project-header">
    <div class="project-title">ChromiumOS-farfetchd</div>
    <div class="github-stars">21k stars</div>
  </div>
  <div class="project-description">
    Selected as a Google Summer of Code 2025 contributor, this project enhances ChromiumOS's farfetchd service by implementing advanced kernel tracing and replaying capabilities, achieving significant reductions in application cold start latency.
  </div>
  <div class="project-links">
    <a href="https://summerofcode.withgoogle.com/programs/2025/projects/w9IS12mr" class="project-btn">View on GSoC</a>
  </div>
</div>
