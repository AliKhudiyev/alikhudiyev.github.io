---
layout: post
author:
- Ali Khudiyev
title: "Who are Mathematicians? (from a programmer's perspective)"
date: 2025-05-10 13:03:00 +0400
categories: archive math programming miscellaneous
---

Mathematics is the discipline of rigor and algorithmic thinking. A
mathematician is someone capable of bringing structure to an
unstructured space of observations. By doing so, one is able to reduce
entropy/chaos within that particular space. Programmers are also
required to possess algorithmic thinking to some extent. However, we are
not mathematicians, unfortunately. Although many non-technical people
outside Informatics may consider programmers as wizards, we,
programmers, tend to view mathematicians as the real wizards. If the
term \"programmer\" hadn't been invented after the manufacturing of
computing machines back in the 1945s, the term would probably have meant
the same thing as the term \"mathematician\". However, this is not the
case because \"programming\" is nowadays tightly coupled with the notion
of a \"computing machine\". There is no programmer without programming a
computer to do something. So, this puts programmers in a weird position
where our existence depends on the existence of machines around us. In
other words, if there were no programmable machines, there would be no
need for a programmer to program one, and therefore, there would be no
programmers as a consequence. Unlike us, whose existence is not even
free and independent of metal boxes, mathematicians have no such
existential dependence; they existed before us, they exist now, and they
will exist in the future as long as there is a \"human\" life form in
the universe.

Mathematicians have a particular way of thinking that programmers call
algorithmic thinking. We would like to be able to think algorithmically
to program our computers to solve problems elegantly and efficiently.
Unfortunately, we are not as good at this as mathematicians. They can
think better, and we can talk to metal boxes. It is certainly impossible
for a real programmer to look at a mathematician's sophisticated work
and not have a mental orgasm once everything about it finally clicks,
frankly speaking. One cannot stop wondering about what would happen if
the mathematicians decided to program machines. Oh no\... We would be
out of jobs; we would disappear behind the shadows of programming
mathematicians. However, it seems like most of them don't like spending
too much time talking to metal boxes. I know this post is about
mathematicians, but I should say: we have a certain type of fantasy (or
mental illness, as some could say) about these non-breathing,
non-moving, non-living, standing still metal boxes. Are we out of our
minds? On the flip side of things, many also view mathematicians as out
of their minds, so maybe we are just trying to get closer to what we
want.

# Mathematicians' thinking process through the lens of programming

I believe that many programmers would pick up a math book, but end up
not even reading one-third of it; at least, many programmers I know
don't. Why is that? Mathematicians' thinking process seems too abstract
and unrelatable to many programmers who have the habit of thinking in
terms of tangible and concrete machine instructions. Programmers talk
about OOP and the use of abstractions all day long without really being
able to handle abstractions properly. That may explain why programmers
tend to avoid godly abstractions while writing code, because badly
designed abstractions start to become a heavy burden later on, and
programmers are not good with abstractions. We might think abstractions
are bad, but that might also be because we don't know how to abstract
things properly in the first place. The level of abstractions that we
have managed to work with is known as good abstractions. Duh\... You
don't write web pages in assembly because the abstractions that the
tools you use provide are manageable for you to work with. However, as
soon as the level of abstractions hits the ceiling of your cognitive
capacity, it is easier just to hate them. I am not claiming that
everything should be abstracted needlessly; what I am saying is that we
sometimes don't like coming up with abstractions even though doing it
properly would make our software much more readable, maintainable, and
our lives much easier. Mathematicians are better at handling
abstractions than programmers, and we should try to get better at this
because everyone can be a programmer, but only a few make it to be a
great programmer.

