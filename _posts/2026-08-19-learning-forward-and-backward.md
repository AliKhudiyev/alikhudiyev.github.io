---
layout: post
author:
- Ali Khudiyev
title: Learning Forward and Backward
date: 2026-08-19 16:25:00 +0400
categories: blog education learning mindset
---

You will often find yourself struggling to grasp a new concept,
seemingly complex one but retrospectively trivial. You may have tried
many different ways to attack this new big thing, and you have spent
hours and hours on it. But still, you don't have a good grasp on it.
What should you do to make progress and move forward? We will the answer
to this question in this post; I will talk about my strategy that has
worked for me when I had the same kinds of difficulties.

Answering this question is not as simple as it may perphaps seem.
Humans' learning process is such a complex topic and very poorly
understood topic. If it was well understood, we would have built the
so-called AGI by now. However, I will start by saying that I have
observed, by introspection, that there are two modes of thinking:
*formalist* thinking and *intuitionist* thinking. *Formalist* way of
thinking is by accepting the premises you are given as are and
discovering consequences or testing implications. *Intiutionist* way of
thinking is by questioning the very premises you are given and inventing
your own premises instead. Great things aren't built by either one of
the two alone -- **great things are imagined by intuitionists and built
by formalists.** Without the intuitionist you are stuck with what you
are given, and without the formalist your ideas are wrecked by the
reality of their consequences. Both modes of thinking make you learn and
grow in one or another way: formalist thinking makes you **learn
forward**, intuitionist thinking makes you **learn backward**. I would
argue that most people should try to embrace both personalities
simultaneously to some extent. Let's see what learning forward and
backward is about.

# Learning Forward

When you utilize your inner formalist, all you do is to accept the
premises you are told even when they may not make sense to you at the
first glance. You accept them regardless because all you care about is
not whether or not they are sensible or meaninful or "true", but because
you want to know what future they can lead to. For example, as a
formalist, you can be given the following premises:

- (P1) Associativity: $\forall a, b,c \in G\ (a\*b)\*c = a\*(b\*c)$.

- (P2) Inverse:
  $\forall a \in G\ \exists a^{-1} \in G\ a\*a^{-1} = a^{-1} \* a = e \in G$.

- (P3): There is a unique identity element:
  $\exists! e \in G\ \forall a \in G\ a \* e = e \* a = a$.

You do not question the axioms as a formalist, you proceed with it to
show what is possible and what is not. To continue with this example,
you may show that "inverse of the inverse gets us back where we started"
by constructing a proof using the premises step-by-step. Let's try the
following construction:

1.  By using (P2) and (P3) on $a$, we know that
    $\exists! a^{-1} \in G\ a \* a^{-1} = e$.

2.  By using (P2) and (P3) on $a^{-1}$, we know that
    $\exists! (a^{-1})^{-1} \in G\ a^{-1} \* (a^{-1})^{-1} = e$.

3.  So, we know that $a \* a^{-1} = a^{-1} \* (a^{-1})^{-1}$.

4.  Multiply both sides by $a$ and use associativity (P1):
    $a \* (a^{-1} \* a) = (a^{-1})^{-1} \* (a^{-1} \* a)$. The left-hand
    side gives us $a \* e = a$ and the right-hand side gives us
    $(a^{-1})^{-1} \* e = (a^{-1})^{-1}$.

5.  By using the transitivity of $=$ operator, we conclude that
    $(a^{-1})^{-1} = a$. QED.

We stacked all of the given premises, (P2) and (P3) first, and then (P3)
on top of them, to show that there inverse of the inverse gets us back
where we started in an arbitrary group $G$. This is why we learned
forward: we UNDERSTOOD that this new piece of statement about "doulbe
inverseness" is correct CONDITIONED on the assumptions we accepted a
priori. At this point, it is natural for the learner to gain confidence
and ask pose even deeper statements questioning the very nature of the
premises themselves. Now, that would start the second phase -- *learning
backward*.

# Learning Backward

Proving $(a^{-1})^{-1} = a$ relied on the fact that the identity element
$e$ is unique within its group (P3). You feel not quite right about
this, because it seems to be stronger assumption to have. So, you turn
back and ask: is there a way to show whether it is sensible thing to say
that that the identity element is always unique within the group? To
answer this question, you naturally dig deeper, and finally, you find
out that there are more fundamental and convincing premises (also known
as the group axioms):

