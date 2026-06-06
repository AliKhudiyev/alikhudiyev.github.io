---
layout: post
author:
- Ali Khudiyev
title: "Survival of the Scalable"
date: 2025-11-10 22:28:00 +0100
categories: blog AI evolution
---

> Scaling AI won't work, but Scalable AI will.

What do I mean by this? Well, you can't keep pouring human labor to
scale AI systems manually whenever there is a new challenge that is even
more complex than what was represented by the previous training set used
to train the network. In this sense, we shouldn't bet on scaling AI by
ourselves as a lasting strategy for true intelligence, also known as
AGI.

In the game of evolution, the fittest is the survivor. In the evolution
of AI, I suspect, the fittest is the scalable. Scalable doesn't need
(manual) scaling (by humans), because it scales autnomously, by itself.

To determine whether your architecture/algorithm is scalable or it needs
(manual) scaling, you should ask this question to find out the answer:
What would the scaled up version of any instantiation of my
architecture/algorithm look like and is the transitioning to that bigger
version encoded within the architecture/algorithm? If the transitioning
to arbitrarily different scales is not encoded within your framework,
then it'll require manual work to solve more computationally complex
tasks at some point in the future, almost surely.

In my opinion, you don't have to invent the most advanced AI system, so
advanced that no one can figure out how it could even possibly scale.
Instead, you should probably aim for the most dumb systems that can
scale very easily in a thousand different ways. Simplicity in
architecture design may have a downside of not being able to address
many cognitive challenges simultaneously, however, it has an advantage
over a complicated architecture in flexibility and (efficient
large-scale) operability.

Simplicity requires making assumptions and having assumptions usually
implies compression. This is usually true because each new
assumption/rule carries a potential to be combined with other
assumptions/rules, giving us more implied facts. Since these new set of
facts do not need to be stored explicityly (because they are implied
already, and therefore, they could be derived by using the
assumptions/rules at any moment), we save up memory by not storing these
new facts explicityly; they are rather stored implictly by the means of
computational consequences of the (physically) stored assumptions/rules.
