---
title: A differential identity for ratios of two-term exponential functions
date: 09 June, 2026
---

## Background

Recently my research paper on expansion techniques for solving NLPDE's^[Nonlinear partial differential equations (NLPDEs) are solved using various expansion techniques, wherein the basic idea is to assume a solution form and then fit the involved parameters.] got published. In it, we proved an identity involving general rational exponential functions. Suppose

$$R(\eta)=\frac{\omega_1 e^{\psi_1\eta} + \omega_2 e^{\psi_2\eta}}{\omega_3 e^{\psi_3\eta} + \omega_4 e^{\psi_4\eta}}$$

is a general given function such that $\omega_2\omega_3\not=\omega_1\omega_4$ and $\{\psi_1,\psi_2\}=\{\psi_3,\psi_4\}$ (so that the exponents are "symmetric"), then there exist constants $a_{-N}, a_{-N+1}, \ldots, a_N$ such that

$$\frac{\mathrm d^N}{\mathrm d\eta^N} \log R(\eta) = \sum_{i=-N}^N a_i R(\eta)^i.$$

What this says is that any derivative of $\log R(\eta)$ can essentially be written in the form of a series involving integer powers of $R(\eta)$.

## Introduction

When $N=1$, we have that the first derivative

$$\log R(\eta) = \frac{R'(\eta)}{R(\eta)}.$$

According to the proposition, there exist constants $a_{-1},a_0,a_1$ such that

$$\frac{R'(\eta)}{R(\eta)} = \frac{a_{-1}}{R(\eta)} + a_0 + a_1 R(\eta).$$

As an example, note that if $R(\eta)=\tan\eta$ which in its exponential form is 

$$\frac{i \left(e^{-i \eta }-e^{i \eta }\right)}{e^{-i \eta }+e^{i \eta }}.$$

It satisfies the hypothesis regarding exponents, and indeed we have

$$\frac{\mathrm d}{\mathrm d\eta} \log\tan\eta = \frac{\sec^2\eta}{\tan\eta} = \frac{1+\tan^\eta}{\tan\eta} = \frac1{\tan\eta}+\tan\eta.$$

What we seek is a rigorous proof for all values of $N$ and all values of $R(\eta)$ satisfying the hypothesis.

## Proof

The proof is done easily using induction on $N$. We first prove for $N=1$. I will use Mathematica to assist me with this task. Defining the numerator and denominator as functions we have:

```mathematica
p0[n_]:= E^(n*p1)*w1 + E^(n*p2)*w2
q0[n_] := E^(n*p3)*w3 + E^(n*p4)*w4
```

Now, the governing relation for $N=1$ is as follows:

```mathematica

```