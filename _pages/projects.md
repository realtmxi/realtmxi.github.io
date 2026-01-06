---
title: "Projects"
layout: archive
permalink: /projects/
author_profile: true
---

{% include base_path %}

<style>
  .project-container {
    max-width: 900px;
    margin: 0 auto;
  }
  
  .project-entry {
    margin-bottom: 2.5em;
    padding: 1.5em;
    background: #ffffff;
    border-left: 4px solid #4a90e2;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    gap: 2.5em;
    align-items: flex-start;
  }
  
  .project-entry:hover {
    border-left-color: #2563eb;
    box-shadow: 0 4px 16px rgba(0,0,0,0.12);
    transform: translateY(-2px);
  }
  
  .project-image {
    flex-shrink: 0;
    width: 130px;
    height: 130px;
    border-radius: 24px;
    overflow: hidden;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e5e7eb;
    padding: 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04);
  }
  
  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    padding: 20px;
  }
  
  .project-content {
    flex: 1;
    min-width: 0;
  }
  
  .project-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.2em;
    gap: 1.2em;
    flex-wrap: wrap;
  }
  
  .project-title {
    font-size: 1.4em;
    font-weight: 700;
    color: #1a202c;
    margin: 0;
    line-height: 1.3;
    letter-spacing: -0.02em;
  }
  
  .project-meta {
    display: flex;
    align-items: center;
    gap: 0.7em;
    flex-wrap: wrap;
  }
  
  .project-role {
    display: inline-block;
    padding: 6px 14px;
    background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
    color: #1e40af;
    border-radius: 8px;
    font-size: 0.85em;
    font-weight: 600;
    transition: all 0.25s ease;
    box-shadow: 0 1px 3px rgba(30,64,175,0.1);
  }
  
  .project-role:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 8px rgba(30,64,175,0.2);
  }
  
  .github-stars {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background-color: #f0f2f5;
    border: 1px solid rgba(27, 31, 36, 0.08);
    padding: 4px 10px 4px 8px;
    border-radius: 20px;
    font-size: 0.8em;
    color: #4a5568;
    font-weight: 600;
    line-height: 1.2;
    transition: all 0.25s ease;
  }

  .github-stars:hover {
    background-color: #ffffff;
    border-color: #4a90e2;
    color: #4a90e2;
    transform: translateY(-1px);
    box-shadow: 0 3px 10px rgba(74,144,226,0.15);
  }
  
  .github-stars::before {
    content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="14" height="14"%3E%3Cpath fill="%23000000" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8Z"/%3E%3C/svg%3E');
    width: 14px;
    height: 14px;
    transform: translateY(1px);
  }
  
  .project-description {
    color: #4a5568;
    line-height: 1.75;
    margin-bottom: 1.5em;
    font-size: 0.95em;
    letter-spacing: 0.01em;
  }
  
  .project-description a {
    color: #4a90e2;
    text-decoration: none;
    font-weight: 500;
  }
  
  .project-description a:hover {
    color: #2563eb;
    text-decoration: underline;
  }
  
  .project-links {
    display: flex;
    gap: 0.75em;
    flex-wrap: wrap;
  }
  
  .project-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 18px;
    background: #ffffff;
    color: #4b5563;
    text-decoration: none !important;
    border: 1.5px solid #e5e7eb;
    border-radius: 8px;
    font-size: 0.9em;
    font-weight: 600;
    letter-spacing: 0.01em;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
    position: relative;
    overflow: hidden;
  }
  
  .project-btn::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(74,144,226,0.1);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  .project-btn:hover::after {
    width: 300px;
    height: 300px;
  }
  
  .project-btn:hover {
    background: #fafbfc;
    border-color: #4a90e2;
    color: #4a90e2;
    text-decoration: none !important;
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(74,144,226,0.12), 0 2px 4px rgba(74,144,226,0.08);
  }
  
  .project-btn.primary {
    background: linear-gradient(135deg, #5b9fe3 0%, #4a90e2 50%, #3b7ec6 100%);
    background-size: 200% 100%;
    color: white;
    border: none;
    box-shadow: 0 4px 12px rgba(74,144,226,0.3), 0 2px 4px rgba(74,144,226,0.2);
  }
  
  .project-btn.primary::after {
    background: rgba(255,255,255,0.15);
  }
  
  .project-btn.primary:hover {
    background-position: 100% 0;
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 12px 24px rgba(74,144,226,0.4), 0 4px 8px rgba(74,144,226,0.25);
    color: white;
  }
  
  .project-btn::before {
    content: '';
    display: inline-block;
    width: 15px;
    height: 15px;
    background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"%3E%3Cpath d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"%3E%3C/path%3E%3Cpath d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"%3E%3C/path%3E%3C/svg%3E');
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.75;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
  }
  
  .project-btn:hover::before {
    opacity: 1;
    transform: translateX(2px) translateY(-2px);
  }
  
  .project-btn:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(74,144,226,0.2);
  }
  
  .project-btn.primary:active {
    transform: translateY(0) scale(0.98);
  }  
  /* Responsive design */
  @media (max-width: 768px) {
    .project-entry {
      flex-direction: column;
    }
    
    .project-image {
      width: 100%;
      height: 180px;
    }
    
    .project-header {
      flex-direction: column;
      align-items: flex-start;
    }
    
    .project-meta {
      width: 100%;
    }
  }
  
  /* Dark mode support */
  @media (prefers-color-scheme: dark) {
    .project-entry {
      background: #1a202c;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }
    
    .project-title {
      color: #f7fafc;
    }
    
    .project-description {
      color: #cbd5e0;
    }
    
    .project-role {
      background: #1e3a8a;
      color: #bfdbfe;
    }
    
    .github-stars {
      background-color: #2d3748;
      border-color: #4a5568;
      color: #cbd5e0;
    }
    
    .project-btn {
      background: #2d3748;
      color: #cbd5e0;
    }
    
    .project-btn:hover {
      background: #4a90e2;
      color: white;
    }
    
    .project-btn.primary {
      background: #4a90e2;
      color: white;
    }
  }
</style>

<div class="project-container">

<div class="project-entry">
  <div class="project-image">
    <img src="{{ site.baseurl }}/images/logos/openmanus-logo.jpg" alt="OpenManus-RL Logo" loading="eager" decoding="async">
  </div>
  <div class="project-content">
    <div class="project-header">
      <div class="project-title">OpenManus-RL</div>
      <div class="project-meta">
        <div class="github-stars">3.8k</div>
      </div>
    </div>
    <div class="project-description">
      An open-source initiative collaboratively led by Ulab-UIUC and MetaGPT, extending the original <a href="https://github.com/FoundationAgents/OpenManus" target="_blank">@OpenManus</a> project. Inspired by successful RL tuning for reasoning LLM such as DeepSeek-R1, we explore new paradigms for RL-based LLM agent tuning, particularly building upon foundations.
    </div>
    <div class="project-links">
      <a href="https://github.com/OpenManus/OpenManus-RL" class="project-btn primary" target="_blank">View on GitHub</a>
    </div>
  </div>
</div>

<div class="project-entry">
  <div class="project-image">
    <img src="{{ site.baseurl }}/assets/images/GSoc-icon.svg" alt="GSoC Logo" loading="eager" decoding="async">
  </div>
  <div class="project-content">
    <div class="project-header">
      <div class="project-title">ChromiumOS - farfetchd</div>
      <div class="project-meta">
        <div class="github-stars">22.2k</div>
      </div>
    </div>
    <div class="project-description">
      Selected as a Google Summer of Code 2025 contributor, this project enhances ChromiumOS's farfetchd service by implementing advanced kernel tracing and replaying capabilities, achieving significant reductions in application cold start latency.
    </div>
    <div class="project-links">
      <a href="https://summerofcode.withgoogle.com/programs/2025/projects/w9IS12mr" class="project-btn primary" target="_blank">View on GSoC</a>
      <a href="https://github.com/chromium/chromium" class="project-btn" target="_blank">ChromiumOS Repo</a>
    </div>
  </div>
</div>

</div>
