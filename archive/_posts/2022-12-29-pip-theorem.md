---
layout: post
author:
- Ali Khudiyev
title: "P.I.P. Theorem -- my favorite theorem from the high school"
date: 2022-12-29 20:00:00 +0400
categories: archive
---

# Background

When I was high schooling at TDV-BTL (Türkiye Diyanet Vakfı - Bakü Türk
Lisesi), I happened to be thinking about functions and their properties
during the $\text{10/11}^\text{th}$ grade(s). I was mainly thinking
about what happens when we change the formula of a function a little
bit; do its outputs completely change by large offset or is it
predictable what the function looked like before changing its formula
syntactically just by looking at its new inputs and outputs? One day
something interesting occurred to me as I was playing with arbitrary
linear and quadratic functions - when I fixed the inputs and outputs on
a table vertically, so that the (euclidean) difference between each
successive input was the same, the consequent differences in the Y
column did not change after some iteration, no matter how many
rows(i.e., data points or x and y pairs) I added to the table as long as
I respected the same-successive-difference rule on X column. For linear
functions, I just observed that the differences between the successive y
values in Y column were the same after putting them on a new column,
say, Y', and for quadratic functions, the successive difference were
stabilized when I repeated the same procedure for Y' column where I
would put the new differential values on a new column, say, Y". Then I
thought that if I just knew at what iteration the differences were
stabilized, then I would also propagate this difference backwards from
some $Y^{\prime\ldots\prime}$ to Y column; this would mean that I am
able to find the next y value on the Y column for the next x value on
the X column that was not initially given to me, and since it did not
matter which (polynomial) function I used to generate the value for the
initial \[X \| Y\] table for the successive differences to be stabilized
after some iteration(s), it meant that someone else could give this
values without telling me the generator function itself and I would
still be able to find the next (x, y) pair just by using the table.

This was just the beginning of a very long and interesting adventure
that I wasn't even aware of until recently. I wasn't doing what I was
doing back then because I knew what I was doing or I was aware of the
significance of prediction in general; I hadn't even heard about AI yet.
I was just having fun playing with functions and their input/output
values. As a young student, I was very curious about mathematics, and it
was the only reason I used to try stupid stuff to see if it went
somewhere interesting.

::: displayquote
It is not interesting to try to solely capture what's changing, rather
it is very important to capture what is not changing when everything
else's changing.
:::

It wasn't until two years ago that I realized that all that matters is
to find invariants in your problem. That's when I took note of my own
quote above. An invariant is something that is stable all the way from
the beginning to the end of some process. I also used to think about
universal invariants that defined the very reality we live in; I called
them primes of the universe. I also used to think of physics rules as
such primes, and as was the case with natural numbers in mathematics, I
believed that combining different primes (even maybe with a different
order, unlike natural numbers) would yield different events or processes
in our reality. So, the physics rules, such as gravity, would not change
at all, although the everyday events were completely dynamic and
changing. However, all that was the product of my habit of wandering
around in the imagination space too much.

Without diving too much into my crazy imagination space, I would like to
emphasize a few points on why this observation was actually a very
significant finding:

- It actually brought the idea (probably one of nowadays' very important
  ideas) of propagating the difference backward,

- It was my first notable systematic try to predict the behavior of a
  function by only using its input and output values,

- It helped me (unconsciously) realize how invariants are actually
  important.

I tried to prove why my algorithm was working correctly at the same
time. Back then, when I realized the P.I.P. algorithm for the first
time, I couldn't see where that invariant difference value came from; I
observed that it was not the same for some of the different quadratic
functions while being the same for other \"special\" set of different
quadratic functions. I repeated the experiments for higher-degree
polynomials, and only then was I able to get a sense of what was going
on - it was the difference in the X column, the highest degree of a
polynomial function, and the coefficient of its corresponding term that
decided the final difference value on some $Y^{'\ldots'}$ column. For
example, the set of samples for $f(x) = 3x^2 - 5x$ and
$g(x) = 3x^2 + 2x - 5$ would give the same difference value on Y" if and
only if the differences of successive pairs on X columns for two sets of
samples were the same.

