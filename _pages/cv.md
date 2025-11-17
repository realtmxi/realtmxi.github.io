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
    max-width: 720px;
    margin: 0 auto;
    text-align: center;
    padding: 0 1.5em;
  }
  
  .cv-download {
    margin: 4em 0;
    padding: 4em 3em;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 20px;
    box-shadow: 
      0 10px 40px rgba(102, 126, 234, 0.35),
      0 1px 3px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    position: relative;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .cv-download::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.6s ease;
  }
  
  .cv-download:hover::before {
    opacity: 1;
  }
  
  .cv-download:hover {
    transform: translateY(-4px);
    box-shadow: 
      0 20px 60px rgba(102, 126, 234, 0.4),
      0 2px 6px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }
  
  .cv-icon {
    font-size: 5em;
    margin-bottom: 0.4em;
    display: inline-block;
    animation: float 3s ease-in-out infinite;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  .cv-download h2 {
    color: white;
    margin-bottom: 0.5em;
    font-size: 2em;
    font-weight: 700;
    letter-spacing: -0.02em;
    border: none;
    padding: 0;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
  
  .cv-download p {
    color: rgba(255, 255, 255, 0.95);
    margin-bottom: 2.2em;
    font-size: 1.1em;
    line-height: 1.6;
    letter-spacing: 0.01em;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .cv-download-btn {
    display: inline-block;
    padding: 16px 48px;
    background: white;
    color: #667eea;
    text-decoration: none;
    border-radius: 12px;
    font-weight: 700;
    font-size: 1.1em;
    letter-spacing: 0.02em;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 
      0 4px 16px rgba(0, 0, 0, 0.15),
      0 1px 3px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
  }
  
  .cv-download-btn::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(102, 126, 234, 0.1);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  .cv-download-btn:hover::after {
    width: 300px;
    height: 300px;
  }
  
  .cv-download-btn:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 
      0 8px 24px rgba(0, 0, 0, 0.2),
      0 2px 6px rgba(0, 0, 0, 0.15);
    color: #764ba2;
    text-decoration: none;
  }
  
  .cv-download-btn:active {
    transform: translateY(0) scale(0.98);
  }
  
  .cv-download-btn::before {
    content: "📄 ";
    font-size: 1.3em;
    display: inline-block;
    transition: transform 0.3s ease;
    position: relative;
    z-index: 1;
  }
  
  .cv-download-btn:hover::before {
    transform: scale(1.1) rotate(-5deg);
  }
  
  .cv-meta {
    color: rgba(255, 255, 255, 0.8);
    margin-top: 1.8em;
    font-size: 0.9em;
    letter-spacing: 0.02em;
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
</style>

<div class="cv-container">
  
  <div class="cv-download">
    <div class="cv-icon">📋</div>
    <h2>Download My CV</h2>
    <p>Complete curriculum vitae with detailed information.</p>
    <a href="/files/cv.pdf" class="cv-download-btn" target="_blank">Download PDF</a>
    <div class="cv-meta">Last updated: {{ page.last_modified_at | date: "%B %Y" }}</div>
  </div>

</div>
