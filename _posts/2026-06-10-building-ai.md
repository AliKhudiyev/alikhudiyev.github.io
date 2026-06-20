---
layout: post
author:
- Ali Khudiyev
title: "Building General Purpose AI (highly personal approach)"
date: 2026-06-10 18:30:00 +0400
categories: blog draft AI opinion
---

When it comes to deep A(G)I research, I have not yet found good roadmap
for building truly intelligent system that is capable of decision
making, searching and planning, problem solving, and more importantly,
learning as it goes. Let alone a roadmap for building such a system,
there is still no precise and clear understanding of what such a system
formally is and how it ought to operate algorithmically. The field of AI
is really big, so let me draw the rough picture for you first. Here are
the main research communities within AI:

- Structuralists

  - Symbolists -- using hard-coded rules for decision-making, infused
    domain knowledge for learning

  - Probabilists -- using Bayesian inference for both decision-making
    and learning

  - Enactivists -- arguing for the need for embodiment because language
    alone is not enough

  - Cognitists -- understanding the architecture of human brain as the
    fastest way to get to human-like intelligence

- Emergentists

  - Connectionists -- distributing knowledge over many little nodes,
    updating relations among the nodes for learning

  - Evolutionists -- mutating and cross-overing a population of
    potential solutions

  - Empricists -- scale is all you need

  - Rewardists -- reward is all you need

- Synthesists

  - Neuro-symbolists -- viewing emergence and structure as intertwined
    strings of the same thread

Fundamental processes of intelligence is **search** and
**substitution**. Searching works based on a simple binary yes-or-no
question asked over every element being observed: Am I looking at an
element X right now? Substituting is the action of searching with an
overwrite upon matching: $f(x)\big|_{x=5} = f(5)$. Blind (brute-force)
search does not need a prediction at all -- you just iterate and
explore. Informed search uses prediction as a heuristic to halt faster.
To predict something, you are always obliged to use (some mixture of)
search and/or substitution. Abstraction emerges from the prediction used
as a heuristic to speed up the search process. Compression is a specific
form of abstraction. Abstraction discards at least one specificity
present in the data while keeping the invariants of the search process
untouched (this also implies that an abstraction is useless without a
proper substituion process that gives us back the original data when
applied to the abstraction with a certain initialization of abstract
variables), whereas (lossless) compression gives a shorter
representation of the data with the original invariants untouched. Since
any shorter representation of the data must discard at least one
character, every compression is a form of abstraction; however, an
abstraction may occupy more space than the original data, because
"f(0)=0" is an instance of $f(x)=\frac{3}{7}x^3-5x^2+3.14x$.

1.  Search slowly for $f(?)=0$, $f(?)=1$, ...

2.  Use prediction to search faster $\rightarrow$ abstraction $f^-(y)$
    emerges.

3.  $f^-(y)$ happens to be a good compression of the exaustive
    (infinite) tabular data of the $(x, f(x)$ pairs for every $x$.

Where am I getting with all this, you may ask. Well, all this is to say
that any "truly intelligent" system must probably be capable of
*searching* and *substituting*. I know, this sounded like a useless
tautology. Let me add to it a little more spice: Moreover, any
general-purpose AI (GPAI) must probably be capable of adapting to its
environment. Adaptation is the guarantee of reaching the goal/desired
state in a changing environment without getting stuck at (revisiting)
the same set of states ad infinitum.

Why not use pure memorization as a learning algorithm and a table lookup
as an inference/prediction algorithm? Well, here is the problem: what
happens when the system needs to make a prediction for a previously
unseen input? Intelligence isn't all about memorization, even though it
plays an important role, it is also about prediction (i.e., inferring
something never inferred previously). It is this the ability of
predicting something truly new that makes the system adaptive in the
first place -- whether it be a changing environment or having a new
observation for the first time, from the system's point of view it is
all the same, i.e., the environment has changed. Remember? Adaptivity
plays a huge role in intelligence. If the system answered "I don't know
the answer" every time it was given a truly new observation that was no
where to be found in its memorization table (crisp dataset of all exact
past observations), then it would be foolish for us to expect it to give
a different answer at any point in the future for another novel
observation. Any strategy or algorithm we might use to fill in the gaps
in the system's observation table computationally is a good step toward
the adaptive intelligence. Such an algorithm is called an *inference
algorithm* for the system.

Now, here are the pitfalls that we should need to consider before
setting big and ambitious goals regarding what can be theoretically
and/or practically done to build the most intelligent system.

1.  We should care more about adapting to a given task on the go and
    less about getting everything right from the first shot. (No Free
    Lunch)

2.  We should care more about relativistic error of a learner compared
    against other possible learners on a given task, and not the
    absolute error regarding the task being solved.

3.  We should care more about un/self-supervised learning and less about
    supervised learning.

4.  We should care more about continual or lifelong learning and less
    about fixed-time learning.

5.  We should care more about online regret minimization and less about
    offline loss minimization.

6.  We should care more about scalability and less about scaling,
    because whatever that needs scaling by humans manually is not truly
    scalable.

7.  We should care more about active learning (with imperfect oracle)
    and less about passive learning.

8.  We should care more about imperfect supervisor (oracle) and less
    about perfect supervisor (i.e., implying the assumption of
    partial-observability in an environment because the environment is
    also an implicit oracle).

In my current world view, GPAI looks and does almost exactly like
mentioned in the numbered list above. I might be wrong or I might be
right, obviously. The things I have described in this blog post probably
says more about my personal research taste than a truly intelligent
systems out there. You can find my taste sweet or bitter, but in any
case I try to keep my taste open to different delicacies as much as I
can.