It was not too hard to also realize another interesting property after
realizing the previous one - when the difference on the X column was 1,
the difference on Y was going to be $\eta_P P!$ (where $P$ is the
highest degree, and $\eta_P$ is the coefficient of its corresponding
term). Since I had such intuitions about what was going on, it did not
take me too long to prove the correctness of the \"mysterious\" P.I.P.
theorem. Of course, it ceased to be mysterious right after I finished
proving the theorem, as it always does. I am going to share the theorem
and its proof in this blog post, but I will not write about how this
theorem has empowered my imagination to invent new things, at least not
in this post.

# Theory

Theorem. Let $f : R \mapsto R$ be a polynomial function and
$(X, Y) \in R^n \times R^n$ be the set of $n$ ordered samples of $f$
where $\forall i\ X_{i+2} - X_{i+1} = X_{i+1} - X_{i}$, that is, the
euclidean distance between each consequent $X_{i}$ is always the same.
Then the next $(x = X_{n+1}, y = Y_{n+1})$ pair after the last
$(X_{n}, Y_{n})$ can be deduced by the following procedure:

1.  Let $\Delta Y_i^{(0)} = Y_i$

2.  Let
    $\Delta Y_i^{(j)} = \Delta Y_{i+1}^{(j-1)} - \Delta Y_{i}^{(j-1)}$

3.  $\Delta Y = \Delta Y_1^{(n-1)}$

4.  Let $\Delta Y_2^{(n-1)} = \Delta Y$

5.  $x = X_n + \Delta X_n^{(1)}$, and $y = Y_n + \Delta Y_n^{(1)}$

where $\Delta X_n^{(1)} = \Delta X = X_{i+1} - X_{i}$ for any $i$, but
has not been changed to $\Delta X$ in order to maintain the harmony
between the $(x, y)$ pair.

Remark. For any positive integer power function or polynomial
$f(x) = \sum_{i=0}^{P} \eta_i x^i$, the equality
$\Delta Y = \Delta Y_1^{(P)} = \Delta X^P \eta_P P!$ is correct of
invariant, and to obtain such invariant, there must be at least $P+1$
ordered samples.

Proof. Let $f(x) = \sum_{i=0}^{P} \eta_i x^i$ be the positive integer
power function (i.e., polynomial), and (X, Y) be the ordered set of
samples of $f$ such that
$\forall i\ X_{i+1} - X_{i} = \Delta X \land Y_i = f(X_i)$. Then, the
following equalities can be deduced easily:

$$Y_{i+1} - Y_{i} = f(X_{i+1}) - f(X_{i}) = f(X_{i} + \Delta X) - f(X_{i})$$

$$Y_i^{(1)} = Y_{i+1} - Y_{i} = \sum_{p=0}^{P} \eta_p [(X_i + \Delta X)^p - X_i^p]$$

Since $\eta_p$ is going to be multiplied by $0$ when $p=0$, we can omit
the first term in the summation formula as shown below:

$$Y_i^{(1)} = \sum_{p=1}^{P} \eta_p [(X_i + \Delta X)^p - X_i^p]$$

It is obvious that $Y_i^{(1)}$ is also a polynomial(i.e., positive
integer power function), and therefore, must have the same general
formula as any polynomial function. The only exception is that the
degree of the current polynomial will be one less than the previous one
since when $p=P$, the highest power of the variable $X_i$ is $P-1$,
which can be observed as shown below:

$$(X_i + \Delta X)^P - X_i^P = (X_i^P + PX_i^{P-1}\Delta X + ...) - X_i = PX_i^{P-1}\Delta X + ...$$

Now, let's try to figure out how many terms we can group together after
expanding $Y_i^{(1)}$. We can solve this problem just by acknowledging
one fact - each differential(i.e., $(X_i + \Delta X)^p - X_i^p$)) is
expanded into a sequence of terms with the degrees going from $0$ to
$p-1$. Therefore, an expansion of each differential with the degree of
$p$ is, by itself, another polynomial of the degree $p-1$. For example,
if $P=3$, then the following expansions must be observed:

