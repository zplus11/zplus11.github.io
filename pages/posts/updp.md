---
title: THE universal property of direct products
date: 22 May, 2026
---

I studied module theory the past semester, and noticeably I couldn't find the "complete version" universal property of direct products anywhere I've looked so far. That is the version we studied in this course. I am thus going to write it out here.

**Theorem** *(Universal property of direct product)*<strong>.</strong> Let $R$ be a ring. Let $M$ be a (left-) $R$ module and $\{M_\alpha\}_{\alpha\in J}$ be a family $R$ modules. Then, $M\cong \prod_\alpha M_\alpha$ if and only if there exists a family or $R$-homs $\{p_\alpha:M\to M_\alpha\}$ satisfying the following property: for any $R$-module $A$ and any associated family of $R$-homs $\{f_\alpha: A\to M_\alpha\}$, there exists a unique $R$-hom $\phi:A\to M$ such that $f_\alpha = \phi p_\alpha$ for each $\alpha\in J$.

*Proof.* We first prove the forward part. Let $\rho:M\to \prod_\alpha M_\alpha$ be an isomorphism. We prove existence of the required family of R-homs $\{p_\alpha\}$. Let $\pi_\beta:\prod_\alpha M_\alpha \to M_\beta$ be the canonical projections. We propose that $p_\alpha=\pi_\alpha\circ\rho$ satisfy the given property.

![Diagram resembling the maps between $M, $\prod_\alpha M_\alpha$, and $M_\beta$.](img/updp1.svg)

To show that this proposed family $\{p_\alpha\}$ satisfies the given property, we let $A$ be any other $R$-module and $\{f_\alpha:A\to M_\alpha\}$ be an associated family of $R$-homs.

![Extended diagram](img/updp2.svg)

We produce the required $\phi:A\to M$. First consider $\eta:A\to\prod_\alpha M_\alpha$ defined by

$$\eta(a) := \big(f_\alpha (a)\big)_\alpha.$$

Since each $f_\alpha$ is an $R$-hom therefore so is $\eta$. Then define $\phi=\rho^{-1}\circ\eta$.
