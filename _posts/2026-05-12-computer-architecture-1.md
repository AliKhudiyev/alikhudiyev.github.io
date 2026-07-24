---
layout: post
author:
- Ali Khudiyev
title: "A Student's Computer Architecture Book I"
categories: courses self-study computer-architecture book
---

<!-- <!DOCTYPE html> --> 
<html lang='en' xml:lang='en'> 
<head><title></title> 
<meta charset='utf-8' /> 
<meta content='TeX4ht (https://tug.org/tex4ht/)' name='generator' /> 
<meta content='width=device-width,initial-scale=1' name='viewport' /> 
<link href='/assets/css/2026-05-12-computer-architecture-1.css' rel='stylesheet' type='text/css' /> 
<meta content='2026-05-12-computer-architecture-1.tex' name='src' /> 
<script>window.MathJax = { tex: { tags: "ams", }, }; </script> 
<script async='async' id='MathJax-script' src='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js' type='text/javascript'></script>  
</head><body>
                                                                          

                                                                          
<!-- l. 31 --><p class='indent'>
                                                                          

                                                                          
</p><!-- l. 31 --><p class='indent'>
                                                                          

                                                                          
<!-- </p><!-1- l. 33 -1-><p class='noindent'><span class='cmr-17'>A Student’s Computer Architecture Book I</span> -->
<!-- </p><!-1- l. 34 -1-><p class='noindent'><span class='cmr-12x-x-120'>Level 1. Introduction to Computer Architecture</span> -->
<!-- </p><!-1- l. 36 -1-><p class='noindent'><span class='cmr-12x-x-120'>Ali Khudiyev</span> -->
                                                                          

                                                                          
                                                                          

                                                                          
<!-- </p> -->
   <h2 class='likechapterHead' id='contents'><a id='x1-1000'></a>Contents</h2>
   <div class='tableofcontents'>
   <span class='chapterToc'>1 <a href='#the-essence-of-computing' id='QQ2-1-2'>The Essence of Computing</a></span>
<br />   <span class='sectionToc'>1.1 <a href='#outline-of-the-book' id='QQ2-1-5'>Outline of the book</a></span>
<br />   <span class='chapterToc'>2 <a href='#foundations-boolean-algebra' id='QQ2-1-6'>Foundations &amp; Boolean Algebra</a></span>
<br />   <span class='sectionToc'>2.1 <a href='#numeral-systems' id='QQ2-1-7'>Numeral Systems</a></span>
<br />   <span class='sectionToc'>2.2 <a href='#boolean-algebra' id='QQ2-1-8'>Boolean Algebra</a></span>
<br />   <span class='subsectionToc'>2.2.1 <a href='#laws' id='QQ2-1-9'>Laws</a></span>
<br />   <span class='subsectionToc'>2.2.2 <a href='#theorems' id='QQ2-1-10'>Theorems</a></span>
<br />   <span class='sectionToc'>2.3 <a href='#boolean-functions' id='QQ2-1-11'>Boolean Functions</a></span>
<br />   <span class='subsectionToc'>2.3.1 <a href='#canonical-representations' id='QQ2-1-13'>Canonical Representations</a></span>
<br />   <span class='subsectionToc'>2.3.2 <a href='#boolean-function-simplification-with-karnaugh-maps' id='QQ2-1-18'>Boolean Function Simplification with Karnaugh Maps</a></span>
<br />   <span class='chapterToc'>3 <a href='#logic-gates-circuits' id='QQ2-1-19'>Logic Gates &amp; Circuits</a></span>
<br />   <span class='sectionToc'>3.1 <a href='#not-and-or-xor-nor-xnor' id='QQ2-1-20'>NOT, AND, OR, XOR, NOR, XNOR</a></span>
<br />   <span class='sectionToc'>3.2 <a href='#universal-logic-gates' id='QQ2-1-21'>Universal Logic Gates</a></span>
<br />   <span class='chapterToc'>4 <a href='#combinational-logic' id='QQ2-1-22'>Combinational Logic</a></span>
<br />   <span class='sectionToc'>4.1 <a href='#foundational-combinational-circuits' id='QQ2-1-23'>Foundational Combinational Circuits</a></span>
<br />   <span class='subsectionToc'>4.1.1 <a href='#multiplexer-mux' id='QQ2-1-24'>Multiplexer (MUX)</a></span>
<br />   <span class='subsectionToc'>4.1.2 <a href='#demultiplexer-demux' id='QQ2-1-30'>Demultiplexer (DEMUX)</a></span>
<br />   <span class='subsectionToc'>4.1.3 <a href='#encoder' id='QQ2-1-33'>Encoder</a></span>
<br />   <span class='subsectionToc'>4.1.4 <a href='#decoder' id='QQ2-1-34'>Decoder</a></span>
<br />   <span class='sectionToc'>4.2 <a href='#timing' id='QQ2-1-36'>Timing</a></span>
<br />   <span class='chapterToc'>5 <a href='#sequential-logic' id='QQ2-1-40'>Sequential Logic</a></span>
<br />   <span class='sectionToc'>5.1 <a href='#finite-state-machine-fsm' id='QQ2-1-42'>Finite State Machine (FSM)</a></span>
<br />   <span class='subsectionToc'>5.1.1 <a href='#moore-and-mealy-fsms' id='QQ2-1-47'>Moore and Mealy FSMs</a></span>
<br />   <span class='subsectionToc'>5.1.2 <a href='#fsm-simplification' id='QQ2-1-50'>FSM Simplification</a></span>
<br />   <span class='sectionToc'>5.2 <a href='#clock' id='QQ2-1-57'>Clock</a></span>
<br />   <span class='sectionToc'>5.3 <a href='#memory' id='QQ2-1-61'>Memory</a></span>
<br />   <span class='subsectionToc'>5.3.1 <a href='#sr-latch' id='QQ2-1-64'>SR Latch</a></span>
                                                                          

                                                                          
<br />   <span class='subsectionToc'>5.3.2 <a href='#d-latch' id='QQ2-1-66'>D Latch</a></span>
<br />   <span class='subsectionToc'>5.3.3 <a href='#d-flipflop' id='QQ2-1-68'>D Flip-Flop</a></span>
<br />   <span class='subsectionToc'>5.3.4 <a href='#t-flipflop' id='QQ2-1-73'>T Flip-Flop</a></span>
<br />   <span class='subsectionToc'>5.3.5 <a href='#jk-flipflop' id='QQ2-1-74'>JK Flip-Flop</a></span>
<br />   <span class='sectionToc'>5.4 <a href='#counter' id='QQ2-1-76'>Counter</a></span>
<br />   <span class='subsectionToc'>5.4.1 <a href='#synchronous-up-counter' id='QQ2-1-78'>Synchronous Up Counter</a></span>
<br />   <span class='subsectionToc'>5.4.2 <a href='#asynchronous-ripple-counter' id='QQ2-1-79'>Asynchronous Ripple Counter</a></span>
<br />   <span class='sectionToc'>5.5 <a href='#timing1' id='QQ2-1-81'>Timing</a></span>
<br />   <span class='subsectionToc'>5.5.1 <a href='#setup-time-constraint' id='QQ2-1-85'>Setup Time Constraint</a></span>
<br />   <span class='subsectionToc'>5.5.2 <a href='#hold-time-constraint' id='QQ2-1-87'>Hold Time Constraint</a></span>
<br />   <span class='chapterToc'>6 <a href='#lets-build-a-computer' id='QQ2-1-89'>Let’s Build a Computer!</a></span>
<br />   <span class='sectionToc'>6.1 <a href='#instruction-set-architecture' id='QQ2-1-91'>Instruction Set Architecture</a></span>
<br />   <span class='sectionToc'>6.2 <a href='#arithmetic' id='QQ2-1-95'>Arithmetic</a></span>
<br />   <span class='sectionToc'>6.3 <a href='#logic' id='QQ2-1-98'>Logic</a></span>
<br />   <span class='sectionToc'>6.4 <a href='#arithmetic-logic-unit-alu' id='QQ2-1-100'>Arithmetic Logic Unit (ALU)</a></span>
<br />   <span class='sectionToc'>6.5 <a href='#random-access-memory-ram' id='QQ2-1-101'>Random Access Memory (RAM)</a></span>
<br />   <span class='sectionToc'>6.6 <a href='#the-dx-computer' id='QQ2-1-102'>The DX8 Computer</a></span>
<br />   <span class='subsectionToc'>6.6.1 <a href='#singlecycle-multicycle-pipelined-design' id='QQ2-1-103'>Single-cycle, Multi-cycle, Pipelined Design</a></span>
<br />   <span class='subsectionToc'>6.6.2 <a href='#stepper' id='QQ2-1-106'>Stepper</a></span>
<br />   <span class='subsectionToc'>6.6.3 <a href='#controller' id='QQ2-1-110'>Controller</a></span>
<br />   <span class='subsectionToc'>6.6.4 <a href='#putting-everything-together' id='QQ2-1-116'>Putting everything together!</a></span>
<br />   <span class='chapterToc'>7 <a href='#epilogue' id='QQ2-1-118'>Epilogue</a></span>
   </div>
                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 41 --><p class='indent'>
                                                                          

                                                                          
</p>
   <h2 class='chapterHead' id='the-essence-of-computing'><span class='titlemark'>Chapter 1</span><br /><a id='x1-20001'></a>The Essence of Computing</h2>
<!-- l. 42 --><p class='noindent'>You may have heard of Babbage’s machine. Yes, Charles Babbage’s Analytical
Engine. Well, there was actually his Difference Engine, too, for automated
polynomial calculations. Many consider his machine(s) very first computing
devices created by human species. However, I would say that the history of
computing goes way earlier than that. You’ll say, “of course, there is the Abacus
invented somwhere in between 1000-500 BC”. You would be right, but apparently
there is this 8 cm-long bone tool made of a baboon fibula that has been used by
humans of the Earth as early as 35,000 BCE. “What was its purpose?”, you
ask. There are some debates around its purpose, but it is believed to
be for counting days and tracking time. But of course, it would not be
correct to say the essence of computing started from 35,000 BCE. The
tools for computing may have started from that time, but the <span class='cmbx-12'>essence of
computing </span>was there way before the tools – when humans used their brains to
count or calculate stuff. Computing is not solely about the tools, but
about the process that can be carried, by using a computer, a simple
calculator, a pen and paper, 8 cm-long bone, human figers, or a human
imagination produced by its brain. You see, it can be very abstract to define
what really <span class='cmbx-12'>computation </span>is. The tools we invent and use help to achieve
<span class='cmbx-12'>efficiency </span>in our computations, that is how fast or energy-saving we
are when something is computed. However, the tools do not dictate the
absolute rules of computation, and in fact, one could argue that it is
the essence of computation that dictates the rules under which the tools
need to be operating. Even if there was no human population living on
the Earth, the essence of computation would still be there if one looked
upon the Earth from the dark cosmos. It is because you would still see
the planet moving, animals fighting, trees growing, bees flying, weather
changing, waves colliding, and other natural processes that cause the world to
move from one state into another. This change of states require spending
some energy: in computer science, we see this evergy as the computation
itself.
</p>
   <figure class='figure' id='x1-2001r1'><span id='charles-babbages-machine-dating-back-to-s'></span><span id='lebonbo-bone-dating-back-to-around-bce'></span> 

                                                                          

                                                                          
<a id='x1-2002r2'></a>
                                                                          

                                                                          
<div class='minipage'><!-- l. 47 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/lebombo_bone.jpeg' width='50%' />
</p>
<figcaption class='caption'><span class='id'>Figure 1.1: </span><span class='content'>Lebonbo bone dating
back to around 35,000 BCE.</span></figcaption><!-- tex4ht:label?: x1-2001r1  -->      </div> <div class='minipage'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/babbage_machine.jpeg' width='50%' />
<figcaption class='caption'><span class='id'>Figure 1.2:   </span><span class='content'>Charles   Babbage’s
machine dating back to 1800s.</span></figcaption><!-- tex4ht:label?: x1-2002r2  -->     </div>
                                                                          

                                                                          
   </figure>
<!-- l. 58 --><p class='indent'>   Surely you may think that we have come a long way. Right now, you
may be reading this from your personal computer (PC), or your phone,
or even from your smart watch. Just imagine how crazy this would be
for people living back in the days… They would probably declare you
as a witch and try to kill you, or as their technological god and try to
protect you. Who knows how the events would have turned up actually?!
What’s important for people living in these so-called modern times is
to realize the long history of computing and push it even further than
where it is standing currently. Doing that is surely a hard task, but if you
dedicate yourself enough, you may achieve something significant in your
lifespan.
</p><!-- l. 60 --><p class='indent'>   This book is for the beginners who got curious about computers and wondered
how they really work at some point in their lives. If you are one of those
people trying to get a good grasp of the things that happen inside your
computer, I hope that this book will be a friendly mentor that will help you
to learn this stuff by yourself. The book will guide you to build your
own computer piece by piece. Ideally I would want the reader to gain
confidence and be able to build series of computing devices as he/she wishes in
the future. You don’t need to be afraid of this seemingly complex and
magical-looking devices that we call computers or tablets or phones or smart
watches or calculators. Once you understand the foundational principles
and basic building blocks that stand behind these devices, you will gain
more confidence in building your own – your truly personal computer
(TPC).
   
</p>
   <h3 class='sectionHead' id='outline-of-the-book'><span class='titlemark'>1.1   </span> <a id='x1-30001.1'></a>Outline of the book</h3>
<!-- l. 63 --><p class='noindent'>”So, what does it take to build a computer?” you may ask. Well, it takes
readding the first <span class='mathjax-inline'>\(\approx 70\)</span> pages of this book to understand the fundamentals
first:
</p><!-- l. 65 --><p class='indent'>
      </p><ol class='enumerate1'>
                                                                          

                                                                          
<li class='enumerate' id='x1-3002x1'><span class='cmbx-12'>Foundations  &amp;  Boolean  Algebra </span>–  this  chapter  will  introduce
      mathematical context that is needed to work with formal boolean logic;
      </li>
<li class='enumerate' id='x1-3004x2'><span class='cmbx-12'>Logic Gates &amp; Circuits </span>– this chapter will introduce the physical
      logic components (gates) that can be connected to one another to build
      real electrical circuits that do something meaningful;
      </li>
<li class='enumerate' id='x1-3006x3'><span class='cmbx-12'>Combinational Logic </span>– this chapter will show basic but essential
      circuits that are going to be used quite often in computer building
      process later on;
      </li>
<li class='enumerate' id='x1-3008x4'><span class='cmbx-12'>Sequential Logic </span>– this chapter will generalize from the previous types
      of circuits you know and build more complex circuitry that are very
      foundational in building many components of a computer;</li></ol>
<!-- l. 72 --><p class='indent'>   Then it takes reading the rest <span class='mathjax-inline'>\(\approx 15\)</span> pages to put everything together and finally
build a custom 8-bit computer:
</p><!-- l. 74 --><p class='indent'>
      </p><ol class='enumerate1'>
<li class='enumerate' id='x1-3010x1'><span class='cmbx-12'>Let’s Build a Computer! </span>– finally, this chapter will walk you through
      the “putting everything together” part, and by the end of it, you will
      first-hand experience building a computer from scratch;
      </li>
                                                                          

                                                                          
<li class='enumerate' id='x1-3012x2'><span class='cmbx-12'>Epilogue </span>– the ending chapter will be chill and relax; because you
      will then be cheered for understanding so much stuff that you didn’t
      know before and for having the knowledge and courage now to build a
      computer by yourself if you wanted to do it.</li></ol>
<!-- l. 79 --><p class='indent'>   What are you waiting for? Let’s get to it!
                                                                          

                                                                          
</p>
   <h2 class='chapterHead' id='foundations-boolean-algebra'><span class='titlemark'>Chapter 2</span><br /><a id='x1-40002'></a>Foundations &amp; Boolean Algebra</h2>
   
   <h3 class='sectionHead' id='numeral-systems'><span class='titlemark'>2.1   </span> <a id='x1-50002.1'></a>Numeral Systems</h3>
<!-- l. 83 --><p class='noindent'>Counting is an important and unavoidable part of human life. It is so unavoidable
that people have invented multiple different ways of counting things. We put all of
these different ways of counting under the name of <span class='cmti-12'>numeral systems</span>. Let me
describe a few of numeral systems. First of all, there is additive numeral systems
and then there is positional systems. One example of an additive numeral system
is Roman numerals (e.g., VI means 5+1, which is 6). In additive numeral
systems, the position of each digit does not affect its magnitude (e.g., even
in number IV the calculation goes like -1+5, which is 4; the numbers
that are added have the magnitudes 1 and 5). In contrast, in positional
numeral systems, the place of each digit affects its magnitude (e.g., 123 in
decimal is 100 + 20 + 3 whereas 321 in decimal is 1 + 20 + 300). Since
positional systems have been more useful to work with in almost all areas of
mathematics and digital logic design, we are going to focus on them from now
on.
</p><!-- l. 85 --><p class='indent'>   You see, there are also different positional numeral systems. The difference
among positional numeral systems comes from the radix or the base used. The
radix (or the base) is the number of elementary symbols that all the numbers of
the numeral system are made of. These elementary symbols are also known as the
digits. For example, our beloved decimal system uses 10 digits (0, 1, 2, 3,
4, 5, 6, 7, 8, 9), and therefore, the radix is 10. In order to compute the
magnitude of the number, each digit in a decimal number is first multiplied
by the power of 10 according to the position in which the underlying
digit appears within the number and then the results are added, i.e.,
<span class='mathjax-inline'>\(\overline {d_n, d_{n-1}, \dots , d_0}_{10} = 10^n \cdot d_n + 10^{n-1} \cdot d_{n-1} + \dots + 10^0 \cdot d_0\)</span>.
</p><!-- l. 87 --><p class='indent'>   Let’s now talk about other radices. There is this numeral systems known as
<span class='cmbx-12'>hexadecimal</span>, <span class='cmbx-12'>octal</span>, and <span class='cmbx-12'>binary</span>. The base used in hexadecimal is 16 (i.e.,
the digits from 0 to 15, inclusively), the base used in octal is 8 (i.e., the
digits from 0 to 7, inclusively), and the base used in binary is 2 (i.e.,
the digits 0 and 1). Similar to the magnitude calculation in the decimal
system, here is how the magnitudes are computed (in decimal) for these
systems:
</p>
                                                                          

                                                                          
   <div class='mathjax-env mathjax-align*'>\begin{align*} \overline {h_n h_{n-1} \dots h_0}_{16} &amp;= 16^n \cdot h_n + 16^{n-1} \cdot h_{n-1} + \dots + h_0 \\ \overline {o_n o_{n-1} \dots o_0}_{8} &amp;= 8^n \cdot o_n + 8^{n-1} \cdot o_{n-1} + \dots + o_0 \\ \overline {b_n b_{n-1} \dots b_0}_{2} &amp;= 2^n \cdot b_n + 2^{n-1} \cdot b_{n-1} + \dots + b_0 \end{align*}</div>
   
   <h3 class='sectionHead' id='boolean-algebra'><span class='titlemark'>2.2   </span> <a id='x1-60002.2'></a>Boolean Algebra</h3>
<!-- l. 96 --><p class='noindent'>You already probably know what algebra is about. It is about working with
expressions that may have numbers, unknowns (or variables), and operators (such
as addition, subtraction, multiplication, division, and so on). The algebra that you
may have learned in high school is a general kind of algebra than the one we are
going to see in this chapter. The algebra you have learned may have an expression
as follows: <span class='mathjax-inline'>\(3x^2 - \frac {4y}{z} + \frac {2}{7}xz^3\)</span>. You may substitute <span class='mathjax-inline'>\(x\)</span>, <span class='mathjax-inline'>\(y\)</span>, and <span class='mathjax-inline'>\(z\)</span> with different numbers from
the real line <span class='mathjax-inline'>\(\mathbb {R}\)</span> and then calculate the result of the expression as usual. In
boolean algebra we are going to restrict the operations only to addition (<span class='mathjax-inline'>\(\mathbf {+}\)</span>),
multiplication (<span class='mathjax-inline'>\(\mathbf {\cdot }\)</span>), and negation (<span class='mathjax-inline'>\(\lnot \)</span> or <span class='mathjax-inline'>\('\)</span> or <span class='mathjax-inline'>\(\overline {\ }\)</span>); and we restrict the numbers that can be
picked/used to a set <span class='mathjax-inline'>\(\{0 ,1\}\)</span>. This kind of algebra (with the restrictions we introduce) is
called <span class='cmbx-12'>boolean algebra</span>. Moreover, we will see all the laws that boolean
algebra uses. Although some of the laws are going to overlap with the ones
that the ones we used in the high school algebra, there are going to be
different laws as well. For example, we have learned in the high school
that if we say <span class='mathjax-inline'>\(x=1\)</span> and <span class='mathjax-inline'>\(y=1\)</span> then the expression <span class='mathjax-inline'>\(x + y\)</span> evaluates to 2, but in boolean
algebra since there is no number 2 in our set <span class='mathjax-inline'>\(\{0, 1\}\)</span> the same expression <span class='mathjax-inline'>\(x + y\)</span> or <span class='mathjax-inline'>\(1 + 1\)</span> will
evaluate to 1. This is very hand-wavy explanation, but we do not need to
understand the philosophical reasons behind every law described in this
chapter: these laws are the axioms of the boolean algebra, and hence need to
be accepted as they are stated. Now, let’s see all the 7 laws of boolean
algebra.
   
</p>
   <h4 class='subsectionHead' id='laws'><span class='titlemark'>2.2.1   </span> <a id='x1-70002.2.1'></a>Laws</h4>
   <div class='newtheorem'>
<!-- l. 99 --><p class='noindent'><span class='head'>
<a id='x1-7001r1'></a>
<span class='cmbx-12'>Law 2.1 </span>(Commutativity)<span class='cmbx-12'>.</span>  </span><span class='cmti-12'>The order of operands does not affect the result.</span>
                                                                          

                                                                          
</p>
   <div class='mathjax-env mathjax-align*'>\begin{align*} a + b &amp;= b + a \\ a \cdot b &amp;= b \cdot a \end{align*}</div>
   </div>
<!-- l. 108 --><p class='indent'>
</p>
   <div class='newtheorem'>
<!-- l. 110 --><p class='noindent'><span class='head'>
<a id='x1-7002r2'></a>
<span class='cmbx-12'>Law 2.2 </span>(Associativity)<span class='cmbx-12'>.</span>  </span><span class='cmti-12'>The grouping of operands does not affect the result.</span>
</p>
   <div class='mathjax-env mathjax-align*'>\begin{align*} (a + b) + c &amp;= a + (b + c) \\ (a \cdot b) \cdot c &amp;= a \cdot (b \cdot c) \end{align*}</div>
   </div>
<!-- l. 119 --><p class='indent'>
</p>
   <div class='newtheorem'>
<!-- l. 121 --><p class='noindent'><span class='head'>
<a id='x1-7003r3'></a>
<span class='cmbx-12'>Law 2.3 </span>(Distributivity)<span class='cmbx-12'>.</span>  </span><span class='cmti-12'>Operations can be factored or expanded.</span>
</p>
   <div class='mathjax-env mathjax-align*'>\begin{align*} a \cdot (b + c) &amp;= a \cdot b + a \cdot c \\ a + (b \cdot c) &amp;= (a + b) \cdot (a + c) \end{align*}</div>
   </div>
<!-- l. 130 --><p class='indent'>
</p>
   <div class='newtheorem'>
<!-- l. 132 --><p class='noindent'><span class='head'>
<a id='x1-7004r4'></a>
<span class='cmbx-12'>Law 2.4 </span>(Identity)<span class='cmbx-12'>.</span>  </span><span class='cmti-12'>0  is  additive  identity  –  it  means  that  </span><span class='cmbxti-10x-x-120'>adding  with
zero </span><span class='cmti-12'>does not give us a different result than the other operand added. 1 is
multiplicative identity – it means that </span><span class='cmbxti-10x-x-120'>multiplying with one </span><span class='cmti-12'>does not give
us a different result than the other multiplicant multiplied.</span>
                                                                          

                                                                          
</p>
   <div class='mathjax-env mathjax-align*'>\begin{align*} a + 0 = a \\ a \cdot 1 = a \end{align*}</div>
   </div>
<!-- l. 141 --><p class='indent'>
</p>
   <div class='newtheorem'>
<!-- l. 143 --><p class='noindent'><span class='head'>
<a id='x1-7005r5'></a>
<span class='cmbx-12'>Law 2.5 </span>(Idempotent)<span class='cmbx-12'>.</span>  </span><span class='cmti-12'>A different result cannot be obtained by adding or
multiplying the same operand with itself. (Just remember that the possible
numbers that we can use in binary is 0 and 1; therefore, 0 + 0 = 0 </span><span class='mathjax-inline'>\(\cdot \) </span><span class='cmti-12'>0 = 0
and 1 + 1 = 1 </span><span class='mathjax-inline'>\(\cdot \) </span><span class='cmti-12'>1 = 1 is true according to the laws of boolean algebra.)</span>
</p>
   <div class='mathjax-env mathjax-align*'>\begin{align*} a + a = a \\ a \cdot a = a \end{align*}</div>
   </div>
<!-- l. 152 --><p class='indent'>
</p>
   <div class='newtheorem'>
<!-- l. 154 --><p class='noindent'><span class='head'>
<a id='x1-7006r6'></a>
<span class='cmbx-12'>Law 2.6 </span>(Complement)<span class='cmbx-12'>.</span>  </span><span class='cmti-12'>Addition with a complement always results in 1.
Multiplying with a complement always results in 0.</span>
</p>
   <div class='mathjax-env mathjax-align*'>\begin{align*} a + a' = 1 \\ a \cdot a' = 0 \end{align*}</div>
   </div>
<!-- l. 163 --><p class='indent'>
</p>
   <div class='newtheorem'>
<!-- l. 165 --><p class='noindent'><span class='head'>
<a id='x1-7007r7'></a>
                                                                          

                                                                          
<span class='cmbx-12'>Law 2.7 </span>(Domination)<span class='cmbx-12'>.</span>  </span><span class='cmti-12'>Adding with 1 always results in 1. Multiplying with
0 always results in 0.</span>
</p>
   <div class='mathjax-env mathjax-align*'>\begin{align*} a + 1 = 1 \\ a \cdot 0 = 0 \end{align*}</div>
   </div>
<!-- l. 174 --><p class='indent'>
   
</p>
   <h4 class='subsectionHead' id='theorems'><span class='titlemark'>2.2.2   </span> <a id='x1-80002.2.2'></a>Theorems</h4>
   <div class='newtheorem'>
<!-- l. 177 --><p class='noindent'><span class='head'>
<a id='x1-8001r1'></a>
<span class='cmbx-12'>Theorem 2.1 </span>(De Morgan)<span class='cmbx-12'>.</span>  </span><span class='cmti-12'>Complement of a sum is equal to the product
of the individual complements, and complement of a product is equal to the
sum of the individual complements.</span>
</p>
   <div class='mathjax-env mathjax-align*'>\begin{align*} (a + b)' &amp;= a' \cdot b' \\ (a \cdot b)' &amp;= a' + b' \end{align*}</div>
   </div>
<!-- l. 186 --><p class='indent'>
</p>
   <div class='proof'>
<!-- l. 189 --><p class='indent'>   <span class='head'>
<span class='cmti-12'>Proof.</span> </span>Let’s proceed with <span class='cmbx-12'>proof by exhaustion </span>where we will compute the
left-hand side (LHS) and right-hand side (RHS) of the equalities by going
through all the possible <span class='mathjax-inline'>\(a\)</span> and <span class='mathjax-inline'>\(b\)</span> choices from the set <span class='mathjax-inline'>\(\{0, 1\}\)</span>.
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 191 --><p class='indent'>   </p><figure class='float'> <!-- tex4ht:inline --><div class='tabular'> <table class='tabular' id='TBL-1'><colgroup id='TBL-1-1g'><col id='TBL-1-1' /><col id='TBL-1-2' /></colgroup><colgroup id='TBL-1-3g'><col id='TBL-1-3' /></colgroup><colgroup id='TBL-1-4g'><col id='TBL-1-4' /></colgroup><tr id='TBL-1-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-1-1-1' style='white-space:nowrap; text-align:center;'> a  </td><td class='td11' id='TBL-1-1-2' style='white-space:nowrap; text-align:center;'> b  </td><td class='td11' id='TBL-1-1-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\((a+b)'\)</span> </td><td class='td11' id='TBL-1-1-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(a' \cdot b'\)</span> </td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-1-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-1-2-1' style='white-space:nowrap; text-align:center;'> 0 </td> <td class='td11' id='TBL-1-2-2' style='white-space:nowrap; text-align:center;'> 0 </td> <td class='td11' id='TBL-1-2-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\((0 + 0)' = 0' = 1\)</span> </td> <td class='td11' id='TBL-1-2-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(0' \cdot 0' = 1 \cdot 1 = 1\)</span></td>
</tr><tr id='TBL-1-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-1-3-1' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-1-3-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-1-3-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\((0 + 1)' = 1' = 0\)</span> </td><td class='td11' id='TBL-1-3-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(0' \cdot 1' = 1 \cdot 0 = 0\)</span> </td></tr><tr id='TBL-1-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-1-4-1' style='white-space:nowrap; text-align:center;'> 1 </td> <td class='td11' id='TBL-1-4-2' style='white-space:nowrap; text-align:center;'> 0 </td> <td class='td11' id='TBL-1-4-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\((1 + 0)' = 1' = 0\)</span> </td> <td class='td11' id='TBL-1-4-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(1' \cdot 0' = 0 \cdot 1 = 0\)</span></td>
</tr><tr id='TBL-1-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-1-5-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-1-5-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-1-5-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\((1 + 1)' = 1' = 0\)</span> </td><td class='td11' id='TBL-1-5-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(1' \cdot 1' = 0 \cdot 0 = 0\)</span> </td></tr></table>                                             </div>
</figure>
   </div>
<!-- l. 205 --><p class='indent'>   Since the third column (LHS of De Morgan equation) and the fourth column
(RHS of De Morgan equation) match with each other at every row, we conclude
that the theorem is proven to be correct.                                            □
</p>
   </div>
   <div class='newtheorem'>
<!-- l. 208 --><p class='noindent'><span class='head'>
<a id='x1-8002r2'></a>
<span class='cmbx-12'>Theorem 2.2 </span>(Absorbtion)<span class='cmbx-12'>.</span>  </span></p><div class='mathjax-env mathjax-align*'>\begin{align*} a + a \cdot b &amp;= a \\ a \cdot (a + b) &amp;= a \end{align*}</div>
   </div>
<!-- l. 215 --><p class='indent'>
</p>
   <div class='proof'>
<!-- l. 218 --><p class='indent'>   <span class='head'>
<span class='cmti-12'>Proof.</span> </span>By using proof by exhaustion,
</p>
   <div class='table'>
<!-- l. 220 --><p class='indent'>   </p><figure class='float'> <!-- tex4ht:inline --><div class='tabular'> <table class='tabular' id='TBL-2'><colgroup id='TBL-2-1g'><col id='TBL-2-1' /><col id='TBL-2-2' /></colgroup><colgroup id='TBL-2-3g'><col id='TBL-2-3' /></colgroup><colgroup id='TBL-2-4g'><col id='TBL-2-4' /></colgroup><colgroup id='TBL-2-5g'><col id='TBL-2-5' /></colgroup><tr id='TBL-2-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-2-1-1' style='white-space:nowrap; text-align:center;'> a  </td><td class='td11' id='TBL-2-1-2' style='white-space:nowrap; text-align:center;'> b  </td><td class='td11' id='TBL-2-1-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(a + a \cdot b\)</span> </td><td class='td11' id='TBL-2-1-4' style='white-space:nowrap; text-align:center;'> a  </td><td class='td11' id='TBL-2-1-5' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(a \cdot (a + b)\)</span> </td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-2-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-2-2-1' style='white-space:nowrap; text-align:center;'> 0 </td> <td class='td11' id='TBL-2-2-2' style='white-space:nowrap; text-align:center;'> 0 </td> <td class='td11' id='TBL-2-2-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(0 + 0 \cdot 0 = 0\)</span> </td> <td class='td11' id='TBL-2-2-4' style='white-space:nowrap; text-align:center;'> 0 </td> <td class='td11' id='TBL-2-2-5' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(0 \cdot (0 + 0) = 0\)</span></td>
</tr><tr id='TBL-2-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-2-3-1' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-2-3-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-2-3-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(0 + 0 \cdot 1 = 0 + 0 = 0\)</span> </td><td class='td11' id='TBL-2-3-4' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-2-3-5' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(0 \cdot (0 + 1) = 0 \cdot 1 = 0\)</span> </td></tr><tr id='TBL-2-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-2-4-1' style='white-space:nowrap; text-align:center;'> 1 </td> <td class='td11' id='TBL-2-4-2' style='white-space:nowrap; text-align:center;'> 0 </td> <td class='td11' id='TBL-2-4-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(1 + 1 \cdot 0 = 1 + 0 = 1\)</span> </td> <td class='td11' id='TBL-2-4-4' style='white-space:nowrap; text-align:center;'> 1 </td> <td class='td11' id='TBL-2-4-5' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(1 \cdot (1 + 0) = 1 \cdot 1 = 1\)</span></td>
</tr><tr id='TBL-2-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-2-5-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-2-5-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-2-5-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(1 + 1 \cdot 1 = 1\)</span> </td><td class='td11' id='TBL-2-5-4' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-2-5-5' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(1 \cdot (1 + 1) = 1\)</span> </td></tr></table>                                        </div>
</figure>
   </div>
<!-- l. 234 --><p class='indent'>   Therefore, the theorem has been proven.                                        □
</p>
   </div>
   <div class='newtheorem'>
<!-- l. 237 --><p class='noindent'><span class='head'>
<a id='x1-8003r3'></a>
                                                                          

                                                                          
<span class='cmbx-12'>Theorem 2.3 </span>(Consensus)<span class='cmbx-12'>.</span>  </span></p><div class='mathjax-env mathjax-align*'>\begin{align*} a \cdot b + a' \cdot c + b \cdot c = a \cdot b + a' \cdot c \end{align*}</div>
   </div>
<!-- l. 243 --><p class='indent'>
</p>
   <div class='proof'>
<!-- l. 246 --><p class='indent'>   <span class='head'>
<span class='cmti-12'>Proof.</span> </span>By using proof by exhaustion,
</p>
   <div class='table'>
<!-- l. 248 --><p class='indent'>   </p><figure class='float'> <!-- tex4ht:inline --><div class='tabular'> <table class='tabular' id='TBL-3'><colgroup id='TBL-3-1g'><col id='TBL-3-1' /><col id='TBL-3-2' /><col id='TBL-3-3' /></colgroup><colgroup id='TBL-3-4g'><col id='TBL-3-4' /></colgroup><colgroup id='TBL-3-5g'><col id='TBL-3-5' /></colgroup><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-3-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-3-1-1' style='white-space:nowrap; text-align:center;'> a  </td><td class='td11' id='TBL-3-1-2' style='white-space:nowrap; text-align:center;'> b  </td><td class='td11' id='TBL-3-1-3' style='white-space:nowrap; text-align:center;'> c  </td><td class='td11' id='TBL-3-1-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(a \cdot b + a' \cdot c + b \cdot c\)</span> </td><td class='td11' id='TBL-3-1-5' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(a \cdot b + a' \cdot c\)</span> </td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-3-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-3-2-1' style='white-space:nowrap; text-align:center;'> 0 </td> <td class='td11' id='TBL-3-2-2' style='white-space:nowrap; text-align:center;'> 0 </td> <td class='td11' id='TBL-3-2-3' style='white-space:nowrap; text-align:center;'> 0 </td> <td class='td11' id='TBL-3-2-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(0 \cdot 0 + 0' \cdot 0 + 0 \cdot 0 = 0\)</span> </td> <td class='td11' id='TBL-3-2-5' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(0 \cdot 0 + 0' \cdot 0 = 0\)</span></td>
</tr><tr id='TBL-3-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-3-3-1' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-3-3-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-3-3-3' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-3-3-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(0 \cdot 0 + 0' \cdot 1 + 0 \cdot 1 = 1\)</span> </td><td class='td11' id='TBL-3-3-5' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(0 \cdot 0 + 0' \cdot 1 = 0\)</span> </td></tr><tr id='TBL-3-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-3-4-1' style='white-space:nowrap; text-align:center;'> 0 </td> <td class='td11' id='TBL-3-4-2' style='white-space:nowrap; text-align:center;'> 1 </td> <td class='td11' id='TBL-3-4-3' style='white-space:nowrap; text-align:center;'> 0 </td> <td class='td11' id='TBL-3-4-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(0 \cdot 1 + 0' \cdot 0 + 1 \cdot 0 = 0\)</span> </td> <td class='td11' id='TBL-3-4-5' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(0 \cdot 1 + 0' \cdot 0 = 0\)</span></td>
</tr><tr id='TBL-3-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-3-5-1' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-3-5-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-3-5-3' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-3-5-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(0 \cdot 1 + 0' \cdot 1 + 1 \cdot 1 = 1\)</span> </td><td class='td11' id='TBL-3-5-5' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(0 \cdot 1 + 0' \cdot 1 = 1\)</span> </td></tr><tr id='TBL-3-6-' style='vertical-align:baseline;'><td class='td11' id='TBL-3-6-1' style='white-space:nowrap; text-align:center;'> 1 </td> <td class='td11' id='TBL-3-6-2' style='white-space:nowrap; text-align:center;'> 0 </td> <td class='td11' id='TBL-3-6-3' style='white-space:nowrap; text-align:center;'> 0 </td> <td class='td11' id='TBL-3-6-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(1 \cdot 0 + 1' \cdot 0 + 0 \cdot 0 = 0\)</span> </td> <td class='td11' id='TBL-3-6-5' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(1 \cdot 0 + 1' \cdot 0 = 0\)</span></td>
</tr><tr id='TBL-3-7-' style='vertical-align:baseline;'><td class='td11' id='TBL-3-7-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-3-7-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-3-7-3' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-3-7-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(1 \cdot 0 + 1' \cdot 1 + 0 \cdot 1 = 0\)</span> </td><td class='td11' id='TBL-3-7-5' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(1 \cdot 0 + 1' \cdot 1 = 0\)</span> </td></tr><tr id='TBL-3-8-' style='vertical-align:baseline;'><td class='td11' id='TBL-3-8-1' style='white-space:nowrap; text-align:center;'> 1 </td> <td class='td11' id='TBL-3-8-2' style='white-space:nowrap; text-align:center;'> 1 </td> <td class='td11' id='TBL-3-8-3' style='white-space:nowrap; text-align:center;'> 0 </td> <td class='td11' id='TBL-3-8-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(1 \cdot 1 + 1' \cdot 0 + 1 \cdot 0 = 1\)</span> </td> <td class='td11' id='TBL-3-8-5' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(1 \cdot 1 + 1' \cdot 0 = 1\)</span></td>
</tr><tr id='TBL-3-9-' style='vertical-align:baseline;'><td class='td11' id='TBL-3-9-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-3-9-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-3-9-3' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-3-9-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(1 \cdot 1 + 1' \cdot 1 + 1 \cdot 1 = 1\)</span> </td><td class='td11' id='TBL-3-9-5' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(1 \cdot 1 + 1' \cdot 1 = 1\)</span> </td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td></tr></table>                                        </div>
</figure>
   </div>
<!-- l. 268 --><p class='indent'>   Therefore, the theorem has been proven.                                        □
</p>
   </div>
   <div class='newtheorem'>
<!-- l. 271 --><p class='noindent'><span class='head'>
<a id='x1-8004r4'></a>
<span class='cmbx-12'>Theorem 2.4 </span>(Transposition)<span class='cmbx-12'>.</span>  </span></p><div class='mathjax-env mathjax-align*'>\begin{align*} (a + b) \cdot (a' + c) = a \cdot c + a' \cdot b \end{align*}</div>
   </div>
<!-- l. 277 --><p class='indent'>
</p>
   <div class='proof'>
<!-- l. 280 --><p class='indent'>   <span class='head'>
                                                                          

                                                                          
<span class='cmti-12'>Proof.</span> </span>By using the distributivity, commutativity, and complement laws,
</p>
   <div class='mathjax-env mathjax-align*'>\begin{align*} (a + b) \cdot (a' + c) &amp;= (a + b) \cdot a' + (a + b) \cdot c = \\ &amp;= a' \cdot (a + b) + c \cdot (a + b) = \\ &amp;= a' \cdot a + a' \cdot b + c \cdot a + c \cdot b = \\ &amp;= 0 + a' \cdot b + a \cdot c + c \cdot b = \\ &amp;= a \cdot c + a' \cdot b + b \cdot c. \end{align*}</div>
<!-- l. 290 --><p class='indent'>   By case analysis on <span class='mathjax-inline'>\(b \cdot c\)</span>,
</p><!-- l. 292 --><p class='indent'>   <span class='cmbx-12'>Case 1: </span><span class='mathjax-inline'>\(b \cdot c = 0\)</span> leads the original expression of the theorem to be equal to
<span class='mathjax-inline'>\(a \cdot c + a' \cdot b + 0 = a \cdot c + a' \cdot b\)</span>. <span class='cmbx-12'>Case 2: </span><span class='mathjax-inline'>\(b \cdot c = 1\)</span> leads the original expression to be evaluated to <span class='mathjax-inline'>\(a \cdot c + a' \cdot b + 1 = 1\)</span>. However,
since <span class='mathjax-inline'>\(b \cdot c = 1\)</span> also implies that <span class='mathjax-inline'>\(b = c = 1\)</span>, the previous form in case 1, <span class='mathjax-inline'>\(a \cdot c + a' \cdot b = a \cdot 1 + a' \cdot 1 = a + a'\)</span> also evaluates to
1.
</p><!-- l. 295 --><p class='indent'>   From the both cases above, the original expression results in the same boolean
values yielded from the expression <span class='mathjax-inline'>\(a \cdot c + a' \cdot b\)</span>. Therefore, the theorem has been
proven.                                                                                        □
</p>
   </div>
   <div class='newtheorem'>
<!-- l. 298 --><p class='noindent'><span class='head'>
<a id='x1-8005r5'></a>
<span class='cmbx-12'>Theorem 2.5 </span>(Involution)<span class='cmbx-12'>.</span>  </span></p><div class='mathjax-env mathjax-align*'>\begin{align*} (a')' = a \end{align*}</div>
   </div>
<!-- l. 304 --><p class='indent'>
</p>
   <div class='proof'>
<!-- l. 307 --><p class='indent'>   <span class='head'>
<span class='cmti-12'>Proof.</span> </span>By using proof by exhaustion,
</p>
   <div class='table'>
<!-- l. 309 --><p class='indent'>   </p><figure class='float'> <!-- tex4ht:inline --><div class='tabular'> <table class='tabular' id='TBL-4'><colgroup id='TBL-4-1g'><col id='TBL-4-1' /></colgroup><colgroup id='TBL-4-2g'><col id='TBL-4-2' /></colgroup><tr id='TBL-4-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-4-1-1' style='white-space:nowrap; text-align:center;'> a  </td><td class='td11' id='TBL-4-1-2' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\((a')'\)</span> </td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td></tr><tr id='TBL-4-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-4-2-1' style='white-space:nowrap; text-align:center;'> 0 </td> <td class='td11' id='TBL-4-2-2' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\((0')' = 1' = 0\)</span></td>
</tr><tr id='TBL-4-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-4-3-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-4-3-2' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\((1')' = 0' = 1\)</span> </td></tr></table>                                                      </div>
</figure>
   </div>
<!-- l. 321 --><p class='indent'>   Therefore, the theorem has been proven.                                        □
                                                                          

                                                                          
</p>
   </div>
   
   <h3 class='sectionHead' id='boolean-functions'><span class='titlemark'>2.3   </span> <a id='x1-90002.3'></a>Boolean Functions</h3>
<!-- l. 325 --><p class='noindent'>A boolean function is a regular mathematical function whose domain is the
Boolean space <span class='mathjax-inline'>\(\{0, 1\}\)</span> and uses only Boolean operations upon the elements of the
domain. Another way of looking at it is, anything that takes one or more 0/1
inputs and gives one 0/1 output is a boolean function. So, according to this view,
a lookup table with all possible binary patterns on the left-hand-side (LHS) and
binary digits on the right-hand-side (RHS) could be considered a boolean
function. Just take a look at the lookup table below for a moment. I mean, at the
end of the day, this table defines the outputs of ternary function <span class='mathjax-inline'>\(f: \{0, 1\}^3 \rightarrow \{0, 1\}\)</span> for all possible
3-bit inputs.
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 327 --><p class='indent' id='truth-table-for-boolean-function-fx-y-z-xy-z'>   <a id='x1-9001r1'></a></p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-5'><colgroup id='TBL-5-1g'><col id='TBL-5-1' /><col id='TBL-5-2' /><col id='TBL-5-3' /></colgroup><colgroup id='TBL-5-4g'><col id='TBL-5-4' /></colgroup><tr id='TBL-5-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-5-1-1' style='white-space:nowrap; text-align:center;'> x  </td><td class='td11' id='TBL-5-1-2' style='white-space:nowrap; text-align:center;'> y  </td><td class='td11' id='TBL-5-1-3' style='white-space:nowrap; text-align:center;'> z  </td><td class='td11' id='TBL-5-1-4' style='white-space:nowrap; text-align:center;'> f(x, y, z)  </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-5-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-5-2-1' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-5-2-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-5-2-3' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-5-2-4' style='white-space:nowrap; text-align:center;'>    0      </td></tr><tr id='TBL-5-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-5-3-1' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-5-3-2' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-5-3-3' style='white-space:nowrap; text-align:center;'> 1 </td><td class='td11' id='TBL-5-3-4' style='white-space:nowrap; text-align:center;'> 1</td>
</tr><tr id='TBL-5-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-5-4-1' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-5-4-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-5-4-3' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-5-4-4' style='white-space:nowrap; text-align:center;'>    0      </td></tr><tr id='TBL-5-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-5-5-1' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-5-5-2' style='white-space:nowrap; text-align:center;'> 1 </td><td class='td11' id='TBL-5-5-3' style='white-space:nowrap; text-align:center;'> 1 </td><td class='td11' id='TBL-5-5-4' style='white-space:nowrap; text-align:center;'> 1</td>
</tr><tr id='TBL-5-6-' style='vertical-align:baseline;'><td class='td11' id='TBL-5-6-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-5-6-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-5-6-3' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-5-6-4' style='white-space:nowrap; text-align:center;'>    0      </td>
</tr><tr id='TBL-5-7-' style='vertical-align:baseline;'><td class='td11' id='TBL-5-7-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-5-7-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-5-7-3' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-5-7-4' style='white-space:nowrap; text-align:center;'>    1      </td>
</tr><tr id='TBL-5-8-' style='vertical-align:baseline;'><td class='td11' id='TBL-5-8-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-5-8-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-5-8-3' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-5-8-4' style='white-space:nowrap; text-align:center;'>    1      </td>
</tr><tr id='TBL-5-9-' style='vertical-align:baseline;'><td class='td11' id='TBL-5-9-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-5-9-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-5-9-3' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-5-9-4' style='white-space:nowrap; text-align:center;'>    1      </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr></table>                                                                    </div>
<figcaption class='caption'><span class='id'>Table 2.1: </span><span class='content'>Truth table for boolean function <span class='mathjax-inline'>\(f(x, y, z) = xy + z\)</span>.</span></figcaption><!-- tex4ht:label?: x1-9001r1  -->
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 346 --><p class='indent'>   The table <a href='#truth-table-for-boolean-function-fx-y-z-xy-z'>2.1<!-- tex4ht:ref: tab:truth-table-example  --></a> is a representation of a boolean function. It is an exhaustive
lookup table essentially, and we call such representation <span class='cmbx-12'>truth table </span>of a boolean
function. To state a couple of facts about truth tables, (1) this representation
is tabular and not algebraic, (2) it is declarative (i.e., the table states
which binary value can be used to substitute <span class='mathjax-inline'>\(f(x, y, z)\)</span> for some <span class='mathjax-inline'>\(x\)</span>, <span class='mathjax-inline'>\(y\)</span>, and <span class='mathjax-inline'>\(z\)</span>) and not
imperative (i.e., the table does not state how the outputs are computed by
using Boolean logic). Tabular representation is cool, but we would also
like to have algebraic representations that are imperative, because we
are not planning to use Boolean functions on paper all day long and we
actually need to build something in real life that behaves the same as the
described boolean function <span class='mathjax-inline'>\(f\)</span>. Moreover, there is another disadvantage when it
comes to representing a boolean function by drawing out its truth table
representation: it is exhaustive, i.e., all the possible inputs must be there in
the table, making some of even the simple functions with 10 or more
binary inputs unskethcable (i.e., practially very painful to sketch because
the table needs to have <span class='mathjax-inline'>\(2^10 = 1024\)</span> rows). All this being said, now we will see how
algebraic representations can be constructed for our beautiful boolean
functions.
   
</p>
   <h4 class='subsectionHead' id='canonical-representations'><span class='titlemark'>2.3.1   </span> <a id='x1-100002.3.1'></a>Canonical Representations</h4>
<!-- l. 349 --><p class='noindent'>Let’s take a look at our beloved truth table <a href='#truth-table-for-boolean-function-fx-y-z-xy-z'>2.1<!-- tex4ht:ref: tab:truth-table-example  --></a> for the ternary function <span class='mathjax-inline'>\(f : x, y , z \mapsto 0/1\)</span>. There
are two standartized (canonical) way of representing truth tables: (1) <span class='cmbx-12'>sum of
products (SoP) </span>and (2) <span class='cmbx-12'>product of sums (PoS)</span>. Let’s see what they are all
about…
   
</p>
   <h5 class='subsubsectionHead' id='sum-of-products-sop'><a id='x1-11000'></a>Sum of Products (SoP)</h5>
<!-- l. 352 --><p class='noindent'>Sum of products approach to constructing a representation for a given boolean
function is all about building a detection mechanism for the inputs for which the
function outputs 1. Such detection mechanism can be built out of multiple simpler
                                                                          

                                                                          
detection mechanisms that only detect one row. What do I mean by that? Well,
imagine that you needed to build a mechanism (that is, essentially another
boolean function) that will take an input <span class='mathjax-inline'>\((x, y, z)\)</span>, and then will output 1 if the input is
the one on the third row of the truth table <a href='#truth-table-for-boolean-function-fx-y-z-xy-z'>2.1<!-- tex4ht:ref: tab:truth-table-example  --></a> and 0 otherwise. For example, I
would like to detect the input to the function <span class='mathjax-inline'>\(f\)</span> is the one the third row of its
truth table, i.e., <span class='mathjax-inline'>\(x=0\)</span>, <span class='mathjax-inline'>\(y=1\)</span>, and <span class='mathjax-inline'>\(z=0\)</span>. Let’s construct a function <span class='mathjax-inline'>\(r_3(x, y, z) = \begin {cases} 1, &amp;\text {if } x=0 \text { AND } y=1 \text { AND } z=0 \\ 0, &amp;\text {otherwise} \end {cases}\)</span>. I think it must be
pretty obvious that <span class='mathjax-inline'>\(r_3(x, y, z) = x' y z'\)</span>, since to make the condition <span class='mathjax-inline'>\(\left [(x=0) \text { AND } (y=1) \text { AND } (z=0)\right ]\)</span> hold, we need to make
three subconditions – <span class='mathjax-inline'>\(x' = \begin {cases} 1, \text {if } x=0 \\ 0, \text {otherwise} \end {cases}\)</span> for <span class='mathjax-inline'>\(x=0\)</span>, <span class='mathjax-inline'>\(y = \begin {cases} 1, \text {if } y=1 \\ 0, \text {otherwise} \end {cases}\)</span> for <span class='mathjax-inline'>\(y=1\)</span>, and <span class='mathjax-inline'>\(z' = \begin {cases} 1, \text {if } z=0 \\ 0, \text {otherwise} \end {cases}\)</span> for <span class='mathjax-inline'>\(z=0\)</span> – hold. Now that we know
how to construct a mechanism/function to detect individual rows, it is
time to compose these smaller detectors to represent our final function
<span class='mathjax-inline'>\(f\)</span>.
</p><!-- l. 366 --><p class='indent'>   The logic for constructing the detector for the rows for which our function
outputs 1 is as follows: we define
</p>
   <div class='mathjax-env mathjax-align*'>\begin{align*} f(\text {input}) = \begin {cases} 1, \text {\makecell {if input is given on \\ the \textbf {second row} OR \\ the \textbf {fourth row} OR \\ the \textbf {sixth row} OR \\ the \textbf {seventh row} OR \\ the \textbf {eighth row} \\ of the truth table}} \\ 0, \text {otherwise} \end {cases}. \end{align*}</div>
<!-- l. 376 --><p class='indent'>   Therefore, we can combine 5 detectors to construct a representation for <span class='mathjax-inline'>\(f\)</span> as
follows: <span class='mathjax-inline'>\(f(x, y, z) = r_2(x, y, z) + r_4(x, y, z) + r_6(x, y, z) + r_7(x, y, z) + r_8(x, y, z)\)</span>. In other words, we may write <span class='mathjax-inline'>\(f(x, y, z) = \sum m(1, 3, 5, 6, 7)\)</span> – sum of <span class='cmbx-12'>minterms </span>(products).
</p>
   <figure class='figure' id='x1-11001r1'><span id='andor-circuit-for-fx-y-z-m-'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 380 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c2s3_sop_example.png' width='50%' />
</p>
<figcaption class='caption'><span class='id'>Figure 2.1: </span><span class='content'>AND-OR circuit for <span class='mathjax-inline'>\(f(x, y, z) = \sum m(1, 3, 5, 6, 7)\)</span>.</span></figcaption><!-- tex4ht:label?: x1-11001r1  -->
                                                                          

                                                                          
   </figure>
<!-- l. 385 --><p class='indent'>   The diagram above illustrates visual representation of the construction of our
boolean function <span class='mathjax-inline'>\(f\)</span> by using ANDs, ORs, and NOTs. To explain the diagram, the
inputs <span class='mathjax-inline'>\(x\)</span>, <span class='mathjax-inline'>\(y\)</span>, and <span class='mathjax-inline'>\(z\)</span> are shown on the leftmost side. Then each of them are
connected to a triangle and another triangle with a circle on its tip: a regular
triangle’s output is the same as its input (for example, <span class='mathjax-inline'>\(x {\relbar \vartriangleright \rightarrow } x\)</span>) – this is called
<span class='cmbx-12'>buffer</span>, the other type of triangle with a circle on its tip outputs its input
complement (for example, <span class='mathjax-inline'>\(x {\relbar \vartriangleright \hspace {-0.15cm} \circ \hspace {-0.15cm} \rightarrow } x'\)</span>) – this is called <span class='cmbx-12'>negation </span>or <span class='cmbx-12'>complement</span>. The
D-shaped drawings, also called <span class='cmbx-12'>AND </span>gates, in the middle column represent
logical AND of three inputs that are coming from previous buffers and
negations. For example, the D-shaped drawing on the bottom labeled <span class='cmtt-12'>xyz </span>are
connected to buffers of x, y, z, and it outputs “x AND y AND z” representing
the 8th row from the the function’s truth table where x = y = z = 1.
The top AND gate takes its 3 inputs from negatex x, negated y, and z
itself (or buffered z), and hence the label “xcycz” – <span class='cmbx-12'>x c</span>omplement, <span class='cmbx-12'>y
c</span>omplement, <span class='cmbx-12'>z</span>. The last gate on the right side of the diagram that takes 5 inputs
from 5 AND gates on its left side and outputs to a wire connected to
a circle labeled “f” on its right is called <span class='cmbx-12'>OR </span>gate. It basically adds all
of its inputs and outputs the result as the final value of our function
<span class='mathjax-inline'>\(f\)</span>.
</p><!-- l. 387 --><p class='indent'>   Notice that how we have sometimes used complements of variables as an input
to AND gate because we cannot really represent “(x = 0) AND (y = 0) AND (z =
1)” by connecting x, y, z to an AND gate on the top: that would have meant that
the AND gate outputs 1 when it observes “(x = 1) AND (y = 1) AND (z = 1)”
for its inputs and 0 when this observation does not hold. In other words, in order
for an AND gate to output 1, it must see that all of its inputs are 1s. Therefore,
we used complements x’ and y’ instead to mean that “(x’ = 1) AND (y’ =
1) AND (z = 1)”, which translates to the same “(x = 0) AND (y = 0)
AND (z = 1)”. Similarly, the OR gate outputs 0 when it observes all of
its inputs as 0s – even if one of the inputs is 1 then it outputs 1, which
intuitively makes sense if you think about how the “or” relation in English
works.
   
</p>
   <h5 class='subsubsectionHead' id='product-of-sums-pos'><a id='x1-12000'></a>Product of Sums (PoS)</h5>
                                                                          

                                                                          
<!-- l. 390 --><p class='noindent'>As opposed to the SoP representation, product-of-sums (PoS) is about
constructing detection mechanism that recognizes inputs for which the
output is 0 in the truth table. With the same logic used in PoS, we could
construct three such boolean functions that output 1 only when their
input is the one given on the first, third, and fifth rows, respectively. Here
are such three functions: <span class='mathjax-inline'>\(r_0(x, y, z) = x'y'z'\)</span>, <span class='mathjax-inline'>\(r_2(x, y, z) = x'yz'\)</span>, and <span class='mathjax-inline'>\(r_4(x, y, z) = xy'z'\)</span>. Now, we could rewrite <span class='mathjax-inline'>\(f\)</span>’s definition as
follows:
</p>
   <div class='mathjax-block'>\[ f(\text {input}) = \begin {cases} 0, \text {\makecell {if input appears on \\ the \textbf {first row} OR \\ the \textbf {third row} OR \\ the \textbf {fifth row}}} \\ 1, \text {otherwise} \end {cases} \]</div>
<!-- l. 398 --><p class='indent'>   To implement this definition of <span class='mathjax-inline'>\(f\)</span>, we could first try to detect whether the input
appears on one of the rows that make <span class='mathjax-inline'>\(f\)</span>’s output 0 by combining three previously
built detectors by summing them (SoP): <span class='mathjax-inline'>\(r_0(x, y, z) + r_2(x, y, z) + r_4(x, y, z)\)</span>. Now this SoP formula has the following
definition:
</p>
   <div class='mathjax-block'>\[ r_0(\text {input}) + r_2(\text {input}) + r_4(\text {input}) = \begin {cases} 1, \text {\makecell {if input appears on \\ the \textbf {first row} OR \\ the \textbf {third row} OR \\ the \textbf {fifth row}}} \\ 0, \text {otherwise} \end {cases} \]</div>
<!-- l. 407 --><p class='indent'>   Realize how this definition is the complete opposite of the <span class='mathjax-inline'>\(f\)</span>’s definition.
Therefore, we could just conclude that
</p>
   <div class='mathjax-env mathjax-align*'>\begin{align*} f(x, y, z) &amp;= \left (r_0(x, y, z) + r_2(x, y, z) + r_4(x, y, z)\right )' = \\ &amp;= \left (r_0(x, y, z)\right )' \cdot \left (r_2(x, y, z)\right )' \cdot \left (r_4(x, y, z)\right )' = \\ &amp;= (x + y + z)(x + y' + z)(x' + y + z) \end{align*}</div>
<!-- l. 415 --><p class='indent'>   The PoS formula for our function is also written as <span class='mathjax-inline'>\(f(x, y, z) = \prod M(0, 2, 4)\)</span> in short – product of
<span class='cmbx-12'>Maxterms </span>(sums).
</p>
   <figure class='figure' id='x1-12001r2'><span id='orand-circuit-for-fx-y-z-m-'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 419 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c2s3_pos_example.png' width='50%' />
</p>
<figcaption class='caption'><span class='id'>Figure 2.2: </span><span class='content'>OR-AND circuit for <span class='mathjax-inline'>\(f(x, y, z) = \prod M(0, 2, 4)\)</span>.</span></figcaption><!-- tex4ht:label?: x1-12001r2  -->
                                                                          

                                                                          
   </figure>
   
   <h4 class='subsectionHead' id='boolean-function-simplification-with-karnaugh-maps'><span class='titlemark'>2.3.2   </span> <a id='x1-130002.3.2'></a>Boolean Function Simplification with Karnaugh Maps</h4>
<!-- l. 426 --><p class='noindent'>We want the circuits to be minimal and compact, because the less redundant logic
(gates) we use in our circuit, the more speed we gain in the propogation of input
signals (0s and 1s) in the circuit. Here is one simple example: suppose you build a
circuit out of three NOT gates as follows:
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 430 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c2s2_not_not_not_x.png' width='50%' />
                                                                          

                                                                          
</p>
   </figure>
<!-- l. 435 --><p class='indent'>   If you represent this circuit as a boolean function <span class='mathjax-inline'>\(f(x) = x'''\)</span>, you can quickly deduce
that <span class='mathjax-inline'>\(f(x) = x'\)</span> (recall that <span class='mathjax-inline'>\(x'' = x\)</span>). Although two representations are semantically the same (they
give you the same final output in real life), one is practically slower and more
resource-demanding than the other. The first representation <span class='mathjax-inline'>\(f(x) = x'''\)</span> requires buying 3
NOT gates from the store (not budget friendly) and runs slower than <span class='mathjax-inline'>\(f(x) = x'\)</span>, which only
requires buying a single NOT gate. All this is to say that <span class='cmbx-12'>minimization of
boolean logic </span>is useful and good.
</p><!-- l. 437 --><p class='indent'>   You may wonder if there are other techniques to minimize a given
boolean function. There are indeed other techniques beyond the use of
boolean algebra laws and theorems (e.g., <span class='mathjax-inline'>\(x''=x\)</span>, <span class='mathjax-inline'>\(x+1=1\)</span>, <span class='mathjax-inline'>\(x \cdot x = x\)</span>, etc.), and one of them is
by using so-called Karnaugh maps or K-maps. A K-map is essentially a
two-dimensional Euclidean grid that represents all the outputs of a given function
to be minimized in a way that neighbouring output values on the grid are
the outputs of the function when given very similar inputs. Here’s an
example: suppose we have a ternary function <span class='mathjax-inline'>\(f(x, y, z) = (x+y+z)(x+y'+z)(x'+y'+z)(x'+y'+z')\)</span>. For input 110 (<span class='mathjax-inline'>\(x=1,\ y=1,\ z=0\)</span>), <span class='mathjax-inline'>\(f(1,1,0) = 0\)</span>. So, we say
the cell at coordinate <span class='mathjax-inline'>\((1,0,1)\)</span> of the 2D K-map grid is <span class='mathjax-inline'>\(0\)</span> (output of <span class='mathjax-inline'>\(f\)</span> at <span class='mathjax-inline'>\((1, 1, 0)\)</span>). Then
we are interested in the neigbouring cells located at <span class='mathjax-inline'>\((0, 1, 0)\)</span>, <span class='mathjax-inline'>\((1, 0, 0)\)</span>, and <span class='mathjax-inline'>\((1, 1, 1)\)</span>. <span class='mathjax-inline'>\(f\)</span>’s outputs
at these locations are, <span class='mathjax-inline'>\(f(0,1,0)=0\)</span>, <span class='mathjax-inline'>\(f(1,0,0)=1\)</span>, <span class='mathjax-inline'>\(f(1,1,1)=0\)</span>. This is how we visually represent the grid
with the cell locations (inputs to our boolean function) and the function
outputs:
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 440 --><p class='indent'>   </p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-6'><colgroup id='TBL-6-1g'><col id='TBL-6-1' /></colgroup><colgroup id='TBL-6-2g'><col id='TBL-6-2' /></colgroup><colgroup id='TBL-6-3g'><col id='TBL-6-3' /></colgroup><tr id='TBL-6-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-6-1-1' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 443 --><p class='noindent'><span class='mathjax-inline'>\(\vcenter {\hbox {\diagbox@pict }}\)</span>      </p></td><td class='td11' colspan='2' id='TBL-6-1-2' style='white-space:nowrap; text-align:center;'>  <div class='multicolumn' style='white-space:nowrap; text-align:center;'>0          1</div></td></tr><tr class='cline'><td style='border-top:1px solid #000;'></td><td style='border-top:1px solid #000;'></td><td style='border-top:1px solid #000;'></td></tr><tr id='TBL-6-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-6-3-1' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 445 --><p class='noindent'>00       </p></td><td class='td11' id='TBL-6-3-2' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 445 --><p class='noindent'>
      </p></td><td class='td11' id='TBL-6-3-3' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 446 --><p class='noindent'>
      </p></td></tr><tr class='cline'><td></td><td style='border-top:1px solid #000;'></td><td style='border-top:1px solid #000;'></td></tr><tr id='TBL-6-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-6-5-1' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 447 --><p class='noindent'>01       </p></td><td class='td11' id='TBL-6-5-2' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 447 --><p class='noindent'>0        </p></td><td class='td11' id='TBL-6-5-3' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 448 --><p class='noindent'>
      </p></td>
</tr><tr class='cline'><td></td><td style='border-top:1px solid #000;'></td><td style='border-top:1px solid #000;'></td></tr><tr id='TBL-6-7-' style='vertical-align:baseline;'><td class='td11' id='TBL-6-7-1' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 449 --><p class='noindent'>11       </p></td><td class='td11' id='TBL-6-7-2' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 449 --><p class='noindent'>0        </p></td><td class='td11' id='TBL-6-7-3' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 449 --><p class='noindent'>0        </p></td>
</tr><tr class='cline'><td></td><td style='border-top:1px solid #000;'></td><td style='border-top:1px solid #000;'></td></tr><tr id='TBL-6-9-' style='vertical-align:baseline;'><td class='td11' id='TBL-6-9-1' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 451 --><p class='noindent'>10       </p></td><td class='td11' id='TBL-6-9-2' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 451 --><p class='noindent'>1        </p></td><td class='td11' id='TBL-6-9-3' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 452 --><p class='noindent'>
      </p></td>
</tr><tr class='cline'><td></td><td style='border-top:1px solid #000;'></td><td style='border-top:1px solid #000;'></td></tr></table>                                                                </div>
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 459 --><p class='indent'>   Now, we fill the rest of the empty cells of this grid. Notice that how
rows are indexed with location/inputs 00, 01, 11, 10 and not 00, 01, 10,
11. This is because we want the neighbouring locations/inputs to be as
similar to one another as possible. If you look carefully, going from 00 to 01
makes only a single bit flip, as well as going from 01 to 11, from 11 to
10, and from 10 to 00 back again. However, if the rows were indexed
with the “00, 01, 10, 11” order, going from 01 to 10 would make two
bits flipped (this is also true for going from 11 to 00 back again), and
therefore, the neighbouring locations would not be as close as they are
with the “00, 01, 11, 10” indexding. This is called (2-bit) <span class='cmbx-12'>gray codes </span>–
<span class='cmti-12'>(2-bit) binary numbers ordered in a number line such that each consecutive
number on the line is only single bit-flip away from the other</span>. For the
columns of K-map, we also need to use gray codes. Since there is only
single bit <span class='mathjax-inline'>\(z\)</span> represented as the column values, any ordering (“0, 1” or “1,
0”) is a valid and gray code compliant; in our table we have used “0, 1”
ordering.
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 462 --><p class='indent'>   </p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-9'><colgroup id='TBL-9-1g'><col id='TBL-9-1' /></colgroup><colgroup id='TBL-9-2g'><col id='TBL-9-2' /></colgroup><colgroup id='TBL-9-3g'><col id='TBL-9-3' /></colgroup><tr id='TBL-9-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-9-1-1' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 465 --><p class='noindent'><span class='mathjax-inline'>\(\vcenter {\hbox {\diagbox@pict }}\)</span>      </p></td><td class='td11' colspan='2' id='TBL-9-1-2' style='white-space:nowrap; text-align:center;'>  <div class='multicolumn' style='white-space:nowrap; text-align:center;'>0          1</div></td></tr><tr class='cline'><td style='border-top:1px solid #000;'></td><td style='border-top:1px solid #000;'></td><td style='border-top:1px solid #000;'></td></tr><tr id='TBL-9-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-9-3-1' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 467 --><p class='noindent'>00       </p></td><td class='td11' id='TBL-9-3-2' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 467 --><p class='noindent'>0        </p></td><td class='td11' id='TBL-9-3-3' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 467 --><p class='noindent'>1        </p></td></tr><tr class='cline'><td></td><td style='border-top:1px solid #000;'></td><td style='border-top:1px solid #000;'></td></tr><tr id='TBL-9-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-9-5-1' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 469 --><p class='noindent'>01       </p></td><td class='td11' id='TBL-9-5-2' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 469 --><p class='noindent'>0        </p></td><td class='td11' id='TBL-9-5-3' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 469 --><p class='noindent'>1        </p></td>
</tr><tr class='cline'><td></td><td style='border-top:1px solid #000;'></td><td style='border-top:1px solid #000;'></td></tr><tr id='TBL-9-7-' style='vertical-align:baseline;'><td class='td11' id='TBL-9-7-1' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 471 --><p class='noindent'>11       </p></td><td class='td11' id='TBL-9-7-2' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 471 --><p class='noindent'>0        </p></td><td class='td11' id='TBL-9-7-3' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 471 --><p class='noindent'>0        </p></td>
</tr><tr class='cline'><td></td><td style='border-top:1px solid #000;'></td><td style='border-top:1px solid #000;'></td></tr><tr id='TBL-9-9-' style='vertical-align:baseline;'><td class='td11' id='TBL-9-9-1' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 473 --><p class='noindent'>10       </p></td><td class='td11' id='TBL-9-9-2' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 473 --><p class='noindent'>1        </p></td><td class='td11' id='TBL-9-9-3' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 473 --><p class='noindent'>1        </p></td>
</tr><tr class='cline'><td></td><td style='border-top:1px solid #000;'></td><td style='border-top:1px solid #000;'></td></tr></table>                                                                </div>
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 481 --><p class='indent'>   What now, you ask? The last step after filling the grid is to look for <span class='cmbx-12'>prime
implicants </span>– <span class='cmti-12'>a rectangular selection of </span><span class='mathjax-inline'>\(2^{i \in \mathbb {N}}\) </span><span class='cmti-12'>number of cells filled with 1s only</span>. Notice
that the K-map grid wraps around both horizontally and vertically, so
a rectangular selection wrapping over horizontally or vertically is also
valid.
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 484 --><p class='indent'>   </p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-12'><colgroup id='TBL-12-1g'><col id='TBL-12-1' /></colgroup><colgroup id='TBL-12-2g'><col id='TBL-12-2' /></colgroup><colgroup id='TBL-12-3g'><col id='TBL-12-3' /></colgroup><tr id='TBL-12-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-12-1-1' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 487 --><p class='noindent'><span class='mathjax-inline'>\(\vcenter {\hbox {\diagbox@pict }}\)</span>      </p></td><td class='td11' colspan='2' id='TBL-12-1-2' style='white-space:nowrap; text-align:center;'>  <div class='multicolumn' style='white-space:nowrap; text-align:center;'>0          1</div></td></tr><tr class='cline'><td style='border-top:1px solid #000;'></td><td style='border-top:1px solid #000;'></td><td style='border-top:1px solid #000;'></td></tr><tr id='TBL-12-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-12-3-1' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 489 --><p class='noindent'>00       </p></td><td class='td11' id='TBL-12-3-2' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 489 --><p class='noindent'>0        </p></td><td class='td11' id='TBL-12-3-3' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 489 --><p class='noindent'>1        </p></td>
</tr><tr class='cline'><td></td><td style='border-top:1px solid #000;'></td><td style='border-top:1px solid #000;'></td></tr><tr id='TBL-12-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-12-5-1' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 491 --><p class='noindent'>01       </p></td><td class='td11' id='TBL-12-5-2' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 491 --><p class='noindent'>0        </p></td><td class='td11' id='TBL-12-5-3' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 491 --><p class='noindent'>1        </p></td>
</tr><tr class='cline'><td></td><td style='border-top:1px solid #000;'></td><td style='border-top:1px solid #000;'></td></tr><tr id='TBL-12-7-' style='vertical-align:baseline;'><td class='td11' id='TBL-12-7-1' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 493 --><p class='noindent'>11       </p></td><td class='td11' id='TBL-12-7-2' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 493 --><p class='noindent'>0        </p></td><td class='td11' id='TBL-12-7-3' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 493 --><p class='noindent'>0        </p></td>
</tr><tr class='cline'><td></td><td style='border-top:1px solid #000;'></td><td style='border-top:1px solid #000;'></td></tr><tr id='TBL-12-9-' style='vertical-align:baseline;'><td class='td11' id='TBL-12-9-1' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 495 --><p class='noindent'>10       </p></td><td class='td11' id='TBL-12-9-2' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 495 --><p class='noindent'>1        </p></td><td class='td11' id='TBL-12-9-3' style='white-space:normal; text-align:left; vertical-align:middle;'><!-- l. 495 --><p class='noindent'>1        </p></td>
</tr><tr class='cline'><td></td><td style='border-top:1px solid #000;'></td><td style='border-top:1px solid #000;'></td></tr></table>                                                                </div>
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 503 --><p class='indent'>   While we do our group selections, we always try to make the largest groups of
size <span class='mathjax-inline'>\(2^i\)</span> possible. Groups may possible overlap and there is no problem with that.
In fact, sometimes we deliberately pick overlapping groups to maximize
their sizes as much as possible. The higher <span class='mathjax-inline'>\(2^i\)</span> number of 1s we have in our
groups, the more compressed our final algebraic representation for the given
function will become. Having the two final groups (also known as <span class='cmbx-12'>essential
prime implicants</span>) in our K-map example means that we will have two
<span class='cmbx-12'>minterms </span>or <span class='cmbx-12'>products </span>in our minimized representation. To construct a
product from any given group on the grid, you just need to find the input
variables that do not change across the cells within the same group. In
our case, for the yellow essential prime implicant, <span class='mathjax-inline'>\(x\)</span> and <span class='mathjax-inline'>\(z\)</span> do not change,
so the product for this group is the multiplication of these <span class='cmbx-12'>invariants</span>
converted to boolean value of 1 (by using negations when necessary), <span class='mathjax-inline'>\(x'z\)</span>. For the
green essential prime implicant, the invariants are <span class='mathjax-inline'>\(x\)</span> and <span class='mathjax-inline'>\(y'\)</span>: therefore, the
product is <span class='mathjax-inline'>\(xy\)</span>. Finally, the minimized representation for the function <span class='mathjax-inline'>\(f(x, y, z) = xy' + x'z\)</span> will be
<span class='mathjax-inline'>\(f(x, y, z) = xy' + x'z\)</span>.
                                                                          

                                                                          
</p>
   <h2 class='chapterHead' id='logic-gates-circuits'><span class='titlemark'>Chapter 3</span><br /><a id='x1-140003'></a>Logic Gates &amp; Circuits</h2>
<!-- l. 508 --><p class='noindent'>A <span class='cmbx-12'>logic gate </span>is a piece of hardware that computes one of basic functions from the
boolean logic algebra such as <span class='cmti-12'>boolean addition</span>, or <span class='cmti-12'>boolean multiplication</span>, or,
<span class='cmti-12'>boolean negation</span>, or some simple combination of these. Hardware people use these
logic gates to construct circuits. First, we’ll see what logic gates there are and
then we’ll use these gates in order to build more circuits that have high-level
capabilities. Here, you are going to see some basic logic gates that are
going to be useful in building many other high-level essential computer
components.
   
</p>
   <h3 class='sectionHead' id='not-and-or-xor-nor-xnor'><span class='titlemark'>3.1   </span> <a id='x1-150003.1'></a>NOT, AND, OR, XOR, NOR, XNOR</h3>
<!-- l. 512 --><p class='noindent'>The first logic gate is called the <span class='cmbx-12'>NOT </span>gate. NOT gate is to compute a unary
boolean negation function, <span class='mathjax-inline'>\(\operatorname {NOT}(x) := x'\)</span>. Note that we may use <span class='mathjax-inline'>\(\overline {x}\)</span> or <span class='mathjax-inline'>\(\lnot x\)</span> in exchange with <span class='mathjax-inline'>\(x'\)</span> from
time to time; all of these notations mean the same thing in this book.
The truth table and visual representation for the NOT gate are given
below:
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<div class='minipage'><div class='tabular'> <table class='tabular' id='TBL-15'><colgroup id='TBL-15-1g'><col id='TBL-15-1' /></colgroup><colgroup id='TBL-15-2g'><col id='TBL-15-2' /></colgroup><tr id='TBL-15-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-15-1-1' style='white-space:nowrap; text-align:center;'> x  </td><td class='td11' id='TBL-15-1-2' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(\operatorname {NOT}(x) := x' = \overline {x} = \lnot x\)</span> </td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td></tr><tr id='TBL-15-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-15-2-1' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-15-2-2' style='white-space:nowrap; text-align:center;'> 1</td>
</tr><tr id='TBL-15-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-15-3-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-15-3-2' style='white-space:nowrap; text-align:center;'> 0  </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td></tr></table>                       </div></div>               <div class='minipage'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c3s1_not_gate.png' width='50%' />                                   </div>
                                                                          

                                                                          
   </figure>
<!-- l. 531 --><p class='indent'>   The second logic gate is the <span class='cmbx-12'>AND </span>gate. The AND gate is used to compute
binary multiplication in boolean algebra, <span class='mathjax-inline'>\(\operatorname {AND}(x, y) := x \cdot y\)</span> or <span class='mathjax-inline'>\(xy\)</span> in short. Here’s its truth table on
the left and its diagramatic representation on the right:
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<div class='minipage'><div class='tabular'> <table class='tabular' id='TBL-16'><colgroup id='TBL-16-1g'><col id='TBL-16-1' /><col id='TBL-16-2' /></colgroup><colgroup id='TBL-16-3g'><col id='TBL-16-3' /></colgroup><tr id='TBL-16-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-16-1-1' style='white-space:nowrap; text-align:center;'> x  </td><td class='td11' id='TBL-16-1-2' style='white-space:nowrap; text-align:center;'> y  </td><td class='td11' id='TBL-16-1-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(\operatorname {AND}(x,y) := x \cdot y\)</span> </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td></tr><tr id='TBL-16-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-16-2-1' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-16-2-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-16-2-3' style='white-space:nowrap; text-align:center;'> 0  </td></tr><tr id='TBL-16-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-16-3-1' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-16-3-2' style='white-space:nowrap; text-align:center;'> 1 </td><td class='td11' id='TBL-16-3-3' style='white-space:nowrap; text-align:center;'> 0</td>
</tr><tr id='TBL-16-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-16-4-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-16-4-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-16-4-3' style='white-space:nowrap; text-align:center;'> 0  </td>
</tr><tr id='TBL-16-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-16-5-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-16-5-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-16-5-3' style='white-space:nowrap; text-align:center;'> 1  </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td></tr></table>                       </div></div>               <div class='minipage'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c3s1_and_gate.png' width='50%' />                                   </div>
                                                                          

                                                                          
   </figure>
<!-- l. 552 --><p class='indent'>   <span class='cmbx-12'>OR </span>is another logic gate that computes binary addition in boolean algebra, <span class='mathjax-inline'>\(\operatorname {OR}(x, y) := x + y\)</span>.
Its truth table and diagramatic representation is given below:
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<div class='minipage'><div class='tabular'> <table class='tabular' id='TBL-17'><colgroup id='TBL-17-1g'><col id='TBL-17-1' /><col id='TBL-17-2' /></colgroup><colgroup id='TBL-17-3g'><col id='TBL-17-3' /></colgroup><tr id='TBL-17-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-17-1-1' style='white-space:nowrap; text-align:center;'> x  </td><td class='td11' id='TBL-17-1-2' style='white-space:nowrap; text-align:center;'> y  </td><td class='td11' id='TBL-17-1-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(\operatorname {OR}(x,y) := x + y\)</span> </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td></tr><tr id='TBL-17-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-17-2-1' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-17-2-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-17-2-3' style='white-space:nowrap; text-align:center;'> 0  </td></tr><tr id='TBL-17-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-17-3-1' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-17-3-2' style='white-space:nowrap; text-align:center;'> 1 </td><td class='td11' id='TBL-17-3-3' style='white-space:nowrap; text-align:center;'> 1</td>
</tr><tr id='TBL-17-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-17-4-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-17-4-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-17-4-3' style='white-space:nowrap; text-align:center;'> 1  </td>
</tr><tr id='TBL-17-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-17-5-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-17-5-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-17-5-3' style='white-space:nowrap; text-align:center;'> 1  </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td></tr></table>                       </div></div>               <div class='minipage'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c3s1_or_gate.png' width='50%' />                                   </div>
                                                                          

                                                                          
   </figure>
<!-- l. 575 --><p class='indent'>   Believe me when I say this: we can already built a lot by using the
NOT gate and the AND gate. By a lot, I actually mean everything that
can be built by using all the logic gates described in this chapter. Yes,
these two gates combined are really <span class='cmti-12'>universally </span>powerful. But this is the
next section’s subject, so let’s keep going on with the different logic gates
for now. Engineers have made another dedicate physical gate for this as
well: it’s called the <span class='cmbx-12'>NAND </span>gate or the “NOT AND” gate. By combining
NOT and AND gates into a single hardware component, one can spend
their money only on tons of the NAND gates and then sleep at nights
knowing that anything can be built by using this single type of logic gate in
his/her basement. Here’s NAND’s truth table and how it looks on the
circuittry:
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<div class='minipage'><div class='tabular'> <table class='tabular' id='TBL-18'><colgroup id='TBL-18-1g'><col id='TBL-18-1' /><col id='TBL-18-2' /></colgroup><colgroup id='TBL-18-3g'><col id='TBL-18-3' /></colgroup><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td></tr><tr id='TBL-18-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-18-1-1' style='white-space:nowrap; text-align:center;'> x  </td><td class='td11' id='TBL-18-1-2' style='white-space:nowrap; text-align:center;'> y  </td><td class='td11' id='TBL-18-1-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(\operatorname {NAND}(x,y) \text { or } \operatorname {NOT}(\operatorname {AND}(x, y)) := (xy)' = x' + y'\)</span> </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td></tr><tr id='TBL-18-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-18-2-1' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-18-2-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-18-2-3' style='white-space:nowrap; text-align:center;'> 1  </td></tr><tr id='TBL-18-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-18-3-1' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-18-3-2' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-18-3-3' style='white-space:nowrap; text-align:center;'> 1</td>
</tr><tr id='TBL-18-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-18-4-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-18-4-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-18-4-3' style='white-space:nowrap; text-align:center;'> 1  </td>
</tr><tr id='TBL-18-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-18-5-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-18-5-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-18-5-3' style='white-space:nowrap; text-align:center;'> 0  </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td></tr></table>                       </div></div>               <div class='minipage'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c3s1_nand_gate.png' width='50%' />                                   </div>
                                                                          

                                                                          
   </figure>
<!-- l. 600 --><p class='indent'>   Now, it is time to explore other logic gates that are essentially composition of
the ones that we have seen already. The first one we are going to see is the <span class='cmbx-12'>NOR</span>
gate that first ORs (addition in boolean algebra) two inputs or operands and then
NOTs (negation in boolean algebration) the result. Its name is the abbreviation
for NOT-OR: <span class='mathjax-inline'>\(\operatorname {NOR}(x, y) = (x + y)'\)</span>. Keep in mind that we will prove the universality of the
NOR gate later, as well. Below is given its truth table and diagramatic
representation:
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<div class='minipage'><div class='tabular'> <table class='tabular' id='TBL-19'><colgroup id='TBL-19-1g'><col id='TBL-19-1' /><col id='TBL-19-2' /></colgroup><colgroup id='TBL-19-3g'><col id='TBL-19-3' /></colgroup><tr id='TBL-19-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-19-1-1' style='white-space:nowrap; text-align:center;'> x  </td><td class='td11' id='TBL-19-1-2' style='white-space:nowrap; text-align:center;'> y  </td><td class='td11' id='TBL-19-1-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(\operatorname {NOR}(x,y) \text { or } \operatorname {NOT}(\operatorname {OR}(x, y)) := (x+y)' = x'y'\)</span> </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td></tr><tr id='TBL-19-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-19-2-1' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-19-2-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-19-2-3' style='white-space:nowrap; text-align:center;'> 1  </td></tr><tr id='TBL-19-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-19-3-1' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-19-3-2' style='white-space:nowrap; text-align:center;'> 1 </td><td class='td11' id='TBL-19-3-3' style='white-space:nowrap; text-align:center;'> 0</td>
</tr><tr id='TBL-19-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-19-4-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-19-4-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-19-4-3' style='white-space:nowrap; text-align:center;'> 0  </td>
</tr><tr id='TBL-19-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-19-5-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-19-5-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-19-5-3' style='white-space:nowrap; text-align:center;'> 0  </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td></tr></table>                       </div></div>               <div class='minipage'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c3s1_nor_gate.png' width='50%' />                                   </div>
                                                                          

                                                                          
   </figure>
<!-- l. 622 --><p class='indent'>   Another type of “OR-ing” two numbers is by using <span class='cmbx-12'>XOR </span>or <span class='cmbx-12'>eXclusive OR</span>.
While how the OR gate functions can be translated into the word “or” in English
directly, and NOR gate’s behavior can be described by using the words “not or”
in English, XOR’s behavior can be translated to “either…or…” wording. XOR is a
binary function, so it takes two numbers as inputs: <span class='mathjax-inline'>\(x\)</span> and <span class='mathjax-inline'>\(y\)</span>, let’s say. We say, it
outputs 1 if and only if either <span class='mathjax-inline'>\(x\)</span> is 1 or <span class='mathjax-inline'>\(y\)</span> is 1, but not both. So, here’s its truth table
and diagramatic representation:
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<div class='minipage'><div class='tabular'> <table class='tabular' id='TBL-20'><colgroup id='TBL-20-1g'><col id='TBL-20-1' /><col id='TBL-20-2' /></colgroup><colgroup id='TBL-20-3g'><col id='TBL-20-3' /></colgroup><tr id='TBL-20-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-20-1-1' style='white-space:nowrap; text-align:center;'> x  </td><td class='td11' id='TBL-20-1-2' style='white-space:nowrap; text-align:center;'> y  </td><td class='td11' id='TBL-20-1-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(\operatorname {XOR}(x,y) \text { or } x \oplus y := x'y + xy'\)</span> </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td></tr><tr id='TBL-20-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-20-2-1' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-20-2-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-20-2-3' style='white-space:nowrap; text-align:center;'> 0  </td></tr><tr id='TBL-20-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-20-3-1' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-20-3-2' style='white-space:nowrap; text-align:center;'> 1 </td><td class='td11' id='TBL-20-3-3' style='white-space:nowrap; text-align:center;'> 1</td>
</tr><tr id='TBL-20-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-20-4-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-20-4-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-20-4-3' style='white-space:nowrap; text-align:center;'> 1  </td>
</tr><tr id='TBL-20-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-20-5-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-20-5-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-20-5-3' style='white-space:nowrap; text-align:center;'> 0  </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td></tr></table>                       </div></div>               <div class='minipage'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c3s1_xor_gate.png' width='50%' />                                   </div>
                                                                          

                                                                          
   </figure>
<!-- l. 644 --><p class='indent'>   Lastly, we have the <span class='cmbx-12'>XNOR </span>gate that computes “NOT XOR” of two given
numbers, <span class='mathjax-inline'>\(\operatorname {XNOR}(x, y) := xy + x'y'\)</span>. Here’s its truth table and diagramatic representation:
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<div class='minipage'><div class='tabular'> <table class='tabular' id='TBL-21'><colgroup id='TBL-21-1g'><col id='TBL-21-1' /><col id='TBL-21-2' /></colgroup><colgroup id='TBL-21-3g'><col id='TBL-21-3' /></colgroup><tr id='TBL-21-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-21-1-1' style='white-space:nowrap; text-align:center;'> x  </td><td class='td11' id='TBL-21-1-2' style='white-space:nowrap; text-align:center;'> y  </td><td class='td11' id='TBL-21-1-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(\operatorname {XNOR}(x,y) := \operatorname {NOT}(\operatorname {XOR}(x, y)) = x'y' + xy\)</span> </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td></tr><tr id='TBL-21-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-21-2-1' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-21-2-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-21-2-3' style='white-space:nowrap; text-align:center;'> 1  </td></tr><tr id='TBL-21-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-21-3-1' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-21-3-2' style='white-space:nowrap; text-align:center;'> 1 </td><td class='td11' id='TBL-21-3-3' style='white-space:nowrap; text-align:center;'> 0</td>
</tr><tr id='TBL-21-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-21-4-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-21-4-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-21-4-3' style='white-space:nowrap; text-align:center;'> 0  </td>
</tr><tr id='TBL-21-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-21-5-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-21-5-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-21-5-3' style='white-space:nowrap; text-align:center;'> 1  </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td></tr></table>                       </div></div>               <div class='minipage'><img alt='PIC' width='50%' src='/assets/courses/comp-arch/figures/c3s1_xnor_gate.png' />                                   </div>
                                                                          

                                                                          
   </figure>
<!-- l. 668 --><p class='indent'>   These are all the logic gates that we are going to use to build more complex
circuitry later on. In fact, we are mostly going to use NOT, AND, and OR gates.
The others won’t be used much in this book, but it is still good to know about
them. Now, let’s see the <span class='cmbx-12'>universality </span>claims about some of these gates as I
promised earlier.
   
</p>
   <h3 class='sectionHead' id='universal-logic-gates'><span class='titlemark'>3.2   </span> <a id='x1-160003.2'></a>Universal Logic Gates</h3>
<!-- l. 671 --><p class='noindent'>We need to ask the following question before we begin: What does it mean for a
set of logic gates to be universal all together? The answer is the definition of
universality, and here is how it is defined:
</p>
   <div class='newtheorem'>
<!-- l. 673 --><p class='noindent'><span class='head'>
<a id='x1-16001r1'></a>
<span class='cmbx-12'>Definition 3.1 </span>(Universality of a set of logic gates)<span class='cmbx-12'>.</span>  </span>A set of logic gates <span class='mathjax-inline'>\(\{G_1, G_2, \dots , G_n\}\)</span> is
<span class='cmbx-12'>universal                                   </span>if                                        and
only if any boolean function can be constructed/implemented only by using
the logic gates within this set.
</p>
   </div>
<!-- l. 676 --><p class='indent'>
</p><!-- l. 678 --><p class='indent'>   We have already learned about the SoP canonical representation for all
boolean functions in the previous chapter. Well, it is already obvious that SoP or
Sum-of-Products representation uses <span class='cmbx-12'>Sum </span>and <span class='cmbx-12'>Product </span>among the <span class='cmbx-12'>literals </span>to
represent a boolean function. Lastly, a literal can be an input variable or its
<span class='cmbx-12'>complement</span>. So, we can conclude that all we need to construct SoP for a
given truth table that represents arbitrary boolean function is <span class='cmbx-12'>OR </span>(for
construction of Sum), <span class='cmbx-12'>AND </span>(fro construction of Product), and <span class='cmbx-12'>NOT </span>(for
construction of complement or negated variable). Therefore, the set <span class='mathjax-inline'>\(\{\operatorname {NOT}, \operatorname {AND}, \operatorname {OR}\}\)</span> is universal.
□
                                                                          

                                                                          
</p>
   <div class='newtheorem'>
<!-- l. 680 --><p class='noindent'><span class='head'>
<a id='x1-16002r1'></a>
<span class='cmbx-12'>Theorem 3.1.</span>  </span><span class='mathjax-inline'>\(\{\operatorname {NOT}, \operatorname {AND}\}\) </span><span class='cmti-12'>is universal.</span>
</p>
   </div>
<!-- l. 682 --><p class='indent'>
</p>
   <div class='proof'>
<!-- l. 685 --><p class='indent'>   <span class='head'>
<span class='cmti-12'>Proof.</span> </span>To prove that <span class='mathjax-inline'>\(\{\operatorname {NOT}, \operatorname {AND}\}\)</span> is a universal set we need to prove that the NAND
gate can be used to construct all the gates from another universal set, such
as the set <span class='mathjax-inline'>\(\{\operatorname {NOT}, \operatorname {AND}, \operatorname {OR}\}\)</span> that we saw earlier. We already have the NOT and AND gates
in our candidate set, which are the same with the NOT and AND gates in
<span class='mathjax-inline'>\(\{\operatorname {NOT}, \operatorname {AND}, \operatorname {OR}\}\)</span>. All we need to show that the OR gate in the universal set is constructible
by using only NOT and AND gates from our candidate set. Let’s proceed to
the construction.
</p>
   <div class='mathjax-env mathjax-align*'>\begin{align*} \operatorname {OR}(x, y) &amp;= x + y \\ &amp;= (xy)' \quad \text {De Morgan's law} \\ &amp;= \operatorname {NOT}\left (\operatorname {AND}(x, y)\right ) \end{align*}</div>
<!-- l. 693 --><p class='indent'>   Since only NOT and AND gates can be used to construct all the gates in a
universal set <span class='mathjax-inline'>\(\{\operatorname {NOT}, \operatorname {AND}, \operatorname {OR}\}\)</span> that we already know of, <span class='mathjax-inline'>\(\{\operatorname {NOT}, \operatorname {AND}\}\)</span> is universal.                              □
</p>
   </div>
   <div class='newtheorem'>
<!-- l. 696 --><p class='noindent'><span class='head'>
<a id='x1-16003r2'></a>
<span class='cmbx-12'>Theorem 3.2.</span>  </span><span class='mathjax-inline'>\(\{\operatorname {NAND}\}\) </span><span class='cmti-12'>is universal.</span>
                                                                          

                                                                          
</p>
   </div>
<!-- l. 699 --><p class='indent'>
</p>
   <div class='proof'>
<!-- l. 702 --><p class='indent'>   <span class='head'>
<span class='cmti-12'>Proof.</span> </span>To prove that <span class='mathjax-inline'>\(\{\operatorname {NAND}\}\)</span> is a universal set we need to prove that the NAND
gate can be used to construct all the gates from another universal set, such
as the set <span class='mathjax-inline'>\(\{\operatorname {NOT}, \operatorname {AND}\}\)</span> that we saw earlier. Let’s proceed to the constructions.
</p>
   <div class='mathjax-env mathjax-align*'>\begin{align*} \operatorname {NOT}(x) &amp;= x' = \\ &amp;= \operatorname {NAND}(x, x) = (x \cdot x)' = x' \end{align*}</div>
   <div class='mathjax-env mathjax-align*'>\begin{align*} \operatorname {AND}(x, y) &amp;= xy = \\ &amp;= \operatorname {NAND}(\operatorname {NAND}(x, y), \operatorname {NAND}(x, y)) = \operatorname {NAND}\left ((xy)', (xy)'\right ) = \\ &amp;= \operatorname {NOT}\left ((xy)'\right ) = xy \end{align*}</div>
<!-- l. 716 --><p class='indent'>   Therefore, the NAND gate by itself is a universal gate.                     □
</p>
   </div>
   <div class='newtheorem'>
<!-- l. 719 --><p class='noindent'><span class='head'>
<a id='x1-16004r3'></a>
<span class='cmbx-12'>Theorem 3.3.</span>  </span><span class='mathjax-inline'>\(\{\operatorname {NOR}\}\) </span><span class='cmti-12'>is universal.</span>
</p>
   </div>
<!-- l. 721 --><p class='indent'>
</p>
   <div class='proof'>
<!-- l. 724 --><p class='indent'>   <span class='head'>
<span class='cmti-12'>Proof.</span> </span>We will build the NAND gate only by using NOR gate(s) to prove
the universality of NOR.
</p>
   <div class='mathjax-env mathjax-align*'>\begin{align*} \operatorname {NAND}(x, y) &amp;= \operatorname {NOR}(xy, xy) = \\ &amp;= \operatorname {NOR}\left ( \operatorname {NOR}(x', y'), \operatorname {NOR}(x', y') \right ) = \\ &amp;= \operatorname {NOR}\left ( \operatorname {NOR}\left ( \operatorname {NOR}(x, x), \operatorname {NOR}(y, y) \right ), \operatorname {NOR}\left ( \operatorname {NOR}(x, x), \operatorname {NOR}(y, y) \right ) \right ) \end{align*}</div>
<!-- l. 742 --><p class='indent'>   Therefore, NOR gate is a universal gate by itself.                             □
                                                                          

                                                                          
</p>
   </div>
                                                                          

                                                                          
<!-- l. 745 --><p class='indent'>
                                                                          

                                                                          
</p>
   <h2 class='chapterHead' id='combinational-logic'><span class='titlemark'>Chapter 4</span><br /><a id='x1-170004'></a>Combinational Logic</h2>
<!-- l. 746 --><p class='noindent'>This chapter makes use of boolean circuits/functions with no “memory” of the
past, which is known as <span class='cmbx-12'>combinational circuits</span>. Combinational circuit is a
circuit whose output(s) is determined only based on the explicitly given inputs. In
other words, the output of a combinational circuit always stays the same as the
long as the same input signal is provided. One important concept to be careful
about here is the concept of <span class='cmbx-12'>time</span>. Up until now, I did not explitly mention the
timing aspect in boolean cirucits, and hence also in boolean functions.
For example, take a boolean function <span class='mathjax-inline'>\(f(x, y, z) = xy' + x'z\)</span>. In this level of abstraction of the
representation of <span class='mathjax-inline'>\(f\)</span>, there is no notion of time: we just say given any <span class='mathjax-inline'>\(x\)</span>, <span class='mathjax-inline'>\(y\)</span>, and <span class='mathjax-inline'>\(z\)</span>, the
function evaluates to <span class='mathjax-inline'>\(xy' + x'z\)</span>. In reality, when you build a physical circuit that
implements this function, obviously there is the notion of time as well.
Therefore, it would be more realistic to write this function as <span class='mathjax-inline'>\(f(x_t, y_t, z_t) = x_t y'_t + x'_t z_t\)</span> where <span class='mathjax-inline'>\(x_t, y_t, z_t\)</span>
are the inputs provided at time (step) <span class='mathjax-inline'>\(t\)</span>. Functions of this nature – that
is, <span class='cmti-12'>the output(s) at time step </span><span class='mathjax-inline'>\(t\) </span><span class='cmti-12'>only depending on some combination of
the inputs provided at the same time step </span><span class='mathjax-inline'>\(t\) </span><span class='cmti-12'>– are called combinational</span>
functions.
   
</p>
   <h3 class='sectionHead' id='foundational-combinational-circuits'><span class='titlemark'>4.1   </span> <a id='x1-180004.1'></a>Foundational Combinational Circuits</h3>
<!-- l. 749 --><p class='noindent'>This section introduces several combinational circuits that are used quite often
while building a typical general-purpose and programmable computer. By general
purpose, we mean that any computable function can be programmed into the
computer. That is essentially our goal: making a computer to compute our
functions for us. I know, sounds exciting, but we have more things to learn first
before building our own computer. Now, let’s see about these foundational
combinational building blocks of computers.
   
</p>
   <h4 class='subsectionHead' id='multiplexer-mux'><span class='titlemark'>4.1.1   </span> <a id='x1-190004.1.1'></a>Multiplexer (MUX)</h4>
<!-- l. 752 --><p class='noindent'>What is a multiplexer? It is a circuit that acts like a switch… like a railroad switch
lever. You know the one that decides which train gets to continue with the main
railway.
                                                                          

                                                                          
</p>
   <figure class='figure' id='x1-19001r1'><span id='railroad-switch'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 756 --><p class='noindent'><img alt='PIC' src='/assets/courses/comp-arch/figures/other/railroad_switch.jpg' width='50%' />
</p>
<figcaption class='caption'><span class='id'>Figure 4.1: </span><span class='content'>Railroad switch</span></figcaption><!-- tex4ht:label?: x1-19001r1  -->
                                                                          

                                                                          
   </figure>
<!-- l. 761 --><p class='indent'>   To be more concrete with the multiplexers’ use case, imagine that we have two
independent cirucits that do some useful calculations for us. For example,
let one circuit take two 1-bit inputs (<span class='mathjax-inline'>\(x_1\)</span> and <span class='mathjax-inline'>\(x_2\)</span>) and compute their logical
AND (<span class='mathjax-inline'>\(x_1 \land x_2\)</span>), and let the other circuit take the same 1-bit inputs (<span class='mathjax-inline'>\(x_1\)</span> and <span class='mathjax-inline'>\(x_2\)</span>) and
compute their logical OR (<span class='mathjax-inline'>\(x_1 \lor x_2\)</span>); the first circuit is simply made of a single
AND gate and the second one is made of a single OR gate, obviously.
Now, we would like to somehow select one of the outputs depending on
whether we want to compute logical AND or logical OR. In other words, we
would like to create a circuit that computes the following mathematical
function:
</p>
   <div class='mathjax-block'>\[ f(x_1, x_2, \texttt {computeOR}_{\in \{0, 1\}} = \begin {cases} x_1 \land x_2, \text {if } \texttt {computerOR} = 0 \\ x_1 \lor x_2, \text {if } \texttt {computerOR} = 1 \\ \end {cases} \]</div>
<!-- l. 771 --><p class='indent'>   So, if <span class='cmtt-12'>computeOR </span>is 0, we want to get the output of AND gate, and if
<span class='cmtt-12'>computeOR </span>is 1, we want to get the output of OR gate. Here is how our unfinished
circuit looks right now:
</p>
   <figure class='figure' id='x1-19002r2'><span id='trying-to-compute-fx-x-computeor-function'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 775 --><p class='noindent'><img alt='PIC' src='/assets/courses/comp-arch/figures/other/mux_intro.png' width='50%' />
</p>
<figcaption class='caption'><span class='id'>Figure 4.2: </span><span class='content'>Trying to compute <span class='mathjax-inline'>\(f(x_1, x_2, \texttt {computeOR}\)</span> function.</span></figcaption><!-- tex4ht:label?: x1-19002r2  -->
                                                                          

                                                                          
   </figure>
<!-- l. 780 --><p class='indent'>   A carefull reader should have felt that something if off about the picture
shown above: There is no <span class='cmtt-12'>computeOR </span>input, which was one of the arguments to
our function <span class='mathjax-inline'>\(f\)</span>. So, let’s add that also to our circuit, and now it looks like
this:
</p>
   <figure class='figure' id='x1-19003r3'><span id='trying-to-compute-fx-x-computeor-function1'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 784 --><p class='noindent'><img alt='PIC' src='/assets/courses/comp-arch/figures/other/mux_intro2.png' width='50%' />
</p>
<figcaption class='caption'><span class='id'>Figure 4.3: </span><span class='content'>Trying to compute <span class='mathjax-inline'>\(f(x_1, x_2, \texttt {computeOR}\)</span> function.</span></figcaption><!-- tex4ht:label?: x1-19003r3  -->
                                                                          

                                                                          
   </figure>
<!-- l. 789 --><p class='indent'>   How do we find out a way to connect AND’s and OR’s outputs to the main
output wire (connected to <span class='mathjax-inline'>\(y\)</span>)? To solve this problem, we use a multiplexer or MUX.
Here’s how a simple MUX behaves mathematically:
</p>
   <div class='mathjax-block'>\[ \operatorname {MUX}(x_1, x_2, s) = \begin {cases} x_1, \text {if } s = 0 \\ x_2, \text {if } s = 1 \\ \end {cases} \]</div>
<!-- l. 799 --><p class='indent'>   Knowing how MUX behaves mathematically allows us to represent our
previous function by using a single MUX as follows: <span class='mathjax-inline'>\(f(x_1, x_2, \texttt {computeOR}) = \operatorname {MUX}(x_1 x_2, x_1 + x_2, \texttt {computeOR})\)</span>. Figure shown below shows
what such a MUX looks like on the left side.
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<div class='minipage'><!-- l. 804 --><p class='noindent'><img alt='PIC' src='/assets/courses/comp-arch/figures/c4s1_mux.png' width='50%' />                          </p></div> <div class='minipage'><img alt='PIC' src='/assets/courses/comp-arch/figures/c4s1_mux_impl.png' width='50%' />                                            </div>
                                                                          

                                                                          
   </figure>
<!-- l. 814 --><p class='indent'>   But MUX can be made out of a bunch of AND, OR, NOT gates.
All we have to do is to figure out the truth table of the MUX and then
find a boolean function for it. This way, we can build the circuit that
computes this boolean function. This is what MUX’s truth table looks
like:
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 817 --><p class='indent' id='truth-table-for-x-mux'>   <a id='x1-19004r1'></a></p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-22'><colgroup id='TBL-22-1g'><col id='TBL-22-1' /><col id='TBL-22-2' /><col id='TBL-22-3' /></colgroup><colgroup id='TBL-22-4g'><col id='TBL-22-4' /></colgroup><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-22-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-22-1-1' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(x_1\)</span> </td><td class='td11' id='TBL-22-1-2' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(x_2\)</span> </td><td class='td11' id='TBL-22-1-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(s\)</span> </td><td class='td11' id='TBL-22-1-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(\operatorname {MUX}(x_1, x_2, s)\)</span> </td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-22-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-22-2-1' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-22-2-2' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-22-2-3' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-22-2-4' style='white-space:nowrap; text-align:center;'> 0</td>
</tr><tr id='TBL-22-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-22-3-1' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-22-3-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-22-3-3' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-22-3-4' style='white-space:nowrap; text-align:center;'> 0  </td></tr><tr id='TBL-22-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-22-4-1' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-22-4-2' style='white-space:nowrap; text-align:center;'> 1 </td><td class='td11' id='TBL-22-4-3' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-22-4-4' style='white-space:nowrap; text-align:center;'> 0</td>
</tr><tr id='TBL-22-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-22-5-1' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-22-5-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-22-5-3' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-22-5-4' style='white-space:nowrap; text-align:center;'> 1  </td>
</tr><tr id='TBL-22-6-' style='vertical-align:baseline;'><td class='td11' id='TBL-22-6-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-22-6-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-22-6-3' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-22-6-4' style='white-space:nowrap; text-align:center;'> 1  </td>
</tr><tr id='TBL-22-7-' style='vertical-align:baseline;'><td class='td11' id='TBL-22-7-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-22-7-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-22-7-3' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-22-7-4' style='white-space:nowrap; text-align:center;'> 0  </td>
</tr><tr id='TBL-22-8-' style='vertical-align:baseline;'><td class='td11' id='TBL-22-8-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-22-8-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-22-8-3' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-22-8-4' style='white-space:nowrap; text-align:center;'> 1  </td>
</tr><tr id='TBL-22-9-' style='vertical-align:baseline;'><td class='td11' id='TBL-22-9-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-22-9-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-22-9-3' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-22-9-4' style='white-space:nowrap; text-align:center;'> 1  </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr></table>                                                                     </div>
<figcaption class='caption'><span class='id'>Table 4.1: </span><span class='content'>Truth table for 2x1 MUX</span></figcaption><!-- tex4ht:label?: x1-19004r1  -->
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 836 --><p class='indent'>   By using the canonical SoP representation, we could easily deduce that <span class='mathjax-inline'>\(\operatorname {MUX}(x_1, x_2, s) = x_1' x_2 s + x_1 x_2' s' + x_1 x_2 s' + x_1 x_2 s\)</span>.
Either by using laws/theorems from boolean algebra that we have learnt or the
K-map, we could simply this function further. Let’s try simple algebraic
manipulation and see if it takes us somewhere:
</p>
   <div class='mathjax-env mathjax-align*'>\begin{align*} \operatorname {MUX}(x_1, x_2, s) &amp;= x_1' x_2 s + x_1 x_2' s' + x_1 x_2 s' + x_1 s_2 s = \\ &amp;= x_1' x_2 s + x_1 x_2' s' + x_1 x_2 (s' + s) \\ &amp;= x_1' x_2 s + x_1 x_2' s' + x_1 x_2 \\ &amp;= x_1' x_2 s + x_1 (x_2' s' + x_2) \\ &amp;= x_1' x_2 s + x_1 (s' + x_2) \\ &amp;= x_1' x_2 s + x_1 s' + x_1 x_2 \\ &amp;= x_1 s' + x_2 (x_1 + x_1' s) \\ &amp;= x_1 s' + x_2 (x_1 + s) \\ &amp;= x_1 s' + x_2 s + x_1 x_2 \\ &amp;= x_1 s' + x_2 s \\ \end{align*}</div>
<!-- l. 851 --><p class='indent'>   The last reduction was done by following the case analysis below:
</p>
   <div class='mathjax-env mathjax-align*'>\begin{align*} \text {case 1. } &amp; x_1 x_2 = 0 \\ &amp; \operatorname {MUX}(x_1, x_2, s) = x_1 s' + x_2 s \\ \text {case 2. } &amp; x_1 x_2 = 1 \implies \begin {cases} \operatorname {MUX}(x_1, x_2, s) = 1 \\ x_1 = 1 \text { and } x_2 = 1 \end {cases} \\ &amp; \operatorname {MUX}(x_1, x_2, s) = x_1 s' + x_2 s = s' + s = 1 \end{align*}</div>
<!-- l. 864 --><p class='indent'>   Since we now know that <span class='mathjax-inline'>\(\operatorname {MUX}(x_1, x_2, s) = x_1 s' + x_2 s\)</span>, it is easy to understand the MUX’s circuit
implemented by using a bunch of AND, OR, NOT gates, as depicted on the
figure given previously. Finally, here is what our infamous <span class='mathjax-inline'>\(f(x_1, x_2, \texttt {computeOR})\)</span> function looks
like:
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 868 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/mux_2x1_intro_impl.png' width='50%' />
                                                                          

                                                                          
</p>
   </figure>
<!-- l. 873 --><p class='indent'>   The last thing about the MUX is how many potential inputs there are, only
one of which to be forwareded to the final output wire. Up until now, we
have only seen MUX with two potential inputs that can be forwarded
depending on the <span class='cmbx-12'>select </span>bit <span class='mathjax-inline'>\(s\)</span>. We are going to call the MUX we have seen
<span class='cmti-12'>2x1 MUX</span>; where “2x1” means it has 2 non-select inputs (these are the
inputs that can potentially be forwarded to the output) and 1 output.
But can we have 4x1 MUX? The answer is yes, and it will necessarily
have 2 select bits (because one select bit is not enough to select among 4
different input values). One way of building 4x1 MUX is to write out
its truth table and come up with boolean function, as we did for 2x1
MUX. Another way of building it is by using several 2x1 MUXs as shown
below:
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 877 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/mux_4x1_impl.png' width='50%' />
                                                                          

                                                                          
</p>
   </figure>
<!-- l. 882 --><p class='indent'>   The truth table for this 4x1 MUX is given below:
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 884 --><p class='indent' id='truth-table-for-x-mux1'>   <a id='x1-19005r2'></a></p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-23'><colgroup id='TBL-23-1g'><col id='TBL-23-1' /><col id='TBL-23-2' /></colgroup><colgroup id='TBL-23-3g'><col id='TBL-23-3' /></colgroup><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td></tr><tr id='TBL-23-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-23-1-1' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(s_1\)</span> </td><td class='td11' id='TBL-23-1-2' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(s_2\)</span> </td><td class='td11' id='TBL-23-1-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(\operatorname {MUX}(x_1, x_2, x_3, x_4, s_1, s_2)\)</span> </td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td></tr><tr id='TBL-23-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-23-2-1' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-23-2-2' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-23-2-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(x_1\)</span></td>
</tr><tr id='TBL-23-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-23-3-1' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-23-3-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-23-3-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(x_2\)</span> </td>
</tr><tr id='TBL-23-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-23-4-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-23-4-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-23-4-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(x_3\)</span> </td>
</tr><tr id='TBL-23-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-23-5-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-23-5-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-23-5-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(x_4\)</span> </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td></tr></table>                                                                     </div>
<figcaption class='caption'><span class='id'>Table 4.2: </span><span class='content'>Truth table for 4x1 MUX</span></figcaption><!-- tex4ht:label?: x1-19005r2  -->
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 900 --><p class='indent'>   So, use your imagination and try to build 3x1 MUX (also write out its truth
table for clear understanding), and 8x1 MUX. It is an easy pattern to build any
<span class='mathjax-inline'>\(2^n\)</span>x1 MUX (for any <span class='mathjax-inline'>\(n \in \mathbb {N^+}\)</span>) once you get the intuition; this is also where it becomes
obvious that a <span class='mathjax-inline'>\(2^n\)</span>x1 MUX must have <span class='mathjax-inline'>\(n\)</span> select bits.
   
</p>
   <h4 class='subsectionHead' id='demultiplexer-demux'><span class='titlemark'>4.1.2   </span> <a id='x1-200004.1.2'></a>Demultiplexer (DEMUX)</h4>
<!-- l. 903 --><p class='noindent'>We know what MUX is and what it is useful for. It is re-routes only one of its
many inputs to the final output wire. Now, what if we have only one input
that needs to be routed to only one of many output wires? As 2x1 MUX
routes one of 2 inputs to the single output, a 1x2 DEMUX routes single
input to one of 2 outputs. Hopefully, you get the naming convention by
now.
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<div class='minipage'><!-- l. 908 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c4s1_demux.png' width='50%' />                          </p></div> <div class='minipage'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c4s1_demux_impl.png' width='50%' />                                            </div>
                                                                          

                                                                          
   </figure>
<!-- l. 918 --><p class='indent'>   The circuit element for 1x2 DEMUX is depicted on the left side of the picture
given above. If you do not understand why 1x2 DEMUX implementation shown
on the right side of the same picture works, keep reading; and if you do
understand it, you can skip to the next section.
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 922 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/demux_intro.png' width='50%' />
                                                                          

                                                                          
</p>
   </figure>
<!-- l. 927 --><p class='indent'>   Well, let’s first write out the truth table:
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 930 --><p class='indent' id='truth-table-for-x-demux'>   <a id='x1-20001r3'></a></p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-24'><colgroup id='TBL-24-1g'><col id='TBL-24-1' /><col id='TBL-24-2' /></colgroup><colgroup id='TBL-24-3g'><col id='TBL-24-3' /><col id='TBL-24-4' /></colgroup><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-24-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-24-1-1' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(x\)</span> </td><td class='td11' id='TBL-24-1-2' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(s\)</span> </td><td class='td11' id='TBL-24-1-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(y_1\)</span> </td><td class='td11' id='TBL-24-1-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(y_2\)</span> </td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-24-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-24-2-1' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-24-2-2' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-24-2-3' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-24-2-4' style='white-space:nowrap; text-align:center;'> 0</td>
</tr><tr id='TBL-24-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-24-3-1' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-24-3-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-24-3-3' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-24-3-4' style='white-space:nowrap; text-align:center;'> 0  </td>
</tr><tr id='TBL-24-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-24-4-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-24-4-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-24-4-3' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-24-4-4' style='white-space:nowrap; text-align:center;'> 0  </td>
</tr><tr id='TBL-24-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-24-5-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-24-5-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-24-5-3' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-24-5-4' style='white-space:nowrap; text-align:center;'> 1  </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr></table>                                                                     </div>
<figcaption class='caption'><span class='id'>Table 4.3: </span><span class='content'>Truth table for 1x2 DEMUX</span></figcaption><!-- tex4ht:label?: x1-20001r3  -->
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 945 --><p class='indent'>   In other words,
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 948 --><p class='indent' id='compact-truth-table-for-x-demux'>   <a id='x1-20002r4'></a></p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-25'><colgroup id='TBL-25-1g'><col id='TBL-25-1' /></colgroup><colgroup id='TBL-25-2g'><col id='TBL-25-2' /><col id='TBL-25-3' /></colgroup><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td></tr><tr id='TBL-25-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-25-1-1' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(s\)</span> </td><td class='td11' id='TBL-25-1-2' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(y_1\)</span> </td><td class='td11' id='TBL-25-1-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(y_2\)</span> </td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td></tr><tr id='TBL-25-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-25-2-1' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-25-2-2' style='white-space:nowrap; text-align:center;'> x </td><td class='td11' id='TBL-25-2-3' style='white-space:nowrap; text-align:center;'> 0</td>
</tr><tr id='TBL-25-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-25-3-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-25-3-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-25-3-3' style='white-space:nowrap; text-align:center;'> x  </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td></tr></table>                                                                    </div>
<figcaption class='caption'><span class='id'>Table 4.4: </span><span class='content'>Compact truth table for 1x2 DEMUX</span></figcaption><!-- tex4ht:label?: x1-20002r4  -->
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 961 --><p class='indent'>   By looking at these truth tables, we can conclude that <span class='mathjax-inline'>\(y_1 = x s'\)</span> and <span class='mathjax-inline'>\(y_2 = x s\)</span>. Therefore, the
implementation shown below shoud make sense now.
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 965 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/demux_1x2_intro_impl.png' width='50%' />
                                                                          

                                                                          
</p>
   </figure>
<!-- l. 970 --><p class='indent'>   It should be straight forward to see how 1xN DEMUX can be built by using a
bunch of 1x2 DEMUXs. In addition, it should also be obvious by now that a 1xN
DEMUX must have <span class='mathjax-inline'>\(log_2 N\)</span> select bits.
   
</p>
   <h4 class='subsectionHead' id='encoder'><span class='titlemark'>4.1.3   </span> <a id='x1-210004.1.3'></a>Encoder</h4>
<!-- l. 973 --><p class='noindent'>Imagine you have a number 3, which you would like to represent in binary.
Obviously, a common way would be <span class='mathjax-inline'>\(3_{10} = 11_{2}\)</span> or 0011 by using 4 bits. There is another way
to represent 3 by using bits: it’s called <span class='cmbx-12'>one-hot encoding </span>and here is how it
works:
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 975 --><p class='indent'>   </p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-26'><colgroup id='TBL-26-1g'><col id='TBL-26-1' /></colgroup><colgroup id='TBL-26-2g'><col id='TBL-26-2' /><col id='TBL-26-3' /></colgroup><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td></tr><tr id='TBL-26-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-26-1-1' style='white-space:nowrap; text-align:center;'> Base-10  </td><td class='td11' id='TBL-26-1-2' style='white-space:nowrap; text-align:center;'> Base-2 (using 4 bits)  </td><td class='td11' id='TBL-26-1-3' style='white-space:nowrap; text-align:center;'> One-hot  </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td></tr><tr id='TBL-26-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-26-2-1' style='white-space:nowrap; text-align:center;'>    0      </td><td class='td11' id='TBL-26-2-2' style='white-space:nowrap; text-align:center;'>        0000            </td><td class='td11' id='TBL-26-2-3' style='white-space:nowrap; text-align:center;'>  0001    </td></tr><tr id='TBL-26-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-26-3-1' style='white-space:nowrap; text-align:center;'> 1 </td><td class='td11' id='TBL-26-3-2' style='white-space:nowrap; text-align:center;'> 0001 </td><td class='td11' id='TBL-26-3-3' style='white-space:nowrap; text-align:center;'> 0010</td>
</tr><tr id='TBL-26-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-26-4-1' style='white-space:nowrap; text-align:center;'>    2      </td><td class='td11' id='TBL-26-4-2' style='white-space:nowrap; text-align:center;'>        0010            </td><td class='td11' id='TBL-26-4-3' style='white-space:nowrap; text-align:center;'>  0100    </td>
</tr><tr id='TBL-26-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-26-5-1' style='white-space:nowrap; text-align:center;'>    3      </td><td class='td11' id='TBL-26-5-2' style='white-space:nowrap; text-align:center;'>        0011            </td><td class='td11' id='TBL-26-5-3' style='white-space:nowrap; text-align:center;'>  1000    </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td></tr></table>                                                             </div>
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 991 --><p class='indent'>   In n-bit one-hot encoding representation of numbers, a number is
represented by only one turned on (hot bit) and n-1 bits turned off (cold bits).
That’s why it is called one-hot encoding and not two-hot encoding. To
represent number <span class='mathjax-inline'>\(x\)</span> by using one-hot encoding, the hot bit must be at
index <span class='mathjax-inline'>\(x\)</span> bits left to the rightmost bit in the one-hot representation. For
example, 7 is represented as “0010000000” in 10-bit one-hot encoding
system.
</p><!-- l. 993 --><p class='indent'>   A <span class='mathjax-inline'>\(2^N\)</span><span class='cmbx-12'>xN encoder </span>is essentially a converter from <span class='mathjax-inline'>\(2^N\)</span>-bit one-hot encodings to <span class='mathjax-inline'>\(N\)</span>-bit
binary numbers. Implementing 2x1 encoder is straight forward. This is how a
typical 4x2 encoder could be implemented naively:
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 997 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c4s1_naive_encoder_impl.png' width='50%' />
                                                                          

                                                                          
</p>
   </figure>
<!-- l. 1002 --><p class='indent'>   It is a naive implementation in some sense because even though all input bits
can be 0 and the output would still be 00, which is not the correct conversion, we
have no way of knowing that 0000 input was actually invalid in the first
place.
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 1006 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c4s1_encoder_impl.png' width='50%' />
                                                                          

                                                                          
</p>
   </figure>
<!-- l. 1011 --><p class='indent'>   The implementation above still have a problem: it will output 11 for all of the
following inputs: input 1000, input 1001, input 1010, input 1011, input 1100, and
so on. Now, this behevior is not something that was in a typical encoder’s truth
table. That’s why there is another type of encoder that formally accepts this
behavior.
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 1015 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c4s1_priority_encoder_impl.png' width='50%' />
                                                                          

                                                                          
</p>
   </figure>
<!-- l. 1020 --><p class='indent'>   The implementation shown above is called <span class='cmbx-12'>priority encoder </span>because it
eliminates the previous problem by converting one-hot encoding to its binary
number representation only by using the <span class='cmti-12'>most significant hot bit</span>. Therefore, even
if there are multiple hot bits in the input, it will assume that only the hot MSB
is correct and the rest is to be neglected while converting into binary
representation.
   
</p>
   <h4 class='subsectionHead' id='decoder'><span class='titlemark'>4.1.4   </span> <a id='x1-220004.1.4'></a>Decoder</h4>
<!-- l. 1023 --><p class='noindent'>We know what a <span class='mathjax-inline'>\(2^N\)</span>xN encoder is and how it works. It translates one-hot
encodded representation into a binary representation. What if we wanted to
go in the opposite direction, that is, translating a binary representation
into one-hot encoded representation? This is exactly what a Nx<span class='mathjax-inline'>\(2^N\) </span><span class='cmbx-12'>decoder</span>
does.
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 1027 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c4s1_decoder_impl.png' width='50%' />
                                                                          

                                                                          
</p>
   </figure>
<!-- l. 1032 --><p class='indent'>   A picture given above is an implementation for a 2x4 decoder. Implementing a
Nx<span class='mathjax-inline'>\(2^N\)</span> decoder is more straight forward than implementing a <span class='mathjax-inline'>\(2^N\)</span>xN encoder because all
we have to do is to come up with a single product term for each output of the
decoder. For 2x4 decoder, 4 boolean functions can be inferred from the truth table
given below:
</p>
   <figure class='figure' id='x1-22001r4'><span id='truth-table-for-x-decoder'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<div class='minipage'><div class='tabular'> <table class='tabular' id='TBL-27'><colgroup id='TBL-27-1g'><col id='TBL-27-1' /><col id='TBL-27-2' /></colgroup><colgroup id='TBL-27-3g'><col id='TBL-27-3' /><col id='TBL-27-4' /><col id='TBL-27-5' /><col id='TBL-27-6' /></colgroup><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-27-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-27-1-1' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(x_1\)</span> </td><td class='td11' id='TBL-27-1-2' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(x_2\)</span> </td><td class='td11' id='TBL-27-1-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(y_3\)</span> </td><td class='td11' id='TBL-27-1-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(y_2\)</span> </td><td class='td11' id='TBL-27-1-5' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(y_1\)</span> </td><td class='td11' id='TBL-27-1-6' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(y_0\)</span> </td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-27-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-27-2-1' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-27-2-2' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-27-2-3' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-27-2-4' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-27-2-5' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-27-2-6' style='white-space:nowrap; text-align:center;'> 1</td>
</tr><tr id='TBL-27-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-27-3-1' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-27-3-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-27-3-3' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-27-3-4' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-27-3-5' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-27-3-6' style='white-space:nowrap; text-align:center;'> 0  </td>
</tr><tr id='TBL-27-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-27-4-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-27-4-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-27-4-3' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-27-4-4' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-27-4-5' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-27-4-6' style='white-space:nowrap; text-align:center;'> 0  </td>
</tr><tr id='TBL-27-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-27-5-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-27-5-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-27-5-3' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-27-5-4' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-27-5-5' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-27-5-6' style='white-space:nowrap; text-align:center;'> 0  </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>                             </div>
<figcaption class='caption'><span class='id'>Figure 4.4: </span><span class='content'>Truth table for 2x4
decoder.</span></figcaption><!-- tex4ht:label?: x1-22001r4  -->                      </div> <span class='mathjax-inline'>\(\implies \)</span> <div class='minipage'><div class='mathjax-env mathjax-align*'>\begin{align*} y_0 &amp;= x_1' x_0' \\ y_1 &amp;= x_1' x_0 \\ y_2 &amp;= x_1 x_0' \\ y_3 &amp;= x_1 x_0 \\ \end{align*}</div>                                        </div>
                                                                          

                                                                          
   </figure>
<!-- l. 1060 --><p class='indent'>   Each <span class='mathjax-inline'>\(y_i\)</span> is represented in terms of a single product term because there is only
one row where each <span class='mathjax-inline'>\(y_i = 1\)</span>.
   
</p>
   <h3 class='sectionHead' id='timing'><span class='titlemark'>4.2   </span> <a id='x1-230004.2'></a>Timing</h3>
<!-- l. 1063 --><p class='noindent'>When we work with boolean logic there is essentially no notion of time in our
calculus. It means that we do not take into account the flow of time as we
compute boolean functions on paper. It is because there is no meaning to talk
about how much second it took us to compute boolean function <span class='mathjax-inline'>\(f(x, y, z) = xy' + x'yz + z'\)</span>. It is because
even though I may need 5 seconds to compute the function’s output, when I tell
you that the function’s output for the input <span class='mathjax-inline'>\((x=1, y=1, z=0)\)</span> is 1, you know that I have finished
my calculation (after 5 seconds). However, within the initial 5 seconds, I could not
possibly give you the answer because I wasn’t finished calculating ANDs,
ORs, and NOTs. So, you know that the answer I give you is going to be
right because you also know that I wouldn’t have given it to you in the
first place if I wasn’t done calculating. But this is not how machinery
works…
</p>
   <figure class='figure' id='x1-23001r5'><span id='circuit-for-fx-y-z-xy-xyz-z'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 1067 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/timing_intro.png' width='50%' />
</p>
<figcaption class='caption'><span class='id'>Figure 4.5: </span><span class='content'>Circuit for <span class='mathjax-inline'>\(f(x, y, z) = xy' + x'yz + z'\)</span>.</span></figcaption><!-- tex4ht:label?: x1-23001r5  -->
                                                                          

                                                                          
   </figure>
<!-- l. 1072 --><p class='indent'>   The circuit above is the implementation of the function <span class='mathjax-inline'>\(f\)</span>. Now, suppose that
we would like to compute <span class='mathjax-inline'>\(f(1, 1, 0)\)</span> first: so, we need to constantly feed the electrical
signals <span class='mathjax-inline'>\(5V\)</span>, <span class='mathjax-inline'>\(5V\)</span>, and <span class='mathjax-inline'>\(0V\)</span>, respectively. As long as we keep feeding these signals to the circuit
the answer is going to come out as <span class='mathjax-inline'>\(5V\)</span>, which is equivalent to the boolean value of 1.
Then, the next second we change the voltages accross the input channels so the
the input now represents <span class='mathjax-inline'>\(x=0\)</span>, <span class='mathjax-inline'>\(y=1\)</span>, and <span class='mathjax-inline'>\(z=1\)</span>. What do we expect to see at the output?
Obviously, still <span class='mathjax-inline'>\(5V\)</span> or boolean 1. Is it going to appear immediatly, though? No, not
at all. Let’s see why.
</p><!-- l. 1074 --><p class='indent'>   It takes some time for the electricity to travel accross wire. The longer the
wire, the more time it needs to reach the destination. This is called a <span class='cmbx-12'>delay</span>. I
think, this is pretty intuitive thing to think about. For simplicity, let’s assume
that for the electricity to flow past the wires and transistors inside each logic gate
is fixed at 1ns. We can conclude three things now from this information
alone:
      </p><ol class='enumerate1'>
<li class='enumerate' id='x1-23003x1'>It must have taken ?ns to compute <span class='mathjax-inline'>\(f(1, 1, 0)\)</span> in the first place; so, within the
      ?ns the value at the output wire must have been unreliably because the
      calculation was not actually done by the circuit.
      </li>
<li class='enumerate' id='x1-23005x2'>After the first ?ns, the output must have been 0 for the new input (0,
      1, 1). (oh-ooh! we were expecting to see 1…)
      </li>
<li class='enumerate' id='x1-23007x3'>It was only after the first ?ns, that the circuit’s output must have
      stabilized at boolean value 1.</li></ol>
<!-- l. 1082 --><p class='indent'>   Here is the timing diagram to illustrate this process more clearly:
</p>
   <figure class='figure' id='x1-23008r6'><span id='timing-diagram-for-the-function-f'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<div class='minipage'><!-- l. 1087 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/timing_intro2.png' width='95%' />                                </p></div> <div class='minipage'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/timing_intro2_diagram.png' width='95%' />                                           </div>
<figcaption class='caption'><span class='id'>Figure 4.6: </span><span class='content'>Timing diagram for the function <span class='mathjax-inline'>\(f\)</span>.</span></figcaption><!-- tex4ht:label?: x1-23008r6  -->
                                                                          

                                                                          
   </figure>
<!-- l. 1097 --><p class='indent'>   Now, you may get the intuition why timing is important for circuitry. It is
because the circuitry does not have a way to be silent until it finished the
calculations completely. Instead, it always outputs something: 0 or 1 (this is not
completely true, but for the sake of simplicity let’s assume that it is for a moment;
thank you). Moreover, if we did not know the least amoung of time it needed to
fully calculate <span class='mathjax-inline'>\(f(0, 1, 1)\)</span> (that is ?ns in our example), we could have probed the output
sooner (for example, after ?ns) and got the wrong result. Such short-term
oscillating behavior of circuits is called a <span class='cmbx-12'>glitch</span>, and for us to avoid circuit
glitches, we need to know how much we should wait for the circuit’s output to
stabilize so that we do not probe the output wire while the circuit is still glitching
potentially.
</p><!-- l. 1099 --><p class='indent'>   Here I am going to talk about only two types of delays: (1) propagation delay
and (2) contamination delay. <span class='cmbx-12'>Propagation delay </span>is the maximum amount of
time that electicity needs to travel from input to output. In our example, the
propagation delay is <span class='mathjax-inline'>\(\text {(AND)} = \)</span>ns <span class='cmbx-12'>Contamination delay </span>is the minimum amount of time
that electricity needs to travel from input to output of the circuit. In our example,
the contamination delay is <span class='mathjax-inline'>\(\text {OR} = \)</span>ns. The longest and shortest paths are shown with red
and green colors below to indicate propagation and contamination delays,
respectively:
</p>
   <figure class='figure' id='x1-23009r7'><span id='the-red-path-for-propagation-delay-green-path-for-contamination-delay'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 1103 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/timing_intro3.png' width='85%' />
</p>
<figcaption class='caption'><span class='id'>Figure 4.7: </span><span class='content'>The red path for propagation delay, green path for contamination
delay</span></figcaption><!-- tex4ht:label?: x1-23009r7  -->
                                                                          

                                                                          
   </figure>
<!-- l. 1108 --><p class='indent'>   The notion of delays will become more important as we move forward in the
book toward building a real functional computer from scratch<span class='mathjax-inline'>\({}^*\)</span>.
                                                                          

                                                                          
</p>
   <h2 class='chapterHead' id='sequential-logic'><span class='titlemark'>Chapter 5</span><br /><a id='x1-240005'></a>Sequential Logic</h2>
<!-- l. 1111 --><p class='noindent'>We have learned about the combinational logic: it is a logic to compute output
only by using current inputs without taking into account knowledge of
the past. In contrast, <span class='cmbx-12'>Sequential logic </span>is a logic that also (may) takes
the knowledge of the past into account as well while computing the final
output. In this sense, it is more general kind of logic than the combinational
logic.
</p><!-- l. 1113 --><p class='indent'>   Essential sequential circuits for building a computer are:
      </p><ol class='enumerate1'>
<li class='enumerate' id='x1-24002x1'>Clock
      </li>
<li class='enumerate' id='x1-24004x2'>Memory
      </li>
<li class='enumerate' id='x1-24006x3'>Counter</li></ol>
   
<!-- l. 1121 --><p class='noindent'><span class='paragraphHead' id='synchronous-and-asynchronous-circuits'><a id='x1-25000'></a><span class='cmbx-12'>Synchronous and Asynchronous circuits.</span></span>
   There are two subtypes of sequential circuits: (1) <span class='cmti-12'>synchronous </span>and
(2) <span class='cmti-12'>asynchronous </span>circuit. Their definitions and differences between them
will become more obvious as you learn about the notion of <span class='cmti-12'>clock </span>and
<span class='cmti-12'>memory</span>.
   
</p>
   <h3 class='sectionHead' id='finite-state-machine-fsm'><span class='titlemark'>5.1   </span> <a id='x1-260005.1'></a>Finite State Machine (FSM)</h3>
                                                                          

                                                                          
<!-- l. 1125 --><p class='noindent'>Not all processes are combinational inherently. It means that there are processes
that require taking into account some information from the past while computing
an output. For example, you can never use solely combinational logic to decide
whether a turnstile would have allowed a person to pass through or hold them by
knowing person’s current action/input on the turnstile. The set of all
possible actions/inputs on the turnstile system is: <span class='cmti-12'>using-turnstile-pass </span>and
<span class='cmti-12'>turning-turnstile-arm</span>. Well, if I asked you what would happen if the person tried
<span class='cmti-12'>turning-turnstile-arm</span>, you would not be able to answer this questions since there
is simply not enough information to be able to answer correctly: you should know
whether the person took the <span class='cmti-12'>using-turnstile-pass</span>, which means buying a pass
tiket and then activating/unlocking the turnstile with it, action on the
turnstile before trying to turn its arm. Therefore, information about the
current time is not enough to determine the future (simply because we do
not know if the person paid for the turnstile pass or not). If we tried
to build a digital circuit with a single-bit input (that is, if person tried
turning-turnstile-arm (input bit 1) or they did not (input bit 0)) and
a single output that decided the answer of our question (input bit 1 if
the arms turned, and output bit 0, otherwise), we would not be able to
make it purely combinational. This is where the notion of <span class='cmbx-12'>states </span>emerge
naturally. A <span class='cmbx-12'>state </span>is the abstraction of a persistent storage that keeps track
of knowledge of the past. The picture below illustrates what I mean to
say:
</p>
   <figure class='figure' id='x1-26001r1'><span id='state-diagram-for-a-state-turnstile'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 1129 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/turnstile_state_diagram.png' width='50%' />
</p>
<figcaption class='caption'><span class='id'>Figure 5.1: </span><span class='content'>State diagram for a 2-state turnstile.</span></figcaption><!-- tex4ht:label?: x1-26001r1  -->
                                                                          

                                                                          
   </figure>
<!-- l. 1134 --><p class='indent'>   The two circles shown on the diagram above represent the two distinct (and
<span class='cmti-12'>hidden </span>since we do not know whether the turnstile is unlocked or locked just by
looking at it without any past knowledge) states of the turnstile: <span class='cmti-12'>locked </span>or
<span class='cmti-12'>unlocked</span>. The arrows between the states are called <span class='cmbx-12'>state transitions</span>; they
represent the current input/action of the person using the turnstile. The
turnstile becomes <span class='cmti-12'>unlocked </span>after purchasing and <span class='cmti-12'>using-turnstile-pass</span>, and
becomes <span class='cmti-12'>locked </span>after <span class='cmti-12'>turning-turnstile-arm</span>. If it is already locked and the
person insists <span class='cmti-12'>turning-turnstile-arm</span>, it is obvious that it will keep being in
the same locked state. Likewise, if it is already unlocked and the person
insists <span class='cmti-12'>using-turnstile-pass</span>, it will keep being in the same unlocked state.
What is more important now is that this <span class='cmbx-12'>state diagram </span>is capable of
answering our questions: it is capable of answering the question of “whether
the turnstile arm would have turned or not depending on the person’s
current action on it” is now within the reach because there are these
states that are permenantly embedded in the diagram (as well as in the
digital circuit that we are going to build later), and we get to access the
hidden information about the past (whether person has used its pass
for the turnstile in the most recent past) by keeping track of a single
active state in the diagram throughout time. Note that having multiple
states are different than having multiple actions because actions need to
be provided explicitly while the states are tracked automatically by the
circuit.
</p><!-- l. 1136 --><p class='indent'>   Understanding the notion of states are really important, so I will give another
intuitive example. Imagine you wanted to build a box with 2 buttons, On and Off.
Each button is connected to the circuit inside the box through their own wires.
Pressing each button would send an electric (high or 1) signal to the circuit inside
the box through their corresponding wires as long as the button is pressed,
and releasing them would send 0 signal to the circuit as long as they are
released.
</p>
   <figure class='figure' id='x1-26002r2'><span id='a-mystical-box-with-the-wisdom-of-the-past'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 1140 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/mystic_box.png' width='95%' />
</p>
<figcaption class='caption'><span class='id'>Figure 5.2: </span><span class='content'>A mystical box with the wisdom of the past.</span></figcaption><!-- tex4ht:label?: x1-26002r2  -->
                                                                          

                                                                          
   </figure>
<!-- l. 1145 --><p class='indent'>   This is how you would like the box to operate:
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 1147 --><p class='indent' id='analysis-of-the-mystic-boxs-behavior'>   <a id='x1-26003r1'></a></p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-28'><colgroup id='TBL-28-1g'><col id='TBL-28-1' /></colgroup><colgroup id='TBL-28-2g'><col id='TBL-28-2' /><col id='TBL-28-3' /><col id='TBL-28-4' /><col id='TBL-28-5' /></colgroup><tr id='TBL-28-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-28-1-1' style='white-space:nowrap; text-align:center;'>  Time    </td><td class='td11' id='TBL-28-1-2' style='white-space:nowrap; text-align:center;'>      0          </td><td class='td11' id='TBL-28-1-3' style='white-space:nowrap; text-align:center;'>      1          </td><td class='td11' id='TBL-28-1-4' style='white-space:nowrap; text-align:center;'>      2          </td><td class='td11' id='TBL-28-1-5' style='white-space:nowrap; text-align:center;'>      3          </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-28-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-28-2-1' style='white-space:nowrap; text-align:center;'>  Action   </td><td class='td11' id='TBL-28-2-2' style='white-space:nowrap; text-align:center;'> “On” pressed  </td><td class='td11' id='TBL-28-2-3' style='white-space:nowrap; text-align:center;'> “On” released  </td><td class='td11' id='TBL-28-2-4' style='white-space:nowrap; text-align:center;'>  (no action)   </td><td class='td11' id='TBL-28-2-5' style='white-space:nowrap; text-align:center;'>  (no action)   </td>
</tr><tr id='TBL-28-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-28-3-1' style='white-space:nowrap; text-align:center;'> Box color  </td><td class='td11' id='TBL-28-3-2' style='white-space:nowrap; text-align:center;'>    Green       </td><td class='td11' id='TBL-28-3-3' style='white-space:nowrap; text-align:center;'>    Green       </td><td class='td11' id='TBL-28-3-4' style='white-space:nowrap; text-align:center;'>    Green      </td><td class='td11' id='TBL-28-3-5' style='white-space:nowrap; text-align:center;'>    Green      </td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-28-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-28-4-1' style='white-space:nowrap; text-align:center;'> Time </td><td class='td11' id='TBL-28-4-2' style='white-space:nowrap; text-align:center;'> 4 </td><td class='td11' id='TBL-28-4-3' style='white-space:nowrap; text-align:center;'> 5 </td><td class='td11' id='TBL-28-4-4' style='white-space:nowrap; text-align:center;'> 6 </td><td class='td11' id='TBL-28-4-5' style='white-space:nowrap; text-align:center;'> 7</td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-28-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-28-5-1' style='white-space:nowrap; text-align:center;'>  Action   </td><td class='td11' id='TBL-28-5-2' style='white-space:nowrap; text-align:center;'> “Off” pressed  </td><td class='td11' id='TBL-28-5-3' style='white-space:nowrap; text-align:center;'> “Off” released  </td><td class='td11' id='TBL-28-5-4' style='white-space:nowrap; text-align:center;'>  (no action)   </td><td class='td11' id='TBL-28-5-5' style='white-space:nowrap; text-align:center;'> “On” pressed  </td>
</tr><tr id='TBL-28-6-' style='vertical-align:baseline;'><td class='td11' id='TBL-28-6-1' style='white-space:nowrap; text-align:center;'> Box color  </td><td class='td11' id='TBL-28-6-2' style='white-space:nowrap; text-align:center;'>     Red        </td><td class='td11' id='TBL-28-6-3' style='white-space:nowrap; text-align:center;'>     Red        </td><td class='td11' id='TBL-28-6-4' style='white-space:nowrap; text-align:center;'>     Red        </td><td class='td11' id='TBL-28-6-5' style='white-space:nowrap; text-align:center;'>    Green      </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-28-7-' style='vertical-align:baseline;'><td class='td11' id='TBL-28-7-1' style='white-space:nowrap; text-align:center;'>   Time    </td><td class='td11' id='TBL-28-7-2' style='white-space:nowrap; text-align:center;'>      8          </td><td class='td11' id='TBL-28-7-3' style='white-space:nowrap; text-align:center;'>      9          </td><td class='td11' id='TBL-28-7-4' style='white-space:nowrap; text-align:center;'>      10         </td><td class='td11' id='TBL-28-7-5' style='white-space:nowrap; text-align:center;'>      11         </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-28-8-' style='vertical-align:baseline;'><td class='td11' id='TBL-28-8-1' style='white-space:nowrap; text-align:center;'>  Action   </td><td class='td11' id='TBL-28-8-2' style='white-space:nowrap; text-align:center;'> “On released”  </td><td class='td11' id='TBL-28-8-3' style='white-space:nowrap; text-align:center;'> “Off” pressed  </td><td class='td11' id='TBL-28-8-4' style='white-space:nowrap; text-align:center;'> “Off” pressed  </td><td class='td11' id='TBL-28-8-5' style='white-space:nowrap; text-align:center;'>  (no action)   </td>
</tr><tr id='TBL-28-9-' style='vertical-align:baseline;'><td class='td11' id='TBL-28-9-1' style='white-space:nowrap; text-align:center;'> Box color  </td><td class='td11' id='TBL-28-9-2' style='white-space:nowrap; text-align:center;'>    Green       </td><td class='td11' id='TBL-28-9-3' style='white-space:nowrap; text-align:center;'>     Red        </td><td class='td11' id='TBL-28-9-4' style='white-space:nowrap; text-align:center;'>     Red        </td><td class='td11' id='TBL-28-9-5' style='white-space:nowrap; text-align:center;'>     Red        </td></tr></table></div>
<figcaption class='caption'><span class='id'>Table 5.1: </span><span class='content'>Analysis of the mystic box’s behavior.</span></figcaption><!-- tex4ht:label?: x1-26003r1  -->
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 1172 --><p class='indent'>   When a button is released, it no longer sends the high signal (input bit 1) to
the circuit, and therefore, its input becomes low (input bit 0). Taking no
action after releasing a button also performs the same thing since both
buttons are in a released state or “0 state”. Since any combinational logic is
capable of representing pure mathemetical functions (that is, a mapping is a
mathematical function if and only if there exists a single unique <span class='mathjax-inline'>\(y\)</span> value
for each <span class='mathjax-inline'>\(x\)</span> such that <span class='mathjax-inline'>\(f(x) = y\)</span>). Due to this “past-independent” behavior, the best
combinational circuit we could have made for this box would behave as shown
below:
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 1174 --><p class='indent' id='limitation-of-any-combinational-circuit-compared-to-the-mystical-box'>   <a id='x1-26004r2'></a></p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-29'><colgroup id='TBL-29-1g'><col id='TBL-29-1' /></colgroup><colgroup id='TBL-29-2g'><col id='TBL-29-2' /><col id='TBL-29-3' /><col id='TBL-29-4' /><col id='TBL-29-5' /></colgroup><tr id='TBL-29-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-29-1-1' style='white-space:nowrap; text-align:center;'>  Time    </td><td class='td11' id='TBL-29-1-2' style='white-space:nowrap; text-align:center;'>      0          </td><td class='td11' id='TBL-29-1-3' style='white-space:nowrap; text-align:center;'>      1          </td><td class='td11' id='TBL-29-1-4' style='white-space:nowrap; text-align:center;'>     2        </td><td class='td11' id='TBL-29-1-5' style='white-space:nowrap; text-align:center;'>      3          </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-29-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-29-2-1' style='white-space:nowrap; text-align:center;'>  Action   </td><td class='td11' id='TBL-29-2-2' style='white-space:nowrap; text-align:center;'> “On” pressed  </td><td class='td11' id='TBL-29-2-3' style='white-space:nowrap; text-align:center;'> “On” released  </td><td class='td11' id='TBL-29-2-4' style='white-space:nowrap; text-align:center;'> (no action)  </td><td class='td11' id='TBL-29-2-5' style='white-space:nowrap; text-align:center;'>  (no action)   </td>
</tr><tr id='TBL-29-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-29-3-1' style='white-space:nowrap; text-align:center;'> Box color  </td><td class='td11' id='TBL-29-3-2' style='white-space:nowrap; text-align:center;'>    Green       </td><td class='td11' id='TBL-29-3-3' style='white-space:nowrap; text-align:center;'>      X          </td><td class='td11' id='TBL-29-3-4' style='white-space:nowrap; text-align:center;'>     X        </td><td class='td11' id='TBL-29-3-5' style='white-space:nowrap; text-align:center;'>      X         </td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-29-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-29-4-1' style='white-space:nowrap; text-align:center;'> Time </td><td class='td11' id='TBL-29-4-2' style='white-space:nowrap; text-align:center;'> 4 </td><td class='td11' id='TBL-29-4-3' style='white-space:nowrap; text-align:center;'> 5 </td><td class='td11' id='TBL-29-4-4' style='white-space:nowrap; text-align:center;'> 6 </td><td class='td11' id='TBL-29-4-5' style='white-space:nowrap; text-align:center;'> 7</td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-29-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-29-5-1' style='white-space:nowrap; text-align:center;'>  Action   </td><td class='td11' id='TBL-29-5-2' style='white-space:nowrap; text-align:center;'> “Off” pressed  </td><td class='td11' id='TBL-29-5-3' style='white-space:nowrap; text-align:center;'> “Off” released  </td><td class='td11' id='TBL-29-5-4' style='white-space:nowrap; text-align:center;'> (no action)  </td><td class='td11' id='TBL-29-5-5' style='white-space:nowrap; text-align:center;'> “On” pressed  </td>
</tr><tr id='TBL-29-6-' style='vertical-align:baseline;'><td class='td11' id='TBL-29-6-1' style='white-space:nowrap; text-align:center;'> Box color  </td><td class='td11' id='TBL-29-6-2' style='white-space:nowrap; text-align:center;'>     Red        </td><td class='td11' id='TBL-29-6-3' style='white-space:nowrap; text-align:center;'>      X          </td><td class='td11' id='TBL-29-6-4' style='white-space:nowrap; text-align:center;'>     X        </td><td class='td11' id='TBL-29-6-5' style='white-space:nowrap; text-align:center;'>    Green      </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-29-7-' style='vertical-align:baseline;'><td class='td11' id='TBL-29-7-1' style='white-space:nowrap; text-align:center;'>   Time    </td><td class='td11' id='TBL-29-7-2' style='white-space:nowrap; text-align:center;'>      8          </td><td class='td11' id='TBL-29-7-3' style='white-space:nowrap; text-align:center;'>      9          </td><td class='td11' id='TBL-29-7-4' style='white-space:nowrap; text-align:center;'>     10       </td><td class='td11' id='TBL-29-7-5' style='white-space:nowrap; text-align:center;'>      11         </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-29-8-' style='vertical-align:baseline;'><td class='td11' id='TBL-29-8-1' style='white-space:nowrap; text-align:center;'>  Action   </td><td class='td11' id='TBL-29-8-2' style='white-space:nowrap; text-align:center;'> “On released”  </td><td class='td11' id='TBL-29-8-3' style='white-space:nowrap; text-align:center;'>  (no action)   </td><td class='td11' id='TBL-29-8-4' style='white-space:nowrap; text-align:center;'> (no action)  </td><td class='td11' id='TBL-29-8-5' style='white-space:nowrap; text-align:center;'> “Off” pressed  </td>
</tr><tr id='TBL-29-9-' style='vertical-align:baseline;'><td class='td11' id='TBL-29-9-1' style='white-space:nowrap; text-align:center;'> Box color  </td><td class='td11' id='TBL-29-9-2' style='white-space:nowrap; text-align:center;'>      X          </td><td class='td11' id='TBL-29-9-3' style='white-space:nowrap; text-align:center;'>      X          </td><td class='td11' id='TBL-29-9-4' style='white-space:nowrap; text-align:center;'>     X        </td><td class='td11' id='TBL-29-9-5' style='white-space:nowrap; text-align:center;'>     Red        </td></tr></table></div>
<figcaption class='caption'><span class='id'>Table 5.2: </span><span class='content'>Limitation of any combinational circuit compared to the mystical
box.</span></figcaption><!-- tex4ht:label?: x1-26004r2  -->
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 1199 --><p class='indent'>   The <span class='cmti-12'>“On” pressed </span>action represents input (1, 0) and the <span class='cmti-12'>“Off” pressed </span>action
represents input (0, 1); <span class='cmti-12'>“On” released</span>, <span class='cmti-12'>“Off” released</span>, <span class='cmti-12'>(no action) </span>actions
represent input (0, 0), and we do not allow pressing both buttons simultaneously,
making (1, 1) input impossible. Since releasing each button, as well as performing
no action after the release, send the input (0, 0) to the circuit inside the box
through the wires connected to the “On” and “Off” buttons respectively, we
would not be allowed to map these inputs to different outputs under the law of
combinational logic (recall that there must be exactly one <span class='mathjax-inline'>\(y\)</span> value for input (0, 0)
for any pure combinational function). This is shown in the table above by marking
the output for (0, 0) input with <span class='cmbx-12'>X </span>symbol. So, if we say let <span class='cmbx-12'>X </span>be the <span class='cmbx-12'>Red </span>light,
then time steps 1, 2, 3, 8 would not produce the expected behavior of
this mystical box that we wanted to build; and if we say let <span class='cmbx-12'>X </span>be the
<span class='cmbx-12'>Green </span>light, then time steps 5, 6, 11 would not match with the expected
behavior.
</p><!-- l. 1201 --><p class='indent'>   By going through the two examples provided above, one can understand the
problem: using combinational logic for certain types of tasks is just not
going to cut it! We need something more powerful, and that is obviously
<span class='cmbx-12'>sequential logic</span>. <span class='cmbx-12'>Finite state machine </span>or (FSM) is a machine that performs
sequential logic by using its sequential circuitry. The reason we call it “finite
state” is because any FSM’s state diagram must consists of a finite set of
states. There are two main types of FSMs: <span class='cmbx-12'>Moore </span>FSM and <span class='cmbx-12'>Mealy</span>
FSM. We are going to learn more about them through our mystical box
example.
   
</p>
   <h4 class='subsectionHead' id='moore-and-mealy-fsms'><span class='titlemark'>5.1.1   </span> <a id='x1-270005.1.1'></a>Moore and Mealy FSMs</h4>
<!-- l. 1204 --><p class='noindent'>There are two main types of FSMs as mentioned previously. Both types (Moore
and Mealy) of FSMs are pretty much the same: they use nodes to represent states
and arrows to represent transitions between the states. The main difference
between them is how they output something. Moore FSMs output a value from
the next active state, but Mealy FSM output upon transitioning to the next state.
Let’s see what this really means.
</p>
                                                                          

                                                                          
   <figure class='figure' id='x1-27001r3'><span id='moore-fsm-for-the-mystic-box'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 1208 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/mystic_box_moore.png' width='50%' />
</p>
<figcaption class='caption'><span class='id'>Figure 5.3: </span><span class='content'>Moore FSM for the mystic box.</span></figcaption><!-- tex4ht:label?: x1-27001r3  -->
                                                                          

                                                                          
   </figure>
<!-- l. 1213 --><p class='indent'>   The state diagram shown above is a Moore FSM for our mystical box example.
Each node contains two pieces of information in it: (1) state’s name and (2)
output value. Since this is a Moore machine, output values are written inside the
states with the following convention: [STATE NAME] / [<span class='cmbx-12'>STATE OUTPUT</span>].
One important thing here is that we also must know the initial state that is
active. Let’s suppose that the initial state was the “Green state”, and the input
was (0, 1) - that is, “On” released and “Off” pressed. The system will
transition to the next active state upon receiving this input, and the
active state will be the “Red state” with “<span class='cmbx-12'>Red</span>” output. After the Moore
machine transitions from the “Green state” to the “Red state”, it will
output “<span class='cmbx-12'>Red</span>”, meaning that the box’s color will be red. While it is in the
“Red state”, performing (0, 0) – <span class='cmti-12'>“Off” released</span>, <span class='cmti-12'>(no action)</span>, or <span class='cmti-12'>“On”
released </span>– will transition back to the same “Red state”, resulting with
the same “<span class='cmbx-12'>Red</span>” color output. Now, let’s see the Mealy version of this
machine.
</p>
   <figure class='figure' id='x1-27002r4'><span id='mealy-fsm-for-the-mystic-box'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 1217 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/mystic_box_mealy.png' width='50%' />
</p>
<figcaption class='caption'><span class='id'>Figure 5.4: </span><span class='content'>Mealy FSM for the mystic box.</span></figcaption><!-- tex4ht:label?: x1-27002r4  -->
                                                                          

                                                                          
   </figure>
<!-- l. 1222 --><p class='indent'>   The state diagram above is the Mealy version of our mystic box. The only
difference is that it is not the states that output “Green” or “Red”, but
rather the transitions/arrows. In the Mealy FSM representation, if the
currently active state is the “Red state” and the input is (1, 0) – “On”
pressed, “Off” released“ – the machine will output ”Green“ first and then
transition to the ”Green state“. Hopefully, these examples made it easier for
the readers to informally understand the difference between Moore and
Mealy machines. Even though in this simple mystic box example, the
difference was pretty much in the written representation of the state diagrams
for these two types of FSMs, there are cases where switching from one
type of FSM to another reduces or increases the number of states, and
therefore, simplifies or complicates the state transitioning logic. Now, we
will see how we can simplify unnecessarily complicated state diagrams,
resulting in easier and cheaper construction of Moore/Mealy FSMs in
practice.
   
</p>
   <h4 class='subsectionHead' id='fsm-simplification'><span class='titlemark'>5.1.2   </span> <a id='x1-280005.1.2'></a>FSM Simplification</h4>
<!-- l. 1225 --><p class='noindent'>For simplifying FSMs, we will use tabular representation instead of the
diagramatic ones given as examples previously. Let’s consider the following Moore
FSM below:
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 1227 --><p class='indent' id='tabular-representation-for-a-moore-fsm'>   <a id='x1-28001r3'></a></p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-30'><colgroup id='TBL-30-1g'><col id='TBL-30-1' /></colgroup><colgroup id='TBL-30-2g'><col id='TBL-30-2' /></colgroup><colgroup id='TBL-30-3g'><col id='TBL-30-3' /></colgroup><colgroup id='TBL-30-4g'><col id='TBL-30-4' /></colgroup><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-30-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-30-1-1' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>State </span></td><td class='td11' id='TBL-30-1-2' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>Input </span></td><td class='td11' id='TBL-30-1-3' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>Next state </span></td><td class='td11' id='TBL-30-1-4' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>Output </span></td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-30-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-30-2-1' style='white-space:nowrap; text-align:center;'>   <div class='multirow'><!--  rows=256  -->
a</div>     </td><td class='td11' id='TBL-30-2-2' style='white-space:nowrap; text-align:center;'>   0     </td><td class='td11' id='TBL-30-2-3' style='white-space:nowrap; text-align:center;'>     b         </td><td class='td11' id='TBL-30-2-4' style='white-space:nowrap; text-align:center;'>    <div class='multirow'><!--  rows=256  -->
1</div>      </td></tr><tr id='TBL-30-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-30-3-1' style='white-space:nowrap; text-align:center;'> </td><td class='td11' id='TBL-30-3-2' style='white-space:nowrap; text-align:center;'> 1 </td><td class='td11' id='TBL-30-3-3' style='white-space:nowrap; text-align:center;'> c </td><td class='td11' id='TBL-30-3-4' style='white-space:nowrap; text-align:center;'></td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-30-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-30-4-1' style='white-space:nowrap; text-align:center;'>   <div class='multirow'><!--  rows=256  -->
b</div>     </td><td class='td11' id='TBL-30-4-2' style='white-space:nowrap; text-align:center;'>   0     </td><td class='td11' id='TBL-30-4-3' style='white-space:nowrap; text-align:center;'>     b         </td><td class='td11' id='TBL-30-4-4' style='white-space:nowrap; text-align:center;'>    <div class='multirow'><!--  rows=256  -->
0</div>      </td></tr><tr id='TBL-30-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-30-5-1' style='white-space:nowrap; text-align:center;'> </td><td class='td11' id='TBL-30-5-2' style='white-space:nowrap; text-align:center;'> 1 </td><td class='td11' id='TBL-30-5-3' style='white-space:nowrap; text-align:center;'> d </td><td class='td11' id='TBL-30-5-4' style='white-space:nowrap; text-align:center;'></td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-30-6-' style='vertical-align:baseline;'><td class='td11' id='TBL-30-6-1' style='white-space:nowrap; text-align:center;'>   <div class='multirow'><!--  rows=256  -->
c</div>     </td><td class='td11' id='TBL-30-6-2' style='white-space:nowrap; text-align:center;'>   0     </td><td class='td11' id='TBL-30-6-3' style='white-space:nowrap; text-align:center;'>     b         </td><td class='td11' id='TBL-30-6-4' style='white-space:nowrap; text-align:center;'>    <div class='multirow'><!--  rows=256  -->
1</div>      </td>
</tr><tr id='TBL-30-7-' style='vertical-align:baseline;'><td class='td11' id='TBL-30-7-1' style='white-space:nowrap; text-align:center;'>        </td><td class='td11' id='TBL-30-7-2' style='white-space:nowrap; text-align:center;'>   1     </td><td class='td11' id='TBL-30-7-3' style='white-space:nowrap; text-align:center;'>      c         </td><td class='td11' id='TBL-30-7-4' style='white-space:nowrap; text-align:center;'>         </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-30-8-' style='vertical-align:baseline;'><td class='td11' id='TBL-30-8-1' style='white-space:nowrap; text-align:center;'>   <div class='multirow'><!--  rows=256  -->
d</div>     </td><td class='td11' id='TBL-30-8-2' style='white-space:nowrap; text-align:center;'>   0     </td><td class='td11' id='TBL-30-8-3' style='white-space:nowrap; text-align:center;'>     b         </td><td class='td11' id='TBL-30-8-4' style='white-space:nowrap; text-align:center;'>    <div class='multirow'><!--  rows=256  -->
0</div>      </td>
</tr><tr id='TBL-30-9-' style='vertical-align:baseline;'><td class='td11' id='TBL-30-9-1' style='white-space:nowrap; text-align:center;'>        </td><td class='td11' id='TBL-30-9-2' style='white-space:nowrap; text-align:center;'>   1     </td><td class='td11' id='TBL-30-9-3' style='white-space:nowrap; text-align:center;'>      c         </td><td class='td11' id='TBL-30-9-4' style='white-space:nowrap; text-align:center;'>         </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-30-10-' style='vertical-align:baseline;'><td class='td11' id='TBL-30-10-1' style='white-space:nowrap; text-align:center;'>   <div class='multirow'><!--  rows=256  -->
e</div>     </td><td class='td11' id='TBL-30-10-2' style='white-space:nowrap; text-align:center;'>   0     </td><td class='td11' id='TBL-30-10-3' style='white-space:nowrap; text-align:center;'>     b         </td><td class='td11' id='TBL-30-10-4' style='white-space:nowrap; text-align:center;'>    <div class='multirow'><!--  rows=256  -->
1</div>      </td>
</tr><tr id='TBL-30-11-' style='vertical-align:baseline;'><td class='td11' id='TBL-30-11-1' style='white-space:nowrap; text-align:center;'>        </td><td class='td11' id='TBL-30-11-2' style='white-space:nowrap; text-align:center;'>   1     </td><td class='td11' id='TBL-30-11-3' style='white-space:nowrap; text-align:center;'>      a         </td><td class='td11' id='TBL-30-11-4' style='white-space:nowrap; text-align:center;'>         </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr></table>                                                               </div>
<figcaption class='caption'><span class='id'>Table 5.3: </span><span class='content'>Tabular representation for a Moore FSM.</span></figcaption><!-- tex4ht:label?: x1-28001r3  -->
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 1254 --><p class='indent'>   Here are the rules to simplify Moore machine:
      </p><ol class='enumerate1'>
<li class='enumerate' id='x1-28003x1'>Find two states <span class='cmbx-12'>p </span>and <span class='cmbx-12'>q </span>such that <span class='cmbx-12'>output of p = output of q</span>, and
      <span class='cmbx-12'>p </span><span class='mathjax-inline'>\(\xrightarrow {x}\) </span><span class='cmbx-12'>s </span>and <span class='cmbx-12'>q </span><span class='mathjax-inline'>\(\xrightarrow {x}\) </span><span class='cmbx-12'>s </span>for all (x, s) pairs.
      </li>
<li class='enumerate' id='x1-28005x2'>When such two states exist, they are equivalent – remove <span class='cmbx-12'>q </span>and replace
      all of its occurances in the table with <span class='cmbx-12'>p</span>.
      </li>
<li class='enumerate' id='x1-28007x3'>Repeat the same process from start until no two equivalent states are
      found.</li></ol>
<!-- l. 1262 --><p class='indent'>   Let’s now try to simplify the Moore FSM. The first thing you may notice that
the states <span class='cmbx-12'>a</span>, <span class='cmbx-12'>c</span>, and <span class='cmbx-12'>e </span>have the same output value, which is 1. However, only <span class='cmbx-12'>a</span>
and <span class='cmbx-12'>c </span>transitions to <span class='cmbx-12'>b </span>on input 0 and <span class='cmbx-12'>c </span>on input 1. Therefore, these two
states are (semantically) equivalent. Let’s remove the third row from
the table and replace all occurances of <span class='cmbx-12'>c </span>with <span class='cmbx-12'>a </span>as shown in the table
below:
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 1264 --><p class='indent' id='tabular-representation-for-a-moore-fsm-after-one-step-of-simplification'>   <a id='x1-28008r4'></a></p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-31'><colgroup id='TBL-31-1g'><col id='TBL-31-1' /></colgroup><colgroup id='TBL-31-2g'><col id='TBL-31-2' /></colgroup><colgroup id='TBL-31-3g'><col id='TBL-31-3' /></colgroup><colgroup id='TBL-31-4g'><col id='TBL-31-4' /></colgroup><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-31-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-31-1-1' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>State </span></td><td class='td11' id='TBL-31-1-2' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>Input </span></td><td class='td11' id='TBL-31-1-3' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>Next state </span></td><td class='td11' id='TBL-31-1-4' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>Output </span></td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-31-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-31-2-1' style='white-space:nowrap; text-align:center;'>   <div class='multirow'><!--  rows=256  -->
a</div>     </td><td class='td11' id='TBL-31-2-2' style='white-space:nowrap; text-align:center;'>   0     </td><td class='td11' id='TBL-31-2-3' style='white-space:nowrap; text-align:center;'>     b         </td><td class='td11' id='TBL-31-2-4' style='white-space:nowrap; text-align:center;'>    <div class='multirow'><!--  rows=256  -->
1</div>      </td></tr><tr id='TBL-31-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-31-3-1' style='white-space:nowrap; text-align:center;'> </td><td class='td11' id='TBL-31-3-2' style='white-space:nowrap; text-align:center;'> 1 </td><td class='td11' id='TBL-31-3-3' style='white-space:nowrap; text-align:center;'> a </td><td class='td11' id='TBL-31-3-4' style='white-space:nowrap; text-align:center;'></td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-31-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-31-4-1' style='white-space:nowrap; text-align:center;'>   <div class='multirow'><!--  rows=256  -->
b</div>     </td><td class='td11' id='TBL-31-4-2' style='white-space:nowrap; text-align:center;'>   0     </td><td class='td11' id='TBL-31-4-3' style='white-space:nowrap; text-align:center;'>     b         </td><td class='td11' id='TBL-31-4-4' style='white-space:nowrap; text-align:center;'>    <div class='multirow'><!--  rows=256  -->
0</div>      </td></tr><tr id='TBL-31-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-31-5-1' style='white-space:nowrap; text-align:center;'> </td><td class='td11' id='TBL-31-5-2' style='white-space:nowrap; text-align:center;'> 1 </td><td class='td11' id='TBL-31-5-3' style='white-space:nowrap; text-align:center;'> d </td><td class='td11' id='TBL-31-5-4' style='white-space:nowrap; text-align:center;'></td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-31-6-' style='vertical-align:baseline;'><td class='td11' id='TBL-31-6-1' style='white-space:nowrap; text-align:center;'>   <div class='multirow'><!--  rows=256  -->
d</div>     </td><td class='td11' id='TBL-31-6-2' style='white-space:nowrap; text-align:center;'>   0     </td><td class='td11' id='TBL-31-6-3' style='white-space:nowrap; text-align:center;'>     b         </td><td class='td11' id='TBL-31-6-4' style='white-space:nowrap; text-align:center;'>    <div class='multirow'><!--  rows=256  -->
0</div>      </td>
</tr><tr id='TBL-31-7-' style='vertical-align:baseline;'><td class='td11' id='TBL-31-7-1' style='white-space:nowrap; text-align:center;'>        </td><td class='td11' id='TBL-31-7-2' style='white-space:nowrap; text-align:center;'>   1     </td><td class='td11' id='TBL-31-7-3' style='white-space:nowrap; text-align:center;'>      a         </td><td class='td11' id='TBL-31-7-4' style='white-space:nowrap; text-align:center;'>         </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-31-8-' style='vertical-align:baseline;'><td class='td11' id='TBL-31-8-1' style='white-space:nowrap; text-align:center;'>   <div class='multirow'><!--  rows=256  -->
e</div>     </td><td class='td11' id='TBL-31-8-2' style='white-space:nowrap; text-align:center;'>   0     </td><td class='td11' id='TBL-31-8-3' style='white-space:nowrap; text-align:center;'>     b         </td><td class='td11' id='TBL-31-8-4' style='white-space:nowrap; text-align:center;'>    <div class='multirow'><!--  rows=256  -->
1</div>      </td>
</tr><tr id='TBL-31-9-' style='vertical-align:baseline;'><td class='td11' id='TBL-31-9-1' style='white-space:nowrap; text-align:center;'>        </td><td class='td11' id='TBL-31-9-2' style='white-space:nowrap; text-align:center;'>   1     </td><td class='td11' id='TBL-31-9-3' style='white-space:nowrap; text-align:center;'>      a         </td><td class='td11' id='TBL-31-9-4' style='white-space:nowrap; text-align:center;'>         </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr></table>                                                               </div>
<figcaption class='caption'><span class='id'>Table 5.4:  </span><span class='content'>Tabular  representation  for  a  Moore  FSM  after  one  step  of
simplification.</span></figcaption><!-- tex4ht:label?: x1-28008r4  -->
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 1288 --><p class='indent'>   From the table above you may notice that the states <span class='cmbx-12'>a</span>, <span class='cmbx-12'>d</span>, and <span class='cmbx-12'>e </span>transition to
<span class='cmbx-12'>b </span>on input 0 and to <span class='cmbx-12'>a </span>on input 1. However, only <span class='cmbx-12'>a </span>and <span class='cmbx-12'>e </span>output the same value,
which is 1. Therefore, these two states are equivalent. Finally, the simplified
Moore FSM, which still has the same input-output behavior, is given on the table
below:
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 1290 --><p class='indent' id='simplified-moore-fsm'>   <a id='x1-28009r5'></a></p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-32'><colgroup id='TBL-32-1g'><col id='TBL-32-1' /></colgroup><colgroup id='TBL-32-2g'><col id='TBL-32-2' /></colgroup><colgroup id='TBL-32-3g'><col id='TBL-32-3' /></colgroup><colgroup id='TBL-32-4g'><col id='TBL-32-4' /></colgroup><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-32-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-32-1-1' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>State </span></td><td class='td11' id='TBL-32-1-2' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>Input </span></td><td class='td11' id='TBL-32-1-3' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>Next state </span></td><td class='td11' id='TBL-32-1-4' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>Output </span></td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-32-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-32-2-1' style='white-space:nowrap; text-align:center;'>   <div class='multirow'><!--  rows=256  -->
a</div>     </td><td class='td11' id='TBL-32-2-2' style='white-space:nowrap; text-align:center;'>   0     </td><td class='td11' id='TBL-32-2-3' style='white-space:nowrap; text-align:center;'>     b         </td><td class='td11' id='TBL-32-2-4' style='white-space:nowrap; text-align:center;'>    <div class='multirow'><!--  rows=256  -->
1</div>      </td></tr><tr id='TBL-32-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-32-3-1' style='white-space:nowrap; text-align:center;'> </td><td class='td11' id='TBL-32-3-2' style='white-space:nowrap; text-align:center;'> 1 </td><td class='td11' id='TBL-32-3-3' style='white-space:nowrap; text-align:center;'> a </td><td class='td11' id='TBL-32-3-4' style='white-space:nowrap; text-align:center;'></td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-32-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-32-4-1' style='white-space:nowrap; text-align:center;'>   <div class='multirow'><!--  rows=256  -->
b</div>     </td><td class='td11' id='TBL-32-4-2' style='white-space:nowrap; text-align:center;'>   0     </td><td class='td11' id='TBL-32-4-3' style='white-space:nowrap; text-align:center;'>     b         </td><td class='td11' id='TBL-32-4-4' style='white-space:nowrap; text-align:center;'>    <div class='multirow'><!--  rows=256  -->
0</div>      </td>
</tr><tr id='TBL-32-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-32-5-1' style='white-space:nowrap; text-align:center;'>        </td><td class='td11' id='TBL-32-5-2' style='white-space:nowrap; text-align:center;'>   1     </td><td class='td11' id='TBL-32-5-3' style='white-space:nowrap; text-align:center;'>     d         </td><td class='td11' id='TBL-32-5-4' style='white-space:nowrap; text-align:center;'>         </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-32-6-' style='vertical-align:baseline;'><td class='td11' id='TBL-32-6-1' style='white-space:nowrap; text-align:center;'>   <div class='multirow'><!--  rows=256  -->
d</div>     </td><td class='td11' id='TBL-32-6-2' style='white-space:nowrap; text-align:center;'>   0     </td><td class='td11' id='TBL-32-6-3' style='white-space:nowrap; text-align:center;'>     b         </td><td class='td11' id='TBL-32-6-4' style='white-space:nowrap; text-align:center;'>    <div class='multirow'><!--  rows=256  -->
0</div>      </td>
</tr><tr id='TBL-32-7-' style='vertical-align:baseline;'><td class='td11' id='TBL-32-7-1' style='white-space:nowrap; text-align:center;'>        </td><td class='td11' id='TBL-32-7-2' style='white-space:nowrap; text-align:center;'>   1     </td><td class='td11' id='TBL-32-7-3' style='white-space:nowrap; text-align:center;'>      a         </td><td class='td11' id='TBL-32-7-4' style='white-space:nowrap; text-align:center;'>         </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr></table>                                                               </div>
<figcaption class='caption'><span class='id'>Table 5.5: </span><span class='content'>Simplified Moore FSM.</span></figcaption><!-- tex4ht:label?: x1-28009r5  -->
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 1311 --><p class='indent'>   Now, let’s consider the following Mealy FSM below (different than previous
Moore machine):
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 1313 --><p class='indent' id='tabular-representation-for-a-mealy-fsm'>   <a id='x1-28010r6'></a></p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-33'><colgroup id='TBL-33-1g'><col id='TBL-33-1' /></colgroup><colgroup id='TBL-33-2g'><col id='TBL-33-2' /></colgroup><colgroup id='TBL-33-3g'><col id='TBL-33-3' /></colgroup><colgroup id='TBL-33-4g'><col id='TBL-33-4' /></colgroup><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-33-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-33-1-1' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>State </span></td><td class='td11' id='TBL-33-1-2' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>Input </span></td><td class='td11' id='TBL-33-1-3' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>Next state </span></td><td class='td11' id='TBL-33-1-4' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>Output </span></td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-33-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-33-2-1' style='white-space:nowrap; text-align:center;'>   <div class='multirow'><!--  rows=256  -->
a</div>     </td><td class='td11' id='TBL-33-2-2' style='white-space:nowrap; text-align:center;'>   0     </td><td class='td11' id='TBL-33-2-3' style='white-space:nowrap; text-align:center;'>     b         </td><td class='td11' id='TBL-33-2-4' style='white-space:nowrap; text-align:center;'>    1      </td></tr><tr id='TBL-33-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-33-3-1' style='white-space:nowrap; text-align:center;'> </td><td class='td11' id='TBL-33-3-2' style='white-space:nowrap; text-align:center;'> 1 </td><td class='td11' id='TBL-33-3-3' style='white-space:nowrap; text-align:center;'> c </td><td class='td11' id='TBL-33-3-4' style='white-space:nowrap; text-align:center;'> 1</td>
</tr><tr id='TBL-33-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-33-4-1' style='white-space:nowrap; text-align:center;'>   <div class='multirow'><!--  rows=256  -->
b</div>     </td><td class='td11' id='TBL-33-4-2' style='white-space:nowrap; text-align:center;'>   0     </td><td class='td11' id='TBL-33-4-3' style='white-space:nowrap; text-align:center;'>     b         </td><td class='td11' id='TBL-33-4-4' style='white-space:nowrap; text-align:center;'>    0      </td></tr><tr id='TBL-33-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-33-5-1' style='white-space:nowrap; text-align:center;'> </td><td class='td11' id='TBL-33-5-2' style='white-space:nowrap; text-align:center;'> 1 </td><td class='td11' id='TBL-33-5-3' style='white-space:nowrap; text-align:center;'> d </td><td class='td11' id='TBL-33-5-4' style='white-space:nowrap; text-align:center;'> 1</td>
</tr><tr id='TBL-33-6-' style='vertical-align:baseline;'><td class='td11' id='TBL-33-6-1' style='white-space:nowrap; text-align:center;'>   <div class='multirow'><!--  rows=256  -->
c</div>     </td><td class='td11' id='TBL-33-6-2' style='white-space:nowrap; text-align:center;'>   0     </td><td class='td11' id='TBL-33-6-3' style='white-space:nowrap; text-align:center;'>     b         </td><td class='td11' id='TBL-33-6-4' style='white-space:nowrap; text-align:center;'>    1      </td>
</tr><tr id='TBL-33-7-' style='vertical-align:baseline;'><td class='td11' id='TBL-33-7-1' style='white-space:nowrap; text-align:center;'>        </td><td class='td11' id='TBL-33-7-2' style='white-space:nowrap; text-align:center;'>   1     </td><td class='td11' id='TBL-33-7-3' style='white-space:nowrap; text-align:center;'>      c         </td><td class='td11' id='TBL-33-7-4' style='white-space:nowrap; text-align:center;'>    1      </td>
</tr><tr id='TBL-33-8-' style='vertical-align:baseline;'><td class='td11' id='TBL-33-8-1' style='white-space:nowrap; text-align:center;'>   <div class='multirow'><!--  rows=256  -->
d</div>     </td><td class='td11' id='TBL-33-8-2' style='white-space:nowrap; text-align:center;'>   0     </td><td class='td11' id='TBL-33-8-3' style='white-space:nowrap; text-align:center;'>      e         </td><td class='td11' id='TBL-33-8-4' style='white-space:nowrap; text-align:center;'>    0      </td>
</tr><tr id='TBL-33-9-' style='vertical-align:baseline;'><td class='td11' id='TBL-33-9-1' style='white-space:nowrap; text-align:center;'>        </td><td class='td11' id='TBL-33-9-2' style='white-space:nowrap; text-align:center;'>   1     </td><td class='td11' id='TBL-33-9-3' style='white-space:nowrap; text-align:center;'>      c         </td><td class='td11' id='TBL-33-9-4' style='white-space:nowrap; text-align:center;'>    1      </td>
</tr><tr id='TBL-33-10-' style='vertical-align:baseline;'><td class='td11' id='TBL-33-10-1' style='white-space:nowrap; text-align:center;'>   <div class='multirow'><!--  rows=256  -->
e</div>     </td><td class='td11' id='TBL-33-10-2' style='white-space:nowrap; text-align:center;'>   0     </td><td class='td11' id='TBL-33-10-3' style='white-space:nowrap; text-align:center;'>      e         </td><td class='td11' id='TBL-33-10-4' style='white-space:nowrap; text-align:center;'>    0      </td>
</tr><tr id='TBL-33-11-' style='vertical-align:baseline;'><td class='td11' id='TBL-33-11-1' style='white-space:nowrap; text-align:center;'>        </td><td class='td11' id='TBL-33-11-2' style='white-space:nowrap; text-align:center;'>   1     </td><td class='td11' id='TBL-33-11-3' style='white-space:nowrap; text-align:center;'>      a         </td><td class='td11' id='TBL-33-11-4' style='white-space:nowrap; text-align:center;'>    1      </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr></table>                                                               </div>
<figcaption class='caption'><span class='id'>Table 5.6: </span><span class='content'>Tabular representation for a Mealy FSM.</span></figcaption><!-- tex4ht:label?: x1-28010r6  -->
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 1335 --><p class='indent'>   Here are the rules to simplify Mealy machine:
      </p><ol class='enumerate1'>
<li class='enumerate' id='x1-28012x1'>Find two states <span class='cmbx-12'>p </span>and <span class='cmbx-12'>q </span>such that <span class='cmbx-12'>p </span><span class='mathjax-inline'>\(\xrightarrow {x/y}\) </span><span class='cmbx-12'>s </span>and <span class='cmbx-12'>q </span><span class='mathjax-inline'>\(\xrightarrow {x/y}\) </span><span class='cmbx-12'>s </span>for all (x, s, y) pairs.
      </li>
<li class='enumerate' id='x1-28014x2'>When such two states exist, they are equivalent – remove <span class='cmbx-12'>q </span>and replace
      all of its occurances in the table with <span class='cmbx-12'>p</span>.
      </li>
<li class='enumerate' id='x1-28016x3'>Repeat the same process from start until no two equivalent states are
      found.</li></ol>
<!-- l. 1343 --><p class='indent'>   Let’s start simplifying. Look at the states <span class='cmbx-12'>a </span>and <span class='cmbx-12'>c</span>. Both of them have the
same (0, b, 1) and (1, c, 1) pairs. Since they are equivalent, let’s remove the state
<span class='cmbx-12'>c </span>and replace all of its other occurences in the table with <span class='cmbx-12'>a</span>. Now we get the table
shown below:
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 1345 --><p class='indent' id='tabular-representation-for-a-mealy-fsm-after-one-step-of-simplification'>   <a id='x1-28017r7'></a></p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-34'><colgroup id='TBL-34-1g'><col id='TBL-34-1' /></colgroup><colgroup id='TBL-34-2g'><col id='TBL-34-2' /></colgroup><colgroup id='TBL-34-3g'><col id='TBL-34-3' /></colgroup><colgroup id='TBL-34-4g'><col id='TBL-34-4' /></colgroup><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-34-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-34-1-1' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>State </span></td><td class='td11' id='TBL-34-1-2' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>Input </span></td><td class='td11' id='TBL-34-1-3' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>Next state </span></td><td class='td11' id='TBL-34-1-4' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>Output </span></td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-34-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-34-2-1' style='white-space:nowrap; text-align:center;'>   <div class='multirow'><!--  rows=256  -->
a</div>     </td><td class='td11' id='TBL-34-2-2' style='white-space:nowrap; text-align:center;'>   0     </td><td class='td11' id='TBL-34-2-3' style='white-space:nowrap; text-align:center;'>     b         </td><td class='td11' id='TBL-34-2-4' style='white-space:nowrap; text-align:center;'>    1      </td></tr><tr id='TBL-34-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-34-3-1' style='white-space:nowrap; text-align:center;'> </td><td class='td11' id='TBL-34-3-2' style='white-space:nowrap; text-align:center;'> 1 </td><td class='td11' id='TBL-34-3-3' style='white-space:nowrap; text-align:center;'> a </td><td class='td11' id='TBL-34-3-4' style='white-space:nowrap; text-align:center;'> 1</td>
</tr><tr id='TBL-34-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-34-4-1' style='white-space:nowrap; text-align:center;'>   <div class='multirow'><!--  rows=256  -->
b</div>     </td><td class='td11' id='TBL-34-4-2' style='white-space:nowrap; text-align:center;'>   0     </td><td class='td11' id='TBL-34-4-3' style='white-space:nowrap; text-align:center;'>     b         </td><td class='td11' id='TBL-34-4-4' style='white-space:nowrap; text-align:center;'>    0      </td></tr><tr id='TBL-34-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-34-5-1' style='white-space:nowrap; text-align:center;'> </td><td class='td11' id='TBL-34-5-2' style='white-space:nowrap; text-align:center;'> 1 </td><td class='td11' id='TBL-34-5-3' style='white-space:nowrap; text-align:center;'> d </td><td class='td11' id='TBL-34-5-4' style='white-space:nowrap; text-align:center;'> 1</td>
</tr><tr id='TBL-34-6-' style='vertical-align:baseline;'><td class='td11' id='TBL-34-6-1' style='white-space:nowrap; text-align:center;'>   <div class='multirow'><!--  rows=256  -->
d</div>     </td><td class='td11' id='TBL-34-6-2' style='white-space:nowrap; text-align:center;'>   0     </td><td class='td11' id='TBL-34-6-3' style='white-space:nowrap; text-align:center;'>      e         </td><td class='td11' id='TBL-34-6-4' style='white-space:nowrap; text-align:center;'>    0      </td>
</tr><tr id='TBL-34-7-' style='vertical-align:baseline;'><td class='td11' id='TBL-34-7-1' style='white-space:nowrap; text-align:center;'>        </td><td class='td11' id='TBL-34-7-2' style='white-space:nowrap; text-align:center;'>   1     </td><td class='td11' id='TBL-34-7-3' style='white-space:nowrap; text-align:center;'>      a         </td><td class='td11' id='TBL-34-7-4' style='white-space:nowrap; text-align:center;'>    1      </td>
</tr><tr id='TBL-34-8-' style='vertical-align:baseline;'><td class='td11' id='TBL-34-8-1' style='white-space:nowrap; text-align:center;'>   <div class='multirow'><!--  rows=256  -->
e</div>     </td><td class='td11' id='TBL-34-8-2' style='white-space:nowrap; text-align:center;'>   0     </td><td class='td11' id='TBL-34-8-3' style='white-space:nowrap; text-align:center;'>      e         </td><td class='td11' id='TBL-34-8-4' style='white-space:nowrap; text-align:center;'>    0      </td>
</tr><tr id='TBL-34-9-' style='vertical-align:baseline;'><td class='td11' id='TBL-34-9-1' style='white-space:nowrap; text-align:center;'>        </td><td class='td11' id='TBL-34-9-2' style='white-space:nowrap; text-align:center;'>   1     </td><td class='td11' id='TBL-34-9-3' style='white-space:nowrap; text-align:center;'>      a         </td><td class='td11' id='TBL-34-9-4' style='white-space:nowrap; text-align:center;'>    1      </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr></table>                                                               </div>
<figcaption class='caption'><span class='id'>Table 5.7:  </span><span class='content'>Tabular  representation  for  a  Mealy  FSM  after  one  step  of
simplification.</span></figcaption><!-- tex4ht:label?: x1-28017r7  -->
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 1365 --><p class='indent'>   Let’s now look at the states <span class='cmbx-12'>d </span>and <span class='cmbx-12'>e</span>. They have the same (0, e, 0) and (1, a, 1)
pairs. So, let’s replace the state <span class='cmbx-12'>e </span>with the state <span class='cmbx-12'>d</span>.
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 1367 --><p class='indent' id='simplified-mealy-fsm'>   <a id='x1-28018r8'></a></p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-35'><colgroup id='TBL-35-1g'><col id='TBL-35-1' /></colgroup><colgroup id='TBL-35-2g'><col id='TBL-35-2' /></colgroup><colgroup id='TBL-35-3g'><col id='TBL-35-3' /></colgroup><colgroup id='TBL-35-4g'><col id='TBL-35-4' /></colgroup><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-35-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-35-1-1' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>State </span></td><td class='td11' id='TBL-35-1-2' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>Input </span></td><td class='td11' id='TBL-35-1-3' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>Next state </span></td><td class='td11' id='TBL-35-1-4' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>Output </span></td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-35-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-35-2-1' style='white-space:nowrap; text-align:center;'>   <div class='multirow'><!--  rows=256  -->
a</div>     </td><td class='td11' id='TBL-35-2-2' style='white-space:nowrap; text-align:center;'>   0     </td><td class='td11' id='TBL-35-2-3' style='white-space:nowrap; text-align:center;'>     b         </td><td class='td11' id='TBL-35-2-4' style='white-space:nowrap; text-align:center;'>    1      </td></tr><tr id='TBL-35-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-35-3-1' style='white-space:nowrap; text-align:center;'> </td><td class='td11' id='TBL-35-3-2' style='white-space:nowrap; text-align:center;'> 1 </td><td class='td11' id='TBL-35-3-3' style='white-space:nowrap; text-align:center;'> a </td><td class='td11' id='TBL-35-3-4' style='white-space:nowrap; text-align:center;'> 1</td>
</tr><tr id='TBL-35-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-35-4-1' style='white-space:nowrap; text-align:center;'>   <div class='multirow'><!--  rows=256  -->
b</div>     </td><td class='td11' id='TBL-35-4-2' style='white-space:nowrap; text-align:center;'>   0     </td><td class='td11' id='TBL-35-4-3' style='white-space:nowrap; text-align:center;'>     b         </td><td class='td11' id='TBL-35-4-4' style='white-space:nowrap; text-align:center;'>    0      </td>
</tr><tr id='TBL-35-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-35-5-1' style='white-space:nowrap; text-align:center;'>        </td><td class='td11' id='TBL-35-5-2' style='white-space:nowrap; text-align:center;'>   1     </td><td class='td11' id='TBL-35-5-3' style='white-space:nowrap; text-align:center;'>     d         </td><td class='td11' id='TBL-35-5-4' style='white-space:nowrap; text-align:center;'>    1      </td>
</tr><tr id='TBL-35-6-' style='vertical-align:baseline;'><td class='td11' id='TBL-35-6-1' style='white-space:nowrap; text-align:center;'>   <div class='multirow'><!--  rows=256  -->
d</div>     </td><td class='td11' id='TBL-35-6-2' style='white-space:nowrap; text-align:center;'>   0     </td><td class='td11' id='TBL-35-6-3' style='white-space:nowrap; text-align:center;'>     d         </td><td class='td11' id='TBL-35-6-4' style='white-space:nowrap; text-align:center;'>    0      </td>
</tr><tr id='TBL-35-7-' style='vertical-align:baseline;'><td class='td11' id='TBL-35-7-1' style='white-space:nowrap; text-align:center;'>        </td><td class='td11' id='TBL-35-7-2' style='white-space:nowrap; text-align:center;'>   1     </td><td class='td11' id='TBL-35-7-3' style='white-space:nowrap; text-align:center;'>      a         </td><td class='td11' id='TBL-35-7-4' style='white-space:nowrap; text-align:center;'>    1      </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr></table>                                                               </div>
<figcaption class='caption'><span class='id'>Table 5.8: </span><span class='content'>Simplified Mealy FSM.</span></figcaption><!-- tex4ht:label?: x1-28018r8  -->
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 1385 --><p class='indent'>   The table given above is the final compressed and simplified version of our
original Mealy FSM. Both FSMs (original one and the minimized one) have the
same input-output behavior for all possible input sequences. This is important for
ensuring that the reductions and simplifications we do in an FSM do not alter its
behavior semantically.
   
</p>
   <h3 class='sectionHead' id='clock'><span class='titlemark'>5.2   </span> <a id='x1-290005.2'></a>Clock</h3>
<!-- l. 1388 --><p class='noindent'>This section will be about something that we all use in our everyday lives. It
orchestrates all of us, all at once. It is called <span class='cmbx-12'>clock</span>. Clock is also an important
part of the computer architecture: it orchastrates the different components within
the computer. However, a clock inside a computer looks very different than the
clock we have used to use.
</p>
   <figure class='figure' id='x1-29001r5'><span id='good-old-clock-that-we-all-love'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 1392 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/good_old_clock.jpeg' width='50%' />
</p>
<figcaption class='caption'><span class='id'>Figure 5.5: </span><span class='content'>Good old clock that we all love.</span></figcaption><!-- tex4ht:label?: x1-29001r5  -->
                                                                          

                                                                          
   </figure>
<!-- l. 1397 --><p class='indent'>   Humans use 12-hour or 24-hour format clocks. For example, in 12-hour wall
clock, there are 12 numbers from 1 to 12, and the clock head spins “clockwise”
from 1 to 12 and then starts from 1, hypothetically in a never ending infinite
loop… Computers use 2-hour format, instead: the clock has two numbers 0 and 1;
the clock oscillates between these two numbers. In contrast to the fanciness of the
good old clock that we all know and love, the clock used in a computer
architecture looks like this:
</p>
   <figure class='figure' id='x1-29002r6'><span id='simple-clock-implementation-by-using-an-odd-number-of-not-gates'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 1401 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/clock_intro_impl.png' width='50%' />
</p>
<figcaption class='caption'><span class='id'>Figure 5.6: </span><span class='content'>Simple clock implementation by using an odd number of NOT
gates.</span></figcaption><!-- tex4ht:label?: x1-29002r6  -->
                                                                          

                                                                          
   </figure>
<!-- l. 1406 --><p class='indent'>   Simple and easy, right? I hope it automatically makes sense for the reader why
having a single self-wired NOT gate gives us what we want. It gives us the
oscillating OFF-ON-OFF-ON-OFF-ON-… signal. Here is what its timing diagram
looks like:
</p>
   <figure class='figure' id='x1-29003r7'><span id='timing-diagram-for-clock'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 1410 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/clock_intro.png' width='85%' />
</p>
<figcaption class='caption'><span class='id'>Figure 5.7: </span><span class='content'>Timing diagram for clock.</span></figcaption><!-- tex4ht:label?: x1-29003r7  -->
                                                                          

                                                                          
   </figure>
<!-- l. 1415 --><p class='indent'>   This particular timing diagram given above illustrates the oscillations of a 1
<span class='mathjax-inline'>\(\mu \)</span>Hz (<span class='cmbx-12'>frequency</span>) clock, meaning that the <span class='cmbx-12'>clock period </span>is 10 <span class='mathjax-inline'>\(\mu \)</span>s.
   
</p>
   <h3 class='sectionHead' id='memory'><span class='titlemark'>5.3   </span> <a id='x1-300005.3'></a>Memory</h3>
<!-- l. 1418 --><p class='noindent'>Up until now you have learned about building digital circuits that output some
boolean value given an n-bit input. What if we wanted to store the output of a
circuit inside somewhere so that we can look it up later when we need it? Well,
you guessed it right: it is for this purpose that we need to build a memory
component. But… what is memory anyway? Without going to far into the rabbit
holes of philosophy, memory is kind of a thing that just persists over time even
when the environment around that thing changes. It sounds intuitive to
believe, isn’t it? Now, bare with me: if we were able to build a circuit that
preserves its output no matter what the inputs are then this piece of circuit
may be used as a memory. If we think with a little more care, we can
already understand the problem with this circuit: it never allows us to put
something in its output through the inputs somehow; it just memorized
whatever the random garbage values in its output upon construction. So, we
better update our view of the memory systems. Okay, let me try one
more time: A memory… a memory is something that gets updated only on
certain contexts and gets preserved on all other contexts. With this view of
the memory, we can now imagine a circuit that changes its 1-bit output
to
</p>
      <ul class='itemize1'>
      <li class='itemize'>LOW when the input is (0, 1),
      </li>
      <li class='itemize'>HIGH when the input is (1, 0),
                                                                          

                                                                          
      </li>
      <li class='itemize'>retains its previous output when the input is (0, 0).</li></ul>
<!-- l. 1426 --><p class='indent'>   So, we may naturally agree on the convention that the input signal
semantically represents (memorize-1, memorize-0): (1, 0) means the circuit must
memrize and remember boolean value 1, (0, 1) means the circuit must memorize
and preserve boolean value 0, and (0, 0) means nothing new needs to be
memorized and therefore the old memorized value must be kept as it is. The input
(1, 1) is special. It is special in a sense that it does not make any sense logically in
our convention: we cannot expect the circuit to memorize both boolean value 1
and 0 at the same time since it has only a single-bit memory. Here is how this
hypothetical circuit would behave over the valid inputs (0, 0), (0, 1), (1,
0):
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 1428 --><p class='indent' id='truth-table-for-a-simple-memory-circuit'>   <a id='x1-30001r9'></a></p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-36'><colgroup id='TBL-36-1g'><col id='TBL-36-1' /></colgroup><colgroup id='TBL-36-2g'><col id='TBL-36-2' /><col id='TBL-36-3' /><col id='TBL-36-4' /><col id='TBL-36-5' /><col id='TBL-36-6' /></colgroup><tr id='TBL-36-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-36-1-1' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>Time step </span></td><td class='td11' id='TBL-36-1-2' style='white-space:nowrap; text-align:center;'>   0    </td><td class='td11' id='TBL-36-1-3' style='white-space:nowrap; text-align:center;'>   1    </td><td class='td11' id='TBL-36-1-4' style='white-space:nowrap; text-align:center;'>   2    </td><td class='td11' id='TBL-36-1-5' style='white-space:nowrap; text-align:center;'>   3    </td><td class='td11' id='TBL-36-1-6' style='white-space:nowrap; text-align:center;'>   4    </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-36-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-36-2-1' style='white-space:nowrap; text-align:center;'>   <span class='cmbx-12'>Input     </span></td><td class='td11' id='TBL-36-2-2' style='white-space:nowrap; text-align:center;'> (1, 0)  </td><td class='td11' id='TBL-36-2-3' style='white-space:nowrap; text-align:center;'> (0, 0)  </td><td class='td11' id='TBL-36-2-4' style='white-space:nowrap; text-align:center;'> (0, 0)  </td><td class='td11' id='TBL-36-2-5' style='white-space:nowrap; text-align:center;'> (0, 1)  </td><td class='td11' id='TBL-36-2-6' style='white-space:nowrap; text-align:center;'> (0, 0)  </td>
</tr><tr id='TBL-36-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-36-3-1' style='white-space:nowrap; text-align:center;'>   <span class='cmbx-12'>Output    </span></td><td class='td11' id='TBL-36-3-2' style='white-space:nowrap; text-align:center;'>   1    </td><td class='td11' id='TBL-36-3-3' style='white-space:nowrap; text-align:center;'>   1    </td><td class='td11' id='TBL-36-3-4' style='white-space:nowrap; text-align:center;'>   1    </td><td class='td11' id='TBL-36-3-5' style='white-space:nowrap; text-align:center;'>   0    </td><td class='td11' id='TBL-36-3-6' style='white-space:nowrap; text-align:center;'>   0    </td>
</tr></table>                                                          </div>
<figcaption class='caption'><span class='id'>Table 5.9: </span><span class='content'>Truth table for a simple memory circuit.</span></figcaption><!-- tex4ht:label?: x1-30001r9  -->
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 1440 --><p class='indent'>   But wait! This looks like the mystic box’s behavior from the first section where
FSMs were introduced. It turns out that this is exactly the behavior of that
mystic box with two buttons; except that here “On” button stands for
“memorize-1” and “Off” button stands for “memorize-0”, and “Green” output is
represented by boolean value 1 and “Red” output is represented by boolean value
0. Recall that for the mystic box, it also didn’t make any sense to press both
“On” and “Off” buttons simultaneously since the box could output only
one color (“Green” or “Red”) at a time. Having said this, we now know
that the mystic box we saw can actually be used as a simple memory
component. Let’s write down the truth table for this mystic memory
box:
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 1442 --><p class='indent' id='truth-table-for-the-simple-memory-circuit'>   <a id='x1-30002r10'></a></p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-37'><colgroup id='TBL-37-1g'><col id='TBL-37-1' /><col id='TBL-37-2' /></colgroup><colgroup id='TBL-37-3g'><col id='TBL-37-3' /><col id='TBL-37-4' /></colgroup><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-37-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-37-1-1' style='white-space:nowrap; text-align:center;'>  <table class='tabular' id='TBL-38'><colgroup id='TBL-38-1g'><col id='TBL-38-1' /></colgroup><tr id='TBL-38-1-' style='vertical-align:baseline;'><td class='td00' id='TBL-38-1-1' style='white-space:nowrap; text-align:center;'>memorize-1</td> </tr><tr id='TBL-38-2-' style='vertical-align:baseline;'><td class='td00' id='TBL-38-2-1' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>Set</span></td> </tr></table>                                                                       </td><td class='td00' id='TBL-37-1-2' style='white-space:nowrap; text-align:center;'>  <table class='tabular' id='TBL-39'><colgroup id='TBL-39-1g'><col id='TBL-39-1' /></colgroup><tr id='TBL-39-1-' style='vertical-align:baseline;'><td class='td00' id='TBL-39-1-1' style='white-space:nowrap; text-align:center;'>memorize-0</td> </tr><tr id='TBL-39-2-' style='vertical-align:baseline;'><td class='td00' id='TBL-39-2-1' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>Reset</span></td> </tr></table>                                                                       </td><td class='td00' id='TBL-37-1-3' style='white-space:nowrap; text-align:center;'>  <table class='tabular' id='TBL-40'><colgroup id='TBL-40-1g'><col id='TBL-40-1' /></colgroup><tr id='TBL-40-1-' style='vertical-align:baseline;'><td class='td00' id='TBL-40-1-1' style='white-space:nowrap; text-align:center;'>output at time <span class='mathjax-inline'>\(t+1\)</span></td> </tr><tr id='TBL-40-2-' style='vertical-align:baseline;'><td class='td00' id='TBL-40-2-1' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(\mathbf {Q_{t+1}}\)</span></td> </tr></table>                                                 </td><td class='td00' id='TBL-37-1-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(\mathbf {Q'_{t+1}}\)</span> </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-37-2-' style='vertical-align:baseline;'><td class='td00' id='TBL-37-2-1' style='white-space:nowrap; text-align:center;'>                                0                                                   </td><td class='td00' id='TBL-37-2-2' style='white-space:nowrap; text-align:center;'>                                0                                                   </td><td class='td00' id='TBL-37-2-3' style='white-space:nowrap; text-align:center;'>                                 <span class='mathjax-inline'>\(\mathbf {Q_t}\)</span>                                 </td><td class='td00' id='TBL-37-2-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(\mathbf {Q'_t}\)</span> </td>
</tr><tr id='TBL-37-3-' style='vertical-align:baseline;'><td class='td00' id='TBL-37-3-1' style='white-space:nowrap; text-align:center;'>                                0                                                   </td><td class='td00' id='TBL-37-3-2' style='white-space:nowrap; text-align:center;'>                                1                                                   </td><td class='td00' id='TBL-37-3-3' style='white-space:nowrap; text-align:center;'>                                0                                                   </td><td class='td00' id='TBL-37-3-4' style='white-space:nowrap; text-align:center;'> 1  </td>
</tr><tr id='TBL-37-4-' style='vertical-align:baseline;'><td class='td00' id='TBL-37-4-1' style='white-space:nowrap; text-align:center;'>                                1                                                   </td><td class='td00' id='TBL-37-4-2' style='white-space:nowrap; text-align:center;'>                                0                                                   </td><td class='td00' id='TBL-37-4-3' style='white-space:nowrap; text-align:center;'>                                1                                                   </td><td class='td00' id='TBL-37-4-4' style='white-space:nowrap; text-align:center;'> 0  </td>
</tr><tr id='TBL-37-5-' style='vertical-align:baseline;'><td class='td00' id='TBL-37-5-1' style='white-space:nowrap; text-align:center;'>                                1                                                   </td><td class='td00' id='TBL-37-5-2' style='white-space:nowrap; text-align:center;'>                                1                                                   </td><td class='td00' id='TBL-37-5-3' style='white-space:nowrap; text-align:center;'>                                -                                                   </td><td class='td00' id='TBL-37-5-4' style='white-space:nowrap; text-align:center;'> -  </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr></table>                                                                                                                                                                    </div>
<figcaption class='caption'><span class='id'>Table 5.10: </span><span class='content'>Truth table for the simple memory circuit.</span></figcaption><!-- tex4ht:label?: x1-30002r10  -->
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 1458 --><p class='indent'>   From the truth table above we can clearly see that the output of this circuit,
which seems to possess one-bit memory, the output <span class='mathjax-inline'>\(\mathbf {Q_{t+1}}\)</span> may be equal to the output
value from the past <span class='mathjax-inline'>\(\mathbf {Q_t}\)</span> when the input is (0, 0). This implies that the circuit cannot
be purely combinational because at certain moment in the future, say <span class='mathjax-inline'>\(t+100\)</span>, the input
(0, 0) may be mapped to the output <span class='mathjax-inline'>\(Q_{99} = 0\)</span> and in others, say <span class='mathjax-inline'>\(t+200\)</span>, the same input (0, 0)
may be mapped to the output <span class='mathjax-inline'>\(Q_{199} = 1\)</span>. Since purely combinational cirucits cannot map
the same input to different outputs, this circuit must be sequential. Now, let’s see
how we could actually build a sequential circuit for this 1-bit memory, called <span class='cmti-12'>SR
latch</span>.
   
</p>
   <h4 class='subsectionHead' id='sr-latch'><span class='titlemark'>5.3.1   </span> <a id='x1-310005.3.1'></a>SR Latch</h4>
<!-- l. 1461 --><p class='noindent'>Set-Reset or SR latch is what the mystic box from the first section of this chapter
represented informally. You have seen how this behavior exactly matches with the
behavior of a very simple 1-bit memory component that can update its memory
upon receiving certain inputs ((0, 1) and (1, 0)) and preserve the old 1-bit value
upon receiving another input ((0, 0)). So, we can control what’s kept in the
memory without explicitly knowing what’s kept in it. For example, if we wanted
to preserve the currently memorized boolean value in the next time step <span class='mathjax-inline'>\(t+1\)</span>, we
would provide the (0, 0) input at the time step <span class='mathjax-inline'>\(t\)</span>, and if we wanted to update or
memorize a new value 0 or 1, we would provide the (0, 1) or (1, 0) input,
respectively.
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 1465 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c5s2_sr_latch_impl.png' width='50%' />
                                                                          

                                                                          
</p>
   </figure>
<!-- l. 1470 --><p class='indent'>   It turns out that it is really simple to build a sequential circuit for
SR latch. The circuit is given on the diagram above. It essentially has
two NAND gates and two NOT gates (one for each input bit <span class='cmbx-12'>S</span>et and
<span class='cmbx-12'>R</span>eset). The NAND gate on top outputs the thing that’s kept on the
memory currently - <span class='cmbx-12'>Q</span>. In contrast, the NAND gate on bottom outputs the
opposite of that thing - <span class='cmbx-12'>Q’</span>. Now, go ahead and check whether the previous
truth table that we saw for this SR latch makes perfect sense: verify the
outputs on the truth table by pushing the inputs through the SR latch’s
circuit.
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 1472 --><p class='indent' id='extended-truth-table-for-sr-latch'>   <a id='x1-31001r11'></a></p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-41'><colgroup id='TBL-41-1g'><col id='TBL-41-1' /><col id='TBL-41-2' /><col id='TBL-41-3' /></colgroup><colgroup id='TBL-41-4g'><col id='TBL-41-4' /><col id='TBL-41-5' /></colgroup><colgroup id='TBL-41-6g'><col id='TBL-41-6' /></colgroup><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-41-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-41-1-1' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>S </span></td><td class='td11' id='TBL-41-1-2' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>R </span></td><td class='td11' id='TBL-41-1-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(\mathbf {Q_t}\)</span> </td><td class='td11' id='TBL-41-1-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(\mathbf {Q_{t+1}}\)</span> </td><td class='td11' id='TBL-41-1-5' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(\mathbf {Q'_{t+1}}\)</span> </td><td class='td11' id='TBL-41-1-6' style='white-space:nowrap; text-align:center;'>       Valid?          </td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-41-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-41-2-1' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-41-2-2' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-41-2-3' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-41-2-4' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-41-2-5' style='white-space:nowrap; text-align:center;'> 1 </td><td class='td11' id='TBL-41-2-6' style='white-space:nowrap; text-align:center;'> Yes, <span class='mathjax-inline'>\(\mathbf {Q_{t+1} = Q_t \neq Q'_{t+1}}\)</span>.</td>
</tr><tr id='TBL-41-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-41-3-1' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-41-3-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-41-3-3' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-41-3-4' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-41-3-5' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-41-3-6' style='white-space:nowrap; text-align:center;'> Yes, same as above.  </td>
</tr><tr id='TBL-41-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-41-4-1' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-41-4-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-41-4-3' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-41-4-4' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-41-4-5' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-41-4-6' style='white-space:nowrap; text-align:center;'>       Yes, <span class='mathjax-inline'>\(\mathbf {Q_{t+1} = 0 \neq Q'_{t+1}}\)</span>.           </td>
</tr><tr id='TBL-41-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-41-5-1' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-41-5-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-41-5-3' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-41-5-4' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-41-5-5' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-41-5-6' style='white-space:nowrap; text-align:center;'> Yes, same as above.  </td>
</tr><tr id='TBL-41-6-' style='vertical-align:baseline;'><td class='td11' id='TBL-41-6-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-41-6-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-41-6-3' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-41-6-4' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-41-6-5' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-41-6-6' style='white-space:nowrap; text-align:center;'>       Yes, <span class='mathjax-inline'>\(\mathbf {Q_{t+1} = 1 \neq Q'_{t+1}}\)</span>.           </td>
</tr><tr id='TBL-41-7-' style='vertical-align:baseline;'><td class='td11' id='TBL-41-7-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-41-7-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-41-7-3' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-41-7-4' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-41-7-5' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-41-7-6' style='white-space:nowrap; text-align:center;'> Yes, same as above.  </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-41-8-' style='vertical-align:baseline;'><td class='td11' id='TBL-41-8-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-41-8-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-41-8-3' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-41-8-4' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-41-8-5' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-41-8-6' style='white-space:nowrap; text-align:center;'>       No, <span class='mathjax-inline'>\(Q_{t+1} = Q'_{t+1}\)</span>.           </td>
</tr><tr id='TBL-41-9-' style='vertical-align:baseline;'><td class='td11' id='TBL-41-9-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-41-9-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-41-9-3' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-41-9-4' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-41-9-5' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-41-9-6' style='white-space:nowrap; text-align:center;'>       No, <span class='mathjax-inline'>\(Q_{t+1} = Q'_{t+1}\)</span>.           </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>                                                                   </div>
<figcaption class='caption'><span class='id'>Table 5.11: </span><span class='content'>Extended truth table for SR latch.</span></figcaption><!-- tex4ht:label?: x1-31001r11  -->
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 1493 --><p class='indent'>   Let’s go through a couple of the rows from the truth table. Suppose the input
is (<span class='mathjax-inline'>\(S=1\)</span>, <span class='mathjax-inline'>\(R=0\)</span>) and the previously memorized value is <span class='mathjax-inline'>\(Q_t = 0\)</span>. Then, we can compute <span class='mathjax-inline'>\(\mathbf {Q_{t+1}}\)</span> for the next
time step as follows:
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 1497 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/sr-latch-set.png' width='50%' />
                                                                          

                                                                          
</p>
   </figure>
<!-- l. 1502 --><p class='indent'>   Now, suppose that the input is (0, 0) and we have previously update the latch
to store 1. Then this is what happens in the next time step:
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 1506 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/sr-latch-hold.png' width='50%' />
                                                                          

                                                                          
</p>
   </figure>
<!-- l. 1511 --><p class='indent'>   If you go through all of the possible inputs from listed in the truth table, you
will verify the outputs mentioned. By doing this you will also see that the <span class='mathjax-inline'>\(\mathbf {Q_{t+1}}\)</span> and <span class='mathjax-inline'>\(\mathbf {Q'_{t+1}}\)</span>
become 1 when the input is (1, 1) and therefore, leads to metastability when the
input suddenly switches to (0, 0). When <span class='mathjax-inline'>\(S_{t-1} = R_{t-1} = 1\)</span> and then <span class='mathjax-inline'>\(S_t = R_t = 0\)</span>, it depends on the speed in
which one of the either input (<span class='mathjax-inline'>\(S_t\)</span> or <span class='mathjax-inline'>\(R_t\)</span>) reaches to the NAND gate before the
other one does, and then the output will settle either in 0 (if <span class='mathjax-inline'>\(R_t\)</span> reaches
NAND faster) or in 1 (if <span class='mathjax-inline'>\(S_t\)</span> reaches NAND faster). Since it is not up to us to
deterministically tell whether <span class='mathjax-inline'>\(Q_t = 1\)</span> will be preserved in the next time step when <span class='mathjax-inline'>\(Q'_t\)</span> is
also 1, providing the (1, 1) input is not a reliable way of storing boolean value
1.
   
</p>
   <h4 class='subsectionHead' id='d-latch'><span class='titlemark'>5.3.2   </span> <a id='x1-320005.3.2'></a>D Latch</h4>
<!-- l. 1514 --><p class='noindent'>You have learned about the SR latch, which is a very basic but essential memory
component. Now, we are going to use this basic building block to build more
complex but also useful piece of memory circuitry. This one is called <span class='cmbx-12'>D latch </span>and
here is how it works: we provide two-bit input <span class='cmbx-12'>(data, enable) </span>to the D latch, and
if <span class='cmbx-12'>enable </span>bit is 0 then the previously memorized value at <span class='mathjax-inline'>\(\mathbf {Q_t}\)</span> is preserved for the
next time step <span class='mathjax-inline'>\(t+1\)</span>, otherwise (when <span class='cmbx-12'>enable </span>is 1) the memory is updated with the
value of the <span class='cmbx-12'>data </span>bit provided at time step <span class='mathjax-inline'>\(t\)</span>. Check out the truth table for D latch
below:
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 1516 --><p class='indent' id='truth-table-for-d-latch'>   <a id='x1-32001r12'></a></p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-42'><colgroup id='TBL-42-1g'><col id='TBL-42-1' /><col id='TBL-42-2' /></colgroup><colgroup id='TBL-42-3g'><col id='TBL-42-3' /><col id='TBL-42-4' /></colgroup><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-42-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-42-1-1' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(D_t\)</span> </td><td class='td11' id='TBL-42-1-2' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(E_t\)</span> </td><td class='td11' id='TBL-42-1-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(Q_{t+1}\)</span> </td><td class='td11' id='TBL-42-1-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(Q'_{t+1}\)</span> </td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-42-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-42-2-1' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-42-2-2' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-42-2-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(Q_t\)</span> </td><td class='td11' id='TBL-42-2-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(Q'_t\)</span></td>
</tr><tr id='TBL-42-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-42-3-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-42-3-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-42-3-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(Q_t\)</span> </td><td class='td11' id='TBL-42-3-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(Q'_t\)</span> </td>
</tr><tr id='TBL-42-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-42-4-1' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-42-4-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-42-4-3' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-42-4-4' style='white-space:nowrap; text-align:center;'> 1  </td>
</tr><tr id='TBL-42-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-42-5-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-42-5-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-42-5-3' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-42-5-4' style='white-space:nowrap; text-align:center;'> 0  </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr></table>                                                                     </div>
<figcaption class='caption'><span class='id'>Table 5.12: </span><span class='content'>Truth table for D latch.</span></figcaption><!-- tex4ht:label?: x1-32001r12  -->
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 1532 --><p class='indent'>   Since we do not want to start from scratch, we would like to use the SR latch
to build the D latch. Now, the question is how can we decide what inputs should
be provided to an SR latch so that it acts like the D latch? To answer this
question, let’s imagine the following scenario first. Suppose that you tell
me you have got a D latch in your pocket and you ask me to test you
without seeing or touching your D latch. For me to know whether you are
lying or not, I can give you random input values from the D latch’s truth
table and ask you about the output of the D latch in your pocket. If
what you say D latch outputs given my inputs do not match with the
expected output values from the truth table, then I will know that you are
lying.
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 1536 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/d-latch-interface.png' width='50%' />
                                                                          

                                                                          
</p>
   </figure>
<!-- l. 1541 --><p class='indent'>   You (the guy in the middle) will act like the interface for the SR latch in your
pocket, and through this interface I (the guy on the left) will get the impression
that I am actually working with a D latch. So, a D latch is essentially You + SR
latch in your pocket. Let’s see the complete truth table for the SR latch
interface:
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 1543 --><p class='indent'>   </p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-43'><colgroup id='TBL-43-1g'><col id='TBL-43-1' /><col id='TBL-43-2' /></colgroup><colgroup id='TBL-43-3g'><col id='TBL-43-3' /><col id='TBL-43-4' /></colgroup><colgroup id='TBL-43-5g'><col id='TBL-43-5' /><col id='TBL-43-6' /></colgroup><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-43-1-' style='vertical-align:baseline;'><td class='td11' colspan='2' id='TBL-43-1-1' style='white-space:nowrap; text-align:center;'> <div class='multicolumn' style='white-space:nowrap; text-align:center;'>D latch input</div>  </td><td class='td11' colspan='2' id='TBL-43-1-3' style='white-space:nowrap; text-align:center;'> <div class='multicolumn' style='white-space:nowrap; text-align:center;'>Corresponding SR latch input</div>  </td><td class='td11' colspan='2' id='TBL-43-1-5' style='white-space:nowrap; text-align:center;'> <div class='multicolumn' style='white-space:nowrap; text-align:center;'>Output</div>  
</td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-43-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-43-2-1' style='white-space:nowrap; text-align:center;'> D  </td><td class='td11' id='TBL-43-2-2' style='white-space:nowrap; text-align:center;'>    E      </td><td class='td11' id='TBL-43-2-3' style='white-space:nowrap; text-align:center;'> S  </td><td class='td11' id='TBL-43-2-4' style='white-space:nowrap; text-align:center;'>          R                </td><td class='td11' id='TBL-43-2-5' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(Q_{t+1}\)</span> </td><td class='td11' id='TBL-43-2-6' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(Q'_{t+1}\)</span>  </td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-43-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-43-3-1' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-43-3-2' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-43-3-3' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-43-3-4' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-43-3-5' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(Q_t\)</span> </td><td class='td11' id='TBL-43-3-6' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(Q'_t\)</span> </td>
</tr><tr id='TBL-43-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-43-4-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-43-4-2' style='white-space:nowrap; text-align:center;'>    0      </td><td class='td11' id='TBL-43-4-3' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-43-4-4' style='white-space:nowrap; text-align:center;'>           0                 </td><td class='td11' id='TBL-43-4-5' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(Q_t\)</span> </td><td class='td11' id='TBL-43-4-6' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(Q'_t\)</span>  </td>
</tr><tr id='TBL-43-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-43-5-1' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-43-5-2' style='white-space:nowrap; text-align:center;'>    1      </td><td class='td11' id='TBL-43-5-3' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-43-5-4' style='white-space:nowrap; text-align:center;'>           1                 </td><td class='td11' id='TBL-43-5-5' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-43-5-6' style='white-space:nowrap; text-align:center;'> 1  </td>
</tr><tr id='TBL-43-6-' style='vertical-align:baseline;'><td class='td11' id='TBL-43-6-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-43-6-2' style='white-space:nowrap; text-align:center;'>    1      </td><td class='td11' id='TBL-43-6-3' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-43-6-4' style='white-space:nowrap; text-align:center;'>           0                 </td><td class='td11' id='TBL-43-6-5' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-43-6-6' style='white-space:nowrap; text-align:center;'> 0  </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>                                                                    </div>
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 1561 --><p class='indent'>   From the truth table above you could derive the following boolean functions
for S and R inputs to the SR latch: <span class='mathjax-inline'>\(S(D, E) = DE\)</span> and <span class='mathjax-inline'>\(R(D, E) = D'E\)</span>. Building this circuit that outputs S and
R values given D and E values essentially replaces you (the guy in the middle
acting as an interface for the SR latch) and allows us to build the D latch circuit.
Here’s how this can be implemented by using SR latch and a couple of AND
gates:
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 1565 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c5s2_d_latch_impl.png' width='50%' />
                                                                          

                                                                          
</p>
   </figure>
<!-- l. 1570 --><p class='indent'>   One last thing to note is that there is not invalid inputs when we
use a D latch. Each input is valid and has a particular meaning. This is
really nice if you want to avoid any uncertainties in your boolean logic
when it gets complex. It is especially useful to prove things about the
behavior of complex circuitry as well as to debug one when things go
sideways.
   
</p>
   <h4 class='subsectionHead' id='d-flipflop'><span class='titlemark'>5.3.3   </span> <a id='x1-330005.3.3'></a>D Flip-Flop</h4>
<!-- l. 1573 --><p class='noindent'>You have seen how the D latch works: as long as the <span class='cmti-12'>enable </span>input is high, the
latch becomes transparent, i.e., <span class='mathjax-inline'>\(Q_{t+1} = D\)</span>. To make it opaque, we have to turn off the
<span class='cmti-12'>enable </span>bit after setting the correct <span class='cmti-12'>data </span>bit. Here is how a proper functioning of a
D latch would look like in real life:
</p>
   <figure class='figure' id='x1-33001r8'><span id='timing-diagram-for-operating-d-latch'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 1577 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/timing_d_latch.png' width='95%' />
</p>
<figcaption class='caption'><span class='id'>Figure 5.8: </span><span class='content'>Timing diagram for operating D latch.</span></figcaption><!-- tex4ht:label?: x1-33001r8  -->
                                                                          

                                                                          
   </figure>
<!-- l. 1582 --><p class='indent'>   If we hook the raw clock output to the <span class='cmti-12'>enable </span>bit of a D latch, then the setup
and hold times would be violated. What’s proven to be useful in practice is to
latch a new value once in every clock rising or positive clock edge. The memory
components that react to the edge (i.e., transitioning from LOW to HIGH or
from HIGH to LOW), as opposed to the stable HIGH input, is called
<span class='cmbx-12'>flip-flops</span>. This is as shown on the timing diagram of positive edge-triggered D
flip-flop:
</p>
   <figure class='figure' id='x1-33002r9'><span id='timing-diagram-for-d-flip-flop'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 1586 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/timing_d_flipflop.png' width='95%' />
</p>
<figcaption class='caption'><span class='id'>Figure 5.9: </span><span class='content'>Timing diagram for D flip flop.</span></figcaption><!-- tex4ht:label?: x1-33002r9  -->
                                                                          

                                                                          
   </figure>
<!-- l. 1591 --><p class='indent'>   A D flip flop can be implemented by using two ordinary D latches and a NOT
gate as follows:
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 1595 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c5s2_d_flipflop_impl.png' width='70%' />
                                                                          

                                                                          
</p>
   </figure>
<!-- l. 1600 --><p class='indent'>   Let the circuit diagram above sink in for a moment. There are 2 D latches: the
one connected to the data signal D is called <span class='cmti-12'>master latch </span>and the one connected
to the output of the master latch is called <span class='cmti-12'>slave latch</span>. The idea is as follows: since
this is a positive-edge triggered D flipflop, when the clock is low – the master
latch becomes transparent when the clock is low (the enable signal for the master
latch becomes 1 due to the NOT gate) and the slave latch becomes opaque; when
the clock is high – the master latch becomes opaque and the slave latch
becomes transparent, updating its output with whatever was latched into the
master latch when the clock signal was still low. This transitioning (i.e.,
master latch storing data when clock is low and slave latch storing master’s
output when clock is high) makes the whole circuit act as if it stores
the data signal during the positive clock edge. Here is how the timing
diagram for both master and slave latches in a D flip flop may look like in
practice:
</p>
   <figure class='figure' id='x1-33003r10'><span id='timing-diagram-for-master-and-slaves-latches-in-d-flip-flop'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 1604 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/timing_master_slave_latch.png' width='95%' />
</p>
<figcaption class='caption'><span class='id'>Figure 5.10: </span><span class='content'>Timing diagram for master and slaves latches in D flip flop.</span></figcaption><!-- tex4ht:label?: x1-33003r10  -->
                                                                          

                                                                          
   </figure>
<!-- l. 1609 --><p class='indent'>   Now, let’s add a cherry on top of the cake by building an <span class='cmti-12'>asynchronously
resettable D flip flop</span>. Resettable means we can reset the memory (set the Q value
to 0), and asynchronously resettable means this operation will reset the memory
regardless of the clock – whether it is high or low or transitioning from
low to high (positive edge) or transitioning from high to low (negative
edge).
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 1613 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c5s2_async_d_flipflop_impl.png' width='70%' />
                                                                          

                                                                          
</p>
   </figure>
<!-- l. 1618 --><p class='indent'>   Here’s the truth table for asynchronously resettable D flipflop:
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 1620 --><p class='indent' id='truth-table-for-asynchronously-resettable-d-flip-flop'>   <a id='x1-33004r13'></a></p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-44'><colgroup id='TBL-44-1g'><col id='TBL-44-1' /></colgroup><colgroup id='TBL-44-2g'><col id='TBL-44-2' /><col id='TBL-44-3' /></colgroup><colgroup id='TBL-44-4g'><col id='TBL-44-4' /></colgroup><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-44-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-44-1-1' style='white-space:nowrap; text-align:center;'> Reset  </td><td class='td11' id='TBL-44-1-2' style='white-space:nowrap; text-align:center;'> Clk  </td><td class='td11' id='TBL-44-1-3' style='white-space:nowrap; text-align:center;'> D  </td><td class='td11' id='TBL-44-1-4' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(Q_{t}\)</span>  </td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-44-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-44-2-1' style='white-space:nowrap; text-align:center;'> <div class='multirow'><!--  rows=256  -->
R=0</div>   </td><td class='td11' id='TBL-44-2-2' style='white-space:nowrap; text-align:center;'>  0   </td><td class='td11' id='TBL-44-2-3' style='white-space:nowrap; text-align:center;'> d  </td><td class='td11' id='TBL-44-2-4' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(Q_{t}\)</span>  </td></tr><tr id='TBL-44-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-44-3-1' style='white-space:nowrap; text-align:center;'> </td><td class='td11' id='TBL-44-3-2' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(\nearrow \)</span> </td><td class='td11' id='TBL-44-3-3' style='white-space:nowrap; text-align:center;'> d </td><td class='td11' id='TBL-44-3-4' style='white-space:nowrap; text-align:center;'> d</td>
</tr><tr id='TBL-44-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-44-4-1' style='white-space:nowrap; text-align:center;'>       </td><td class='td11' id='TBL-44-4-2' style='white-space:nowrap; text-align:center;'>  1   </td><td class='td11' id='TBL-44-4-3' style='white-space:nowrap; text-align:center;'> d  </td><td class='td11' id='TBL-44-4-4' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(Q_{t}\)</span>  </td>
</tr><tr id='TBL-44-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-44-5-1' style='white-space:nowrap; text-align:center;'>       </td><td class='td11' id='TBL-44-5-2' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(\searrow \)</span>  </td><td class='td11' id='TBL-44-5-3' style='white-space:nowrap; text-align:center;'> d  </td><td class='td11' id='TBL-44-5-4' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(Q_{t}\)</span>  </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-44-6-' style='vertical-align:baseline;'><td class='td11' id='TBL-44-6-1' style='white-space:nowrap; text-align:center;'>  R=1   </td><td class='td11' id='TBL-44-6-2' style='white-space:nowrap; text-align:center;'>  x   </td><td class='td11' id='TBL-44-6-3' style='white-space:nowrap; text-align:center;'> x  </td><td class='td11' id='TBL-44-6-4' style='white-space:nowrap; text-align:center;'> 0  </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr></table>                                                               </div>
<figcaption class='caption'><span class='id'>Table 5.13: </span><span class='content'>Truth table for asynchronously resettable D flip flop.</span></figcaption><!-- tex4ht:label?: x1-33004r13  -->
                                                                          

                                                                          
   </figure>
   </div>
   
   <h4 class='subsectionHead' id='t-flipflop'><span class='titlemark'>5.3.4   </span> <a id='x1-340005.3.4'></a>T Flip-Flop</h4>
<!-- l. 1639 --><p class='noindent'>Another simple flip flop that is commonly used in <span class='cmti-12'>counter </span>design is <span class='cmbx-12'>T flip flop</span>.
We have not seen counters yet, but we will in the section 5.4.
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 1643 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c5s2_t_flipflop_impl.png' width='50%' />
                                                                          

                                                                          
</p>
   </figure>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 1650 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c5s2_async_t_flipflop_impl.png' width='50%' />
                                                                          

                                                                          
</p>
   </figure>
   
   <h4 class='subsectionHead' id='jk-flipflop'><span class='titlemark'>5.3.5   </span> <a id='x1-350005.3.5'></a>JK Flip-Flop</h4>
<!-- l. 1656 --><p class='noindent'>JK flip flop is another memory unit that has the following truth table:
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 1658 --><p class='indent' id='truth-table-for-jk-flipflop'>   <a id='x1-35001r14'></a></p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-45'><colgroup id='TBL-45-1g'><col id='TBL-45-1' /><col id='TBL-45-2' /><col id='TBL-45-3' /></colgroup><colgroup id='TBL-45-4g'><col id='TBL-45-4' /></colgroup><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-45-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-45-1-1' style='white-space:nowrap; text-align:center;'> Clk  </td><td class='td11' id='TBL-45-1-2' style='white-space:nowrap; text-align:center;'> J  </td><td class='td11' id='TBL-45-1-3' style='white-space:nowrap; text-align:center;'> K  </td><td class='td11' id='TBL-45-1-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(Q_{t+1}\)</span> </td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-45-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-45-2-1' style='white-space:nowrap; text-align:center;'> <div class='multirow'><!--  rows=256  -->
<span class='mathjax-inline'>\(\nearrow \)</span></div>   </td><td class='td11' id='TBL-45-2-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-45-2-3' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-45-2-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(Q_t\)</span> </td></tr><tr id='TBL-45-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-45-3-1' style='white-space:nowrap; text-align:center;'> </td><td class='td11' id='TBL-45-3-2' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-45-3-3' style='white-space:nowrap; text-align:center;'> 1 </td><td class='td11' id='TBL-45-3-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(0\)</span></td>
</tr><tr id='TBL-45-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-45-4-1' style='white-space:nowrap; text-align:center;'>     </td><td class='td11' id='TBL-45-4-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-45-4-3' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-45-4-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(1\)</span> </td>
</tr><tr id='TBL-45-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-45-5-1' style='white-space:nowrap; text-align:center;'>     </td><td class='td11' id='TBL-45-5-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-45-5-3' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-45-5-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(Q'_t\)</span> </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-45-6-' style='vertical-align:baseline;'><td class='td11' id='TBL-45-6-1' style='white-space:nowrap; text-align:center;'>   <span class='mathjax-inline'>\(1/\searrow /0\)</span>   </td><td class='td11' id='TBL-45-6-2' style='white-space:nowrap; text-align:center;'> x  </td><td class='td11' id='TBL-45-6-3' style='white-space:nowrap; text-align:center;'> x  </td><td class='td11' id='TBL-45-6-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(Q_t\)</span> </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr></table>                                                                 </div>
<figcaption class='caption'><span class='id'>Table 5.14: </span><span class='content'>Truth table for JK flip-flop.</span></figcaption><!-- tex4ht:label?: x1-35001r14  -->
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 1676 --><p class='indent'>   Here is how a JK flip flop can be implemented by using a D flip flop and a 4x1
MUX:
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 1680 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c5s2_async_jk_flipflop_impl.png' width='50%' />
                                                                          

                                                                          
</p>
   </figure>
   
   <h3 class='sectionHead' id='counter'><span class='titlemark'>5.4   </span> <a id='x1-360005.4'></a>Counter</h3>
<!-- l. 1686 --><p class='noindent'>0… 1… 2… 3… An n-bit <span class='cmbx-12'>counter </span>is a unit that counts up/down after each clock
cycle, outputting an n-bit binary number. For example, here’s a truth table for
3-bit <span class='cmti-12'>up counter </span>that counts by incrementing previous output and <span class='cmti-12'>down counter</span>
that counts by decrementing it.
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 1688 --><p class='indent' id='truth-table-for-bit-up-counter-and-down-counter'>   <a id='x1-36001r15'></a></p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-46'><colgroup id='TBL-46-1g'><col id='TBL-46-1' /><col id='TBL-46-2' /></colgroup><colgroup id='TBL-46-3g'><col id='TBL-46-3' /></colgroup><colgroup id='TBL-46-4g'><col id='TBL-46-4' /></colgroup><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-46-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-46-1-1' style='white-space:nowrap; text-align:center;'> <span class='cmbx-12'>Clk </span></td><td class='td11' id='TBL-46-1-2' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(Q^\text {up/down}_t\)</span>  </td><td class='td11' id='TBL-46-1-3' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(Q^\text {up}_{t+1}\)</span>  </td><td class='td11' id='TBL-46-1-4' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(Q^\text {down}_{t+1}\)</span>  </td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-46-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-46-2-1' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(\nearrow \)</span> </td><td class='td11' id='TBL-46-2-2' style='white-space:nowrap; text-align:center;'> 000 </td><td class='td11' id='TBL-46-2-3' style='white-space:nowrap; text-align:center;'> 001 </td><td class='td11' id='TBL-46-2-4' style='white-space:nowrap; text-align:center;'> 111</td>
</tr><tr id='TBL-46-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-46-3-1' style='white-space:nowrap; text-align:center;'>   <span class='mathjax-inline'>\(\nearrow \)</span>   </td><td class='td11' id='TBL-46-3-2' style='white-space:nowrap; text-align:center;'> 001  </td><td class='td11' id='TBL-46-3-3' style='white-space:nowrap; text-align:center;'> 010  </td><td class='td11' id='TBL-46-3-4' style='white-space:nowrap; text-align:center;'> 000  </td></tr><tr id='TBL-46-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-46-4-1' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(\nearrow \)</span> </td><td class='td11' id='TBL-46-4-2' style='white-space:nowrap; text-align:center;'> 010 </td><td class='td11' id='TBL-46-4-3' style='white-space:nowrap; text-align:center;'> 011 </td><td class='td11' id='TBL-46-4-4' style='white-space:nowrap; text-align:center;'> 001</td>
</tr><tr id='TBL-46-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-46-5-1' style='white-space:nowrap; text-align:center;'>   <span class='mathjax-inline'>\(\nearrow \)</span>   </td><td class='td11' id='TBL-46-5-2' style='white-space:nowrap; text-align:center;'> 011  </td><td class='td11' id='TBL-46-5-3' style='white-space:nowrap; text-align:center;'> 100  </td><td class='td11' id='TBL-46-5-4' style='white-space:nowrap; text-align:center;'> 010  </td>
</tr><tr id='TBL-46-6-' style='vertical-align:baseline;'><td class='td11' id='TBL-46-6-1' style='white-space:nowrap; text-align:center;'>   <span class='mathjax-inline'>\(\nearrow \)</span>   </td><td class='td11' id='TBL-46-6-2' style='white-space:nowrap; text-align:center;'> 100  </td><td class='td11' id='TBL-46-6-3' style='white-space:nowrap; text-align:center;'> 101  </td><td class='td11' id='TBL-46-6-4' style='white-space:nowrap; text-align:center;'> 011  </td>
</tr><tr id='TBL-46-7-' style='vertical-align:baseline;'><td class='td11' id='TBL-46-7-1' style='white-space:nowrap; text-align:center;'>   <span class='mathjax-inline'>\(\nearrow \)</span>   </td><td class='td11' id='TBL-46-7-2' style='white-space:nowrap; text-align:center;'> 101  </td><td class='td11' id='TBL-46-7-3' style='white-space:nowrap; text-align:center;'> 110  </td><td class='td11' id='TBL-46-7-4' style='white-space:nowrap; text-align:center;'> 100  </td>
</tr><tr id='TBL-46-8-' style='vertical-align:baseline;'><td class='td11' id='TBL-46-8-1' style='white-space:nowrap; text-align:center;'>   <span class='mathjax-inline'>\(\nearrow \)</span>   </td><td class='td11' id='TBL-46-8-2' style='white-space:nowrap; text-align:center;'> 110  </td><td class='td11' id='TBL-46-8-3' style='white-space:nowrap; text-align:center;'> 111  </td><td class='td11' id='TBL-46-8-4' style='white-space:nowrap; text-align:center;'> 101  </td>
</tr><tr id='TBL-46-9-' style='vertical-align:baseline;'><td class='td11' id='TBL-46-9-1' style='white-space:nowrap; text-align:center;'>   <span class='mathjax-inline'>\(\nearrow \)</span>   </td><td class='td11' id='TBL-46-9-2' style='white-space:nowrap; text-align:center;'> 111  </td><td class='td11' id='TBL-46-9-3' style='white-space:nowrap; text-align:center;'> 000  </td><td class='td11' id='TBL-46-9-4' style='white-space:nowrap; text-align:center;'> 110  </td>
</tr><tr id='TBL-46-10-' style='vertical-align:baseline;'><td class='td11' id='TBL-46-10-1' style='white-space:nowrap; text-align:center;'>   <span class='mathjax-inline'>\(1/\searrow /0\)</span>   </td><td class='td11' id='TBL-46-10-2' style='white-space:nowrap; text-align:center;'>  q   </td><td class='td11' id='TBL-46-10-3' style='white-space:nowrap; text-align:center;'>  q   </td><td class='td11' id='TBL-46-10-4' style='white-space:nowrap; text-align:center;'>  q   </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr></table>                                                                 </div>
<figcaption class='caption'><span class='id'>Table 5.15: </span><span class='content'>Truth table for 3-bit Up counter and Down counter.</span></figcaption><!-- tex4ht:label?: x1-36001r15  -->
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 1709 --><p class='indent'>   Notice how the up counter’s output <span class='mathjax-inline'>\(Q^\text {up}_{t+1}\)</span> wraps around and becomes 000 when it
reaches the highest 3-bit binary number 111 (7 in decimal) and how the down
counter’s output <span class='mathjax-inline'>\(Q^\text {down}_{t+1}\)</span> becomes 111 when the ouptut reaches the smallest 3-bit binary
number 000 (0 in decimal). This is not a bug – it’s actually a feature and we will
see why when we build our computer!
</p><!-- l. 1711 --><p class='indent'>   There are two types of counters regarding their circuit-level clock connections:
<span class='cmbx-12'>synchronous </span>and <span class='cmbx-12'>asynchronous </span>counters. Now, you will see how these two
types are different from each other.
   
</p>
   <h4 class='subsectionHead' id='synchronous-up-counter'><span class='titlemark'>5.4.1   </span> <a id='x1-370005.4.1'></a>Synchronous Up Counter</h4>
<!-- l. 1714 --><p class='noindent'><span class='cmbx-12'>Synchronous </span>counter is a counter that uses clock to update all of its internal
registers simulateneously at the same raw clock edges. Calling this type of circuit
synchronous makes sense because a single global clock orchastrates the update
times for all the memory units inside, and therefore, we say that <span class='cmti-12'>all units are
in sync with the clock</span>. Here is one a 3-bit up counter could be built in
practice:
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 1718 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c5s4_sync_up_counter_impl.png' width='50%' />
                                                                          

                                                                          
</p>
   </figure>
   
   <h4 class='subsectionHead' id='asynchronous-ripple-counter'><span class='titlemark'>5.4.2   </span> <a id='x1-380005.4.2'></a>Asynchronous Ripple Counter</h4>
<!-- l. 1724 --><p class='noindent'><span class='cmbx-12'>Asynchronous </span>counter, as opposed to the synchronous one, may use raw clock
signal for updating some of its internal registers and another signal for other
registers. This implies that the updating of the all internal memory units does not
happen at the same time as the <span class='cmbx-12'>clk </span>signals to different flip-flops come from
different sources. One such famous counter is called a <span class='cmbx-12'>ripple counter </span>and here is
how it can be implemented:
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 1728 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c5s4_async_up_counter_impl.png' width='50%' />
                                                                          

                                                                          
</p>
   </figure>
<!-- l. 1733 --><p class='indent'>   Let’s analyze the circuit above with a bit more care and see why it is called an
asynchronous ripple counter. Before starting the analysis, just remember that the <span class='mathjax-inline'>\(\nearrow \)</span>
notation is used for the <span class='mathjax-inline'>\(0 \rightarrow 1\)</span> clock transitioning, and these two notations are
exchangeable.
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 1735 --><p class='indent' id='analysis-of-a-bit-asyncronous-ripple-counter-that-counts-up-the-bit-output-represents-binary-number-y-y-y-where-y-is-msb-and-y-is-lsb'>   <a id='x1-38001r16'></a></p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-47'><colgroup id='TBL-47-1g'><col id='TBL-47-1' /><col id='TBL-47-2' /></colgroup><colgroup id='TBL-47-3g'><col id='TBL-47-3' /><col id='TBL-47-4' /><col id='TBL-47-5' /><col id='TBL-47-6' /><col id='TBL-47-7' /><col id='TBL-47-8' /><col id='TBL-47-9' /><col id='TBL-47-10' /><col id='TBL-47-11' /></colgroup><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-47-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-47-1-1' style='white-space:nowrap; text-align:center;'>    </td><td class='td11' id='TBL-47-1-2' style='white-space:nowrap; text-align:center;'> t=0  </td><td class='td11' id='TBL-47-1-3' style='white-space:nowrap; text-align:center;'> t=1  </td><td class='td11' id='TBL-47-1-4' style='white-space:nowrap; text-align:center;'> t=2  </td><td class='td11' id='TBL-47-1-5' style='white-space:nowrap; text-align:center;'> t=3  </td><td class='td11' id='TBL-47-1-6' style='white-space:nowrap; text-align:center;'> t=4  </td><td class='td11' id='TBL-47-1-7' style='white-space:nowrap; text-align:center;'> t=5  </td><td class='td11' id='TBL-47-1-8' style='white-space:nowrap; text-align:center;'> t=6  </td><td class='td11' id='TBL-47-1-9' style='white-space:nowrap; text-align:center;'> t=7  </td><td class='td11' id='TBL-47-1-10' style='white-space:nowrap; text-align:center;'> t=8  </td></tr><tr id='TBL-47-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-47-2-1' style='white-space:nowrap; text-align:center;'> clk </td><td class='td11' id='TBL-47-2-2' style='white-space:nowrap; text-align:center;'> </td><td class='td11' id='TBL-47-2-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(0 \rightarrow 1\)</span> </td><td class='td11' id='TBL-47-2-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(0 \rightarrow 1\)</span> </td><td class='td11' id='TBL-47-2-5' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(0 \rightarrow 1\)</span> </td><td class='td11' id='TBL-47-2-6' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(0 \rightarrow 1\)</span> </td><td class='td11' id='TBL-47-2-7' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(0 \rightarrow 1\)</span> </td><td class='td11' id='TBL-47-2-8' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(0 \rightarrow 1\)</span> </td><td class='td11' id='TBL-47-2-9' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(0 \rightarrow 1\)</span> </td><td class='td11' id='TBL-47-2-10' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(0 \rightarrow 1\)</span></td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-47-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-47-3-1' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(\text {clk}_0\)</span>  </td><td class='td11' id='TBL-47-3-2' style='white-space:nowrap; text-align:center;'>     </td><td class='td11' id='TBL-47-3-3' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(\nearrow \)</span>1   </td><td class='td11' id='TBL-47-3-4' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(\nearrow \)</span>1   </td><td class='td11' id='TBL-47-3-5' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(\nearrow \)</span>1   </td><td class='td11' id='TBL-47-3-6' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(\nearrow \)</span>1   </td><td class='td11' id='TBL-47-3-7' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(\nearrow \)</span>1   </td><td class='td11' id='TBL-47-3-8' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(\nearrow \)</span>1   </td><td class='td11' id='TBL-47-3-9' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(\nearrow \)</span>1   </td><td class='td11' id='TBL-47-3-10' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(\nearrow \)</span>1   </td></tr><tr id='TBL-47-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-47-4-1' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(y_0\)</span> </td><td class='td11' id='TBL-47-4-2' style='white-space:nowrap; text-align:center;'> <span id='textcolor1'>0</span> </td><td class='td11' id='TBL-47-4-3' style='white-space:nowrap; text-align:center;'> <span id='textcolor2'>1</span> </td><td class='td11' id='TBL-47-4-4' style='white-space:nowrap; text-align:center;'> <span id='textcolor3'>0</span> </td><td class='td11' id='TBL-47-4-5' style='white-space:nowrap; text-align:center;'> <span id='textcolor4'>1</span> </td><td class='td11' id='TBL-47-4-6' style='white-space:nowrap; text-align:center;'> <span id='textcolor5'>0</span> </td><td class='td11' id='TBL-47-4-7' style='white-space:nowrap; text-align:center;'> <span id='textcolor6'>1</span> </td><td class='td11' id='TBL-47-4-8' style='white-space:nowrap; text-align:center;'> <span id='textcolor7'>0</span> </td><td class='td11' id='TBL-47-4-9' style='white-space:nowrap; text-align:center;'> <span id='textcolor8'>1</span> </td><td class='td11' id='TBL-47-4-10' style='white-space:nowrap; text-align:center;'> <span id='textcolor9'>0</span></td>
</tr><tr id='TBL-47-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-47-5-1' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(\text {clk}_1\)</span>  </td><td class='td11' id='TBL-47-5-2' style='white-space:nowrap; text-align:center;'>  1   </td><td class='td11' id='TBL-47-5-3' style='white-space:nowrap; text-align:center;'>  0   </td><td class='td11' id='TBL-47-5-4' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(\nearrow \)</span>1   </td><td class='td11' id='TBL-47-5-5' style='white-space:nowrap; text-align:center;'>  0   </td><td class='td11' id='TBL-47-5-6' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(\nearrow \)</span>1   </td><td class='td11' id='TBL-47-5-7' style='white-space:nowrap; text-align:center;'>  0   </td><td class='td11' id='TBL-47-5-8' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(\nearrow \)</span>1   </td><td class='td11' id='TBL-47-5-9' style='white-space:nowrap; text-align:center;'>  0   </td><td class='td11' id='TBL-47-5-10' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(\nearrow \)</span>1   </td>
</tr><tr id='TBL-47-6-' style='vertical-align:baseline;'><td class='td11' id='TBL-47-6-1' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(y_1\)</span>  </td><td class='td11' id='TBL-47-6-2' style='white-space:nowrap; text-align:center;'>  <span id='textcolor10'>0</span>   </td><td class='td11' id='TBL-47-6-3' style='white-space:nowrap; text-align:center;'>  <span id='textcolor11'>0</span>   </td><td class='td11' id='TBL-47-6-4' style='white-space:nowrap; text-align:center;'>  <span id='textcolor12'>1</span>   </td><td class='td11' id='TBL-47-6-5' style='white-space:nowrap; text-align:center;'>  <span id='textcolor13'>1</span>   </td><td class='td11' id='TBL-47-6-6' style='white-space:nowrap; text-align:center;'>  <span id='textcolor14'>0</span>   </td><td class='td11' id='TBL-47-6-7' style='white-space:nowrap; text-align:center;'>  <span id='textcolor15'>0</span>   </td><td class='td11' id='TBL-47-6-8' style='white-space:nowrap; text-align:center;'>  <span id='textcolor16'>1</span>   </td><td class='td11' id='TBL-47-6-9' style='white-space:nowrap; text-align:center;'>  <span id='textcolor17'>1</span>   </td><td class='td11' id='TBL-47-6-10' style='white-space:nowrap; text-align:center;'>  <span id='textcolor18'>0</span>   </td>
</tr><tr id='TBL-47-7-' style='vertical-align:baseline;'><td class='td11' id='TBL-47-7-1' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(\text {clk}_2\)</span>  </td><td class='td11' id='TBL-47-7-2' style='white-space:nowrap; text-align:center;'>  1   </td><td class='td11' id='TBL-47-7-3' style='white-space:nowrap; text-align:center;'>  1   </td><td class='td11' id='TBL-47-7-4' style='white-space:nowrap; text-align:center;'>  0   </td><td class='td11' id='TBL-47-7-5' style='white-space:nowrap; text-align:center;'>  0   </td><td class='td11' id='TBL-47-7-6' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(\nearrow \)</span>1   </td><td class='td11' id='TBL-47-7-7' style='white-space:nowrap; text-align:center;'>  1   </td><td class='td11' id='TBL-47-7-8' style='white-space:nowrap; text-align:center;'>  0   </td><td class='td11' id='TBL-47-7-9' style='white-space:nowrap; text-align:center;'>  0   </td><td class='td11' id='TBL-47-7-10' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(\nearrow \)</span>1   </td>
</tr><tr id='TBL-47-8-' style='vertical-align:baseline;'><td class='td11' id='TBL-47-8-1' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(y_2\)</span>  </td><td class='td11' id='TBL-47-8-2' style='white-space:nowrap; text-align:center;'>  <span id='textcolor19'>0</span>   </td><td class='td11' id='TBL-47-8-3' style='white-space:nowrap; text-align:center;'>  <span id='textcolor20'>0</span>   </td><td class='td11' id='TBL-47-8-4' style='white-space:nowrap; text-align:center;'>  <span id='textcolor21'>0</span>   </td><td class='td11' id='TBL-47-8-5' style='white-space:nowrap; text-align:center;'>  <span id='textcolor22'>0</span>   </td><td class='td11' id='TBL-47-8-6' style='white-space:nowrap; text-align:center;'>  <span id='textcolor23'>1</span>   </td><td class='td11' id='TBL-47-8-7' style='white-space:nowrap; text-align:center;'>  <span id='textcolor24'>1</span>   </td><td class='td11' id='TBL-47-8-8' style='white-space:nowrap; text-align:center;'>  <span id='textcolor25'>1</span>   </td><td class='td11' id='TBL-47-8-9' style='white-space:nowrap; text-align:center;'>  <span id='textcolor26'>1</span>   </td><td class='td11' id='TBL-47-8-10' style='white-space:nowrap; text-align:center;'>  <span id='textcolor27'>0</span>   </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>                                                                           </div>
<figcaption class='caption'><span class='id'>Table 5.16: </span><span class='content'>Analysis of a 3-bit asyncronous ripple counter that counts up.
(the 3-bit output represents binary number <span class='mathjax-inline'>\(\overline {y_2 y_1 y_0}\)</span> where <span class='mathjax-inline'>\(y_2\)</span> is MSB and <span class='mathjax-inline'>\(y_0\)</span> is LSB)</span></figcaption><!-- tex4ht:label?: x1-38001r16  -->
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 1754 --><p class='indent'>   <span class='mathjax-inline'>\(\text {clk}_0\)</span> is directly connected to the global clock <span class='cmti-12'>clk</span>, so it is effectively updated with
the global clock edges. <span class='mathjax-inline'>\(\text {clk}_1\)</span> is connected to <span class='mathjax-inline'>\(\overline {y_0}\)</span>, so it takes 2 global clock cycles to flip <span class='mathjax-inline'>\(y_1\)</span>.
This is because <span class='mathjax-inline'>\(y_0\)</span> oscillates between <span class='mathjax-inline'>\(0 \rightarrow 1 \rightarrow 0\)</span>, making <span class='mathjax-inline'>\(\text {clk}_1 = \overline {y_0} = 1 \rightarrow 0 \rightarrow 1\)</span>. Therefore, <span class='mathjax-inline'>\(\text {clk}_1\)</span> goes from low to high
after the second global clock cycle (that is, from t=1 to t=2 in the timing
table above) and that is exactly when <span class='mathjax-inline'>\(y_1\)</span> becomes 1 initially. Similarly, <span class='mathjax-inline'>\(\text {clk}_2 = \overline {y_1}\)</span> and
since <span class='mathjax-inline'>\(y_1\)</span> is flipped once in every 2 clock cycles, it will will be 0 for t=0,1;
then flip to 1 for t=2,3; then again to 0 for t=4,5. In the meantime, <span class='mathjax-inline'>\(\text {clk}_2=\overline {y_1}\)</span> will
be 1 for t=0,1; then 0 for t=2,3; then 1 again for t=4,5. It will be from
t=3 to t=4 when <span class='mathjax-inline'>\(\text {clk}_2\)</span> will rise from low to high for the first time, causing <span class='mathjax-inline'>\(y_2\)</span>
to flip from 0 to 1 for the first time as well. Therefore, <span class='mathjax-inline'>\(y_2\)</span> will be flipped
once in every 4 clock cycles. This is exactly why it is called asynchronous
because every T flip-flop gets updated at different times. Moreover, it is as
if the raw clock signal <span class='cmbx-12'>ripples </span>through the counters with the 2 cycles
difference in between them, hence making the wording “ripple counter”
meaningful.
   
</p>
   <h3 class='sectionHead' id='timing1'><span class='titlemark'>5.5   </span> <a id='x1-390005.5'></a>Timing</h3>
<!-- l. 1757 --><p class='noindent'>So far you have hopefully learned a great deal of things in computer architecture.
New readers might find this crowded with a lot of new information and this is
fine. The organization that I have followed while writing this book in “one sitting”
is not flawless because of the fact that the book’s been written in “one sitting”…
This being said, my goal throughout this book is not to make you a professional
computer architect; the goal is to help newcomers intuitively understand the
essentials of the computer architecture and realize how the subject can be learned
by trying to build a computer by themselves (from “scratch”) and deepen their
knowledge upon further self-study by themselves. Wihout further ado, let me
introduce the timing framework used in circuit design. Before that let me
actually motivate the reason that such a framework is used in the first
place.
</p><!-- l. 1759 --><p class='indent'>   You have seen how edge-triggered D flip-flop is implemented by using two D
latches. You have also seen the timing diagrams capturing its operational span.
But have you ever scrutinized it really? If you have, then have you thought about
                                                                          

                                                                          
the following question: what happens right when the clock is about to transition
from 0 to 1 in both master and slave latches? Let me visualize this question for
you.
</p>
   <figure class='figure' id='x1-39001r11'><span id='which-latch-becomes-transparent-and-which-one-becomes-opaque-spoiler-both-latches-become-transparent-for-a-moment-necessity-of-hold-time-for-d-flipflop'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 1763 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/hold_d_flipflop.png' width='95%' />
</p>
<figcaption class='caption'><span class='id'>Figure 5.11:  </span><span class='content'>Which  latch  becomes  transparent  and  which  one  becomes
opaque? Spoiler: both latches become transparent for a moment <span class='mathjax-inline'>\(\implies \)</span> necessity
of <span class='cmbx-12'>hold time </span>for D flip-flop.</span></figcaption><!-- tex4ht:label?: x1-39001r11  -->
                                                                          

                                                                          
   </figure>
<!-- l. 1768 --><p class='indent'>   When clock transitions from low to high and data bit transitions from low to
high at the same moment, it takes new D=1 to reach to the top NAND gate faster
than the negated clock signal, leading the master latch to stay transparent and
update <span class='mathjax-inline'>\(Q_m\)</span> with value 1. Then the high clock signal is propagated through the slave
latch, updating its value with the master latch’s output, i.e., <span class='mathjax-inline'>\(Q = Q_m = 1\)</span> as opposed to <span class='mathjax-inline'>\(Q = 0\)</span>. So,
what we have observed here is the following: unless we make the data bit stable a
little after the rising clock edge, the slave latch will be updated with
the wrong value. This is known as the <span class='cmbx-12'>hold time </span>constraint: how much
time we should hold the D input stable for the flip-flop to function as
intended.
</p>
   <figure class='figure' id='x1-39002r12'><span id='necessity-of-setup-time-for-d-flipflop'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 1772 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/setup_d_flipflop.png' width='95%' />
</p>
<figcaption class='caption'><span class='id'>Figure 5.12: </span><span class='content'>Necessity of <span class='cmbx-12'>setup time </span>for D flip-flop.</span></figcaption><!-- tex4ht:label?: x1-39002r12  -->
                                                                          

                                                                          
   </figure>
<!-- l. 1777 --><p class='indent'>   Here is another case: when (1) the clock transitions from low to high and (2)
the data bit D transitions from high to low and (3) <span class='mathjax-inline'>\(Q_m\)</span> is previously high, even
though the intended behavior is to store D=0 in <span class='mathjax-inline'>\(Q\)</span>, the negated clock signal and the
negated D may or may not reach the bottom NAND gate in the master latch at
the same time causing that NAND to output 0 or 1 “randomly”. This will cause <span class='mathjax-inline'>\(Q_m\)</span>
to fluctuate between 0 and 1, and this is known as <span class='cmbx-12'>metastable </span>state
for the memory unit. Metastability of master latch will also lead to the
metastability of the slave latch, and therefore, the whole D flip-flop will
become metastable as the result. This is illustrated on the timing diagram
above.
</p>
   <figure class='figure' id='x1-39003r13'><span id='proper-setup-and-hold-durations'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 1781 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/proper_timing_d_flipflop.png' width='85%' />
</p>
<figcaption class='caption'><span class='id'>Figure 5.13: </span><span class='content'>Proper <span class='cmbx-12'>setup </span>and <span class='cmbx-12'>hold </span>durations.</span></figcaption><!-- tex4ht:label?: x1-39003r13  -->
                                                                          

                                                                          
   </figure>
<!-- l. 1786 --><p class='indent'>   The timing diagram above depicts the behavior of a D flip flop when the setup
and hold times are well respected. Having this intuition about these two timing
constraints, let’s formalize this framework.
   
</p>
   <h4 class='subsectionHead' id='setup-time-constraint'><span class='titlemark'>5.5.1   </span> <a id='x1-400005.5.1'></a>Setup Time Constraint</h4>
<!-- l. 1789 --><p class='noindent'>Imagine the basic but very essential flip-flop setup as shown below:
</p>
   <figure class='figure' id='x1-40001r14'><span id='setup-timing-for-flipflops-in-series'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 1793 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/setup_timing_2flipflops.png' width='85%' />
</p>
<figcaption class='caption'><span class='id'>Figure 5.14: </span><span class='content'>Setup timing for 2 flip-flops in series.</span></figcaption><!-- tex4ht:label?: x1-40001r14  -->
                                                                          

                                                                          
   </figure>
<!-- l. 1798 --><p class='indent'>   Note that <span class='mathjax-inline'>\(t_\text {clk}\)</span> is the clock period, <span class='mathjax-inline'>\(t_\text {clk2q}\)</span> is the time it takes for the <span class='cmbx-12'>clock </span>signal to
reach the output of the flip-flop, <span class='cmbx-12'>Q</span>. <span class='mathjax-inline'>\(t_\text {pd}\)</span> and <span class='mathjax-inline'>\(t_\text {cd}\)</span> are the respective <span class='cmbx-12'>propagation </span>and
<span class='cmbx-12'>contamination </span>delays of the combinational circuit in between the flip-flops. This
being clarified, suppose that the clock signal reaches the left flip-flop at time <span class='mathjax-inline'>\(T_\text {launch}\)</span> and
the right flip-flop at time <span class='mathjax-inline'>\(T_\text {capture}\)</span>. Then we say that the following inequality must
hold:
</p>
   <div class='mathjax-env mathjax-align*'>\begin{align*} T_\text {capture} + t_\text {clk} \geq T_\text {launch} + t_\text {clk2q} + t_\text {pd} + t_\text {setup} \end{align*}</div>
<!-- l. 1804 --><p class='indent'>   Let me try to explain the inequality above. As the clock signal reaches the left
(source) flip-flop at <span class='mathjax-inline'>\(T_\text {launch}\)</span>, it takes <span class='mathjax-inline'>\(t_\text {clk2q}\)</span> amount of time for it to affect source <span class='mathjax-inline'>\(Q\)</span> output and
another <span class='mathjax-inline'>\(t_\text {pd}\)</span> amount of time to pass through the combinational circuit (in the worst
case scenario). We know that the next clock edge will reach the right (target)
flip-flop at time <span class='mathjax-inline'>\(T_\text {capture} + t_\text {clk}\)</span>, and therefore, the output of the combinational circuit
(this value is propagated only after <span class='mathjax-inline'>\(T_\text {launch} + t_\text {clk2q} + t_\text {pd}\)</span>) must be stable at least <span class='mathjax-inline'>\(t_\text {setup}\)</span> amount
of time before the next clock edge reaching the target flip-flop. Since
the output of the combinational circuit must be ready before <span class='mathjax-inline'>\(T_\text {capture} + t_\text {clk} - t_\text {setup}\)</span>, we say
<span class='mathjax-inline'>\(T_\text {launch} + t_\text {clk2q} + t_\text {pd} \leq T_\text {capture} + t_\text {clk} - t_\text {setup}\)</span>.
   
</p>
   <h4 class='subsectionHead' id='hold-time-constraint'><span class='titlemark'>5.5.2   </span> <a id='x1-410005.5.2'></a>Hold Time Constraint</h4>
<!-- l. 1807 --><p class='noindent'>Here is the same picture for the hold time constraint, except that here we only
care about the shortest path that the signal takes to propagate through the
combinational circuit in between the two flip-flops:
</p>
   <figure class='figure' id='x1-41001r15'><span id='hold-timing-for-flipflops-in-series'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 1811 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/hold_timing_2flipflops.png' width='85%' />
</p>
<figcaption class='caption'><span class='id'>Figure 5.15: </span><span class='content'>Hold timing for 2 flip-flops in series.</span></figcaption><!-- tex4ht:label?: x1-41001r15  -->
                                                                          

                                                                          
   </figure>
<!-- l. 1816 --><p class='indent'>   Here is the inequality for the hold time constraint:
</p>
   <div class='mathjax-env mathjax-align*'>\begin{align*} T_\text {launch} + t_\text {clk2q} + t_\text {cd} \geq T_\text {capture} + t_\text {hold} \end{align*}</div>
<!-- l. 1822 --><p class='indent'>   Let me now try to explain this inequality. After making sure that the setup
time is constraint is not violated, we then also have to check if the output of the
combinational logic will stay the same for enough time period (a.k.a. <span class='mathjax-inline'>\(t_\text {hold}\)</span>) after the
clock edge. As the clock edge reaches the source flip-flop at <span class='mathjax-inline'>\(T_\text {launch}\)</span>, then takes <span class='mathjax-inline'>\(t_\text {clk2q}\)</span> time to
affect the its output, and <span class='mathjax-inline'>\(t_\text {cd}\)</span> minimum amount of time to pass through the
combinational circuit, we say that the new value at the output of this
combinational circuit must be ready not before than <span class='mathjax-inline'>\(T_\text {capture} + t_\text {hold}\)</span> (when the clock edge
reaches the target flip-flop + a little bit of time so that hold time is not
violated).
                                                                          

                                                                          
</p><!-- l. 1824 --><p class='indent'>
                                                                          

                                                                          
</p>
   <h2 class='chapterHead' id='lets-build-a-computer'><span class='titlemark'>Chapter 6</span><br /><a id='x1-420006'></a>Let’s Build a Computer!</h2>
<!-- l. 1826 --><p class='noindent'>Congratulations! You have made this far, and now you get to understand and
even build a custom 8-bit computer on your own through some guidance provided
in this chapter. However, it is important to talk about the <span class='cmbx-12'>instruction set
architecture </span>or <span class='cmbx-12'>ISA </span>before building anything. ISA is essentially a sheet
of paper that lists all of the basic operations that can be carried in our
hypothetical computing machine by providing the instructions in binary
directly to the machine. Basically, it is the design process of a computer
in a higher level abstraction, which then leads to relatively lower level
<span class='cmbx-12'>microarchitecture </span>(how the operations listed on the ISA specification
are executed step-by-step) design, and then to gate-level construction of
the real physical computer. Here’s the first step of this high-level design
process – I would like to represent each instruction in 16 bits or 2 bytes as
follows:
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 1828 --><p class='indent' id='bit-instruction-representation'>   <a id='x1-42001r1'></a></p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-48'><colgroup id='TBL-48-1g'><col id='TBL-48-1' /></colgroup><colgroup id='TBL-48-2g'><col id='TBL-48-2' /></colgroup><colgroup id='TBL-48-3g'><col id='TBL-48-3' /></colgroup><colgroup id='TBL-48-4g'><col id='TBL-48-4' /></colgroup><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-48-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-48-1-1' style='white-space:nowrap; text-align:center;'>                                <span class='mathjax-inline'>\(b_{15}\)</span>                                </td><td class='td11' id='TBL-48-1-2' style='white-space:nowrap; text-align:center;'>        <span class='mathjax-inline'>\(b_{14} b_{13} b_{12} b_{11}\)</span>        </td><td class='td11' id='TBL-48-1-3' style='white-space:nowrap; text-align:center;'>                                 <span class='mathjax-inline'>\(b_{10} b_9 b_8\)</span>                                 </td><td class='td11' id='TBL-48-1-4' style='white-space:nowrap; text-align:center;'>                                 <span class='mathjax-inline'>\(b_7 b_6 b_5 b_4 b_3 b_2 b_1 b_0\)</span>                                 </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr><tr id='TBL-48-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-48-2-1' style='white-space:nowrap; text-align:center;'>  <table class='tabular' id='TBL-49'><colgroup id='TBL-49-1g'><col id='TBL-49-1' /></colgroup><tr id='TBL-49-1-' style='vertical-align:baseline;'><td class='td00' id='TBL-49-1-1' style='white-space:nowrap; text-align:center;'><span class='cmr-10'>ALU/Memory</span></td>
  </tr><tr id='TBL-49-2-' style='vertical-align:baseline;'><td class='td00' id='TBL-49-2-1' style='white-space:nowrap; text-align:center;'>    <span class='cmr-10'>1/0        </span></td> </tr></table>                                                                                               </td><td class='td00' id='TBL-48-2-2' style='white-space:nowrap; text-align:center;'> <span class='cmr-10'>instruction opcode  </span></td><td class='td00' id='TBL-48-2-3' style='white-space:nowrap; text-align:center;'>  <table class='tabular' id='TBL-50'><colgroup id='TBL-50-1g'><col id='TBL-50-1' /></colgroup><tr id='TBL-50-1-' style='vertical-align:baseline;'><td class='td00' id='TBL-50-1-1' style='white-space:nowrap; text-align:center;'> <span class='cmbx-10'>first argument  </span></td>
  </tr><tr id='TBL-50-2-' style='vertical-align:baseline;'><td class='td00' id='TBL-50-2-1' style='white-space:nowrap; text-align:center;'><span class='cmti-10'>Register File </span><span class='cmr-10'>address</span></td> </tr></table>                                                                                        </td><td class='td00' id='TBL-48-2-4' style='white-space:nowrap; text-align:center;'>  <table class='tabular' id='TBL-51'><colgroup id='TBL-51-1g'><col id='TBL-51-1' /></colgroup><tr id='TBL-51-1-' style='vertical-align:baseline;'><td class='td00' id='TBL-51-1-1' style='white-space:nowrap; text-align:center;'><span class='cmbx-10'>second argument</span></td>
  </tr><tr id='TBL-51-2-' style='vertical-align:baseline;'><td class='td00' id='TBL-51-2-1' style='white-space:nowrap; text-align:center;'> <span class='cmr-10'>immediate value or </span></td>
  </tr><tr id='TBL-51-3-' style='vertical-align:baseline;'><td class='td00' id='TBL-51-3-1' style='white-space:nowrap; text-align:center;'> <span class='cmr-10'>memory address   </span></td> </tr></table>                                                                                        </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td></tr></table>                                                                                                                                                                                  </div>
<figcaption class='caption'><span class='id'>Table 6.1: </span><span class='content'>16-bit instruction representation.</span></figcaption><!-- tex4ht:label?: x1-42001r1  -->
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 1841 --><p class='indent'>   The representation above explains the semantic division of the 2-byte
instruction. The MSB (most significant bit) <span class='mathjax-inline'>\(b_{15}\)</span> indicates whether instruction is an
ALU instruction (such as adding two numbers, logical AND, logical OR, and so
on) or memory instruction (such as storing a number in memory, loading values
from memory to registers, and so on). The next 4 bits <span class='mathjax-inline'>\(b_{14:11}\)</span> is the operation code or
opcode that specifies which instruction we want our CPU to execute. Then comes
the next 3 bits <span class='mathjax-inline'>\(b_{10:8}\)</span> as the first argument of our instruction (<span class='mathjax-inline'>\(b_{15:11}\)</span>), which is always
going to be a register address in the <span class='cmbx-12'>register file </span>consisting 8 registers.
The second byte <span class='mathjax-inline'>\(b_{7:0}\)</span> is the second argument, which can be an immediate
value or an 8-bit memory address depending on the context/instruction.
Since we allow only the second byte of the instruction to work with the
memory addresses, fixing 8 bits for this purpose also limits how big of a
memory we can possibly work with in this kind of architecture. Since we also
want <span class='cmbx-12'>byte-addressable </span>memory system in which one can access the
individual bytes by providing an 8-bit address, of course, the answer is we
are going to work with <span class='mathjax-inline'>\(2^8 = 256\)</span> byte memory. Each of 256 locations is going to
represent one byte or 8 bits instead of a single bit. If we wanted to access the
individual bits, then the memory would be called <span class='cmbx-12'>bit-addressable </span>and not
byte-addressable.
</p><!-- l. 1843 --><p class='indent'>   Lastly, since this is going to be an 8-bit computer (byte-addressable memory,
support for operations on byte-long numbers, byte-long bus width; in other words,
only 8 bits can be travelling accross wires at a given moment), I will call this
computer <span class='cmbx-12'>D</span>ummy <span class='cmbx-12'>x8 </span>or <span class='cmbx-12'>Dx8</span>!
   
</p>
   <h3 class='sectionHead' id='instruction-set-architecture'><span class='titlemark'>6.1   </span> <a id='x1-430006.1'></a>Instruction Set Architecture</h3>
<!-- l. 1846 --><p class='noindent'>One popular architecture for modern computing devices has been <span class='cmbx-12'>Von Neumann
architecture</span>. This architecture is essentially the one that mentions a <span class='cmbx-12'>central
processing unit </span>or <span class='cmbx-12'>CPU </span>which works with a <span class='cmbx-12'>memory unit </span>where the data and
the program is mixed. The CPU consists of a <span class='cmbx-12'>control unit </span>and <span class='cmbx-12'>arithmetic and
logic unit </span>or <span class='cmbx-12'>ALU</span>. Control unit is used to orchestrate different components
within the CPU and even memory units to some extent. ALU is the part where
numbers get crunched and calculations happen. Besides, there is external input
                                                                          

                                                                          
and output devices that can be connected to this core computing device (CPU +
Memory).
</p>
   <figure class='figure' id='x1-43001r1'><span id='von-neumann-architecture'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 1850 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/von_neumann_arch.png' width='50%' />
</p>
<figcaption class='caption'><span class='id'>Figure 6.1: </span><span class='content'>Von Neumann architecture.</span></figcaption><!-- tex4ht:label?: x1-43001r1  -->
                                                                          

                                                                          
   </figure>
<!-- l. 1855 --><p class='indent'>   Now, let’s start designing our own ISA from scratch. Just keep in mind that,
we will build computer around the architectural principles of Von Neumann’s,
however, our instruction set and the microarchitecture (technical gate-level
details) will be built and customized for our personal liking. Von Neumann
architecture, as illustrated in the figure above, tells us which high-level
components there are and how they are frankly connected; it does not dictate how
these components ought to be built or which instructions should they be able to
carry out. So, we are free to do what the hell we want with this. Nice, let’s get to
it!
</p><!-- l. 1857 --><p class='indent'>   I visualize the general organization of the DX8 computer as follows:
</p>
      <ul class='itemize1'>
      <li class='itemize'>
      <!-- l. 1860 --><p class='noindent'>There is a CPU, which has a <span class='cmbx-12'>Control unit </span>and <span class='cmbx-12'>Arithmetic unit </span>(to
      perform <span class='mathjax-inline'>\(a + b\)</span>, comparison <span class='mathjax-inline'>\(a &lt; b ?\)</span>, etc.) + <span class='cmbx-12'>Logic unit </span>(to perform <span class='mathjax-inline'>\(a \operatorname {AND} b\)</span>, <span class='mathjax-inline'>\(\operatorname {NOT} a\)</span>, etc.)
      and a bunch of registers (R0, …, R7 – also known as Register file);
      </p>
           <ul class='itemize2'>
           <li class='itemize'><span class='cmbx-12'>Controller</span>;
           </li>
           <li class='itemize'><span class='cmbx-12'>ALU</span>;
           </li>
           <li class='itemize'><span class='cmbx-12'>Register File</span>;</li></ul>
      </li>
      <li class='itemize'>There is more general non-volatile memory unit – also known as <span class='cmbx-12'>Random
      Access Memory </span>or <span class='cmbx-12'>RAM</span>, whose bytes can be accessed(read or written)
      by providing arbitrary 8-bit address;
                                                                          

                                                                          
      </li>
      <li class='itemize'>
      <!-- l. 1867 --><p class='noindent'>External input unit: </p>
           <ul class='itemize2'>
           <li class='itemize'>8 ON/OFF switches (acting as a “keyboard”) to set the <span class='cmti-12'>data </span>to
           be written to the RAM;
           </li>
           <li class='itemize'>8 ON/OFF switches to set the memory <span class='cmti-12'>address</span>;
           </li>
           <li class='itemize'><span class='cmti-12'>Write </span>button to make the computer write the given <span class='cmti-12'>data </span>into the
           indicated memory <span class='cmti-12'>address</span>;
           </li>
           <li class='itemize'><span class='cmti-12'>Reset </span>switch to restart the computer.</li></ul>
      </li></ul>
<!-- l. 1876 --><p class='indent'>   Here’s how I visualize this in my mind:
</p>
   <figure class='figure' id='x1-43002r2'><span id='dx-computer-organization'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 1880 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/dx8-organization.png' width='80%' />
</p>
<figcaption class='caption'><span class='id'>Figure 6.2: </span><span class='content'>DX8 computer organization.</span></figcaption><!-- tex4ht:label?: x1-43002r2  -->
                                                                          

                                                                          
   </figure>
<!-- l. 1885 --><p class='indent'>   With this high-level visualization of the DX8 computer in mind, let’s see my
“beautiful” ISA:
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 1887 --><p class='indent' id='dx-isa'>   <a id='x1-43003r2'></a></p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-52'><colgroup id='TBL-52-1g'><col id='TBL-52-1' /></colgroup><colgroup id='TBL-52-2g'><col id='TBL-52-2' /></colgroup><colgroup id='TBL-52-3g'><col id='TBL-52-3' /></colgroup><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td></tr><tr id='TBL-52-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-52-1-1' style='white-space:normal; text-align:left;'> <!-- l. 1891 --><p class='noindent'><span class='cmbx-12'>Mnemonic</span>                  </p></td><td class='td11' id='TBL-52-1-2' style='white-space:normal; text-align:left;'> <!-- l. 1891 --><p class='noindent'><span class='cmbx-12'>Opcode</span>  </p></td><td class='td11' id='TBL-52-1-3' style='white-space:normal; text-align:left;'> <!-- l. 1891 --><p class='noindent'><span class='cmbx-12'>Semantics</span>                              </p></td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td></tr><tr id='TBL-52-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-52-2-1' style='white-space:normal; text-align:left;'> <!-- l. 1893 --><p class='noindent'><span class='cmtt-12'>load </span><code class='lstinline'><span style='color:#000000'>$regX $memAddr</span></code>      </p></td><td class='td11' id='TBL-52-2-2' style='white-space:normal; text-align:left;'> <!-- l. 1893 --><p class='noindent'>0,0000     </p></td><td class='td11' id='TBL-52-2-3' style='white-space:normal; text-align:left;'> <!-- l. 1893 --><p class='noindent'><span class='mathjax-inline'>\(\texttt {regX} \leftarrow \texttt {memAddr}\)</span>                               </p></td>
</tr><tr id='TBL-52-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-52-3-1' style='white-space:normal; text-align:left;'> <!-- l. 1894 --><p class='noindent'><span class='cmtt-12'>store </span><code class='lstinline'><span style='color:#000000'>$regX $memAddr</span></code>     </p></td><td class='td11' id='TBL-52-3-2' style='white-space:normal; text-align:left;'> <!-- l. 1894 --><p class='noindent'>0,0001     </p></td><td class='td11' id='TBL-52-3-3' style='white-space:normal; text-align:left;'> <!-- l. 1894 --><p class='noindent'><span class='mathjax-inline'>\(\texttt {memAddr} \leftarrow \texttt {regX} \)</span>                               </p></td>
</tr><tr id='TBL-52-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-52-4-1' style='white-space:normal; text-align:left;'> <!-- l. 1895 --><p class='noindent'><span class='cmtt-12'>move </span><code class='lstinline'><span style='color:#000000'>$regX $val</span></code>          </p></td><td class='td11' id='TBL-52-4-2' style='white-space:normal; text-align:left;'> <!-- l. 1895 --><p class='noindent'>0,0010     </p></td><td class='td11' id='TBL-52-4-3' style='white-space:normal; text-align:left;'> <!-- l. 1895 --><p class='noindent'><span class='mathjax-inline'>\(\texttt {regX} \leftarrow \texttt {val}\)</span>                               </p></td>
</tr><tr id='TBL-52-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-52-5-1' style='white-space:normal; text-align:left;'> <!-- l. 1896 --><p class='noindent'><span class='cmtt-12'>arg1 </span><code class='lstinline'><span style='color:#000000'>$regX</span></code>              </p></td><td class='td11' id='TBL-52-5-2' style='white-space:normal; text-align:left;'> <!-- l. 1896 --><p class='noindent'>0,0011     </p></td><td class='td11' id='TBL-52-5-3' style='white-space:normal; text-align:left;'> <!-- l. 1896 --><p class='noindent'><span class='mathjax-inline'>\(\texttt {regA} \leftarrow \texttt {regX}\)</span>                               </p></td>
</tr><tr id='TBL-52-6-' style='vertical-align:baseline;'><td class='td11' id='TBL-52-6-1' style='white-space:normal; text-align:left;'> <!-- l. 1897 --><p class='noindent'><span class='cmtt-12'>arg2 </span><code class='lstinline'><span style='color:#000000'>$regX</span></code>              </p></td><td class='td11' id='TBL-52-6-2' style='white-space:normal; text-align:left;'> <!-- l. 1897 --><p class='noindent'>0,0100     </p></td><td class='td11' id='TBL-52-6-3' style='white-space:normal; text-align:left;'> <!-- l. 1897 --><p class='noindent'><span class='mathjax-inline'>\(\texttt {regB} \leftarrow \texttt {regX}\)</span>                               </p></td>
</tr><tr id='TBL-52-7-' style='vertical-align:baseline;'><td class='td11' id='TBL-52-7-1' style='white-space:normal; text-align:left;'> <!-- l. 1898 --><p class='noindent'><span class='cmtt-12'>cmp</span>                     </p></td><td class='td11' id='TBL-52-7-2' style='white-space:normal; text-align:left;'> <!-- l. 1898 --><p class='noindent'>1,0000     </p></td><td class='td11' id='TBL-52-7-3' style='white-space:normal; text-align:left;'> <!-- l. 1898 --><p class='noindent'><span class='mathjax-inline'>\(\texttt {regOUT} \leftarrow \texttt {CMP regA regB}\)</span>                               </p></td>
</tr><tr id='TBL-52-8-' style='vertical-align:baseline;'><td class='td11' id='TBL-52-8-1' style='white-space:normal; text-align:left;'> <!-- l. 1899 --><p class='noindent'><span class='cmtt-12'>add</span>                     </p></td><td class='td11' id='TBL-52-8-2' style='white-space:normal; text-align:left;'> <!-- l. 1899 --><p class='noindent'>1,0001     </p></td><td class='td11' id='TBL-52-8-3' style='white-space:normal; text-align:left;'> <!-- l. 1899 --><p class='noindent'><span class='mathjax-inline'>\(\texttt {regOUT} \leftarrow \texttt {regA} + \texttt {regB}\)</span>                               </p></td>
</tr><tr id='TBL-52-9-' style='vertical-align:baseline;'><td class='td11' id='TBL-52-9-1' style='white-space:normal; text-align:left;'> <!-- l. 1900 --><p class='noindent'><span class='cmtt-12'>neg</span>                     </p></td><td class='td11' id='TBL-52-9-2' style='white-space:normal; text-align:left;'> <!-- l. 1900 --><p class='noindent'>1,0010     </p></td><td class='td11' id='TBL-52-9-3' style='white-space:normal; text-align:left;'> <!-- l. 1900 --><p class='noindent'><span class='mathjax-inline'>\(\texttt {regOUT} \leftarrow \text {NOT regA} + 1\)</span>                               </p></td>
</tr><tr id='TBL-52-10-' style='vertical-align:baseline;'><td class='td11' id='TBL-52-10-1' style='white-space:normal; text-align:left;'> <!-- l. 1901 --><p class='noindent'><span class='cmtt-12'>and</span>                     </p></td><td class='td11' id='TBL-52-10-2' style='white-space:normal; text-align:left;'> <!-- l. 1901 --><p class='noindent'>1,0011     </p></td><td class='td11' id='TBL-52-10-3' style='white-space:normal; text-align:left;'> <!-- l. 1901 --><p class='noindent'><span class='mathjax-inline'>\(\texttt {regOUT} \leftarrow \texttt {regA AND regB}\)</span>                               </p></td>
</tr><tr id='TBL-52-11-' style='vertical-align:baseline;'><td class='td11' id='TBL-52-11-1' style='white-space:normal; text-align:left;'> <!-- l. 1902 --><p class='noindent'><span class='cmtt-12'>or</span>                      </p></td><td class='td11' id='TBL-52-11-2' style='white-space:normal; text-align:left;'> <!-- l. 1902 --><p class='noindent'>1,0100     </p></td><td class='td11' id='TBL-52-11-3' style='white-space:normal; text-align:left;'> <!-- l. 1902 --><p class='noindent'><span class='mathjax-inline'>\(\texttt {regOUT} \leftarrow \texttt {regA OR regB}\)</span>                               </p></td>
</tr><tr id='TBL-52-12-' style='vertical-align:baseline;'><td class='td11' id='TBL-52-12-1' style='white-space:normal; text-align:left;'> <!-- l. 1903 --><p class='noindent'><span class='cmtt-12'>xor</span>                     </p></td><td class='td11' id='TBL-52-12-2' style='white-space:normal; text-align:left;'> <!-- l. 1903 --><p class='noindent'>1,0101     </p></td><td class='td11' id='TBL-52-12-3' style='white-space:normal; text-align:left;'> <!-- l. 1903 --><p class='noindent'><span class='mathjax-inline'>\(\texttt {regOUT} \leftarrow \texttt {regA XOR regB}\)</span>                               </p></td>
</tr><tr id='TBL-52-13-' style='vertical-align:baseline;'><td class='td11' id='TBL-52-13-1' style='white-space:normal; text-align:left;'> <!-- l. 1904 --><p class='noindent'><span class='cmtt-12'>not</span>                     </p></td><td class='td11' id='TBL-52-13-2' style='white-space:normal; text-align:left;'> <!-- l. 1904 --><p class='noindent'>1,0110     </p></td><td class='td11' id='TBL-52-13-3' style='white-space:normal; text-align:left;'> <!-- l. 1904 --><p class='noindent'><span class='mathjax-inline'>\(\texttt {regOUT} \leftarrow \texttt {NOT regA}\)</span>                               </p></td>
</tr><tr id='TBL-52-14-' style='vertical-align:baseline;'><td class='td11' id='TBL-52-14-1' style='white-space:normal; text-align:left;'> <!-- l. 1905 --><p class='noindent'><span class='cmtt-12'>rotl</span>                    </p></td><td class='td11' id='TBL-52-14-2' style='white-space:normal; text-align:left;'> <!-- l. 1905 --><p class='noindent'>1,0111     </p></td><td class='td11' id='TBL-52-14-3' style='white-space:normal; text-align:left;'> <!-- l. 1905 --><p class='noindent'><span class='mathjax-inline'>\(\texttt {regOUT} \leftarrow \texttt {regA[6:0]\_regA[7]}\)</span>                               </p></td>
</tr><tr id='TBL-52-15-' style='vertical-align:baseline;'><td class='td11' id='TBL-52-15-1' style='white-space:normal; text-align:left;'> <!-- l. 1906 --><p class='noindent'><span class='cmtt-12'>rotr</span>                    </p></td><td class='td11' id='TBL-52-15-2' style='white-space:normal; text-align:left;'> <!-- l. 1906 --><p class='noindent'>1,1000     </p></td><td class='td11' id='TBL-52-15-3' style='white-space:normal; text-align:left;'> <!-- l. 1906 --><p class='noindent'><span class='mathjax-inline'>\(\texttt {regOUT} \leftarrow \texttt {regA[0]\_regA[7:1]}\)</span>                               </p></td>
</tr><tr id='TBL-52-16-' style='vertical-align:baseline;'><td class='td11' id='TBL-52-16-1' style='white-space:normal; text-align:left;'> <!-- l. 1907 --><p class='noindent'><span class='cmtt-12'>shiftl</span>                  </p></td><td class='td11' id='TBL-52-16-2' style='white-space:normal; text-align:left;'> <!-- l. 1907 --><p class='noindent'>1,1001     </p></td><td class='td11' id='TBL-52-16-3' style='white-space:normal; text-align:left;'> <!-- l. 1907 --><p class='noindent'><span class='mathjax-inline'>\(\texttt {regOUT} \leftarrow \texttt {regA[6:0]\_0}\)</span>                               </p></td>
</tr><tr id='TBL-52-17-' style='vertical-align:baseline;'><td class='td11' id='TBL-52-17-1' style='white-space:normal; text-align:left;'> <!-- l. 1908 --><p class='noindent'><span class='cmtt-12'>shiftr</span>                  </p></td><td class='td11' id='TBL-52-17-2' style='white-space:normal; text-align:left;'> <!-- l. 1908 --><p class='noindent'>1,1010     </p></td><td class='td11' id='TBL-52-17-3' style='white-space:normal; text-align:left;'> <!-- l. 1908 --><p class='noindent'><span class='mathjax-inline'>\(\texttt {regOUT} \leftarrow \texttt {0\_regA[7:1]}\)</span>                               </p></td>
</tr><tr id='TBL-52-18-' style='vertical-align:baseline;'><td class='td11' id='TBL-52-18-1' style='white-space:normal; text-align:left;'> <!-- l. 1909 --><p class='noindent'><span class='cmtt-12'>jmp </span><code class='lstinline'><span style='color:#000000'>$val</span></code>                </p></td><td class='td11' id='TBL-52-18-2' style='white-space:normal; text-align:left;'> <!-- l. 1909 --><p class='noindent'>0,0101     </p></td><td class='td11' id='TBL-52-18-3' style='white-space:normal; text-align:left;'> <!-- l. 1909 --><p class='noindent'><span class='mathjax-inline'>\(\texttt {regIP} \leftarrow \texttt {val}\)</span>                               </p></td>
</tr><tr id='TBL-52-19-' style='vertical-align:baseline;'><td class='td11' id='TBL-52-19-1' style='white-space:normal; text-align:left;'> <!-- l. 1910 --><p class='noindent'><span class='cmtt-12'>jmpgt </span><code class='lstinline'><span style='color:#000000'>$val</span></code>              </p></td><td class='td11' id='TBL-52-19-2' style='white-space:normal; text-align:left;'> <!-- l. 1910 --><p class='noindent'>0,0110     </p></td><td class='td11' id='TBL-52-19-3' style='white-space:normal; text-align:left;'> <!-- l. 1910 --><p class='noindent'><span class='mathjax-inline'>\(\texttt {regIP} \leftarrow \begin {cases} \texttt {val}, \text {if gt flag is set} \\ \texttt {regIP} + 1, \text {otherwise} \end {cases}\)</span>                               </p></td>
</tr><tr id='TBL-52-20-' style='vertical-align:baseline;'><td class='td11' id='TBL-52-20-1' style='white-space:normal; text-align:left;'> <!-- l. 1915 --><p class='noindent'><span class='cmtt-12'>jmplt </span><code class='lstinline'><span style='color:#000000'>$val</span></code>              </p></td><td class='td11' id='TBL-52-20-2' style='white-space:normal; text-align:left;'> <!-- l. 1915 --><p class='noindent'>0,0111     </p></td><td class='td11' id='TBL-52-20-3' style='white-space:normal; text-align:left;'> <!-- l. 1915 --><p class='noindent'><span class='mathjax-inline'>\(\texttt {regIP} \leftarrow \begin {cases} \texttt {val}, \text {if lt flag is set} \\ \texttt {regIP} + 1, \text {otherwise} \end {cases}\)</span>                               </p></td>
</tr><tr id='TBL-52-21-' style='vertical-align:baseline;'><td class='td11' id='TBL-52-21-1' style='white-space:normal; text-align:left;'> <!-- l. 1920 --><p class='noindent'><span class='cmtt-12'>jmpeq </span><code class='lstinline'><span style='color:#000000'>$val</span></code>              </p></td><td class='td11' id='TBL-52-21-2' style='white-space:normal; text-align:left;'> <!-- l. 1920 --><p class='noindent'>0,1000     </p></td><td class='td11' id='TBL-52-21-3' style='white-space:normal; text-align:left;'> <!-- l. 1920 --><p class='noindent'><span class='mathjax-inline'>\(\texttt {regIP} \leftarrow \begin {cases} \texttt {val}, \text {if eq flag is set} \\ \texttt {regIP} + 1, \text {otherwise} \end {cases}\)</span>                               </p></td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td></tr></table>                                                      </div>
<figcaption class='caption'><span class='id'>Table 6.2: </span><span class='content'>DX8 ISA</span></figcaption><!-- tex4ht:label?: x1-43003r2  -->
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 1931 --><p class='indent'>   Table <a href='#dx-isa'>6.2<!-- tex4ht:ref: tab:dx8-isa  --></a> is a very basic and naive instruction set that I have designed for the
DX8 computer. Let’s now try to build some of the components that are needed for
our CPU. For example, ISA mentions that one should be able to execute <span class='cmbx-12'>add</span>
instruction, which performs <span class='mathjax-inline'>\(\texttt {regOUT} \leftarrow \texttt {regA} + \texttt {regB}\)</span>. So, the plan is to build a subunit called Arithmetic
(sub)Unit, and Logic (sub)Unit, then combine them in a single unit called ALU.
Let’s see how we can do this.
   
</p>
   <h3 class='sectionHead' id='arithmetic'><span class='titlemark'>6.2   </span> <a id='x1-440006.2'></a>Arithmetic</h3>
<!-- l. 1934 --><p class='noindent'>Suppose I wanted to add two 1-bit inputs <span class='cmtt-12'>in1 </span>and <span class='cmtt-12'>in2</span>. What I would like is to
build a circuit that gives me their sum in a single bit, as well as their carry (in
case the sum does not fit in a single bit). Such as circuit is called <span class='cmbx-12'>half adder </span>and
its truth table can be given as follows:
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 1936 --><p class='indent' id='truth-table-for-half-adder'>   <a id='x1-44001r3'></a></p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-53'><colgroup id='TBL-53-1g'><col id='TBL-53-1' /><col id='TBL-53-2' /></colgroup><colgroup id='TBL-53-3g'><col id='TBL-53-3' /><col id='TBL-53-4' /><col id='TBL-53-5' /></colgroup><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-53-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-53-1-1' style='white-space:nowrap; text-align:center;'> <span class='cmtt-12'>in1 </span></td><td class='td11' id='TBL-53-1-2' style='white-space:nowrap; text-align:center;'> <span class='cmtt-12'>in2 </span></td><td class='td11' id='TBL-53-1-3' style='white-space:nowrap; text-align:center;'> sum  </td><td class='td11' id='TBL-53-1-4' style='white-space:nowrap; text-align:center;'> carry  </td><td class='td11' id='TBL-53-1-5' style='white-space:nowrap; text-align:center;'> <span class='cmtt-12'>in1 </span>+ <span class='cmtt-12'>in2 </span>= [carry][sum]  </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-53-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-53-2-1' style='white-space:nowrap; text-align:center;'>  0    </td><td class='td11' id='TBL-53-2-2' style='white-space:nowrap; text-align:center;'>  0   </td><td class='td11' id='TBL-53-2-3' style='white-space:nowrap; text-align:center;'>  0   </td><td class='td11' id='TBL-53-2-4' style='white-space:nowrap; text-align:center;'>   0    </td><td class='td11' id='TBL-53-2-5' style='white-space:nowrap; text-align:center;'>           00                 </td></tr><tr id='TBL-53-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-53-3-1' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-53-3-2' style='white-space:nowrap; text-align:center;'> 1 </td><td class='td11' id='TBL-53-3-3' style='white-space:nowrap; text-align:center;'> 1 </td><td class='td11' id='TBL-53-3-4' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-53-3-5' style='white-space:nowrap; text-align:center;'> 01</td>
</tr><tr id='TBL-53-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-53-4-1' style='white-space:nowrap; text-align:center;'>  1    </td><td class='td11' id='TBL-53-4-2' style='white-space:nowrap; text-align:center;'>  0   </td><td class='td11' id='TBL-53-4-3' style='white-space:nowrap; text-align:center;'>  1   </td><td class='td11' id='TBL-53-4-4' style='white-space:nowrap; text-align:center;'>   0    </td><td class='td11' id='TBL-53-4-5' style='white-space:nowrap; text-align:center;'>           01                 </td>
</tr><tr id='TBL-53-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-53-5-1' style='white-space:nowrap; text-align:center;'>  1    </td><td class='td11' id='TBL-53-5-2' style='white-space:nowrap; text-align:center;'>  1   </td><td class='td11' id='TBL-53-5-3' style='white-space:nowrap; text-align:center;'>  0   </td><td class='td11' id='TBL-53-5-4' style='white-space:nowrap; text-align:center;'>   1    </td><td class='td11' id='TBL-53-5-5' style='white-space:nowrap; text-align:center;'>           10                 </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td></tr></table>                                                                 </div>
<figcaption class='caption'><span class='id'>Table 6.3: </span><span class='content'>Truth table for half adder.</span></figcaption><!-- tex4ht:label?: x1-44001r3  -->
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 1952 --><p class='indent'>   This is obviously very simple truth table, and therefore, the circuit for the half
adder can be built as given below:
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 1956 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c6s2_half_adder_impl.png' width='50%' />
                                                                          

                                                                          
</p>
   </figure>
<!-- l. 1961 --><p class='indent'>   The unfortunate thing about the half adder is that we cannot stack a bunch of
these half adders to add two multiple-bit numbers, say <span class='mathjax-inline'>\(x_{7:0}\)</span> and <span class='mathjax-inline'>\(y_{7:0}\)</span>. The reason is
obvious if you think about it for a second: because we have to use the carry
output of the rightmost bits <span class='mathjax-inline'>\(a_i + b_i\)</span> while adding the bits on the left <span class='mathjax-inline'>\(x_{i+1} + y_{i+1}\)</span>. To do this, we
should build a <span class='cmbx-12'>full adder </span>that is capable of adding two 1-bit numbers while also
adding another <span class='cmti-12'>carry input</span>. Therefore, a full adder is essentially a 3-bit adder
that outputs 1-bit sum and 1-bit carry-out. Here’s the truth table for
it:
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 1963 --><p class='indent' id='truth-table-for-full-adder'>   <a id='x1-44002r4'></a></p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-54'><colgroup id='TBL-54-1g'><col id='TBL-54-1' /><col id='TBL-54-2' /><col id='TBL-54-3' /></colgroup><colgroup id='TBL-54-4g'><col id='TBL-54-4' /><col id='TBL-54-5' /></colgroup><colgroup id='TBL-54-6g'><col id='TBL-54-6' /></colgroup><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-54-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-54-1-1' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(\text {carry}_{i}\)</span> </td><td class='td11' id='TBL-54-1-2' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(x_{i+1}\)</span> </td><td class='td11' id='TBL-54-1-3' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(y_{i+1}\)</span> </td><td class='td11' id='TBL-54-1-4' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(\text {sum}_{i+1}\)</span> </td><td class='td11' id='TBL-54-1-5' style='white-space:nowrap; text-align:center;'> <span class='mathjax-inline'>\(\text {carry}_{i+1}\)</span> </td><td class='td11' id='TBL-54-1-6' style='white-space:nowrap; text-align:center;'>  <span class='mathjax-inline'>\(\text {carry}_i + x_{i+1} + y_{i+1} = [\text {carry}_{i+1}][\text {sum}_{i+1}]\)</span>  </td></tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-54-2-' style='vertical-align:baseline;'><td class='td11' id='TBL-54-2-1' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-54-2-2' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-54-2-3' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-54-2-4' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-54-2-5' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-54-2-6' style='white-space:nowrap; text-align:center;'> 00</td>
</tr><tr id='TBL-54-3-' style='vertical-align:baseline;'><td class='td11' id='TBL-54-3-1' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-54-3-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-54-3-3' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-54-3-4' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-54-3-5' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-54-3-6' style='white-space:nowrap; text-align:center;'> 01  </td></tr><tr id='TBL-54-4-' style='vertical-align:baseline;'><td class='td11' id='TBL-54-4-1' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-54-4-2' style='white-space:nowrap; text-align:center;'> 1 </td><td class='td11' id='TBL-54-4-3' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-54-4-4' style='white-space:nowrap; text-align:center;'> 1 </td><td class='td11' id='TBL-54-4-5' style='white-space:nowrap; text-align:center;'> 0 </td><td class='td11' id='TBL-54-4-6' style='white-space:nowrap; text-align:center;'> 01</td>
</tr><tr id='TBL-54-5-' style='vertical-align:baseline;'><td class='td11' id='TBL-54-5-1' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-54-5-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-54-5-3' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-54-5-4' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-54-5-5' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-54-5-6' style='white-space:nowrap; text-align:center;'> 10  </td>
</tr><tr id='TBL-54-6-' style='vertical-align:baseline;'><td class='td11' id='TBL-54-6-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-54-6-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-54-6-3' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-54-6-4' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-54-6-5' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-54-6-6' style='white-space:nowrap; text-align:center;'> 01  </td>
</tr><tr id='TBL-54-7-' style='vertical-align:baseline;'><td class='td11' id='TBL-54-7-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-54-7-2' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-54-7-3' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-54-7-4' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-54-7-5' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-54-7-6' style='white-space:nowrap; text-align:center;'> 10  </td>
</tr><tr id='TBL-54-8-' style='vertical-align:baseline;'><td class='td11' id='TBL-54-8-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-54-8-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-54-8-3' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-54-8-4' style='white-space:nowrap; text-align:center;'> 0  </td><td class='td11' id='TBL-54-8-5' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-54-8-6' style='white-space:nowrap; text-align:center;'> 10  </td>
</tr><tr id='TBL-54-9-' style='vertical-align:baseline;'><td class='td11' id='TBL-54-9-1' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-54-9-2' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-54-9-3' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-54-9-4' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-54-9-5' style='white-space:nowrap; text-align:center;'> 1  </td><td class='td11' id='TBL-54-9-6' style='white-space:nowrap; text-align:center;'> 11  </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>                                                                     </div>
<figcaption class='caption'><span class='id'>Table 6.4: </span><span class='content'>Truth table for full adder.</span></figcaption><!-- tex4ht:label?: x1-44002r4  -->
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 1983 --><p class='indent'>   With a little bit of SoP/PoS magic, it is easy to realize the following
implementation for the full adder:
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 1987 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c6s2_full_adder_impl.png' width='50%' />
                                                                          

                                                                          
</p>
   </figure>
<!-- l. 1992 --><p class='indent'>   In order to add two 4-bit numbers <span class='mathjax-inline'>\(x_{3:0}\)</span> and <span class='mathjax-inline'>\(y_{3:0}\)</span>, we can stack up 4 full adders as
follows:
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 1996 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c6s2_full_adder_4b_impl.png' width='80%' />
                                                                          

                                                                          
</p>
   </figure>
<!-- l. 2001 --><p class='indent'>   I think it is hopefully pretty obvious how we could scale this up to 8 bits or
even further. For our computer, we only need 8-bit adder, so we will stack 4
more full adders on top of the ones shown above and we will call it a
day!
   
</p>
   <h3 class='sectionHead' id='logic'><span class='titlemark'>6.3   </span> <a id='x1-450006.3'></a>Logic</h3>
<!-- l. 2004 --><p class='noindent'>Performing basic logic on input(s) is much more easier because this is what the
logic gates, such as AND, NOT, OR, do by default. All we need to do to scale
these logical operations from 1-bit inputs to 8-bit inputs. Doing this is very easy
and trivial: given two 8-bit inputs <span class='mathjax-inline'>\(x_{7:0}\)</span> and <span class='mathjax-inline'>\(y_{7:0}\)</span>, connect each bit <span class='mathjax-inline'>\(a_i\)</span> and <span class='mathjax-inline'>\(b_i\)</span> to a different
AND/OR/XOR gate <span class='mathjax-inline'>\(G_i\)</span>, then the final 8-bit output is the concationation of the
outputs of these gates, <span class='mathjax-inline'>\(\overline {G_7 \dots G_0}\)</span>.
</p><!-- l. 2006 --><p class='indent'>   What about comparing two 1-bit numbers? Well here is a pretty intuitive
implementation of 1-bit comparator:
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 2010 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c6s3_comparator_impl.png' width='50%' />
                                                                          

                                                                          
</p>
   </figure>
<!-- l. 2015 --><p class='indent'>   If you wonder how you can build it, just remember that the first step is to
write down the truth table for the comparator. My stupid truth table for the
circuit above looked like this:
</p>
   <div class='table'>
                                                                          

                                                                          
<!-- l. 2017 --><p class='indent' id='truth-table-for-bit-comparator'>   <a id='x1-45001r5'></a></p><figure class='float'>
                                                                          

                                                                          
<div class='tabular'> <table class='tabular' id='TBL-55'><colgroup id='TBL-55-1g'><col id='TBL-55-1' /><col id='TBL-55-2' /></colgroup><colgroup id='TBL-55-3g'><col id='TBL-55-3' /><col id='TBL-55-4' /><col id='TBL-55-5' /></colgroup><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-55-1-' style='vertical-align:baseline;'><td class='td11' id='TBL-55-1-1' style='white-space:nowrap; text-align:center;'> in1  </td><td class='td11' id='TBL-55-1-2' style='white-space:nowrap; text-align:center;'> in2  </td><td class='td11' id='TBL-55-1-3' style='white-space:nowrap; text-align:center;'>  <table class='tabular' id='TBL-56'><colgroup id='TBL-56-1g'><col id='TBL-56-1' /></colgroup><tr id='TBL-56-1-' style='vertical-align:baseline;'><td class='td00' id='TBL-56-1-1' style='white-space:nowrap; text-align:center;'>    gt      </td> </tr><tr id='TBL-56-2-' style='vertical-align:baseline;'><td class='td00' id='TBL-56-2-1' style='white-space:nowrap; text-align:center;'>greater than</td> </tr></table>                                                                                  </td><td class='td00' id='TBL-55-1-4' style='white-space:nowrap; text-align:center;'>  <table class='tabular' id='TBL-57'><colgroup id='TBL-57-1g'><col id='TBL-57-1' /></colgroup><tr id='TBL-57-1-' style='vertical-align:baseline;'><td class='td00' id='TBL-57-1-1' style='white-space:nowrap; text-align:center;'>   lt    </td> </tr><tr id='TBL-57-2-' style='vertical-align:baseline;'><td class='td00' id='TBL-57-2-1' style='white-space:nowrap; text-align:center;'>less than</td> </tr></table>                                                                                      </td><td class='td00' id='TBL-55-1-5' style='white-space:nowrap; text-align:center;'>  <table class='tabular' id='TBL-58'><colgroup id='TBL-58-1g'><col id='TBL-58-1' /></colgroup><tr id='TBL-58-1-' style='vertical-align:baseline;'><td class='td00' id='TBL-58-1-1' style='white-space:nowrap; text-align:center;'> eq  </td> </tr><tr id='TBL-58-2-' style='vertical-align:baseline;'><td class='td00' id='TBL-58-2-1' style='white-space:nowrap; text-align:center;'>equal</td> </tr></table>                                                                                           </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td></tr><tr id='TBL-55-2-' style='vertical-align:baseline;'><td class='td00' id='TBL-55-2-1' style='white-space:nowrap; text-align:center;'>  0   </td><td class='td00' id='TBL-55-2-2' style='white-space:nowrap; text-align:center;'>  0   </td><td class='td00' id='TBL-55-2-3' style='white-space:nowrap; text-align:center;'>                                0                                                   </td><td class='td00' id='TBL-55-2-4' style='white-space:nowrap; text-align:center;'>                                0                                                   </td><td class='td00' id='TBL-55-2-5' style='white-space:nowrap; text-align:center;'>                                1                                                   </td>
</tr><tr id='TBL-55-3-' style='vertical-align:baseline;'><td class='td00' id='TBL-55-3-1' style='white-space:nowrap; text-align:center;'>  0   </td><td class='td00' id='TBL-55-3-2' style='white-space:nowrap; text-align:center;'>  1   </td><td class='td00' id='TBL-55-3-3' style='white-space:nowrap; text-align:center;'>                                0                                                   </td><td class='td00' id='TBL-55-3-4' style='white-space:nowrap; text-align:center;'>                                1                                                   </td><td class='td00' id='TBL-55-3-5' style='white-space:nowrap; text-align:center;'>                                0                                                   </td>
</tr><tr id='TBL-55-4-' style='vertical-align:baseline;'><td class='td00' id='TBL-55-4-1' style='white-space:nowrap; text-align:center;'>  1   </td><td class='td00' id='TBL-55-4-2' style='white-space:nowrap; text-align:center;'>  0   </td><td class='td00' id='TBL-55-4-3' style='white-space:nowrap; text-align:center;'>                                1                                                   </td><td class='td00' id='TBL-55-4-4' style='white-space:nowrap; text-align:center;'>                                0                                                   </td><td class='td00' id='TBL-55-4-5' style='white-space:nowrap; text-align:center;'>                                0                                                   </td>
</tr><tr id='TBL-55-5-' style='vertical-align:baseline;'><td class='td00' id='TBL-55-5-1' style='white-space:nowrap; text-align:center;'>  1   </td><td class='td00' id='TBL-55-5-2' style='white-space:nowrap; text-align:center;'>  1   </td><td class='td00' id='TBL-55-5-3' style='white-space:nowrap; text-align:center;'>                                0                                                   </td><td class='td00' id='TBL-55-5-4' style='white-space:nowrap; text-align:center;'>                                0                                                   </td><td class='td00' id='TBL-55-5-5' style='white-space:nowrap; text-align:center;'>                                1                                                   </td>
</tr><tr class='hline' style='border-top:1px solid #000'><td></td><td></td><td></td><td></td><td></td></tr></table>                                                                                                                                                                                                                                                    </div>
<figcaption class='caption'><span class='id'>Table 6.5: </span><span class='content'>Truth table for 1-bit comparator.</span></figcaption><!-- tex4ht:label?: x1-45001r5  -->
                                                                          

                                                                          
   </figure>
   </div>
<!-- l. 2033 --><p class='indent'>   If we wanted to extend this circuit to compare 4-bit numbers instead, we could
do it by stacking up a bunch of these simpler 1-bit comparator units
and adding some extra logic that I will leave for you to figure out on
your own as an exercise. But here is the circuit for comparing two 4-bit
numbers:
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 2037 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c6s3_comparator_4b_impl.png' width='80%' />
                                                                          

                                                                          
</p>
   </figure>
<!-- l. 2042 --><p class='indent'>   Scaling this further to 8-bit number comparison, the same simple logic follows.
Try to do this yourself to see what I mean.
   
</p>
   <h3 class='sectionHead' id='arithmetic-logic-unit-alu'><span class='titlemark'>6.4   </span> <a id='x1-460006.4'></a>Arithmetic Logic Unit (ALU)</h3>
<!-- l. 2045 --><p class='noindent'>Now that we have built both <span class='cmbx-12'>arithmetic unit </span>and <span class='cmbx-12'>logic unit</span>, we can combine
them under the <span class='cmbx-12'>arithmetic and logic unit</span>. Moreover, we will add some more
functionality to this ALU bad boy. Here are the things I want my ALU to be
capable of doing:
</p>
      <ul class='itemize1'>
      <li class='itemize'>Rotate a number to left or to right by one bit (<span class='cmbx-12'>rotl </span>and <span class='cmbx-12'>rotr</span>): <span class='mathjax-inline'>\(\operatorname {rotl}(\overline {a_7 a_6 \dots a_1 a_0}) = \overline {a_6 a_5 \dots a_1 a_0 a_7}\)</span> and <span class='mathjax-inline'>\(\operatorname {rotr}(\overline {a_7 a_6 \dots a_1 a_0}) = \overline {a_0 a_7 a_6 \dots a_2 a_1}\)</span>.
      </li>
      <li class='itemize'>Shift a number to left or to right by one bit (<span class='cmbx-12'>shiftl </span>and <span class='cmbx-12'>shiftr</span>): <span class='mathjax-inline'>\(\operatorname {shiftl}(\overline {a_7 a_6 \dots a_1 a_0}) = \overline {a_6 a_5 \dots a_1 a_0 0}\)</span> and
      <span class='mathjax-inline'>\(\operatorname {shiftr}(\overline {a_7 a_6 \dots a_1 a_0}) = \overline {0 a_7 a_6 \dots a_2 a_1}\)</span>.
      </li>
      <li class='itemize'>2’s complement of a number: NOT(a) + 1.</li></ul>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 2055 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c6s4_alu_8b_impl.png' width='80%' />
                                                                          

                                                                          
</p>
   </figure>
<!-- l. 2060 --><p class='indent'>   Since our ISA has assigned special opcodes for each operation, we connect
outputs of these arithmetic and logic components (such as rotl, rotr, shiftl,
shiftl, 8-bit adder, 8-bit comparator, NOTx8, ANDx8, ORx8 XORx8, 2’s
complementer) to a 16x1 MUX and provide the 4-bit opcode (<span class='mathjax-inline'>\(b_{14:11}\)</span>) as the selector
bits.
   
</p>
   <h3 class='sectionHead' id='random-access-memory-ram'><span class='titlemark'>6.5   </span> <a id='x1-470006.5'></a>Random Access Memory (RAM)</h3>
<!-- l. 2063 --><p class='noindent'>Having learned about the latches and flip-flops, building an 8-bit register is easy:
just stack 8 flip-flops (or latches if you don’t want edge-triggered memory). Since
we want edge-triggered memory, here is a simple implementation by using 8 D
flip-flops, all in sync with the global clock:
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 2067 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c6s5_reg_8b_impl.png' width='50%' />
                                                                          

                                                                          
</p>
   </figure>
<!-- l. 2072 --><p class='indent'>   We will come back to this 8-bit register in a bit. Now, let’s understand how
addressing works in a basic <span class='cmbx-12'>bit-level addressable memory</span>. Say there are 4 D
flip-flops (conventionally indexed from 00 to 11 in binary) and we would
like to ”use” the third one (at index 10). By ”using”, we have to also
specify whether we would like to write some data to it or read the data
already stored in it. Therefore, we have two additional input bits <span class='cmbx-12'>WE</span>
(write-enable) and <span class='cmbx-12'>RE </span>(read-enable). Sometimes these are also called <span class='cmbx-12'>load </span>and
<span class='cmbx-12'>enable </span>bits. Here is the circuit that allows us to work with such a memory
unit:
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 2076 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c6s5_ram_4b_impl.png' width='80%' />
                                                                          

                                                                          
</p>
   </figure>
<!-- l. 2081 --><p class='indent'>   Now, let’s go back our 8-bit register once again. This is essentially what
byte-addressable memory uses: we stack up 256 of these 8-bit registers and only
active one of them depending on the 8-bit address, as well as WE/RE bits. We
used four 2x1 MUXs to select one out of 4 D flip-flops previously. It is easy to
apply the same logic to select one out of 4 8-bit registers, as well. This
will give us 4 bytes of byte-addressable memory unit or 2x8 RAM (2
indicates number of address bits and 8 represents addressability). To
construct 4x8 RAM, you would need to apply the same logic using four 2x1
MUXs recursively to four 2x8 RAM units (instead of four D flip-flops).
Then to build 6x8 RAM, the same organization of 2x1 MUXs will be
connected to four 4x8 RAM units. Finally, by using four 6x8 RAM units in a
similar organization, we could build 8x8 RAM or 256 byte byte-addressable
RAM.
</p>
   <figure class='figure'> 

                                                                          

                                                                          
                                                                          

                                                                          
<!-- l. 2085 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c6s5_ram_8x8_impl.png' width='80%' />
                                                                          

                                                                          
</p>
   </figure>
<!-- l. 2090 --><p class='indent'>   The figure above shows the construction of 8x8 RAM by using four 6x8 RAM
units, each of which is similarly constructed by using four 4x8 RAM units
(this goes on until we use four 8-bit registers to construct a 2x2 RAM
unit).
   
</p>
   <h3 class='sectionHead' id='the-dx-computer'><span class='titlemark'>6.6   </span> <a id='x1-480006.6'></a>The DX8 Computer</h3>
<!-- l. 2093 --><p class='noindent'>We are going to build the four high-level components that we are going to use to
assembly my DX8 computer. These components are the following:
</p>
      <ul class='itemize1'>
      <li class='itemize'><span class='cmbx-12'>Stepper </span>-  that  turns  on  a  single  output  bit  in  a  predefined  order
      repetitively and synchronously based on the global clock signal.
      </li>
      <li class='itemize'><span class='cmbx-12'>Register File </span>- a small memory unit consisting of 8 registers that can
      be selected by using 3-bit addresses, also in sync with the clock.
      </li>
      <li class='itemize'><span class='cmbx-12'>ALU </span>- we have already built this; we are just going to containarize it.
      </li>
      <li class='itemize'><span class='cmbx-12'>Contoller </span>- that output the control bits for different components inside
      our computer depending the current workflow, syncronized with the
      clock.</li></ul>
                                                                          

                                                                          
<!-- l. 2102 --><p class='indent'>   It is very natural to ask why the hell we need a thing called <span class='cmbx-12'>stepper </span>in the
first place. Well, to understand the reason we need it, I first need to introduce the
four main stages of computation that goes inside a computer:
</p><!-- l. 2104 --><p class='indent'>
      </p><ol class='enumerate1'>
<li class='enumerate' id='x1-48002x1'><span class='cmbx-12'>Fetch </span>- in this stage Controller sets the RE control bits of RAM to read
      data, and sets the WE control bits of Register file and other bunch of
      relevant registers (such as IR) so that instruction is fetched and saved
      into the registers properly for the next stage;
      </li>
<li class='enumerate' id='x1-48004x2'><span class='cmbx-12'>Decode </span>- in this stage the instruction is scrutinized to understand
      whether it’s ALU or Memory instruction, and which component within
      ALU is responsible for it;
      </li>
<li class='enumerate' id='x1-48006x3'><span class='cmbx-12'>Execute </span>- in this stage the decoded instruction is executed either in
      ALU or elsewhere and the outputs are stored temporarily in registers
      such as regOUT, regFLAG, etc.;
      </li>
<li class='enumerate' id='x1-48008x4'><span class='cmbx-12'>Load </span>- in this stage the temporarily saved results from the previous
      stage gets written back to the main memory unit (RAM) if needed,
      and cycle repeats again.</li></ol>
<!-- l. 2111 --><p class='indent'>   There are different ways of going through these 4 stages inside computers in
general. Here are 3 different ways that a computer can be built to go through
these <span class='cmbx-12'>Fetch-Decode-Execute-Load </span>stages:
</p><!-- l. 2113 --><p class='indent'>
                                                                          

                                                                          
      </p><ol class='enumerate1'>
<li class='enumerate' id='x1-48010x1'><span class='cmbx-12'>Single-cycle </span>processing uses single clock cycle to go through all of the
      4 stages at once.
      </li>
<li class='enumerate' id='x1-48012x2'><span class='cmbx-12'>Multi-cycle </span>processing uses different clock cycles to go through each
      of  4  stages  individually,  improving  the  performance  compared  to  a
      single-cycle machine.
      </li>
<li class='enumerate' id='x1-48014x3'><span class='cmbx-12'>Pipelined  </span>processing   further   imporoves   the   performance   of   a
      multi-cycle CPU by not putting the next instructions throught the idle
      stages not used by the current instruction anymore.</li></ol>
<!-- l. 2119 --><p class='indent'>   If you do not fully understand what <span class='cmbx-12'>pipelining </span>is, do not worry about it too
much for now. I have decided that I want to go with multi-cycle processor design
for the DX8 CPU. You can view it as a tradeoff for performance and simplicity for
this book. Building single-cycle is the simplest and the pipelined is the
hardest, while single-cycle is the least efficient and the pipelined is the
most efficient. This leaves the multi-cycle CPU in the middle: moderate
complexity in design and moderate performance in practice! That’s what I
wanted.
   
</p>
   <h4 class='subsectionHead' id='singlecycle-multicycle-pipelined-design'><span class='titlemark'>6.6.1   </span> <a id='x1-490006.6.1'></a>Single-cycle, Multi-cycle, Pipelined Design</h4>
<!-- l. 2122 --><p class='noindent'>We said there are 4 stages of electricity running inside our computer: (1)
electricity running to fetch instruction from main memory to the instruction
register IR, (2) electricity running to decode the fetched IR content to know what
control signals should be sent to the rest of the hardware to execute the
                                                                          

                                                                          
instruction in IR, (3) electricity running to actually follow the generated control
signal to the different hardware components in order to execute the instruction
and save results into their corresponding registers, (4) electricity running to store
these results held in temporary registers into the main memory if needed. Well,
having 4 stages like this makes the design process easier and modular. Here is the
roughly drawn picture illustrating these 4 stages in a single-cycle and multi-cycle
processor:
</p>
   <figure class='figure' id='x1-49001r3'><span id='fetchdecodeexecuteload-in-top-singlecycle-and-bottom-multicycle-cpu'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 2126 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/fdel-single-cycle.png' width='50%' />
</p><!-- l. 2128 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/fdel-multi-cycle.png' width='50%' />
</p>
<figcaption class='caption'><span class='id'>Figure 6.3: </span><span class='content'>Fetch-Decode-Execute-Load in <span class='cmbx-12'>(top) </span>single-cycle and <span class='cmbx-12'>bottom)</span>
multi-cycle CPU.</span></figcaption><!-- tex4ht:label?: x1-49001r3  -->
                                                                          

                                                                          
   </figure>
<!-- l. 2133 --><p class='indent'>   In a pipelined processing, the unused stages by the current instruction is given
to the use for the next instruction. This makes the next instruction to already
start executing even when the previous instruction is not completely finished with
all the stages. This is shown in the figure below clearly:
</p>
   <figure class='figure' id='x1-49002r4'><span id='fetchdecodeexecuteload-in-top-multicycle-and-bottom-pipelined-cpu'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 2137 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/fdel-multi-cycle-blocking.png' width='90%' />
</p><!-- l. 2139 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/fdel-pipelined.png' width='90%' />
</p>
<figcaption class='caption'><span class='id'>Figure 6.4: </span><span class='content'>Fetch-Decode-Execute-Load in <span class='cmbx-12'>(top) </span>multi-cycle and <span class='cmbx-12'>(bottom)</span>
pipelined CPU.</span></figcaption><!-- tex4ht:label?: x1-49002r4  -->
                                                                          

                                                                          
   </figure>
<!-- l. 2144 --><p class='indent'>   Speaking of optimizing CPU performance, here is something that I want to
mention very briefly for the curious readers out there. The <span class='cmti-12'>amount of time it
takes for the CPU to finish one instruction </span>is called <span class='cmbx-12'>latency</span>, and the
<span class='cmti-12'>number of instructions finished in each “second” </span>is called <span class='cmbx-12'>throughput</span>.
Moving from single-cycle to multi-cycle processor design clearly improves
performance by reducing the latency, and moving from multi-cycle to pipelined
processor does not inherently change the latency (that is, an instruction
still takes the same 4 stages in multiple cycles to finish) but increases
the throughput. This can be clearly observed from the figure above as
follows:
</p>
      <ul class='itemize1'>
      <li class='itemize'>If the longest instruction takes 100 ns then the clock period must be
      at least 100 ns in single-cycle CPU in order to finish even the hardest
      instruction properly;
      </li>
      <li class='itemize'>In a single cycle CPU, setting clock period to 100 ns will also cause
      every instruction to finish in 100 ns (even if some instruction could
      have been finished sooner than that);
      </li>
      <li class='itemize'>Multi-cycle  CPU  solves  this  problem  by  allocating  varying  number
      of  cycles  for  each  stage  in  Fetch-Decode-Execute-Load;  now,  if  an
      instruction could be fetched in 2 cycles then only 2 cycles are spared
      for it, and if a single cycle is enough for decoding then only single cycle
      is spared for decoding, and so on;
      </li>
      <li class='itemize'>However,  the  next  instruction  must  wait  for  the  current  one  to
      completely finish in multi-cycle CPU; but if current instruction has
      already finished the Fetch stage and now is processed in the Decode
                                                                          

                                                                          
      stage, why shouldn’t we allow the next instruction to be fetched since
      our “fetcher” is idle?
      </li>
      <li class='itemize'>Pipelined CPU solves this problem by pipelining instructions next to
      one another, increasing the throughput.</li></ul>
<!-- l. 2154 --><p class='indent'>   Even though the latency does not change when we go from multi-cycle
CPU to pipelined one (see the diagram above again – clock period is the
same for both), in multi-cycle design it would take 24 cycles to execute 3
instructions (assuming each phase takes exactly 2 cycles, and therefore,
each instruction takes exactly 8 cycles), whereas in pipelined design it
would take 10 cycles for the same 3 instructions to finish. In this example,
throughput for the multi-cycle CPU would be <span class='mathjax-inline'>\(\frac {3}{24} = 0.125\)</span>, and for pipelined CPU
it would be <span class='mathjax-inline'>\(\frac {3}{10} = 0.3\)</span>; this is 2.4x more throughput… 2.4x more instructions per
cycle.
   
</p>
   <h4 class='subsectionHead' id='stepper'><span class='titlemark'>6.6.2   </span> <a id='x1-500006.6.2'></a>Stepper</h4>
<!-- l. 2157 --><p class='noindent'>To have a clear separation of which phase is executing for a given instruction, we
are going to build a component called <span class='cmbx-12'>stepper</span>. Stepper has one external
<span class='cmtt-12'>reset </span>input. It operates with the clock signal to output one-hot encoded
values to indicate which stage the CPU should be in the current clock
cycle. To build a stepper, we can use a binary counter and a decoder as
follows:
</p>
   <figure class='figure' id='x1-50001r5'><span id='step-stepper-implementation'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 2161 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c6s6_stepper_impl.png' width='50%' />
</p>
<figcaption class='caption'><span class='id'>Figure 6.5: </span><span class='content'>8-step Stepper implementation.</span></figcaption><!-- tex4ht:label?: x1-50001r5  -->
                                                                          

                                                                          
   </figure>
<!-- l. 2166 --><p class='indent'>   To build DX8, I am going to allocate maximum of 2 steps (or 2 clock cycles)
for each stage. Therefore, <span class='cmbx-12'>Fetch </span>will take 2 clock cycles (steps 1 and 2), <span class='cmbx-12'>Decode</span>
will take the next 2 clock cycles after <span class='cmbx-12'>Fetch </span>(steps 3 and 4), <span class='cmbx-12'>Execute </span>will take
the next 2 clock cycles (that is steps 5 and 6), and <span class='cmbx-12'>Load </span>will take the last 2 clock
cycles (steps 7 and 8). Notice that the stepper will go from step 1 to step 8, and
then it will go back to step 1 again, and the same behavior will repeat. This is
literally what stepper is useful for: for telling us which stage we are in
currently.
</p><!-- l. 2168 --><p class='indent'>   Before ending this section, let me briefly show you another pair of useful
components that are going to be used in DX8: <span class='cmbx-12'>register file with 8 8-bit
registers </span>and <span class='cmbx-12'>8-bit ALU</span>. Designing the register file is really easy since we have
already seen how RAM is built. We will use the same logic to build 3x8 RAM
(byte-addressable RAM with 3-bit addresses):
</p>
   <figure class='figure' id='x1-50002r6'><span id='register-file-implementation-with-addressable-bit-register-r-r'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 2172 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c6s6_reg_3x8_impl.png' width='80%' />
</p>
<figcaption class='caption'><span class='id'>Figure 6.6: </span><span class='content'>Register File implementation with 8 addressable 8-bit register: <span class='mathjax-inline'>\(\texttt {R0}_{7:0}, \dots , \texttt {R7}_{7:0}\)</span>.</span></figcaption><!-- tex4ht:label?: x1-50002r6  -->
                                                                          

                                                                          
   </figure>
<!-- l. 2176 --><p class='indent'>   The register file built in the figure above actually holds 16 registers, but we
will only use the first 8 of them. Now, let’s see our ALU component that we built
previously but did not “containarize” it.
</p>
   <figure class='figure' id='x1-50003r7'><span id='bit-pseudocpu-implementation'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<div class='minipage'><!-- l. 2181 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c6s6_cpu_8b_impl.png' width='65%' />
</p>
<figcaption class='caption'><span class='id'>Figure 6.7: </span><span class='content'>8-bit (pseudo-)CPU implementation.</span></figcaption><!-- tex4ht:label?: x1-50003r7  -->                   </div>
                                                                          

                                                                          
   </figure>
<!-- l. 2187 --><p class='indent'>   There you go. We have a 8-bit ALU component as well as the register
file.
   
</p>
   <h4 class='subsectionHead' id='controller'><span class='titlemark'>6.6.3   </span> <a id='x1-510006.6.3'></a>Controller</h4>
<!-- l. 2190 --><p class='noindent'>We need to build the last component before we put everything together for my
DX8 computer. The component we are going to build is called <span class='cmbx-12'>Control Unit </span>or
<span class='cmbx-12'>Controller</span>. But you may wonder why we need such a component in the first
place. Let me explain.
</p><!-- l. 2192 --><p class='indent'>   Suppose we are in the first stage where we need to fetch an instruction from
the main memory into the instruction register IR. The question is, which
wires are going to be active during this stage? To be able to answer this
question, let’s see the <span class='cmbx-12'>data path </span>of the DX8 computer that I gave you
earlier:
</p>
   <figure class='figure' id='x1-51001r8'><span id='data-path-for-the-dx-computer-while-fetching'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 2196 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/dx8-datapath-fetch.png' width='80%' />
</p>
<figcaption class='caption'><span class='id'>Figure 6.8: </span><span class='content'>Data path for the DX8 computer while <span class='cmbx-12'>fetching</span>.</span></figcaption><!-- tex4ht:label?: x1-51001r8  -->
                                                                          

                                                                          
   </figure>
<!-- l. 2201 --><p class='indent'>   When decoding the arguments present in the instruction must be
sent to their corresponding register regA and regB and the operation
must be sent in 4-bits to the ALU, assuming it is an ALU instruction.
Therefore, the data path for decoding should roughly look like something
below:
</p>
   <figure class='figure' id='x1-51002r9'><span id='data-path-for-the-dx-computer-while-decoding'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 2205 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/dx8-datapath-decode.png' width='80%' />
</p>
<figcaption class='caption'><span class='id'>Figure 6.9: </span><span class='content'>Data path for the DX8 computer while <span class='cmbx-12'>decoding</span>.</span></figcaption><!-- tex4ht:label?: x1-51002r9  -->
                                                                          

                                                                          
   </figure>
   <figure class='figure' id='x1-51003r10'><span id='data-path-for-the-dx-computer-while-executing'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 2212 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/dx8-datapath-execute.png' width='80%' />
</p>
<figcaption class='caption'><span class='id'>Figure 6.10: </span><span class='content'>Data path for the DX8 computer while <span class='cmbx-12'>executing</span>.</span></figcaption><!-- tex4ht:label?: x1-51003r10  -->
                                                                          

                                                                          
   </figure>
   <figure class='figure' id='x1-51004r11'><span id='data-path-for-the-dx-computer-while-loading'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 2219 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/other/dx8-datapath-load.png' width='80%' />
</p>
<figcaption class='caption'><span class='id'>Figure 6.11: </span><span class='content'>Data path for the DX8 computer while <span class='cmbx-12'>loading</span>.</span></figcaption><!-- tex4ht:label?: x1-51004r11  -->
                                                                          

                                                                          
   </figure>
<!-- l. 2224 --><p class='indent'>   Now that we know what wires become “hot” during each and every stage of
clock cycles, how do we make these wires become “hot” and active? Well, we do it
by basically read-enabling outputs of a source component and write-enabling the
target component that the data needs to transfer to. Controlling these
read-enable, write-enable, or some of the select bits of MUXs used to transfer data
is the job of <span class='cmbx-12'>controller</span>. The controller takes signal from various sources,
important one being the stepper’s output to know which stage is executing and
the instruction itself, and decides which enable/select bits must be turned on and
off for other components.
</p>
   <figure class='figure' id='x1-51005r12'><span id='controller-implementation'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 2228 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c6s6_controller_impl.png' width='95%' />
</p>
<figcaption class='caption'><span class='id'>Figure 6.12: </span><span class='content'>Controller implementation.</span></figcaption><!-- tex4ht:label?: x1-51005r12  -->
                                                                          

                                                                          
   </figure>
<!-- l. 2233 --><p class='indent'>   Above you see the implementation of the control unit that is used in DX8. It is
not too fancy: if you take a look at it closely, you will be able to figure it out
easily. For example, look at what happens when controller’s <span class='cmbx-12'>s1 </span>input becomes
high: <span class='cmbx-12'>regFileWE </span>turns high (which is connected to the write-enable input of the
register file), allowing the instruction to be copied from the main memory to the
register file during the first cycle of <span class='cmbx-12'>fetching</span>. The inputs and outputs of the
controller will make sense once you see all the components together inside the
DX8 computer. That’s when you will be able to track each output and wire to see
which components get affected by the control outputs. So, let’s see the whole
thing!
   
</p>
   <h4 class='subsectionHead' id='putting-everything-together'><span class='titlemark'>6.6.4   </span> <a id='x1-520006.6.4'></a>Putting everything together!</h4>
<!-- l. 2236 --><p class='noindent'>Here is the <span class='rm-qzcmi-x-x-144'>8-bit Dummy </span>computer:
</p>
   <figure class='figure' id='x1-52001r13'><span id='the-dx-computer1'></span> 

                                                                          

                                                                          

                                                                          

                                                                          
<!-- l. 2240 --><p class='noindent'><img alt='PIC'  src='/assets/courses/comp-arch/figures/c6s6_dx8.png' width='100%' />
</p>
<figcaption class='caption'><span class='id'>Figure 6.13: </span><span class='content'>The DX8 Computer!</span></figcaption><!-- tex4ht:label?: x1-52001r13  -->
                                                                          

                                                                          
   </figure>
<!-- l. 2245 --><p class='indent'>   It even has very basic keyboard: <span class='cmbx-12'>8-bit data </span>input switches and <span class='cmbx-12'>8-bit addr</span>
address switches (with which you can specify the memory address inside RAM
you want to put your <span class='cmti-12'>input data</span>). Before I explain how input system works
for this computer, let me first tell you the difference between a (push)
<span class='cmbx-12'>button </span>and a <span class='cmbx-12'>switch</span>. A button sends high signal through its output
wire as long as it is pressed; its output immediately drops to 0 when you
lift your finger up. In contrast, a switch becomes ON (sends high signal
through its output wire) once you turn it on, and then you can keep your
fingers away from it and it will still keep sending 1 through the wire; it will
become OFF again once you turn it off and then it will stay OFF unless
you turn it on again later on. The difference may sound subtle, but it is
important: to make push button become ON (to send high signal) you need to
actively use your finger to press it, whereas you only need your finger
once to turn on the switch. Having clarified this difference between these
two essential input components, this is how you can operate the DX8
computer:
      </p><ol class='enumerate1'>
<li class='enumerate' id='x1-52003x1'>Turn on the single-bit <span class='cmbx-12'>reset </span>switch.
      </li>
<li class='enumerate' id='x1-52005x2'>
      <!-- l. 2249 --><p class='noindent'>If you want to program the computer before letting it run:
           </p><ol class='enumerate2'>
<li class='enumerate' id='x1-52007x1'>Put in the data bits in the <span class='cmbx-12'>8-bit data </span>switch.
           </li>
<li class='enumerate' id='x1-52009x2'>Put in the address bits in the <span class='cmbx-12'>8-bit addr </span>switch.
                                                                          

                                                                          
           </li>
<li class='enumerate' id='x1-52011x3'>Push the <span class='cmbx-12'>write </span>button (it is essentially the same as turning on
           1-bit switch and then turning it off instantly).
           </li>
<li class='enumerate' id='x1-52013x4'>Repeat  this  process  as  long  as  you  haven’t  finished  putting
           everything you need in the main memory.</li></ol>
      </li>
<li class='enumerate' id='x1-52015x3'>Turn off the <span class='cmbx-12'>reset </span>switch and the DX8 will start working.</li></ol>
<!-- l. 2259 --><p class='indent'>   I hope you enjoyed reading this book. You can find everything related to DX8
in the following github repo:  <a href='https://github.com/AliKhudiyev/alikhudiyev.github.io/tree/main//assets/courses/comp-arch'>dx8-course-material</a>.
                                                                          

                                                                          
</p><!-- l. 2261 --><p class='indent'>
                                                                          

                                                                          
</p>
   <h2 class='chapterHead' id='epilogue'><span class='titlemark'>Chapter 7</span><br /><a id='x1-530007'></a>Epilogue</h2>
<!-- l. 2262 --><p class='noindent'>You have reached the end of this journey. Thanks for reading this unpolished
draft book, which is more like a lecture notes from the caveman. I want you to
know that any constructive feedback is appreciated. You can contact me via my
email for this. Now, if you are a sharp reader you may catch a lot of things and
technical details which were introduced and explained in a very hand-wavy
manner. This is no coincidence. I wanted to keep this book under 100 pages, so
that readers with even a little patience could get the courage to read it
without hesitation. That’s why I have usually went straight to the point
sometimes without trying to explain very thoroughly the whys, hows, and
whats. What you may also notice is that while building my DX8 computer,
I did not bother with the timing constraints at all, even though I was
telling you to be careful about all this <span class='cmti-12'>setup </span>and <span class='cmti-12'>hold </span>time constraints
while building sequential circuits. The reason I did not bother the timing
in parts of the book where I was explaining how DX8 can be built is
because <span class='cmti-12'>real computer architects do not care about timing violations</span>. If it
works, then it works; and if it doesn’t then you suck and you need to
probably go back to checking your timing constraints after making sure your
logic works right. Okay, jokes aside, I did not do the time checks while
building DX8 because <span class='cmti-12'>I left it as an exercise for readers</span>. Okay, okay… I just
didn’t because I did not want to bother (at least for now… or maybe for
ever…).
</p>
    
<!-- </body> --> 
<!-- </html> -->
