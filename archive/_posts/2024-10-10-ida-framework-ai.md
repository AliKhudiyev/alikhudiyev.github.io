---
layout: post
author:
- Ali Khudiyev
title: "Induction-Deduction-Abduction Framework for Artificial Intelligence"
date: 2024-10-10 12:54:00 +0400
categories: archive AI finding
---

# A new framework to think about A(G)I more systematically

I feel like we need a new framework to think about A(G)I more
systematically. While it is true that there are already some frameworks
to consider, such as Juergen Schimidhoober's Godel Machine, Marcus
Hutter's AIXI, and Karl Friston's Bayesian Brain (with free energy
principle), I tend to feel unsatisfied with all of these existing
approaches. Of course, this tells nothing about the correctness and
elegance of these frameworks or their disadvantages. My main goal is not
to disprove any of these frameworks but rather to build my own that
(almost) fully satisfies my (right or wrong) intentions with the
framework. The reason that I am not satisfied with the existing
frameworks could actually be because I haven't fully read any of them,
and therefore, I am probably missing lots of insights and details that
are already present in the existing approaches. Maybe I wouldn't even
feel the need to come up with my own framework if I was fully aware of
the existing ones published by the other serious scientists. But I have
always been more keen to build stuff on my own than reading about them
on the internet. Before moving forward with the blog post further, I
would still like to give a brief overview of my understanding of some of
the existing frameworks.

## Brief Literature Review

Godel machine \[1,2\] has been proposed by J. Schmidhuber as a
self-referential universal improver that is able to change its own
functioning (i.e., program) whenever it can prove that the new
modifications result in a better performance. Since it is making
modifications only when the consequences are provable, it is also
subject to the Godel's incompleteness theorem which roughly states that
any sound formal system cannot prove its completeness and vice versa.
So, a Godel macinhine may encounter with a certain modification that is
indeed a better modification but unprovable by the machine itself, and
therefore, omitting the modification. While I find this idea of Godel
machines attractive at the first glance, I feel like there is a lot of
stuff hidden in the selection of a formal system to begin with, the
proof procedure, and the linking between the \"outside world\" and the
\"inside world\" of an agent. In my current opinion, this appraoch may
not be able to explain (the emergence of) some natural human behaviors
that I would like to have explanations for.

AIXI \[3\] proposed by M. Hutter is another formalization for universal
artificial intelligence which is considered to be the ultimate AI whose
performance is not surpassable by any other. However, there is a little
catch: AIXI is not computable. There exists computable (and thus
limited) versions of AIXI (e.g., AIXItl), but there is something about
this whole formalization that kinda makes me nervous. Even though AIXI
might be the ultimate AI, its core working principle to become the
ultimate AI is to use a reinforcement learning (RL) agent that iterates
every possible Turing Machine (TM) that fits the past observations and
predicts the best action to maximize its future rewards. For me, who
hasn't read the theory fully (but I have seen the official one-line
summary), this seems like calling the brute force algorithm the ultimate
god. Although it is indeed true, it absolutely and definitely fails to
attract my attention.

Bayesian Brain \[4\] is a hypothesis about how the human brains work. It
essentially claims that our brains do some sort of (approximate)
Bayesian inference to predict future and do planning. The objective of
such a Bayesian Brain is to minimize the free energy \[5\] which
describes the surprise in the predictions of the brain. An agent with
such a brain would have an internal states, perceptual and action states
both of which act like a Markov blanket separating the agent from its
environment. One can view the process of updating these states as a
belief propagation process where the probabilities of past hypotheses
being true are updated according to the Baye's inference rules. Since
this could be computationally intractable, one could try to do
approximate inference instead. This approach to the brain is very
appealing, but again I have yet to see a (deeper and richer) structure
that can answer many questions about human behaviors.

## Forms of Reasoning

### Induction

*Inductive reasoning \[6\] is a form of reasoning in philosophy and
logic in which one derives generalizations from a set of
observations.* This form of reasoning does not guarantee the soundness
of the generalizations derived from the observations. For example,
having observed that \"I get gifts for my birthday\" for every birthday
as an 8 years-old kid, the kid may conclude that the gifts will never
cease showing up in the doorstep until the time of death. While this
might be true, there is also a higher chance that 8 will be the number
that the kid is going to remember as the last birthday party gift till
(s)he dies. The point is, there is no guarantees in this bussiness.

### Deduction

*Deductive reasoning \[7\] is a form of reasoning in which one provably
derives conclusions from a set of premises accepted as true.* Unlike
inductive and abductive reasoning, deductive reasoning guarantees the
soundness of the conclusions since it follows rigorous mathematical
logical rules to derive them from the premises. It is also well-known
that even mathematical induction is actually deduction under the surface
because it posseses mathematical rigour to \"induce\" (actually deduce)
new statements as well. For example, from the premises \"if A is true
then B is true.\" and \"A is true.\" one can provably derive another
true statement which is \"B is true.\"