Although I quite adore the mathematicians' way of thinking to solve
problems, their thinking process may seem like too high-level/abstract
to a newbie, while the proofs they come up with are actually too
verbose. So, how can these two things be true at the same time? What is
more verbose must be low-level, and what is less verbose must be
abstract or high-level. Well, the paradoxical confusion comes from the
semantics of the language they are using versus the language programmers
are using to talk to machines. A mathematical proof can be too verbose
in the mathematical system/language it has been written in and too
high-level in the intuitive language of humans at the same time. I will
try to illustrate this with an example. Suppose that you are given a set
of axioms and a single theorem to prove. Since you don't have anything
other than the given axioms and the inference rules of mathematical
logic, you will construct a proof for the theorem from scratch. What
could potentially be more low-level than this process? The trick is that
some of the axioms might say something that is completely unintuitive
for you, e.g., the set of real numbers is well-ordered. On the level of
axioms, the whole process is low-level and too verbose, but it is
unintuitive and hence, seemingly abstract on the level of human
intuition. It is like telling a mathematician to understand a code
written in assembly: although this is the most verbose[^1] that a
program can be, and everything makes perfect sense to a programmer
(e.g., moving bytes from memory to registers, loading and decoding the
instruction register, making an interrupt for the syscall, loading back
the result to the memory, and so on), a mathematician would probably be
blown off by the abstractions, such as reigsters, moving values in and
out, making interruptions, and syscalls. He would be confused, rightly
so, because all of these notions are the bare minimum of the computer
language, not the human intuition and everyday experience. Now, a
mathematician would be able to work with these as soon as he/she
memorizes the underlying semantics of this stuff, but he/she may not be
able to deeply understand what is going on. From an everyday experience
point of view, what a mathematician needs to be given could be the
hardware-level semantics of the assembly instructions because I think
tracking electrons in a circuit is just inherently more intuitive than
working with \"abstractions\" of the assembly; because humans have
learnt how to track objects in life from the early ages, but they
haven't been trained to understand any arbitrary foreign language by
default. In fact, learning to interpret a random language by default
(i.e., by the means of only using that language without ever relating it
to something else) is not even possible since a language is a human
construct to convey human thoughts and intuitions. So, the language
without the observation of thoughts and intuitions of its users may not
make much sense. A mathematician can learn to use the language without
learning its intended interpretation, but it will probably make the
mathematician come up with his/her own \"random\" interpretation that
has nothing to do with what was intended. Now, reverse this process by
making the programmer understand what the fancy Greek symbols and axioms
mean in the writings of a mathematician who has already built up enough
observations and hence, intuitions, to come up with those symbols and
axioms. Programmers' work is grounded on the machines they are
programming, mathematicians' work is grounded on all sorts of things
they observe in their lives. Once again, it seems like we are not much
without our heating metal boxes\...

I will use the example of ordinal and cardinal numbers in mathematics to
demonstrate my points with a simple example. There is a view of numbers
in set theory that divides the natural numbers into these two
categories. An ordinal number is essentially a set with an order. For
us, programmers, it, in its simple form, means numbers that point to the
order of things in a sequence. These numbers are of the form $n$-th
rather than just $n$, such as 1st apple, 3rd pencil, 14th day, and so
on. On the other hand, a cardinal number is the smallest ordinal of all
of its equivalent ordinals. Here, the term equivalent refers to the
existence of a bijective mapping between ordinals. Using these
definitions, we might see no difference between the ordinals and
corresponding cardinals. For example, saying \"I have the 5th apple in
my bag\" is the same as saying \"I have 5 apples in my bag\". Both of
these statements indicate the existence of at least 5 apples, but
neither one of them indicates the total number of apples.[^2] \"So,
what's the point of this?\" you may wonder. Well, the point is that
these two types of numbers are not the same. Sure, they behave the same
for finite numbers, but things start to get tricky when we deal with
infinities. Let me demonstrate briefly. The smallest transfinite ordinal
is, by convention, $\omega$, and the smallest transfinite cardinal, by
convention, is $\aleph_0$. Following our peasant intuitions from the
finite ordinal and finite cardinals, we might think that given
$2 \times \aleph_0 = \aleph_0 \times 2$,
$2 \times \omega = \omega \times 2$ under the reverse lexicographic
ordering, but this is wrong. The explanation for this requires
understanding the technicalities of the numbers we are dealing with
here. The term equivalence between ordinal numbers requires the
existence of a bijective mapping between them, which is also
order-preserving. In contrast, the same term between cardinal numbers
does not care about the order preservation anymore, and that's why the
former equivalence does not hold when working with the transfinite
ordinals. Let me elaborate more for the lazy programmers.

$$2 \times \omega = \{ (a, b): a \in {0, 1}, b \in \omega \}$$

If we were to order the elements of this set according to the reverse
lexicographic order (i.e.,
$(a, b) < (c, d) \iff b < d \lor (b = d \land a < c)$), it would look
like this:

$$(0, 0), (1, 0), (0, 1), (1, 1), (0, 2), (1, 2), \cdots$$

