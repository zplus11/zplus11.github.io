---
title: THE universal property of direct products
date: 07 May, 2026
---

<script type="module">
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
mermaid.initialize({ startOnLoad: true });
</script>

I am studying module theory this semester, and noticeably I couldn't find the "complete version" universal property of direct products anywhere I've looked so far. That is the version we studied in this course. I am thus going to write it out here.

**Theorem** *(Universal property of direct product)*<strong>.</strong> Let $R$ be a ring. Let $M$ be a (left-) $R$ module and $\{M_\alpha\}_{\alpha\in J}$ be a family $R$ modules. Then, $M\cong \prod_\alpha M_\alpha$ if and only if there exists a family or $R$-homs $\{p_\alpha:M\to M_\alpha\}$ satisfying the following property: for any $R$-module $A$ and any associated family of $R$-homs $\{f_\alpha: A\to M_\alpha\}$, there exists a unique $R$-hom $\phi:A\to M$ such that $f_\alpha = \phi p_\alpha$ for each $\alpha\in J$.

*Proof.* We first prove the forward part. Let $M\cong \prod_\alpha M_\alpha$. We prove existence of the required family of R-homs $\{p_\alpha\}$.