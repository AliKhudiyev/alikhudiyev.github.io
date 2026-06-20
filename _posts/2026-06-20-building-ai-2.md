---
layout: post
author:
- Ali Khudiyev
title: "Building General Purpose AI II (highly personal approach)"
date: 2026-06-20 20:15:00 +0200
categories: blog draft AI opinion
---

In this blog post, I will not build a GPAI for the readers,
unfortunately. That day is not today. Instead, I will try to describe
the setting in which the so-called GPAI will have to operate... the
setting in which humans operate in the real world. It is important to be
able to describe such a setting as accurately as possible since without
it we may not build strong beliefs and intuitions for how an intelligent
agent ought to operate under the real-world conditions. Without further
ado, let me get right into it.

|**Axis**|**Value**|
|------------|-------------|
| *Learning* | |
|Offline -- Online/Continual | Online/Continual Learning |
|Supervised -- Semi-Supervised -- Unsupervised -- Reinforcement| Semi-Supervised (+ RL)|
|Passive -- Active                       |Active Learning|
| Single-Objective -- Multi-Objective    |Multi-Objective Learning|
| Disembodied -- Embodied/Grounded       |Embodied/Grounded Learning|
|-----------|-------------|
| *Environment*                          |
| Episodic -- Sequential                 |Sequential Environment|
| Fully -- Partially Observable          |Partially Observable Environment|
| Known -- Unknown                       |Unknown Environment|
| Deterministic -- Stochastic            |Stochastic Environment|
| Single-Agent -- Multi-Agent            |Multi-Agent Environment|
| Stationary -- Dynamic/Non-stationary   |Dynamic Environment|
| Closed -- Open-ended                   |Open-ended Environment|

To sum the table above, what I am trying to tell is, (breathing in...)
**Continual Active Learning with Semi-Supervision for Multi-Objective
Optimization for an Embodied Agent Partially Observing in a Sequential
and Open-ended Unknown Environment with Stochastic and Non-Stationary Dynamics
in the presence of Multi-Agents and Sparse Explicit Rewards**
(gasping...)

I know: it sounds mouthful, but sometimes there is no shortcut for
describing a thing that has become so messy by the process of evolution.
Even the smallest details may matter when the process has been running
for too long. Emergence is not inherent to the nature, it "emerges" out
of our computational limits and how far to the future we can actually
see/compute. Everything within our reach is imminent and anything beyond
our reach is emergent.

------------------------------------------------------------------------

Multiple architectures and approaches for (building) intelligent systems
have been proposed by scientists such as Richard Sutton, Yann LeCun,
Jurgen Schmidhuber, Markus Hutter. Richard Sutton et al. have proposed
the Options and Knowledge (OaK) architecture in [The Alberta Plan for AI
Research](https://arxiv.org/abs/2209.11173), Yann LeCun has proposed his
architecture for autonomous intelligent agents in [A Path Towards
Autonomous Machine
Intelligence](https://openreview.net/pdf?id=BZ5a1r-kVsf), Jurgen
Schmidhuber has proposed RNNAI in [On Learning to Think: Algorithmic
Information Theory for Novel Combinations of Reinforcement Learning
Controllers and Recurrent Neural World
Models](https://arxiv.org/abs/1511.09249), Markus Hutter has proposed
universal AI in [A Theory of Universal Artificial Intelligence based on
Algorithmic Complexity](https://arxiv.org/abs/cs/0004001).

<figure id="fig:oak-arch" style="text-align:center;">
<div class="minipage" style="text-align:center;">
<img src="/assets/blog/oak-arch.png" width="50%" />
</div>
<figcaption>The OaK Architecture by Richard Sutton et al.</figcaption>
</figure>

<figure id="fig:objective-driven-ai-arch" style="text-align:center;">
<div class="minipage" style="text-align:center;">
<img src="/assets/blog/object-driven-ai-arch.png" width="40%" />
</div>
<figcaption>The Objective-Driven AI Architecture by Yann
LeCun</figcaption>
</figure>

<figure id="fig:rnnai-arch" style="text-align:center;">
<div class="minipage" style="text-align:center;">
<img src="/assets/blog/rnnai.png" width="40%" />
</div>
<figcaption>The RNNAI by Jurgen Schmidhuber</figcaption>
</figure>

<figure id="fig:aixi-arch" style="text-align:center;">
<div class="minipage" style="text-align:center;">
<img src="/assets/blog/aixi.png" width="80%" />
</div>
<figcaption>The Universal AI (AIXI) by Markus Hutter</figcaption>
</figure>

The Alberta plan consists of 12 steps:

1.  Representation I: Continual supervised learning with given features.

2.  Representation II: Supervised feature finding.

3.  Prediction I: Continual Generalized Value Function (GVF) prediction
    learning.

4.  Control I: Continual actor-critic control.

5.  Prediction II: Average-reward GVF learning.

6.  Control II: Continuing control problems.

7.  Planning I: Planning with average reward.

8.  Prototype-AI I: One-step model-based RL with continual function
    approximation.

9.  Planning II: Search control and exploration.

10. Prototype-AI II: The STOMP progression.

11. Prototype-AI III: Oak.

12. Prototype-IA: Intelligence amplification.

The objective-driven AI requires constructing *world models* that
leverage *joint-embedding predictive architecture (JEPA)*:

<figure id="fig:jepa-world-model" style="text-align:center;">
<div class="minipage" style="text-align:center;">
<img src="/assets/blog/jepa-world-model.png" width="40%" />
</div>
<!-- <figcaption>The Universal AI (AIXI) by Markus Hutter</figcaption> -->
</figure>

------------------------------------------------------------------------

So, what is the conclusion of all this? Alberta plan seems to tackle the
right problem, which is *continual learning* (w/o catastrophic
forgetting). Objective-driven AI has several abstract components in the
architecture, but it is still unclear to me how the JEPA architecture
will be able to learn the model of the world while utilizing fixed
memory and staying non-continual. Non-fixed memory/runtime complexity is
important because we often (rightfully) assume that the world is always
more complex than what one system can model or learn about it. AIXI is a
big infinite for-loop brute-forcing through every possible
program/hypothesis out there, and, well, no surprises: it is
incomputable. However, there is another version, AIXItl (time- and
lenght-bound AIXI), that is computable but not really what I am looking
for, I guess -- it does not have the constructive flavor that I would
love to taste, meaning that it states the obvious without being really
helpful.
