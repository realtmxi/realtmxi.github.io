---
title: "What I Learned from a Failed Project on Automatic Agentic Systems"
date: 2026-04-27
published: false
categories:
  - blog
tags:
  - agentic-systems
  - reflections
  - msra
---

During my time at Microsoft Research Asia, I worked on a project internally called **SuperAgent / ADCopilot** — a system that tried to *automatically* generate runnable single- and multi-agent systems from a natural language description. The idea was ambitious: a user describes what they want, and a hierarchy of "meta-agents" (TaskDiscriminator, WorkerAgentGen, PromptGen, CodeGen, RAGAgentGen, PlannerAgentGen, PromptRefiner, CodeRefiner, ...) collaborates to spec, write, execute, and refine an agent system that solves the task. We later added an MCTS-style optimizer (AutoForge) and benchmarked on environments like ALFWorld.

The project never turned into a paper. We didn't ship a flagship release. By any conventional academic metric, it failed.

I still think it was one of the most formative things I have done so far, and I want to write down why — both for myself, and for anyone considering a similar direction.

## What we were actually betting on

The bet underneath ADCopilot was that, in 2024, **agent design itself could be automated**. We believed that if you wrapped GPT-class models in the right scaffolding — uniform agent specifications, structured tool use, layered planners, refiners that read execution traces — you could turn agent construction from a *manual craft* into something closer to a *compiler*. Users would describe an outcome; the system would output an agent.

That bet rhymed with what is now obvious in 2026: agent generation, agentic optimization, and agentic search are real research directions. But in 2024, several things were not yet true.

## Why it didn't work, honestly

**1. The substrate was not ready.**
We were trying to build a self-improving agent system on top of LLMs that could not yet reliably do the low-level things our system depended on: produce valid, schema-conforming structured outputs at every step; recover from a tool error without spiraling; maintain a long, faithful trace across many sub-agents. We treated the LLM as an oracle and the framework as the contribution. In retrospect, the framework was overfitted to a model behavior that was about to change every three months.

**2. We optimized infrastructure faster than we understood the problem.**
The repo grew to a full-stack product: a Python framework, a runtime (local + Docker), a React UI, prompt management, RAG, an MCTS-flavored optimizer, evaluation harnesses. Each piece was reasonable. Together, they consumed all our time. We were debugging async tool-call edge cases when we should have been asking: *what does it mean for a generated agent to be "good"?*

**3. The evaluation was ill-defined.**
There was no widely accepted benchmark for *automatically generated* agent systems. ALFWorld measured agent execution, not agent generation. Code generation benchmarks measured single-shot code, not orchestrated multi-agent behavior. Without a target metric, every improvement felt subjective. Without a target metric, there was no paper.

**4. The field moved past us while we built.**
While we were stabilizing our scheduler, the community was shipping standardized tool-use APIs, MCP, OpenManus-style open agents, and increasingly capable base models that did, in one prompt, what our hierarchy of meta-agents was painstakingly approximating. Our complexity stopped buying us capability.

## What I would not do differently

Even knowing all of this, I would still take the project. A few things only become legible by trying.

- I learned, viscerally, what "compounding failure across LLM calls" looks like when you stack ten of them. That now informs everything I do in agentic RL and serving.
- I learned how much of an "agent framework" is actually a thin abstraction over evolving model behavior — and how dangerous it is to bet a research contribution on that abstraction.
- I learned that building a UI and a runtime and a benchmark and a method *at the same time* is how a research project quietly becomes a product team of one.
- I learned to ask, before writing code, "what is the smallest experiment that would falsify this idea in two weeks?" — not because the answer is always two weeks, but because the question reframes everything.

## Why writing this down matters

Most of what I read online is the sanitized version: the paper that worked, the agent that demoed well, the benchmark that went up. The negative space — the bets that aged poorly, the systems that were almost right at the wrong time — rarely makes it into the public record. But that is exactly the part I, as a junior researcher, needed.

So this is my small contribution to that negative space. ADCopilot did not become a paper. It became a set of intuitions that I now use every day when I think about post-training, agent optimization, and efficient serving. By that measure, I am grateful it failed the way it did.

If you are considering a project in the same area, and want to compare notes, my [calendar](/calendar/) is open.
