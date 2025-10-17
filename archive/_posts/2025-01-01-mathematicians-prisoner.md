---
layout: post
author:
- Ali Khudiyev
title: "Mathematician's Prisoner"
date: 2025-01-01 20:28:00 +0400
categories: archive fun
---

# Question.

::: itshape
You and a fellow prisoner are imprisoned in a dungeon and are facing
execution. As is usual in these problems, the prison warden has both a
love of recreational mathematics and an unusual amount of judicial
latitude when it comes to deciding your fate. They want to give you and
your cellmate a chance of freedom but don't want to make it too easy for
you.

They have a chessboard where each square is covered by a coin -- either
heads or tails. Moreover, it's a special chess board with a hidden
compartment in each square. A single one of these squares contains a
symbolic key to the jail and freedom for you and your cell companion.
You will know which square contains the key, and your fellow prisoner
has to guess.

The rules are as follows:

1.  You and your cellmate can discuss how to encode a message using the
    chessboard, but the prison warden can hear and understand everything
    that you say.

2.  Once you have decided on a system, your companion leaves the room.

3.  You observe the prison warden hiding the key in one square and then
    arranging the 64 coins as heads or tails however they deem
    fit---presumably trying to frustrate your system.

4.  You then turn over exactly one coin on the chessboard and leave the
    room.

5.  Your companion re-enters the room without having any opportunity to
    see or communicate with you. He observes the chessboard and the
    arrangement of coins and points to the square where he believes the
    key and freedom reside.

6.  Nothing sneaky is allowed on pain of immediate death. This is a pure
    logic problem -- there is no meta-game. Paper, pencil, calculator,
    and plenty of time are available to you and your cellmate if
    necessary.
:::

# Solution.

Solving this problem requires coming up with a strategy that makes it
possible to interpret each board state by looking at the coins on top of
each compartment. Flipped-up and flipped-down coins should point to a
specific compartment in one way or another. What this tells us is that
we have to have a function that does the proper mapping from board state
to compartment number. Moreover, the strategy must leave the warden out
of options when executed by the cellmates. Therefore, the mapping
function should have a special property that ensures that we can get any
compartment number out of the function by changing the board state by
flipping a single coin. If two cellmates knew such a function, then they
would be able to outplay the warden since whatever configuration the
warden may come up with on the board, one of the cellmates could
\"revert\" the board state into the one that points to the correct
compartment where the key is hidden. This special property plays like a
constraint while the two cellmates try to come up with the mappings.
Now, let's see how all of this could be formalized.

Let a flipped-down coin be represented as the binary character 0 and a
flipped-up coin be represented as the binary character 1.[^1] Since the
board has 64 cells, one can represent the board state as
$B \in \\{0, 1\\}^{64}$ and the compartments as
$C \in \\{c \in \mathbb{N} : c < 64\\}$. What we are interested in is to
find/construct a function of the following type:

$$f : \{0, 1\}^{64} \rightarrow \{0, ..., 63\}$$

We should also formalize the constraint, ensuring that given an
arbitrary board state $B$, one can always change a single bit in the
given board state (denoted as $B^\prime$) and use the mapping $f$ to get
any arbitrary compartment $C^\prime$ from the new board state
$B^\prime$. This statement can be formalized as shown below.

$$\forall B \in \{0, 1\}^{64}\ \forall B^\prime, B^{\prime\prime} \in \{0, 1\}^{64}\ B^\prime \neq B^{\prime\prime}\ \land\ |B - B^\prime| = 1\ \land\ |B - B^{\prime\prime}| = 1 \implies f(B^\prime) \neq f(B^{\prime\prime})$$

For every binary string $B$ with $n$ bits (i.e., binary digits), there
are $n$ distinct binary strings that differ from $B$ by a single
bit-flip. This is due to the fact that there are $n$ bit-flips that can
permute $B$ by flipping each bit one at a time so that the Hamming
distance between them is exactly 1. It then follows from this
observation that one of the neighbors (i.e., binary strings whose
Hamming distance is 1 from a given binary string) must be necessarily
mapped to $f(B)$ itself. We can see this by looking at the cardinalities
of the function's subdomain
$D_B(f) = \\{B^\prime : |B - B^\prime| = 1\\}$[^2] and its codomain
$\\{0, ..., 63\\}$. Since $\#D_B(f) = 64$ and $\#\\{0, ..., 63\\} = 64$,
there must exist exactly one $B^\prime \in D_B(f)$ such that
$f(B^\prime) = f(B)$.

```[language=Python]
// f is the mapping function
// n is the number of compartments on the board
// b is a binary string representing a board state
fill_map(f, n, b) -> bool:
    if f(b) is already defined
        return true
    endif

    neighs <- the set of all binary strings with Hamming distance of 1 from b
    neighs2 <- the set of all binary strings with Hamming distance of 2 from b
    cs <- {0, ..., n}
    succ <- false

    for each neigh in neighs2:
        cs <- cs - f[neigh]
    endfor

    for each c in cs:
        for neigh in neighs:
            if !fill_map(f, n, neigh):
                make f(neigh) undefined again
                succ <- false
            endif
        endfor
        
        if succ:
            break
        endif
    endfor
    
    return succ
```

The pseudo-code shown above is the first working algorithm that came to
my mind. It is very poorly written and needs some heavy optimization to
be used to find the mapping for the 8x8 chessboard (i.e., $n=4$). For
demonstration purposes, I am going to show you the function found for
the 2x2 chessboard (i.e., $n=4$). Here are the mappings for chessboard
with only 4 compartments:

    0000 -> 0
    0001 -> 2
    0010 -> 3
    0011 -> 1
    0100 -> 1
    0101 -> 3
    0110 -> 2
    0111 -> 0
    1000 -> 0
    1001 -> 2
    1010 -> 3
    1011 -> 1
    1100 -> 1
    1101 -> 3
    1110 -> 2
    1111 -> 0

Let's suppose that the warden made a board configuration \"1001\" (i.e.,
coins on the top left and bottom right cells are 1 and the rest is 0)
and put the key inside

compartment 0 (i.e., under the top left cell of the board) - then the
only coin that needs to be flipped is the last coin, i.e.,
$f: 1000 \mapsto 0$;

compartment 1 - then the only coin that needs to be flipped is the one
on the bottom left, i.e., $f: 1011 \mapsto 1$;

compartment 2 - then the only coin that needs to be flipped is the first
one, i.e., $f: 0001 \mapsto 2$;

compartment 3 - then the only coin that needs to be flipped is the one
on the top right, i.e., $f: 1101 \mapsto 3$.

You can choose any arbitrary board configuration as the initial board
state. Soon, you will realize that the warden has no chance of playing
this game with you because you will always find a single coin flip that
makes the new state point to any arbitrary compartment, and that's why
the warden can put the key inside any compartment as he wishes, but he
will not be able to beat you at this game.

[^1]: The reason I call them binary characters and not numbers is to
    ensure rigor in the formulation since binary numbers 01 and 1 have
    the equality relation, whereas binary strings \"01\" and \"1\" do
    not have it. I will keep switching between these two notions when
    relevant.

[^2]: The subdomain $D_B(f)$ is the set of all neighbors of B that is
    also included in the domain of f.
