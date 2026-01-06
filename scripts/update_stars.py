#!/usr/bin/env python3
"""
Update GitHub star counts in _pages/projects.md
"""

import os
import re
import requests

# Repository configurations
REPOS = [
    {
        'owner': 'OpenManus',
        'repo': 'OpenManus-RL',
        'pattern': r'(<div class="project-title">OpenManus-RL</div>.*?<div class="github-stars">)[\d.]+k?(</div>)'
    },
    {
        'owner': 'chromium',
        'repo': 'chromium',  # ChromiumOS is part of Chromium
        'pattern': r'(<div class="project-title">ChromiumOS - farfetchd</div>.*?<div class="github-stars">)[\d.]+k?(</div>)'
    }
]

def get_star_count(owner, repo):
    """Fetch star count from GitHub API"""
    url = f'https://api.github.com/repos/{owner}/{repo}'
    headers = {}
    
    # Use GitHub token if available for higher rate limits
    token = os.environ.get('GITHUB_TOKEN')
    if token:
        headers['Authorization'] = f'token {token}'
    
    try:
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        data = response.json()
        return data.get('stargazers_count', 0)
    except Exception as e:
        print(f"Error fetching stars for {owner}/{repo}: {e}")
        return None

def format_stars(count):
    """Format star count (e.g., 3600 -> 3.6k)"""
    if count >= 1000:
        return f"{count / 1000:.1f}k"
    return str(count)

def update_projects_file():
    """Update star counts in projects.md"""
    file_path = '_pages/projects.md'
    
    if not os.path.exists(file_path):
        print(f"Error: {file_path} not found")
        return False
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    updated = False
    for repo_config in REPOS:
        star_count = get_star_count(repo_config['owner'], repo_config['repo'])
        
        if star_count is None:
            continue
        
        formatted_stars = format_stars(star_count)
        pattern = repo_config['pattern']
        replacement = rf'\g<1>{formatted_stars}\g<2>'
        
        new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
        
        if new_content != content:
            print(f"Updated {repo_config['owner']}/{repo_config['repo']}: {formatted_stars} stars")
            content = new_content
            updated = True
        else:
            print(f"No change for {repo_config['owner']}/{repo_config['repo']}")
    
    if updated:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("✅ Star counts updated successfully")
        return True
    else:
        print("ℹ️  No updates needed")
        return False

if __name__ == '__main__':
    update_projects_file()