Under the bijection $f: (a, b) \mapsto a + 2b$, the order is preserved
in the generated output space:

$$0, 1, 2, 3, 4, 5, \cdots$$

Since the sequence above is equivalent to $\omega$, we say
$2 \times \omega = \omega$ under the reverse lexicographic ordering.

$$\omega \times 2 = \{ (a, b): a \in \omega, b \in \{0, 1\} \}$$

Ordering the elements of this set under the reverse lexicographic order
again would result in the following sequence instead:

$$(0, 0), (1, 0), (2, 0), \cdots, (0, 1), (1, 1), (2, 1), \cdots$$

Under a similar bijection $g: (a, b) \mapsto 2a + b$ or, in fact, any
other bijection, the order is not preserved:

$$0, 2, 4, \cdots, 1, 3, 5, \cdots$$

Since the sequence above is equivalent to two concatenated $\omega$'s,
we say $\omega \times 2 = \omega + \omega \neq \omega$ under the reverse
lexicographic ordering. The reason that
$2 \times \aleph_0 = \aleph_0 \times 2$ holds is because both bijections
$f$ and $g$ are well-fit and valid to show the non-order-preserving
equivalence of both the left-hand side and right-hand side of the
equality to the set of natural numbers, respectively. That is literally
where the ordinals and cardinals differ: ordinals care about order,
cardinals do not. What may come as a surprise at first is how working
with infinities results in different outcomes in different number types.
Anyway, returning to the original point, a programmer now should be able
to roughly understand the lines of reasoning that a mathematician goes
through to reach the conclusion on the difference of the transfinite
numbers. This is because most programmers nowadays operate under a
concrete set of instructions in an unstructured program; programmers
have started to care more about the instructions on the individual level
and care less about them on the global level. That's not quite good.

# Believing in what you think, not what you see

If you think about the example I just gave above, programmers are
constructivists. Most of us have a temptation to believe in what we can
observe out there in the wild. However, you cannot blame programmers for
that because almost all humans have this temptation. That is why
mathematics seems so hard to so many people, whether a programmer, a
pilot, a teacher, a student, or someone else. Mathematicians are a group
of people who have trained themselves to follow ideas in their heads and
not physical objects in real life. They have trained themselves to not
only understand things through construction (i.e., constructive proofs),
but also through implication (i.e., non-constructive proofs). Most
people are not well-trained to understand the nature of a thing by
thinking about all the implications it brings. Instead, most people are
more competent when they observe the constructive process that results
in or leads to the existence of the underlying thing. Programmers are
better constructivists than other non-technical people, but
mathematicians still stay ahead of programmers in both constructivism
and non-constructivism. Our use as programmers is in our ability to talk
to our computers. Otherwise, we wouldn't have been able to coexist with
mathematicians.

It needs to be mentioned that there is a huge common ground between
mathematicians and programmers: we both try to come up with a bunch of
rules and then follow them to solve problems. Programmers just give
these instructions to the machines so they can follow them for you more
reliably and much faster. This is such a big common ground because it
means that both types of people necessarily try to get better at
algorithmic thinking one way or another. The difference comes from how
and where we apply our algorithmic thinking skills---mathematicians are
good at applying these skills arbitrarily in any possible formal system,
and programmers are good at applying them more restrictively in
programming languages. This means that a well-skilled programmer should
be able to follow a mathematician's rigorous writings, even if it may
take many, many days, weeks, months, or years. Only a few programmers
are highly skilled like that because schools do not teach the
fundamentals of mathematics in a way that builds the intuition needed
for logical and rigorous thinking. In other words, we are not
appropriately trained on how to think like a mere substitution machine.
People should be taught to fantasize about this from a younger age,
instead of making them memorize many historical facts unnecessarily.

This is how I view mathematicians' way of thinking as a programmer. I am
not a highly skilled programmer, but I like to understand what it would
take to become one. I think it is not enough to write tests to become a
really good programmer; it is not enough to write documentation for the
software to become a good programmer; it is not enough to learn how to
write code in dozens of programming languages to become a good
programmer; the list goes on and on. To be a real programmer, one must
understand the principles of problem solving. Therefore, a programmer
must embrace mathematics if he/she desires to be the real one.

[^1]: You are right, there is also binary machine code.

[^2]: If you had 10 apples in total, then you would still have the 5th
    apple and 5 apples in your bag.