### Abduction

*Abductive reasoning \[8\] is a form of reasoning in which one derives
explanation(s) for a set of observations.* Like induction, abduction
also fails to guarantee the soundness of the derived explanations. For
example, the previously 8 years-old kid may come up with a fitting
explanation for not receiving any gifts in his/her 9th birthday. The
explanation could be something like \"They don't see me as a little kid
anymore and that's why I didn't get any gifts.\", but in reality it
could as harsh as \"Everyone hated the kid from the beginning but this
time they refused to waste money.\" The point is, happy endings only
happen in movies. No, the point actually is, there is no guarantees in
this business either.

# Induction-Deduction-Abduction (IDA) Framework for A(G)I

The Induction-Deduction-Abduction (IDA) framework is the result of one
of my several attempts to recreate human-like behaviors in an artificial
system by having a systematic way of answering questions related to
natural phenomena and patterns in human behaviors. The IDA framework is
far from perfect and complete, and in fact, this blog post should be
considered as the first public draft on the development of the
framework. Without prolonging the post too much, let's see what it is
all about.

It is actually very simple and kinda obvious to begin with: humans
generalize, humans reason, and humans solve problems. The first step of
this never-ending cyclic pipeline is \"observe and generalize\" where
generalization means the ability of coming up with (useful)
abstractions; such abstractions should ideally be useful for reasoning
and problem solving later on but I'll keep this discussion for later.
The second step is reasoning in which humans use previously acquired
genralizations and abstractions to reason about different situations and
hopefully predict the future. The third and final step is problem
solving which makes humans become goal-driven in the real world by being
able to solve problems to reach their desired states (here I'll assume
that the root goal is always provided by an alien 8 years-old kid).

<figure style="text-align: center;">
    <img src="/assets/images/archive/ida-nutshell.png" style="width: 75%; margin: auto;"/>
    <figcaption>Figure 1. IDA framework in a nutshell.</figcaption>
</figure>

As depicted in figure 1 above, the induction step takes us from having
sensory inputs (e.g., visual, audio, etc.) to a bunch of abstractions
that describe the concepts and relations present in the inputs. The
deduction step lets us use these abstract rules (i.e., concepts and
relations) with assumptions (i.e., input data or an observation) to
deduce new relations (and maybe even new concepts). The abduction step
uses those deductions and checks if our assumptions in the deduction
phase was sound and complete for reaching goal states (i.e., a set of
concepts and/or relations); if not, then the assumptions are updated
accordingly and the process repeats until some termination criterion
(e.g., solution is found, time limit exceeded, etc.).

<figure style="text-align: center;">
    <img src="/assets/images/archive/ida-roles.png" style="width: 75%; margin: auto;"/>
    <figcaption>Figure 2. Roles of Induction, Deduction, and Abduction.</figcaption>
</figure>

Figure 2 illustrates the roles of different reasoning forms. First,
rules of a logical system are provided by induction, then facts are
derived by using deduction, and finally, the assumptions/premises are
corrected if the deduced facts are not the desired ones. This figure
clearly demonstrates the importance of each reasoning form to reproduce
main cognitive tasks that humans are capable of doing consciously. It
also lets us better understand the root(s) of potential problems that
may arise after deploying the system to the wild. Well, if it helps us
to understand the cause of problems, it can also help the system itself
to \"understand\" it. 

<figure style="text-align: center;">
    <img src="/assets/images/archive/ida-pipeline.png" style="width: 75%; margin: auto;"/>
    <figcaption>Figure 3. Cyclic IDA pipeline.</figcaption>
</figure>

Figure 3 demonstrates what each step adds to the table for the next
step(s), i.e., induction provides the rules for deduction and deduction
provides the reasoning for abduction. It also shows how each step
identifies problems and reports back to the previous step, i.e.,
abduction complains about the impossibility of reaching to desired goal
states or conclusions to deduction (because abduction uses deduction to
conclude new statements and adjust the assumptions according, if no such
assumptions are found to reach to the conclusions that are known to be
reachable in reality, then abduction rightfully suspects that it is the
deduction process that goes wrong) and deduction complains about its
wrong predictions to induction (because deduction use rules provided by
induction, if a deduced fact does not match with the ground truth given
some possibly arbitrary assumptions, then it knows that the rules must
have been induced wrong).

