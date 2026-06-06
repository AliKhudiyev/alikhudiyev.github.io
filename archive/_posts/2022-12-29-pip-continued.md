---
layout: post
author:
- Ali Khudiyev
title: P.I.P. continued...
date: 2022-12-29 20:18:00 +0400
categories: archive
---

# Realizations

What makes the P.I.P. theorem so interesting to explore even further has
something to do with what I have realized throughout 7+ years. Here are
my realizations so far:

1.  I was essentially working on AI even before I knew such thing
    existed

2.  P.I.P. as a generalization of Taylor's expansion

3.  RS-ALC as a generalization of the P.I.P. theorem

4.  Similarities with Category Theory

Before going any further, let me first tell you that I am no expert in
any of those theories/fields although I can spot multiple similarities
between PIP and those.

# 1. Working on a part of something that I didn't even know about

P.I.P. is all about the prediction of the next observation (obtained by
a polynomial function) by somehow processing the history of all
observations, and it can be essentially formulated as a lossless
compression algorithm since its outputs never contradict the previous
observations. It can also be viewed as a compression technique since you
only need to keep the frontier of differentials on each column in order
to predict the next output value of the given function.

A.I. is also about solving tasks by usually either deriving and
following logical conclusions from a set of axioms or obtaining a
predictive model that fits the data at hand. Algorithms that fit into
the first type, such as search/inference, logic programming, rule-based
systems, symbolic programming, ontologies, are a part of Symbolic AI or
so-called GOFAI (Good Old Fashioned AI), and algorithms that fit into
the second type, such as deep learning (DL), Bayesian learning,
artificial neural networks (ANN), support vector machine (SVM), are a
part of Sub-symbolic AI or so-called Connectionist AI. Although Symbolic
AI used to be more popular until about 2000, sub-symbolic AI took over
after the invention of backpropagation algorithm. Symbolic AI can be
usually viewed as analogous to mind since the programmable entities
refer to human-interpretable abstract concepts and sub-symbolic AI can
be usually viewed as analogous to brain since human-interpretable
abstract concepts are distributed over multiple programmable entities.

As I have described PIP in the first paragraph of this section, PIP
inherently looks more like a sub-symbolic system because it is to
approximate (polynomial) functions just by looking at their inputs and
corresponding outputs. As in machine learning, there is a notion of
propagating the differential(s) backward which sounds very similar to
the general idea of backpropagation although they are not the same
algorithm obviously. PIP's backward differential propagation is to
predict the next observation whereas classic backprop is to adjust the
parameters of the model and forward propagation is to produce the
output. So, it would be fair to say that this theorem corresponds to the
space of sub-symbolic AI and it is just so cool for someone like me to
realize this after many years.

# 2. P.I.P. as a generalization of Taylor expansion

Initially, P.I.P. theorem was invented to find exactly polynomial
functions, however, I later found out that it can clearly do more than
that. When I was an undergraduate we had to be taught this concept
called Taylor Expansion. It was at that time if not a bit later that I
realized that PIP can actually approximate non-polynomial functions
locally as Taylor expansions did. When I say \"as Taylor expansion
did\", it is literally the same output produced by two independently
invented theorems, i.e., approximations of a function, obtained by PIP
and Taylor expansion, around a given point are exactly the same.
Although I am not going to write down the proof here, I am highly
confident that it is provable relatively easily. However, I can give an
insight which helps to get the intuition and start proving this
generalization hypothesis: 

Calculate $\Delta Y$ by setting $d = \lim_{h \rightarrow 0} h$; you will
get $\eta_P d^P P! = f^{(P)} h^P$

Solve for $\eta_P$; you will get $\eta_P = \frac{f^{(P)}}{P!}$

Since we have found the coefficient of the term with the highest power,
replace all $y_i \leftarrow y_i - \eta_P x_i^P$ and $P \leftarrow P - 1$

If $P \geq 0$ then go to step 1

At the end of the procedure shown above, you will get all the
coefficients for all the terms contained in the given polynomial
function $f: R \mapsto R$. The hypothesis is that the coefficients
obtained from this \"sub-PIP procedure\" or \"coefficient finding PIP
procedure\" are the same as the coefficients given by the Taylor
expansion of the function in the limit where $P$ goes to infinity.

# 3. RS-ALC as a generalization of P.I.P.

