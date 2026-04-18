---
title: The least confusing set theory problem
date: 13 March, 2026
---

Copyright (c) all rights reserved.

As much confusing as it gets, set theory is crucial in mathematics: it forms the basis of almost all fields, in the sense that everything boils down to sets. Talk continuous functions: a function $f$ that is continuous on each point in the domain. The domain you say? that is a set. $f$ itself is a relation between sets. Continuity itself eventually becomes a statement about sets of points. So sets are important, and in this article I will discuss a problem concerning them. It goes:

Given $X$ and $A$, can you find $A'$ that is in bijection with $A$, such that $A'\cap X=\phi$?

Put simply, we wish to construct, using $A$, an $A'$ which contains the "same number of" elements as $A$, but which does not contain anything in $X$. Sounds quite simple, and in fact intuitive enough. Surely we can, but how precisely is the question.^[This article is actually based on a class discussion, and the question appears in the proof of *Stone&ndash;Cech compactification* theorem, done in the course of General Topology taught by <a href="https://sites.google.com/view/nagarwal/home" target="_blank">Prof. Nikita Agarwal.</a>]

Now, let us start with an example. Let $X=\{1,2,3\}$ and $A=\{a,b\}$. We need to fill $A'=\{\_,\_\}$ with elements not in $X$. Simple enough: we can take $A'=\{4,5\}$. But this is just a particular solution, we need a general solution. One way could be to somehow calculate the maximum (say $m$) of $X$ and add $m+1,m+2,\ldots$ according to however many elements there are in $A$. But this fails very easily, consider $X=\mathbb N=\{1,2,\ldots\}$. $m$ does not exist. Furthermore, how to calculate $m$ if, say, $X$ is $\{a,b\}$? This leads us to start using what we have at hand, namely $A$ and $X$, in order to construct $A'$.

We need elements that are in bijection with $A$, so why not use elements of $A$ to construct $A'$? Let us note that if $A$ does not contain anything that is in $X$, we can simply take $A'=A$. So the problem comes from the case when $A\cap X\neq\phi$. Consider the set

$$A_1=\Big\{\{a\}:a\in A\Big\}.$$

If $A=\{1,2\}$, then this set becomes $\Big\{\{1\},\{2\}\Big\}$. $A\cap X$ need not be empty so we cannot use $A'=A$, but can we use $A'=A_1$? Well, no. Consider the following setting:

$$X=\Big\{1,\{1\}\Big\},\quad A=\{1\},\quad A_1=\Big\{\{1\}\Big\}.$$

Clearly $A$ contains 1 that is in $X$, but $X$ also contains $\{1\}$ so $A_1$ becomes an invalid choice. We really have no restriction on $X$, it can contain *anything* that can be contained in a set: namely everything. For the same reason, things like

$$A_2=\{(a,0):a\in A\}$$

fail as well. Take $X=\{0,(0,0)\}$ and $A=\{0\}$. Rather than tupling up $a$'s with 0, we may wish to tuple them with something that is NOT in $X$, say $b$, so that it becomes

$$A_3=\{(a,b):a\in A\},$$

but even that does not work. Take $X=\{1,(1,b)\}$ and $A=\{1\}$. $X$ doesn't contain $b$ but it can very well contain $(1,b)$.

Nothing has worked so far. Now I present my best solution which I believe works out. I present a fact first: a set $X$ cannot contain itself. For otherwise, if we consider the simplest case of $X=\{X\}$ and if we were to write out $X$, we would go
$$
\begin{aligned}
X&=\{X\} \\
&=\{\{X\}\}\\
&=\{\{\{X\}\}\}\\
&=\;\vdots
\end{aligned}
$$
which starts a miserable endless loop, indicating that $X$ is not really something legal. In simple words, $X$ cannot be defined in its own terms. This is equivalent to defining

$$f(x):=g(x),\qquad g(x):=f(x)$$

so that $f(0)$ starts an endless loop. Hence, we finally have something that can NOT belong to $X$: itself. We use (exploit) this fact to construct our $A'$. We can actually extend this idea as follows: let $X$ be a set, then any expression explicitly containing $X$ cannot belong to $X$. Therefore, any set, tuple, sum, product, or anything else that explicitly contains $X$ will never appear in $X$. These are standing mathematical facts (read more at $\langle$[***How can a set contain itself? $\nearrow$***](https://math.stackexchange.com/questions/1046863/how-can-a-set-contain-itself)$\rangle$). In general, if $B$ belongs to $A$, then $A$ cannot belong to $B$. Hence, we finally construct

$$A_4=\{\{a,X\}:a\in A\}$$

which^[In this case, we will have $A_4=\Big\{\{1,2,3\}_1,\{1,2,3\}_2\Big\}$ in expanded form. Something like $A_4=\{1+X,2+X\}$ could also totally work, where we don't define the addition, and only use $1+X$ as a notation.] essentially "tags" $X$ with each $a$. $A_4$ clearly has a bijection with $A$ via the map $a\mapsto \{a,X\}$, and nothing in $A_4$ can ever belong to $X$. As as example, we have if $X=\{1,2,3\}$ and $A=\{1,2\}$ then $A_4=\{\{1,X\},\{2,X\}\}$. We could totally have something like $A_4=\{X_1,X_2\}$ which merely subscripts each $a$ in $A$, to $X$.

To go one step further, if the requirement was exhibiting elements that are neither in $X$ nor in $A$, nothing stops us from using something like

$$A_4=\{\{a,A,X\}:a\in A\}$$

so that none of the 3-tuples can belong to $A$ or $X$, using the same reason of circular definition.

## Alternate construction

The candidates $A_1$, $A_2$, $A_3$ were proposed during the lecture itself. I came up with $A_4$ above and shared the idea with my professor, subsequent to which she proposed the following alternate construction: let $T$ be the set of all 2-tuples appearing in $X$, and let $S$ be $\{y:(x,y)\in T\}$. Then, choose a $z$ outside of $S$. If $S$ happens to be empty, then $z$ can be anything. Finally, we may define

$$A_{3\text{b}}=\{(a,z):a\in A\}.$$

Clearly $A$ is in bijection with $A_{3\text{b}}$. Also, anything in $A_{3\text{b}}$ is a 2-tuple having $z$ at the second ordinate, and by design no such thing belongs to $X$. Hence $A_{3\text{b}}\cap X=\phi$, so that $A_{3\text{b}}$ is also a possible solution!

## End note

Both solutions, namely $A_4$ and $A_{3\text{b}}$, reflect two different mathematical philosophies. The distinctive feature of $A_4$ is that its construction depends only on $A$; the set $X$ plays no role and may be arbitrary. In this sense, $A_4$ acts as a genuinely general solution, since it works uniformly for every possible choice of $X$ without any further arragements required. By contrast, $A_{3\text{b}}$ arises from a more targeted line of reasoning. It is obtained by identifying precisely why $A_3$ fails and then modifying the construction just enough to correct that defect. While the former approach may be "elegant," the latter demonstrates an equally important aspect of mathematical reasoning: identifying the exact error and minimally repairing it.
