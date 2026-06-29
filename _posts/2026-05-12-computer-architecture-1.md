---
layout: post
author:
- Ali Khudiyev
title: "A Student's Computer Architecture Book I"
date: 2026-05-12 16:00:00 +0200
categories: courses self-study computer-architecture draft book
---

# The Essence of Computing

You may have heard of Babbage's machine. Yes, Charles Babbage's
Analytical Engine. Well, there was actually his Difference Engine, too,
for automated polynomial calculations. Many consider his machine(s) very
first computing devices created by human species. However, I would say
that the history of computing goes way earlier than that. You'll say,
"of course, there is the Abacus invented somwhere in between 1000-500
BC". You would be right, but apparently there is this 8 cm-long bone
tool made of a baboon fibula that has been used by humans of the Earth
as early as 35,000 BCE. "What was its purpose?", you ask. There are some
debates around its purpose, but it is believed to be for counting days
and tracking time.

# Foundations & Boolean Algebra

## Numeral Systems

Counting is an important and unavoidable part of human life. It is so
unavoidable that people have invented multiple different ways of
counting things. We put all of these different ways of counting under
the name of *numeral systems*. Let me describe a few of numeral systems.
First of all, there is additive numeral systems and then there is
positional systems. One example of an additive numeral system is Roman
numerals (e.g., VI means 5+1, which is 6). In additive numeral systems,
the position of each digit does not affect its magnitude (e.g., even in
number IV the calculation goes like -1+5, which is 4; the numbers that
are added have the magnitudes 1 and 5). In contrast, in positional
numeral systems, the place of each digit affects its magnitude (e.g.,
123 in decimal is 100 + 20 + 3 whereas 321 in decimal is 1 + 20 + 300).
Since positional systems have been more useful to work with in almost
all areas of mathematics and digital logic design, we are going to focus
on them from now on.

You see, there are also different positional numeral systems. The
difference among positional numeral systems comes from the radix or the
base used. The radix (or the base) is the number of elementary symbols
that all the numbers of the numeral system are made of. These elementary
symbols are also known as the digits. For example, our beloved decimal
system uses 10 digits (0, 1, 2, 3, 4, 5, 6, 7, 8, 9), and therefore, the
radix is 10. In order to compute the magnitude of the number, each digit
in a decimal number is first multiplied by the power of 10 according to
the position in which the underlying digit appears within the number and
then the results are added, i.e.,
$\overline{d_n, d_{n-1}, \dots, d_0}_{10} = 10^n * d_n + 10^{n-1} * d_{n-1} + \dots + 10^0 * d_0$.

Let's now talk about other radices. There is this numeral systems known
as **hexadecimal**, **octal**, and **binary**. The base used in
hexadecimal is 16 (i.e., the digits from 0 to 15, inclusively), the base
used in octal is 8 (i.e., the digits from 0 to 7, inclusively), and the
base used in binary is 2 (i.e., the digits 0 and 1). Similar to the
magnitude calculation in the decimal system, here is how the magnitudes
are computed (in decimal) for these systems:

$$\begin{aligned}
    \overline{h_n h_{n-1} \dots h_0}_{16} &=  16^n * h_n + 16^{n-1} * h_{n-1} + \dots + h_0 \\
    \overline{o_n o_{n-1} \dots o_0}_{8} &=  8^n * o_n + 8^{n-1} * o_{n-1} + \dots + o_0 \\
    \overline{b_n b_{n-1} \dots b_0}_{2} &=  2^n * b_n + 2^{n-1} * b_{n-1} + \dots + b_0
\end{aligned}$$

## Boolean Algebra

### Laws

