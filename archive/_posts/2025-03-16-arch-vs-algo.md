---
layout: post
author:
- Ali Khudiyev
title: "Architecture vs Algorithm"
date: 2025-03-16 16:38:00 +0400
categories: archive AI just-a-thought
---

There are many deep learning (DL) architectures, artificial neural
networks (ANNs) in general, and some optimization algorithms (OAs) for
training them. There hasn't been much interest in inventing new OAs as
there has been for ANNs. That is why there have been many DL-archs
versus one or few optimizers, all of which are based on some form of
gradient descent. But why is it that many people in the machine learning
(ML) community know more about the different architectures, such as
Multi-Layer Perceptron (MLP), Convolutional Neural Network (CNN),
Self-Organizing Map (SOM), Autoencoder (AE), and Recurrent Neural
Network (RNN), but very little about the optimization algorithms used to
train them? Regarding the OAs, the most popular choices have been SGD
(Stochastic Gradient Descent), RMSProp, and Adam so far. Although there
is much more to the OAs in general (e.g., evolutionary strategies,
genetic programming, genetic algorithms, learning classifier systems,
differential evolution), GD-based ones have been the popular choice for
training DL models and ANNs in general. Going back to the question of
why the architectures have gained much more interest than the algorithms
used to train them, I suspect that it may have something to do with the
false illusion of where the computational universality emerges from. Let
me explain.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Maybe we need to come up with ML algorithms that are capable of running in a polynomial time non-deterministically.</p>&mdash; Ali Khudiyev (@_0x416c69_) <a href="https://twitter.com/_0x416c69_/status/1646143333767454727?ref_src=twsrc%5Etfw">April 12, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Turing Machines (TMs) are universal in the sense that they are
Turing-complete. However, before we had a formalization for TMs, we had
Pushdown Automata (PA), which was computationally less capable than a
TM, and we had Finite State Automata (FSA) even before PA, which was
less capable than its successor. So, when we look at the history of
automaton, all we have seen is the changing architectures leading to
more capable computation mediums. Exactly..! The computation mediums
that serve to run algorithms. Nowadays, ANN architectures serve the same
purpose - they are the computation mediums that define the type of
executable algorithms. So, it would be fair to assume that this was the
reason why we have been stuck in trying to invent more and more DL
architectures rather than OAs; because it has been the architectural
discoveries that have led us to Turing-completeness. The thing is that
(I hope) we have also recently come to the realization that, well, even
the most fancy architectures, such as Transformers, cannot do much on
their own. Having a well-designed architecture helps a lot. Sure. But it
is not the whole story. To the best of my knowledge, none of the current
DL architectures is effectively capable of running a Turing-complete
computation. Although some of them are capable of doing so in theory.
Let me elaborate. First of all, when you have a fixed computation graph,
as Transformers does, that is responsible for coming up with the right
solution to a given problem, you cannot expect it to be reliable
machinery for solving arbitrary problems. Some problems are harder than
others and, therefore, demand more computation power to be solved than
simple problems do. For any fixed computation graph, there will always
be problems that are unsolvable by the machine employing it. To me, it
has been an obvious thing to say, but it feels like people have omitted
this \"irrelevant\" detail because Large Language Models (LMMs) have
been just a couple of years away to replace us every couple of years for
more than a decade.