It is worth mentioning that there is a little bit of abduction present
in the induction hidden under the surface. At the end of the day, it
feels like induction and abduction may have no crispy clear distinction
in reality since doing induction to acquire general principles governing
the given observations is the same as doing abduction over the same
observations in which the assumptions to be adjusted are the general
principles, and doing abduction to acquire an explanation is the same as
doing induction where the general principles found can be considered as
the explanation itself. Although the line between induction and
abduction can get blurry as we just saw, the distinction is usually more
intuitive when we think of abduction working on the assumption/data side
(leftmost part in figure 2) and induction working on the rule/function
side (middle part in figure 2) as depicted in figure 2. But again, since
a piece of data can be seen as a function and any function can be seen
as a piece of data, we could use algorithms developed for either one of
these reasoning forms to aid the other.

## Questioning the capabilities of the IDA framework

Before diving deep into the development of the IDA framework, one needs
to ask whether it seems to be worth it or there are already some very
hard \"impossible-to-bypass\" barriers in front of the framework. For
me, one of the such barriers would be lacking computational power to
perform a Turing complete computation. Luckily, the framework is so
general that it captures any arbitrary Turing complete computation. For
example, let's take the BSAT \[9\] problem and ask ourselves how on
Earth a BSAT problem can be solved within the IDA framework. The answer
is simple: it is going to be solved by the abduction, essentially by
indefinite repetitions of adjusting the boolean variable assignments
that are also the assumptions for the problem solution. Now, one can
imagine the power of abduction step in the framework since the abduction
is the process of finding fitting assumptions (by possibly using a SAT
solver) and any candidate solution to any given problem can be and is
considered as a set of assumptions (if the candidate solution is proven
to be correct then it also means that the assumptions found by the
abduction are the fitting ones). Having said this, we can now start
concerning about other potential problems with the framework.

Humans are capable of quickly learning from their obvious mistakes by
presumably some sort of a strong self-reinforcement. How is such kind of
behavior present in the IDA framework? This behavior can be reproduced
by the abduction by using a conflict-driven constraint solver (CDCL)
\[10\]. What a typical CDCL does is that it mines information whenever
the given boolean expression becomes unsatisfiable by the current
boolean assignments and it adds the mined/learned information to the
boolean expression as a boolean clause to be satisfied along with the
original one.

Humans are capable of setting new subgoals while trying to fulfill the
original goal. How can a reasonably similar behavior be reproduced
within the IDA framework? The answer involves the abduction again. A SAT
solver could be configured to do a reverse search (or reverse
propagation) to satisfy the expression. It is very much like doing a
search to solve a maze but instead of starting from the starting
position, you start searching from the maze exit. Starting from the exit
point semantically means that at each step we are setting a subgoal
point to reach from the starting position. So, the notion of setting
subgoals emerges from backtracking and reverse search employed by a
search/abduction algorithm.

How does the induction output (useful) abstract concepts and relations
from the raw sensory data and how do different levels of abstractions
emerge in the process? We know that humans are capable of working with
different levels of abstractions; math is the obvious elephant in the
room in this case. I suspect that the answer may involve some sort of
\"recursive pattern mining\" strategy, but I am not fully certain how
this would work out. So, this is more of an open question for me right
now and as the framework progresses further, finding an answer to this
question will probably be very crucial. I will not discuss this matter
further in this post.

# Building IDA-based AI System

All three steps of the IDA framework is somewhat independent of one
another in a sense that one can start building one without needing to
build the other. However, to support such separation in the development
process, one also needs to set a rigorous specification for each step
carefully so that what is expected to be received from and sent to other
modules (i.e., any two of induction, deduction, and abduction) is known
during the development. As the first draft of the system's components, I
currently have roughly the following picture in my mind: we can assume
that the abduction part will be implemented by modifying some existing
SAT solver, decution by modifying some sort of (fuzzy) logic reasoner,
and induction by using dynamically growable neural networks + possibly
some sort of inductive logic programming. 

What I would like to do before trying to implement algorithms is to have
test cases covering the most common and/or simple behavioral patterns
first. To test each phase separately, (1) we could expect the induction
module to take a video as an input and generate some sort of a knowledge
graph (but probably a bit more advanced and expressive than simple
knowledge graphs) as an output, (2) we could expect the deduction module
to take a knowledge graph (KG) and make it much denser, (3) we could
expect the abduction module to take a dense KG and a goal state given as
a boolean expression and generate a sequence of actions to reach the
goal state as an output.

# Conclusion

Induction-Deduction-Abduction (IDA) framework is a framework to think
about A(G)I more systematically by using different forms of reasoning
for explaining some of the natural human behaviors in perceiving and
generalizing, reasoning, and problem solving. The framework is still on
its early stage, so it is far from being complete and it is not, by any
means, perfect. This being said, the IDA framework leverages inductive
reasoning to generate abstractions and hence generalize from the raw
observations or perceptions of the system, deductive reasoning to make
(crisp and/or fuzzy) predictions, abductive reasoning for solving
problems and achieving goals. As one moves a finger from Induction
through Deduction to Abduction within the framework, it should feel like
gradually switching from fast type-1 thinking to slow type-2 thinking in
Daniel Kahneman's terms \[11\].