ALC is yet another concept that I have come up with during the last
years of my undergraduate studies. Unsurprisingly, ALC is an abbreviated
form of Adaptive Lossless Compression. Even this tells a lot about me -
I was a \"secret\" fan of lossless compression/finding invariants in the
sense that I couldn't even acknowledge it. Of course, I had this
realization about myself when I was thinking about ALC, and that's why I
named it lossless compression, instead of, probably P.I.P. v2. However,
I did not realize the relationship between the two at that time. That
being said, I kept trying to improve ALC for a couple of years; however,
I probably spent less than 6 months (or 25% of those years) actually
thinking about it with significant focus and attention. As I am writing
this blog post, neither ALC v2 nor ALC v3 is complete although ALC v3 is
more mature than the second version. Each version of ALC theory is there
to solve the problems of its antecedent with the hope that maybe I can
come up with something very generalized enough to do various tasks
better than or equal to human-level performance, measurement of which is
yet another topic to think about. The goal being very big for someone
like me, an important milestone would be to achieve something that is
capable of constructing formal machines that are Turing-complete. By the
way, I am talking about constructing a Turing-complete machine because I
usually view ALC not as a machine but rather a meta-machine that is
capable of constructing a machine.

Unfortunately, there are a couple of reasons that I won't mention ALC v3
any further than what I have just mentioned above: this post is not
about ALC v3 (and I may write a separate post about it in the
potentially long future) and it is not a fully completed theory to be
discussed thoroughly. However, the gist of what ALC v3 theory is about
is as follows:

Recursiveness is the key idea to enabling self-awareness/implicit
supervision/evolutionary behavior for the ALC system.

Statefulness is the key idea to enabling the preservation of information
in the face of partial observability.

Adaptiveness is the key idea to enabling flexibility within the system
structure in the face of the change in environmental patterns.

Lossless is the key idea to ensuring the truthfulness of predictions of
the system.

Compression is the key idea to enabling the generalization of
specificity to abstraction.

In fact, ALC v3 is a short form of RS-ALC or Recursive Stateful Adaptive
Lossless Compression.

# 4. Similarities with Category Theory

I have been developing a C++ library which is, hopefully, going to
become a set of building blocks for ALC v3 implementation. While I was
thinking about these building blocks and trying to design a robust and
clean architecture for the library, I did what a good programmer
probably would do - I tried to compress all the classes and
functionalities of the library as much as possible in order to write,
what I would call, a core of the library. So, I wanted to build such a
core so that it wouldn't bother me in the future if I wanted to modify
any low-level implementation details for the ALC. I just wanted to have
something very deep and generic, so that I could build any concept
(potentially required by ALC v3) on top of it. Building such a generic
core wasn't easy at all and has been taking a lot of time for me to come
up with a good architecture/design. 

Since ALC v3 uses the concept of a meta-core in a graph that can store
another graph by itself, I thought it would be better if the there was a
generic class called MetaGraph as well.

There were multiple interconnects in the theory already, and since the
theory wasn't complete, I used to either modify the existing ones or
added new interconnects, or deleted some old redundant ones frequently.

Due to the couple of reasons that I just mentioned above, I had to
implement several high-level or \"abstract\" classes:

a meta-graph that could contain meta-cores and various interconnects,

a meta-core that could potentially contain another (meta-)graph with a
single NodeData data type for additional information that I could
potentially use/manipulate in the future,

an interconnect with no properties and functional semantics, except for
a single EdgeData data type for future implementation details.

What I just described above looks like a very simple implementation of
Category Theory on a computer. The core only had two elements:
meta-cores(i.e., objects in Category theory) that had no built-in data
in them and interconnects(i.e., morphisms in Category theory) that had
no built-in functional semantics. Note that I actually do not know
enough about Category theory as I have just recently come across with it
and there is a chance that I have got the wrong intuitions about it just
by scratching its surface.

# 5. Update: ChatGPT surprised me\...

I was talking to ChatGPT recently and it surprised me the date of
20$^{th}$ December 2022 by saying me that there are already essentially
very similar theories to P.I.P. out there that are called divided
differences and finite difference. Here is the screenshot of the very
beginning of our conversation:

ChatGPT surprising me by telling me what my theorem does and a couple of
other theorems that are very similar to mine.

I am usually accustomed to the feeling and moments when I realize that
what I have done is either very inefficient or a reinvention of
something that existed since many years ago. However, I have to say that
I have never even heard of divided differences or finite difference up
until that point in my life. Well, I just realized that during 7+ years
I thought I was probably the only one with such a unique theorem
(probably because no one actually ever needed to invent such a theorem)
and it isn't the case obviously.

A little side note on ChatGPT would be that when I asked it to apply the
P.I.P. theorem to a X = 0, 1, 2, 3 and Y = 0, 1, 4, 9 to calculate the
value of x\[5\] and y\[5\], it first seemed that it really knew what it
was doing but then it made silly mistakes during the process which made
the whole thing after that point incorrect. Although I tried to tell the
mistakes it made with the hope that it wouldn't make them again, it
insisted on not understanding one concept right - to perform the last
step (i.e., calculate y\[5\]), you need to return back to the second
step but compute it backwards meaning that you need to find the value of
$D[j-1][i+1] = D[j][i] + D[j-1][i]$.