Although I and probably many others have been advocating for the
computational unboundedness of DL algorithms even before 2023, this has
only recently become a thing after [OpeanAI released their o1
model(s)](https://openai.com/index/learning-to-reason-with-llms/) that
takes advantage of what they call inference-time compute scaling. Okay,
now we're onto something, right? However, I would like to finish my
point before moving to GPT (Generative Pretrained Transformers, used by
LLMs) stuff. So, my first point was about the limited capabilities of
any fixed computation graph. My second point is about the
algorithmic/optimization aspect, even if we had potentially unbounded
architecture. In fact, we do have such architectures - they are called
RNNs (e.g., Long-Short Term Memory or LSTM as an advanced version of
vanilla RNN). Here comes my second point: even though we have RNNs that
are capable of being Turing-complete in theory, we do not have an
optimization algorithm that can make it Turing-complete in practice. All
along, people thought having the right architecture was the only key to
Artificial General Intelligence (AGI), but it turns out that it was
wrong. The analogy between the evolution of the (non-learning) automaton
and the evolution of machine learning (ML) architectures tricked us into
thinking this way. It turns out that having the right algorithm for
training an underlying architecture is as important as having the right
architecture itself, if not more. For a machine to be considered
Turing-complete, this was not the case because the notion of Turing
completeness says nothing about \"learning stuff.\" It's rather about
just \"doing stuff\" when instructions on how to do stuff are already to
be given by humans. So, to summarize these two points, we should
understand the fact that to reach AGI that is both Turing complete and
capable of learning autonomously, both the right architecture and
optimization algorithm are two necessary components to have. One without
the other does not do much.

There have been attempts to train interesting neural nets that have the
right spirit toward Turing completeness, such as Neural Turing Machine
(NTM) \[1\], Differentiable Neural Computer (DNC) \[2\], and Universal
Transformers (UT) \[3\]. However, none of them has gained too much
popularity, probably because it is really hard to reliably train them
with GD-based OAs in real-life scenarios. So, it is as if the universe
of computational complexity blocks us when we try to cheat by finding
shortcuts to get universal intelligence. No-no-no-no! NP-hardness
listens, boys! Hush!

Okay\... So, what's next, then? Are we doomed? I don't know for sure,
but I remain optimistic that we are not\... You would fail if you tried
to teach a rock how to play pong because the rock does not possess the
capable enough architecture to learn it. There are many ML models that
are capable of playing pong. So, sometimes, my intuition tells me we
already have more than what we need for now in terms of capable ANN
architectures for complex tasks. What we do not have is the right
optimization algorithm(s) to train them properly. Think about this for a
minute. What if we could actually do a lot more with what we already
have? What if you could actually do what Transformers does by using a
much simpler and smaller MLP? What if MLP is as capable as Transformers
under some other optimization strategy? What if we stopped innovating
better architectures for OAs and started innovating better OAs for
existing architectures? It is almost as if we have a hidden inductive
bias for GD-based OAs when building new architectures, and this bias
affects the way we build them. We want them \"as (easily) trainable as
possible\" or \"as converging as possible,\" right? Well, these hidden
biases toward trainability and converging properties are probably
significantly affected by the OAs used. Maybe we should also start
exploring the other direction.

# What wins? Architecture or Algorithm?

Well, if you still think that one of the two must be the only winner,
then you have clearly missed the whole point I have conveyed up until
now. The answer is that neither one of these can be a winner without the
other. What would be interesting is to guess the kind of combination of
these two that will be the winner. Personally, my bet would be on *[any
arbitrary architecture coupled with an algorithm that is capable of
duplicating and reusing/training the same architecture as many times as
needed to solve a given problem]{.underline}*. I don't think finding
good enough architecture is a hard problem at this point. I believe that
finding an algorithm capable of utilizing the same architecture over and
over again in different ways indefinitely is the challenging part. That
is why I am suggesting that maybe we have fallen into the trap of
thinking it was all about the right architecture. Maybe it is very
little about the architecture and mostly about the algorithm that trains
and uses it for decision-making.

I still have many questions about other aspects of reaching the level of
intelligence humans possess in machines. For example, how does a
supposedly continuous space of possibilities (spikings of neurons)
become a discrete set of things (concepts we perceive)? Does it just
emerge from maximum value pooling or majority voting at the final layer
of the computation graph, or is it something else? It is still not
obvious to me what the answer is, but maybe it is as simple as max value
pooling or majority voting\... I don't know. Would conditional GD work
well enough to train ANNs reliably? I don't know\...

# References

1.  Graves, A., Wayne, G., & Danihelka, I. (2014). Neural turing
    machines. arXiv preprint arXiv:1410.5401.

2.  Graves, A., Wayne, G., Reynolds, M., Harley, T., Danihelka, I.,
    Grabska-Barwinska, A., Colmenarejo, S.G., Grefenstette, E., Ramalho,
    T., Agapiou, J.P., Badia, A.P., Hermann, K.M., Zwols, Y., Ostrovski,
    G., Cain, A., King, H., Summerfield, C., Blunsom, P., Kavukcuoglu,
    K., & Hassabis, D. (2016). Hybrid computing using a neural network
    with dynamic external memory. Nature, 538, 471-476.

3.  Dehghani, M., Gouws, S., Vinyals, O., Uszkoreit, J., & Kaiser, Ł.
    (2018). Universal transformers. arXiv preprint arXiv:1807.03819.