Unlike current deep learning models (e.g., large language models or
LLMs), this framework does not suffer from bounded computation when
trying to solve problems with higher algorithmic complexity. Abduction,
the third step of the framework's pipeline, employs a kind of SAT solver
to tackle problems. This means that it could keep computing
indefinitely, if needed, to solve a complex problem. Having a check mark
on the computational unboundedness is a great advantage both in theory
and practice. Although the framework may seem like a bit sexier after
knowing this, there are tons of lacking aspects and unanswered questions
that need a serious work.

Artificial neural networks can have a certain utility when it comes to
implementing some parts of an IDA-based AI system, but I also do think
that they could easily turn out to be very limited in terms of what they
can do within the framework. This may sound controversial in nowadays
standards where there are already tons of people believing that LLMs are
the AGI, however, those claims start to seem very anectodal when you
think about how the LLMs actually work and even ask them simple
out-of-distribution questions. Good luck scaling, scalers! Good luck
prompting, prompters! Good luck promoting, promoters! Good luck
advertising something that doesn't exist yet, advertisers!

# Table of Contents

1.  [IDA Framework for AI](#) $\leftarrow$ you are here

2.  [IDA Framework: How to do Induction](#) (not available yet)

3.  [IDA Framework: How to do Deduction](#) (not available yet)

4.  [IDA Framework: How to do Abduction](#) (not available yet)

5.  [IDA Framework: Memory Management](#) (not available yet)

6.  [IDA Framework: Communication Protocol](#) (not available yet)

# References

1.  [Schmidhuber, J. (2007). Gödel Machines: Fully Self-referential
    Optimal Universal Self-improvers. Artificial General
    Intelligence.](https://people.idsia.ch/~juergen/goedelmachine.html)

2.  [Steunebrink, B.R., & Schmidhuber, J. (2012). Towards an Actual
    Gödel Machine Implementation: a Lesson in Self-Reflective
    Systems.](https://people.idsia.ch/~juergen/goedelmachine.html)

3.  [Hutter, M. (2005). Universal Artificial Intelligence: Sequential
    Decisions based on Algorithmic
    Probability](http://www.hutter1.net/ai/uaibook.htm#oneline)

4.  [Wikipedia contributors. (2024, September 16). Bayesian approaches
    to brain function. In Wikipedia, The Free Encyclopedia. Retrieved
    08:38, October 10,
    2024](https://en.wikipedia.org/w/index.php?title=Bayesian_approaches_to_brain_function&oldid=1245960452)

5.  [Friston, K.J. (2010). The free-energy principle: a unified brain
    theory? Nature Reviews Neuroscience, 11,
    127-138.](http://apophenia.wdfiles.com/local--files/start/friston_2010_free_energy_principle.pdf)

6.  [Wikipedia contributors. (2024, September 18). Inductive reasoning.
    In Wikipedia, The Free Encyclopedia. Retrieved 08:13, October 3,
    2024](https://en.wikipedia.org/w/index.php?title=Inductive_reasoning&oldid=1246375820)

7.  [Wikipedia contributors. (2024, September 20). Deductive reasoning.
    In Wikipedia, The Free Encyclopedia. Retrieved 08:15, October 3,
    2024](https://en.wikipedia.org/w/index.php?title=Deductive_reasoning&oldid=1246658687)

8.  [Wikipedia contributors. (2024, September 30). Abductive reasoning.
    In Wikipedia, The Free Encyclopedia. Retrieved 08:15, October 3,
    2024](https://en.wikipedia.org/w/index.php?title=Abductive_reasoning&oldid=1248645021)

9.  [Wikipedia contributors. (2024, July 3). Boolean satisfiability
    problem. In Wikipedia, The Free Encyclopedia. Retrieved 08:35,
    October 3,
    2024](https://en.wikipedia.org/w/index.php?title=Boolean_satisfiability_problem&oldid=1232343797)

10. [Marques-Silva, J., Lynce, I., & Malik, S. (2021). Conflict-Driven
    Clause Learning SAT Solvers. Handbook of
    Satisfiability.](https://www.cs.princeton.edu/~zkincaid/courses/fall18/readings/SATHandbook-CDCL.pdf)

11. [Kahneman, Daniel. (2011). Thinking, Fast and Slow . London: Penguin
    Books](https://archive.org/details/thinking-fast-and-slow-daniel-kahneman/page/n27/mode/2up)