::: {#law:commutativity .law}
**Law 2.1** (Commutativity). *The order of operands does not affect the
result.*

*$$\begin{aligned}
        a + b &= b + a \\
        a \cdot b &= b \cdot a
    
\end{aligned}$$*
:::

::: {#law:associativity .law}
**Law 2.2** (Associativity). *The grouping of operands does not affect
the result.*

*$$\begin{aligned}
        (a + b) + c &= a + (b + c) \\
        (a \cdot b) \cdot c &= a \cdot (b \cdot c)
    
\end{aligned}$$*
:::

::: {#law:distributivity .law}
**Law 2.3** (Distributivity). *Operations can be factored or expanded.*

*$$\begin{aligned}
        a \cdot (b + c) &=  a \cdot b + a \cdot c \\
        a + (b \cdot c) &=  (a + b) \cdot (a + c)
    
\end{aligned}$$*
:::

::: {#law:identity .law}
**Law 2.4** (Identity). *$$\begin{aligned}
        a + 0 = a \\
        a \cdot 1 = a
    
\end{aligned}$$*
:::

::: {#law:idempotency .law}
**Law 2.5** (Idempotent). *$$\begin{aligned}
        a + a = a \\
        a \cdot a = a
    
\end{aligned}$$*
:::

::: {#law:complement .law}
**Law 2.6** (Complement). *$$\begin{aligned}
        a + a' = 1 \\
        a \cdot a' = 0
    
\end{aligned}$$*
:::

::: {#law:domination .law}
**Law 2.7** (Domination). *$$\begin{aligned}
        a + 1 = 1 \\
        a \cdot 0 = 0
    
\end{aligned}$$*
:::

### Theorems

::: {#thm:de-morgan .theorem}
**Theorem 2.1** (De Morgan). *Complement of a sum is equal to the
product of the individual complements, and complement of a product is
equal to the sum of the individual complements.*

*$$\begin{aligned}
        (a + b)' &= a' \cdot b' \\
        (a \cdot b)' &= a' + b'
    
\end{aligned}$$*
:::

::: {#thm:absorbtion .theorem}
**Theorem 2.2** (Absorbtion). *$$\begin{aligned}
        a + a \cdot b &= a \\
        a \cdot (a + b) &= a
    
\end{aligned}$$*
:::

::: {#thm:consensus .theorem}
**Theorem 2.3** (Consensus). *$$\begin{aligned}
        a \cdot b + a' \cdot c + b \cdot c = a \cdot b + a' \cdot c
    
\end{aligned}$$*
:::

::: {#thm:transposition .theorem}
**Theorem 2.4** (Transposition). *$$\begin{aligned}
        (a + b) \cdot (a' + c) = a \cdot c + a' \cdot b
    
\end{aligned}$$*
:::

::: {#thm:involution .theorem}
**Theorem 2.5** (Involution). *$$\begin{aligned}
        (a')' = a
    
\end{aligned}$$*
:::

## Boolean Functions

A boolean function is a regular mathematical function whose domain is
the Boolean space $\{0, 1\}$ and uses only Boolean operations upon the
elements of the domain. Another way of looking at it is, anything that
takes one or more 0/1 inputs and gives one 0/1 output is a boolean
function. So, according to this view, a lookup table with all possible
binary patterns on the left-hand-side (LHS) and binary digits on the
right-hand-side (RHS) could be considered a boolean function. Just take
a look at the lookup table below for a moment. I mean, at the end of the
day, this table defines the outputs of ternary function
$f: \{0, 1\}^3 \rightarrow \{0, 1\}$ for all possible 3-bit inputs.

::: {#tab:truth-table-example}
   x   y   z   f(x, y, z)
  --- --- --- ------------
   0   0   0       0
   0   0   1       1
   0   1   0       0
   0   1   1       1
   1   0   0       0
   1   0   1       1
   1   1   0       1
   1   1   1       1

  : Truth table for boolean function $f(x, y, z) = xy + z$.
:::

The table [2.1](#tab:truth-table-example){reference-type="ref"
reference="tab:truth-table-example"} is a representation of a boolean
function. It is an exhaustive lookup table essentially, and we call such
representation **truth table** of a boolean function. To state a couple
of facts about truth tables, (1) this representation is tabular and not
algebraic, (2) it is declarative (i.e., the table states which binary
value can be used to substitute $f(x, y, z)$ for some $x$, $y$, and $z$)
and not imperative (i.e., the table does not state how the outputs are
computed by using Boolean logic). Tabular representation is cool, but we
would also like to have algebraic representations that are imperative,
because we are not planning to use Boolean functions on paper all day
long and we actually need to build something in real life that behaves
the same as the described boolean function $f$. Moreover, there is
another disadvantage when it comes to representing a boolean function by
drawing out its truth table representation: it is exhaustive, i.e., all
the possible inputs must be there in the table, making some of even the
simple functions with 10 or more binary inputs unskethcable (i.e.,
practially very painful to sketch because the table needs to have
$2^10 = 1024$ rows). All this being said, now we will see how algebraic
representations can be constructed for our beautiful boolean functions.

### Canonical Representations

Let's take a look at our beloved truth table
[2.1](#tab:truth-table-example){reference-type="ref"
reference="tab:truth-table-example"} for the ternary function
$f : x, y , z \mapsto 0/1$. There are two standartized (canonical) way
of representing truth tables: (1) **sum of products (SoP)** and (2)
**product of sums (PoS)**. Let's see what they are all about...

#### Sum of Products (SoP)

Sum of products approach to constructing a representation for a given
boolean function is all about building a detection mechanism for the
inputs for which the function outputs 1. Such detection mechanism can be
built out of multiple simpler detection mechanisms that only detect one
row. What do I mean by that? Well, imagine that you needed to build a
mechanism (that is, essentially another boolean function) that will take
an input $(x, y, z)$, and then will output 1 if the input is the one on
the third row of the truth table
[2.1](#tab:truth-table-example){reference-type="ref"
reference="tab:truth-table-example"} and 0 otherwise. For example, I
would like to detect the input to the function $f$ is the one the third
row of its truth table, i.e., $x=0$, $y=1$, and $z=0$. Let's construct a
function $r_3(x, y, z) = \begin{cases}
    1, &\text{if } x=0 \text{ AND } y=1 \text{ AND } z=0 \\
    0, &\text{otherwise}
\end{cases}$. I think it must be pretty obvious that
$r_3(x, y, z) = x' y z'$, since to make the condition
$\left[(x=0) \text{ AND } (y=1) \text{ AND } (z=0)\right]$ hold, we need
to make three subconditions -- $x' = \begin{cases}
    1, \text{if } x=0 \\
    0, \text{otherwise}
\end{cases}$ for $x=0$, $y = \begin{cases}
    1, \text{if } y=1 \\
    0, \text{otherwise}
\end{cases}$ for $y=1$, and $z' = \begin{cases}
    1, \text{if } z=0 \\
    0, \text{otherwise}
\end{cases}$ for $z=0$ -- hold. Now that we know how to construct a
mechanism/function to detect individual rows, it is time to compose
these smaller detectors to represent our final function $f$.

The logic for constructing the detector for the rows for which our
function outputs 1 is as follows: we define
$f(\text{input}) = \begin{cases}
    1, \text{\makecell{if input is given on \\ the \textbf{second row} OR \\ the \textbf{fourth row} OR \\ the \textbf{sixth row} OR \\ the \textbf{seventh row} OR \\ the \textbf{eighth row} \\ of the truth table}} \\
    0, \text{otherwise}
\end{cases}$. Therefore, we can combine 5 detectors to construct a
representation for $f$ as follows:
$f(x, y, z) = r_2(x, y, z) + r_4(x, y, z) + r_6(x, y, z) + r_7(x, y, z) + r_8(x, y, z)$.
In other words, we may write $f(x, y, z) = \sum m(1, 3, 5, 6, 7)$.

![AND-OR circuit for
$f(x, y, z) = \sum m(1, 3, 5, 6, 7)$.](/assets/courses/comp-arch/figures/c2s3_sop_example.png){#fig:c2s3_sop_example
width="60%"}

#### Product of Sums (PoS)

As opposed to the SoP representation, product-of-sums (PoS) is about
constructing detection mechanism that recognizes inputs for which the
output is 0 in the truth table. With the same logic used in PoS, we
could construct three such boolean functions that output 1 only when
their input is the one given on the first, third, and fifth rows,
respectively. Here are such three functions: $r_0(x, y, z) = x'y'z'$,
$r_2(x, y, z) = x'yz'$, and $r_4(x, y, z) = xy'z'$. Now, we could
rewrite $f$'s definition as follows:

$$f(\text{input}) = \begin{cases}
    0, \text{\makecell{if input appears on \\ the \textbf{first row} OR \\ the \textbf{third row} OR \\ the \textbf{fifth row}}} \\
    1, \text{otherwise}
\end{cases}$$

To implement this definition of $f$, we could first try to detect
whether the input appears on one of the rows that make $f$'s output 0 by
combining three previously built detectors by summing them (SoP):
$r_0(x, y, z) + r_2(x, y, z) + r_4(x, y, z)$. Now this SoP formula has
the following definition:

$$r_0(\text{input}) + r_2(\text{input}) + r_4(\text{input}) = \begin{cases}
    1, \text{\makecell{if input appears on \\ the \textbf{first row} OR \\ the \textbf{third row} OR \\ the \textbf{fifth row}}} \\
    0, \text{otherwise}
\end{cases}$$

Realize how this definition is the complete opposite of the $f$'s
definition. Therefore, we could just conclude that

$$\begin{aligned}
    f(x, y, z) &= \left(r_0(x, y, z) + r_2(x, y, z) + r_4(x, y, z)\right)' = \\
    &= \left(r_0(x, y, z)\right)' \cdot \left(r_2(x, y, z)\right)' \cdot \left(r_4(x, y, z)\right)' = \\
    &= (x + y + z)(x + y' + z)(x' + y + z)
\end{aligned}$$

The PoS formula for our function is also written as
$f(x, y, z) = \prod M(0, 2, 4)$ in short.

![OR-AND circuit for
$f(x, y, z) = \prod M(0, 2, 4)$.](/assets/courses/comp-arch/figures/c2s3_pos_example.png){#fig:c2s3_pos_example
width="60%"}

### Boolean Function Simplification with Karnaugh Maps

We want the circuits to be minimal and compact, because the less
redundant logic (gates) we use in our circuit, the more speed we gain in
the propogation of input signals (0s and 1s) in the circuit. Here is one
simple example: suppose you build a circuit out of three NOT gates as
follows:

![image](/assets/courses/comp-arch/figures/c2s2_not_not_not_x.png){width="70%"}

If you represent this circuit as a boolean function $f(x) = x'''$, you
can quickly deduce that $f(x) = x'$ (recall that $x'' = x$). Although
two representations are semantically the same (they give you the same
final output in real life), one is practically slower and more
resource-demanding than the other. The first representation
$f(x) = x'''$ requires buying 3 NOT gates from the store (not budget
friendly) and runs slower than $f(x) = x'$, which only requires buying a
single NOT gate. All this is to say that **minimization of boolean
logic** is useful and good.

You may wonder if there are other techniques to minimize a given boolean
function. There are indeed other techniques beyond the use of boolean
algebra laws and theorems (e.g., $x''=x$, $x+1=1$, $x \cdot x = x$,
etc.), and one of them is by using so-called Karnaugh maps or K-maps. A
K-map is essentially a two-dimensional Euclidean grid that represents
all the outputs of a given function to be minimized in a way that
neighbouring output values on the grid are the outputs of the function
when given very similar inputs. Here's an example: suppose we have a
ternary function $f(x, y, z) = (x+y+z)(x+y'+z)(x'+y'+z)(x'+y'+z')$. For
input 110 ($x=1,\ y=1,\ z=0$), $f(1,1,0) = 0$. So, we say the cell at
coordinate $(1,0,1)$ of the 2D K-map grid is $0$ (output of $f$ at
$(1, 1, 0)$). Then we are interested in the neigbouring cells located at
$(0, 1, 0)$, $(1, 0, 0)$, and $(1, 1, 1)$. $f$'s outputs at these
locations are, $f(0,1,0)=0$, $f(1,0,0)=1$, $f(1,1,1)=0$. This is how we
visually represent the grid with the cell locations (inputs to our
boolean function) and the function outputs:

::: tabular
C\|C\|C\| &\

00

& &\

01

& 0 &\

11

& 0 & 0\

10

& 1 &\
:::

Now, we fill the rest of the empty cells of this grid. Notice that how
rows are indexed with location/inputs 00, 01, 11, 10 and not 00, 01, 10,
11. This is because we want the neighbouring locations/inputs to be as
similar to one another as possible. If you look carefully, going from 00
to 01 makes only a single bit flip, as well as going from 01 to 11, from
11 to 10, and from 10 to 00 back again. However, if the rows were
indexed with the "00, 01, 10, 11" order, going from 01 to 10 would make
two bits flipped (this is also true for going from 11 to 00 back again),
and therefore, the neighbouring locations would not be as close as they
are with the "00, 01, 11, 10" indexding. This is called (2-bit) **gray
codes** -- *(2-bit) binary numbers ordered in a number line such that
each consecutive number on the line is only single bit-flip away from
the other*. For the columns of K-map, we also need to use gray codes.
Since there is only single bit $z$ represented as the column values, any
ordering ("0, 1" or "1, 0") is a valid and gray code compliant; in our
table we have used "0, 1" ordering.

::: tabular
C\|C\|C\| &\

00

& 0 & 1\

01

& 0 & 1\

11

& 0 & 0\

10

& 1 & 1\
:::

What now, you ask? The last step after filling the grid is to look for
**prime implicants** -- *a rectangular selection of
$2^{i \in \mathbb{N}}$ number of cells filled with 1s only*. Notice that
the K-map grid wraps around both horizontally and vertically, so a
rectangular selection wrapping over horizontally or vertically is also
valid.

::: tabular
C\|C\|C\| &\

00

& 0 & 1\

01

& 0 & 1\

11

& 0 & 0\

10

& 1 & 1\
:::

While we do our group selections, we always try to make the largest
groups of size $2^i$ possible. Groups may possible overlap and there is
no problem with that. In fact, sometimes we deliberately pick
overlapping groups to maximize their sizes as much as possible. The
higher $2^i$ number of 1s we have in our groups, the more compressed our
final algebraic representation for the given function will become.
Having the two final groups (also known as **essential prime
implicants**) in our K-map example means that we will have two
**minterms** or **products** in our minimized representation. To
construct a product from any given group on the grid, you just need to
find the input variables that do not change across the cells within the
same group. In our case, for the yellow essential prime implicant, $x$
and $z$ do not change, so the product for this group is the
multiplication of these **invariants** converted to boolean value of 1
(by using negations when necessary), $x'z$. For the green essential
prime implicant, the invariants are $x$ and $y'$: therefore, the product
is $xy$. Finally, the minimized representation for the function
$f(x, y, z) = xy' + x'z$ will be $f(x, y, z) = xy' + x'z$.

# Logic Gates & Circuits {#chap:logic-gates}

A **logic gate** is a piece of hardware that computes one of basic
functions from logic algebra such as *boolean addition*, or *boolean
multiplication*, or some simple combination of these. Hardware people
use these logic gates to construct circuits. First, we'll see what logic
gates there are and then we'll use these gates in order to build more
circuits that have high-level capabilities.

## NOT, AND, OR, XOR, NOR, XNOR

The first logic gate is called the **NOT** gate. NOT gate is computes a
unary boolean NOT function, $\operatorname{NOT}(x) := x'$. Its truth
table and visual representation are given below:

<figure>
<div class="minipage">
<table>
<thead>
<tr>
<th style="text-align: center;">x</th>
<th style="text-align: center;">NOT(x)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">0</td>
<td style="text-align: center;">1</td>
</tr>
<tr>
<td style="text-align: center;">1</td>
<td style="text-align: center;">0</td>
</tr>
</tbody>
</table>
</div>
<div class="minipage">
<img src="/assets/courses/comp-arch/figures/c3s1_not_gate.png"
style="width:60.0%" />
</div>
</figure>

<figure>
<div class="minipage">
<table>
<thead>
<tr>
<th style="text-align: center;">x</th>
<th style="text-align: center;">y</th>
<th style="text-align: center;">AND(x,y)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">0</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">0</td>
</tr>
<tr>
<td style="text-align: center;">0</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">0</td>
</tr>
<tr>
<td style="text-align: center;">1</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">0</td>
</tr>
<tr>
<td style="text-align: center;">1</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">1</td>
</tr>
</tbody>
</table>
</div>
<div class="minipage">
<img src="/assets/courses/comp-arch/figures/c3s1_and_gate.png"
style="width:60.0%" />
</div>
</figure>

<figure>
<div class="minipage">
<table>
<thead>
<tr>
<th style="text-align: center;">x</th>
<th style="text-align: center;">y</th>
<th style="text-align: center;">OR(x,y)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">0</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">0</td>
</tr>
<tr>
<td style="text-align: center;">0</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">1</td>
</tr>
<tr>
<td style="text-align: center;">1</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">1</td>
</tr>
<tr>
<td style="text-align: center;">1</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">1</td>
</tr>
</tbody>
</table>
</div>
<div class="minipage">
<img src="/assets/courses/comp-arch/figures/c3s1_or_gate.png"
style="width:60.0%" />
</div>
</figure>

<figure>
<div class="minipage">
<table>
<thead>
<tr>
<th style="text-align: center;">x</th>
<th style="text-align: center;">y</th>
<th style="text-align: center;">NAND(x,y)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">0</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">1</td>
</tr>
<tr>
<td style="text-align: center;">0</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">1</td>
</tr>
<tr>
<td style="text-align: center;">1</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">1</td>
</tr>
<tr>
<td style="text-align: center;">1</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">0</td>
</tr>
</tbody>
</table>
</div>
<div class="minipage">
<img src="/assets/courses/comp-arch/figures/c3s1_nand_gate.png"
style="width:70.0%" />
</div>
<figcaption>NAND’s truth table</figcaption>
</figure>

<figure>
<div class="minipage">
<table>
<thead>
<tr>
<th style="text-align: center;">x</th>
<th style="text-align: center;">y</th>
<th style="text-align: center;">NOR(x,y)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">0</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">1</td>
</tr>
<tr>
<td style="text-align: center;">0</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">0</td>
</tr>
<tr>
<td style="text-align: center;">1</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">0</td>
</tr>
<tr>
<td style="text-align: center;">1</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">0</td>
</tr>
</tbody>
</table>
</div>
<div class="minipage">
<img src="/assets/courses/comp-arch/figures/c3s1_nor_gate.png"
style="width:70.0%" />
</div>
</figure>

\[H\]

<figure>
<div class="minipage">
<table>
<thead>
<tr>
<th style="text-align: center;">x</th>
<th style="text-align: center;">y</th>
<th style="text-align: center;">XOR(x,y)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">0</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">0</td>
</tr>
<tr>
<td style="text-align: center;">0</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">1</td>
</tr>
<tr>
<td style="text-align: center;">1</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">1</td>
</tr>
<tr>
<td style="text-align: center;">1</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">0</td>
</tr>
</tbody>
</table>
</div>
<div class="minipage">
<img src="/assets/courses/comp-arch/figures/c3s1_xor_gate.png"
style="width:70.0%" />
</div>
</figure>

<figure>
<div class="minipage">
<table>
<thead>
<tr>
<th style="text-align: center;">x</th>
<th style="text-align: center;">y</th>
<th style="text-align: center;">XNOR(x,y)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: center;">0</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">1</td>
</tr>
<tr>
<td style="text-align: center;">0</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">0</td>
</tr>
<tr>
<td style="text-align: center;">1</td>
<td style="text-align: center;">0</td>
<td style="text-align: center;">0</td>
</tr>
<tr>
<td style="text-align: center;">1</td>
<td style="text-align: center;">1</td>
<td style="text-align: center;">1</td>
</tr>
</tbody>
</table>
</div>
<div class="minipage">
<img src="/assets/courses/comp-arch/figures/c3s1_xnor_gate.png"
style="width:70.0%" />
</div>
</figure>

## Universal Logic Gates

# Combinational Logic

This chapter makes use of boolean circuits/functions with no "memory" of
the past, which is known as **combinational circuits**. Combinational
circuit is a circuit whose output(s) is determined only based on the
explicitly given inputs. In other words, the output of a combinational
circuit always stays the same as the long as the same input signal is
provided. One important concept to be careful about here is the concept
of **time**. Up until now, I did not explitly mention the timing aspect
in boolean cirucits, and hence also in boolean functions. For example,
take a boolean function $f(x, y, z) = xy' + x'z$. In this level of
abstraction of the representation of $f$, there is no notion of time: we
just say given any $x$, $y$, and $z$, the function evaluates to
$xy' + x'z$. In reality, when you build a physical circuit that
implements this function, obviously there is the notion of time as well.
Therefore, it would be more realistic to write this function as
$f(x_t, y_t, z_t) = x_t y'_t + x'_t z_t$ where $x_t, y_t, z_t$ are the
inputs provided at time (step) $t$. Functions of this nature -- that is,
*the output(s) at time step $t$ only depending on some combination of
the inputs provided at the same time step $t$ -- are called
combinational* functions.

## Foundational Combinational Circuits

### Multiplexer (MUX)

<figure>
<div class="minipage">
<img src="/assets/courses/comp-arch/figures/c4s1_mux.png"
style="width:70.0%" />
</div>
<div class="minipage">
<img src="/assets/courses/comp-arch/figures/c4s1_mux_impl.png"
style="width:70.0%" />
</div>
</figure>

### Demultiplexer (DEMUX)

<figure>
<div class="minipage">
<img src="/assets/courses/comp-arch/figures/c4s1_demux.png"
style="width:70.0%" />
</div>
<div class="minipage">
<img src="/assets/courses/comp-arch/figures/c4s1_demux_impl.png"
style="width:70.0%" />
</div>
</figure>

### Encoder

![image](/assets/courses/comp-arch/figures/c4s1_naive_encoder_impl.png){width="70%"}

![image](/assets/courses/comp-arch/figures/c4s1_encoder_impl.png){width="70%"}

![image](/assets/courses/comp-arch/figures/c4s1_priority_encoder_impl.png){width="70%"}

### Decoder

![image](/assets/courses/comp-arch/figures/c4s1_decoder_impl.png){width="70%"}

## Timing

Propagation and Contamination delays

# Sequential Logic

Two types: Synchronous and Asynchronous

## Clock

## Memory

### SR Latch

![image](/assets/courses/comp-arch/figures/c5s2_sr_latch_impl.png){width="70%"}

### D Latch

![image](/assets/courses/comp-arch/figures/c5s2_d_latch_impl.png){width="70%"}

### D Flip-Flop

![image](/assets/courses/comp-arch/figures/c5s2_d_flipflop_impl.png){width="70%"}

![image](/assets/courses/comp-arch/figures/c5s2_async_d_flipflop_impl.png){width="70%"}

### T Flip-Flop

![image](/assets/courses/comp-arch/figures/c5s2_t_flipflop_impl.png){width="70%"}

![image](/assets/courses/comp-arch/figures/c5s2_async_t_flipflop_impl.png){width="70%"}

### JK Flip-Flop

![image](/assets/courses/comp-arch/figures/c5s2_async_jk_flipflop_impl.png){width="70%"}

## Finite State Machine (FSM)

### Moore and Mealy FSMs

### FSM Simplification

## Counter

### Synchronous Up Counter

![image](/assets/courses/comp-arch/figures/c5s4_sync_up_counter_impl.png){width="70%"}

### Asynchronous Ripple Counter

![image](/assets/courses/comp-arch/figures/c5s4_async_down_counter_impl.png){width="70%"}

## Timing

### Setup Time Constraint

### Hold Time Constraint

# Let's Build a Computer! {#chap:dx4-computer}

::: tabular
p0.35\|p0.12\|p0.48 **Mnemonic** & **Opcode** & **Semantics**\
`load` `$regX $memAddr` & 0,0000 &
$\texttt{regX} \leftarrow \texttt{memAddr}$\
`store` `$regX $memAddr` & 0,0001 &
$\texttt{memAddr} \leftarrow \texttt{regX}$\
`move` `$regX $val` & 0,0010 & $\texttt{regX} \leftarrow \texttt{val}$\
`arg1` `$regX` & 0,0011 & $\texttt{regA} \leftarrow \texttt{regX}$\
`arg2` `$regX` & 0,0100 & $\texttt{regB} \leftarrow \texttt{regX}$\
`cmp` & 1,0000 & $\texttt{regOUT} \leftarrow \texttt{CMP regA regB}$\
`add` & 1,0001 &
$\texttt{regOUT} \leftarrow \texttt{regA} + \texttt{regB}$\
`neg` & 1,0010 & $\texttt{regOUT} \leftarrow \text{NOT regA} + 1$\
`and` & 1,0011 & $\texttt{regOUT} \leftarrow \texttt{regA AND regB}$\
`or` & 1,0100 & $\texttt{regOUT} \leftarrow \texttt{regA OR regB}$\
`xor` & 1,0101 & $\texttt{regOUT} \leftarrow \texttt{regA XOR regB}$\
`not` & 1,0110 & $\texttt{regOUT} \leftarrow \texttt{NOT regA}$\
`rotl` & 1,0111 &
$\texttt{regOUT} \leftarrow \texttt{regA[6:0]\_regA[7]}$\
`rotr` & 1,1000 &
$\texttt{regOUT} \leftarrow \texttt{regA[0]\_regA[7:1]}$\
`shiftl` & 1,1001 & $\texttt{regOUT} \leftarrow \texttt{regA[6:0]\_0}$\
`shiftr` & 1,1010 & $\texttt{regOUT} \leftarrow \texttt{0\_regA[7:1]}$\
`jmp` `$val` & 0,0101 & $\texttt{regIP} \leftarrow \texttt{val}$\
`jmpgt` `$val` & 0,0110 & $\texttt{regIP} \leftarrow 
        \begin{cases}
            \texttt{val}, \text{if gt flag is set} \\ 
            \texttt{regIP} + 1, \text{otherwise}
        \end{cases}$\
`jmplt` `$val` & 0,0111 & $\texttt{regIP} \leftarrow 
        \begin{cases}
            \texttt{val}, \text{if lt flag is set} \\ 
            \texttt{regIP} + 1, \text{otherwise}
        \end{cases}$\
`jmpeq` `$val` & 0,1000 & $\texttt{regIP} \leftarrow 
        \begin{cases}
            \texttt{val}, \text{if eq flag is set} \\
            \texttt{regIP} + 1, \text{otherwise}
        \end{cases}$\
:::

## Von Neumann Architecture

## Arithmetic

![image](/assets/courses/comp-arch/figures/c6s2_half_adder_impl.png){width="70%"}

![image](/assets/courses/comp-arch/figures/c6s2_full_adder_impl.png){width="70%"}

![image](/assets/courses/comp-arch/figures/c6s2_full_adder_4b_impl.png){width="70%"}

## Logic

![image](/assets/courses/comp-arch/figures/c6s3_comparator_impl.png){width="70%"}

![image](/assets/courses/comp-arch/figures/c6s3_comparator_4b_impl.png){width="70%"}

## Arithmetic Logic Unit (ALU)

![image](/assets/courses/comp-arch/figures/c6s4_alu_8b_impl.png){width="70%"}

## Random Access Memory (RAM)

![image](/assets/courses/comp-arch/figures/c6s5_reg_8b_impl.png){width="99%"}

![image](/assets/courses/comp-arch/figures/c6s5_ram_4b_impl.png){width="70%"}

![image](/assets/courses/comp-arch/figures/c6s5_ram_8x8_impl.png){width="99%"}

## The DX4 Computer

![image](/assets/courses/comp-arch/figures/c6s6_stepper_impl.png){width="99%"}

<figure>
<div class="minipage">
<img src="/assets/courses/comp-arch/figures/c6s6_reg_3x8_impl.png"
style="width:99.0%" />
</div>
<div class="minipage">
<img src="/assets/courses/comp-arch/figures/c6s6_cpu_8b_impl.png"
style="width:99.0%" />
</div>
</figure>

![image](/assets/courses/comp-arch/figures/c6s6_dx4.png){width="99%"}