- (A1) Closure: $\forall a, b \in G\ a\*b \in G$.

- (A2) Associativity: $\forall a, b,c \in G\ (a\*b)\*c = a\*(b\*c)$.

- (A3) Identity: $\exists e \in G\ \forall a \in G\ a\*e = e\*a = a$.

- (A4) Inverse:
  $\forall a \in G\ \exists a^{-1} \in G\ a\*a^{-1} = a^{-1} \* a = e \in G$.

Once again, you put your formalist hat on top of the intuitionist hat,
and proceed to prove or disprove that $e$ is unique:

1.  We already know that there is at least one identity element $e$ such
    that (A3) $e \* a = a$ for all $a \in G$ and (A4) $a \* a^{-1} = e$
    for all $a \in G$ are true.

2.  If there was another identity element $e'$ that it must be different
    than $e$, and therefore, $e' \neq e$ must be true. By (A4), we know
    that there must exist $(e')^{-1}$ such that $e' \* (e')^{-1} = e$.

3.  By (A3), we also know that $e \* e' = e'$.

4.  By transitivity of $=$ operator, we conclude that $e' = e$. This
    violates our previous assumption on step 2 that it is possible to
    have two different identity elements. QED.

After all, it seems like it was a very sensible assumption to make
indeed. Now, you know that your forward run was justified when you
proved $(a^{-1})^{-1} = a$ by relying on the uniqueness of the identity
element. What is worth to mention here is the distinction between
learning forward and learning backward. Learning backward was all about
the realization that your foundations could be questioned and understood
even better. By doing so, your understanding of the subject became much
deeper than before. At this point, you may feel ready to prove another
high-level statement about the group elements, and while doing so, you
may rely on other sound-looking premises. After you know you understand
how these premises can be stacked exactly to give you what you wanted,
you may feel unsatisfied about the new premises that you may have
"invented" along the way. So, deep down you know that it is not fair to
just state things arbitrarily without really knowing if they contradict
other premises or statements that you already have in your pocket. It is
at that moment that you will decide to look backward and learn backward.

# Forward and Backward

Generally, when someone starts something new, they don't start from
scratch. They may think that they do, but they very often do not have
any idea what scratch even is to start from. Most of the time, most of
the people start learning from halfway of the subject they want to
understand. So, the picture of learning looks like follows, where 0
means low-level/bare minimum/scratch knowledge and 1 means
high-level/concept/subject knowledge:

![image](/assets/blog/learning-from-halfway.png)

Then they start understanding a little more about some higher-level
concepts of the subject that are just right next to the point that they
started from. This means that they push their boundaries toward
higher-level understanding. This is what **learning forward** is all
about.

![image](/assets/blog/learning-forward.png)

After getting good enough grip of some of the higher-level ideas, what
is interesting to observe is that they gain more mastery and confidence
in themselves to ask even deeper questions. These questions naturally
tend to be on the lower level of the subject. They kind of switch from
their formalist personality to intuitionist personality, where they
start questioning the nature of the things that they took as granted
when they started learning the subject initially.

![image](/assets/blog/learning-backward.png)

As depicted in figure above, they push their boundaries toward
lower-level understanding in this phase of learning. This is what
**learning backward** is all about. After they understand the
lower-level a bit more than they did before, they get inspired even more
and they feel ready to push the other front now. They get the temptation
that they can understand, build, or do something even greater than
before with their current level of lower-level understanding, because
this is also what gives them a lot of intuitions: they now start
**feeling what they are doing**. In other words, they develop the
so-called gut feeling within the subject.

![image](/assets/blog/learning-forward-backward.png)

This back-and-forth marathon running continues over and over again until
they reach to the (near-)complete mastery of the subject. Notice that
almost no one goes from 0 to 1 in a single round. The reality is
actually much more different than this: you start at 0.5 and then run
toward 1, but you stop at 0.6 and decide to run toward 0, then once you
get to 0.3 you decide to run toward 1 again... you stop at 0.9 and
decide to go back absolute 0; then you make the final run from 0 to 1.
What this means is that essentially, you will see some of the "basic"
things over and over again and you will have "aha" moments in very
unexpected times when you go over the basics. You will start revising
less and less when you have been already running forward and backward
for a long time.

This is the natural process of learning for us humans, folks! Learning
is not one-shot process, and it is not as straight-forward as ChatGPT
tells you. Once you understand and accept the "pain of inefficiency" in
learning process, you will start cracking even very hard problems...
