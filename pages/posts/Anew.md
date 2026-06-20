---
title: The art of being disjoint
date: 20 June, 2026
---

Set theory [1] is often regarded as the "scaffolding" of modern
mathematics. It is as foundational as it is omnipresent; almost every
mathematical object we encounter can ultimately be decomposed into sets.
Consider the definition of a continuous function $f$: it is defined at
every point in its *domain,* which is a set. The function $f$ itself is
formally a relation between sets. Even the property of continuity
eventually finds itself to be a statement about sets. Despite this
importance, our intuition for sets can sometimes overlook the rigorous
mechanics required "under the hood." This article explores a problem
that surfaced during a class discussion on the Stone--Cech
compactification theorem [2] in a General Topology course. The
problem is deceptively simple:

> *Given two sets $X$ and $A$, can we construct a set $A'$ that is in bijection with $A$, such that $A' \cap X = \varnothing$?*

Put simply, we want to create a copy of $A$ (say $A'$), but ensure that
this new set $A'$ shares no elements with $X$. While it feels
intuitively obvious that such a set must exist, precisely how we
construct it without making hidden assumptions about $X$ leads us
directly into the heart of axiomatic set theory.

## First attempts

We may begin with an example: let $X=\{1,2,3\}$ and $A=\{a,b\}$. Then,
we wish to fill $A'=\{\square,\square\}$ with elements that are not
present in $X$. A simple choice may be $A'=\{4,5\}$ which is acceptable.
This works for the particular case at hand, but we wish for a general
solution to this problem. One may naturally suggest finding the maximum
of $X$ (say $m$) and defining elements of $A'$ to be $m+1,m+2,\ldots$.
Although they do not belong to $X$, this approach fails very easily, for
if $X$ is something unbounded such as $\mathbb N$, $m$ cannot exist.
Furthermore, this approach does not work for non-numerical sets. This
however leads us to realise that $X$ may not have any structure (such as
ordering or arithmetic). We are thus forced to look at what we have at
hand, namely the sets $A$ and $X$ themselves, and use the raw materials
of set theory to construct $A'$. Since $A'$ is required to be in
bijection with $A$, it is natural to define it directly in terms of the
elements of $A$. Consider the set $$A_1=\{\{a\} : a \in A\}.$$ At first
glance, this appears promising: the map $a \mapsto \{a\}$ is a bijection
from $A$ onto $A_1$. However, this construction does not in general
guarantee that $A_1$ is disjoint from $X$. Indeed, consider the example

$$X=\{1,\{1\}\}, \qquad A=\{1\}, \qquad A_1=\{\{1\}\}.$$

In this case,
$A_1 \cap X \neq \varnothing$, so $A_1$ fails to satisfy the required
condition. Recall that $X$ has no restrictions on it and thus may
contain possibly *anything.* For similar reasons, other natural
constructions also fail. For instance, consider
$A_2=\{(a,0) : a \in A\}.$ Although the map $a \mapsto (a,0)$ is a
bijection from $A$ onto $A_2$, this still does not ensure disjointness
from $X$. Indeed, if $X=\{0,(0,0)\}$ and $A=\{0\},$ then
$A_2=\{(0,0)\}$, and hence $A_2 \cap X \neq \varnothing$.

So far, every construction fails for essentially the same reason: the
set $X$ is completely arbitrary and may contain objects of any form.
Consequently, no matter how we define $A'$ in terms of the elements of
$A$ alone, it is always possible that $X$ already contains some of those
very objects. Whether we use singletons, ordered pairs, or other
standard constructions, we have no control over what $X$ might include.
Thus, each attempt can be defeated by a suitable choice of $X$, leading
to a non-empty intersection $A' \cap X$. This forces us to think about
objects that $X$ *cannot* possibly contain. To make this precise, we
appeal to a fundamental principle from axiomatic set theory.

## A valid construction

To guarantee the required disjointness, one must somehow incorporate
information tied to $X$ itself into the construction. For the sake of
formality, we seek a set $D_X(A)$ such that $A\cong D_X(A)$ and
$D_X(A)\cap X=\varnothing$. We propose that
$$D_X(A):=A \times \{X\} = \{(a, X): a\in A\}$$ is a valid choice. For
one, it is clear that $A\cong D_X(A)$ via the natural map
$a\mapsto (a,X)$. To prove disjointness, we introduce regularity.

::: axiom
**Axiom 1** (Regularity). *Every non-empty set $A$ contains an element
that is disjoint from $A$; that is,
$$A \neq \varnothing \implies \exists y \in A \text{ such that } y \cap A = \varnothing.$$*
:::

A basic consequence of this axiom is the following.

::: lemma
**Lemma 1**. *No set is an element of itself.*
:::

::: proof
*Proof.* Let $X$ be any set. Consider the singleton $\{X\}$. Since
$\{X\}$ is non-empty, the axiom of regularity applies. Therefore, there
exists an element of $\{X\}$ that is disjoint from $\{X\}$. However, the
only element of $\{X\}$ is $X$ itself. Hence $X$ must be disjoint from
$\{X\}$, i.e., $$X \cap \{X\} = \varnothing.$$ But if $X \in X$, then we
have that $X\in X \cap \{X\}$, which is a contradiction. Therefore,
$X \notin X$. ?
:::

This observation is crucial for our purposes: it provides a canonical
way to produce objects that are guaranteed not to lie in $X$, by
building constructions that necessarily involve $X$ itself. We extend
this idea as follows:

::: lemma
**Lemma 2**. *There do not exist sets $A_1$, $A_2$, ..., $A_n$ such that
$$A_1\in A_2\in \dots \in A_n \in A_1.$$*
:::

::: proof
*Proof.* Let $\mathcal A=\{A_i\}_{i=1}^n$. Being nonempty, the axiom of
regularity applies to it. So, there exists some $A\in\mathcal A$ such
that $A\cap\mathcal A=\varnothing$. But $A_n\in A_1$ so
$A_1\cap\mathcal A\neq\varnothing$, and at the same time for any
$i=2,3,\ldots,n$ we have $A_{i-1}\in A_i$ so that
$A_i\cap\mathcal A\neq\varnothing$ either. Hence, a contradiction.
:::

Now it becomes easy to see that indeed $D_X(A)\cap X=\varnothing$.
Formally, the ordered pair $(a,X)$ is defined as $\{\{a\},\{a,X\}\}$,
therefore $(a,X)\in X$ results in a contradiction:
$$X\in \{a,X\} \in \{\{a\},\{a,X\}\} = (a,X) \in X$$ producing an
impossible membership cycle.

This definition of $D_X(A)$ behaves naturally with respect to functions
between sets. Indeed, given $f:A\to B$, we have
$D_X(f):D_X(A)\to D_X(B)$ defined as $D_X(f)((a,X)) = (f(a), X)$. It
naturally turns out that $D_X$ satisfies the following two properties:
$D_X(1_A) = 1_{D_X(A)}$ and
$D_X(g\circ f) = D_X(g)\circ D_X(f)$ which are easy exercises. In view
of that, $D_X$ acts as a functor on the category of all sets.

## An alternate solution {#alt}

The approach utilising axiom of regularity is not the only way out of
this problem. There exist other methods too. In this section, we discuss
some of them. The construction in preceding section makes use of the
fact that there are elements that are guaranteed to not be in $X$. In
line with that ideology, we now construct $$X_2 = \{y: (x, y)\in X\}$$
which is the set of all "second coordinates" of ordered pairs appearing
in $X$. Now, we know that the cardinality of $X_2$ is strictly less than
that of $\mathcal P(X_2)$, which is to say that there exist elements in
$\mathcal P(X_2)$ which are not in $X_2$. We pick any one of them, say
$t$. Then, it becomes easy to see that $A'=\{(a,t):a\in A\}$ is also a
valid set such that $A'\cong A$. Furthermore $A'\cap X=\varnothing$, for
if there is an $a\in A$ such that $(a,t)\in X$, then $t\in X_2$ which is
a contradiction to the definition of $X_2$.

## Discussion

At first glance, constructing a disjoint copy of a set appears to be a
routine technicality. However, as we have seen, implementing this
operation internally in pure set theory is unexpectedly subtle. Naive
constructions fail precisely because the ambient set $X$ may already
contain objects of virtually any prescribed form. The construction
$D_X(A)$ resolves this difficulty by tagging each element of $A$ with
the set $X$ itself.

Both constructions discussed above reflect two distinct styles of
mathematical reasoning. The defining feature of the first construction
is that its construction depends only on $A$, the set $X$ plays no role
and may be completely arbitrary. In this sense, it is a genuinely
general solution, as it works uniformly for every possible choice of $X$
without requiring any further adjustments. By contrast, the alternate
construction in section [4](#alt){reference-type="ref" reference="alt"}
arises from a more targeted line of thought. It is obtained by
identifying precisely what may come out to be an issue, and then
modifying it just enough to remove that defect. While the former
approach may be regarded as more "elegant," the latter illustrates an
equally important aspect of mathematical reasoning: isolating the exact
source of failure and repairing itin a minimal and controlled manner.

## References

[1] Paul R. Halmos. Naive Set Theory. Springer New York, NY, 1998.

[2] James R. Munkres. Topology. Prentic Hall, Inc., 2nd edition, 2000.