$$\begin{aligned}
    \eta_1[(X_i + \Delta X)^1 - X_i^1] &= \eta_1[\Delta X] \\ 
    \eta_2[(X_i + \Delta X)^2 - X_i^2] &= \eta_2[\Delta X^2 + 2X_i \Delta X] \\ 
    \eta_3[(X_i + \Delta X)^3 - X_i^3] &= \eta_3[\Delta X^3 + 3X_i \Delta X^2 + 3X_i^2 \Delta X] 
\end{aligned}$$

We can also use the Pascal triangle to calculate the coefficients of
each term in the expansion. The ultimate formula for $Y_i^{(1)}$ with
the polynomial degree of $P-1$ could be written as follows:

$$Y_i^{(1)} = \sum_{p=0}^{P-1} \eta_p^{(1)} X_i^{p}, \quad \text{where } \eta_{p}^{(1)} = \sum_{d=p+1}^{P} \eta_{d} {d \choose d-p} \Delta X^{d-p} $$

For mathematical conveniency, let $Y_i^{(0)} = Y_i$ and
$\eta_i^{0} = \eta_i$. Now, we can deduce the general formula for
$\eta_p^{(k)}$ by also adding up the fact that for each depth $k$,
$\eta^{(k)}$ has to consider only the highest degree of its ancestor
polynomial as the new highest polynomial degree $P^{(k)}$(e.g.,
$P^{(1)} = P$ since $Y_i^{(0)}$ has the polynomial degree of $P$, but
since $Y_i^{(1)}$ has the polynomial degree of $P-1$, $P^{(2)} = P-1$):

$$Y_i^{(k)} = \sum_{p=0}^{P-k} \eta_p^{(k)} X_i^{p}, \quad \text{where } \eta_{p}^{(k)} = \sum_{d=p+1}^{P+1-k} \eta_{d}^{(k-1)} {d \choose d-p} \Delta X^{d-p} $$

We can use the above-shown formula to find the invariant within the
recursion of differentials. It is obvious that since we want to obtain
an invariant, we need to find a value of $k$ such that there is no free
variable to be found $Y_i^{(k)}$. It is easy to observe that if we set
$k = P$, then $Y_i^{(P)} = \eta_0^{(P)}$ which is free of $X_i$. Now, we
can use the formula for $\eta_p^{(k)}$ to find one particular
$\eta_0^{(P)}$:

$$\begin{aligned}
    \eta_{0}^{(P)} = \eta_{1}^{(P-1)} {1 \choose 0} \Delta X = 1 \eta_{1}^{(P-1)} \Delta X \\ 
    \eta_{1}^{(P-1)} = \eta_{2}^{(P-2)} {2 \choose 1} \Delta X = 2 \eta_{2}^{(P-2)} \Delta X \\ 
    \eta_{2}^{(P-2)} = \eta_{3}^{(P-3)} {3 \choose 2} \Delta X = 3 \eta_{3}^{(P-3)} \Delta X \\ 
    \hfill \ldots \hfill \\ \hfill \ldots \hfill \\ \hfill \ldots \hfill \\ 
    \eta_{P-1}^{(1)} = \eta_{P}^{(0)} {P \choose P-1} \Delta X = P \eta_{P}^{(0)} \Delta X
\end{aligned}$$

By multiplying each consequent $\eta$, we can rewrite the whole equality
as shown below and deduce its final expression:

$$\eta_{0}^{(P)} = \Delta X^P \eta_P \prod_{p=1}^{P} p = \Delta X^P \eta_P P!$$

Therefore, we have successfully shown that there exists an invariant at
some depth in the recursion of differentials, and the first occurrence
of such invariant can be computed by using the
$\Delta Y = Y_1^{(P)} = \Delta X^P \eta_P P!$ formula. $\blacksquare$
