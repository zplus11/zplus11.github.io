---
title: Dihedrals with Mathematica
date: 04 August, 2025
---

When it comes to symbolic computation, Wolfram Mathematica is a giant. Known for its ability to manipulate abstract mathematical structures with ease, it's especially powerful for algebraic systems like groups, rings, and beyond.

In this post, I'll define a set of rules that simulate the operation of a dihedral group. $D_n$ contains these elements:
$$\{r^0,r^1,\ldots,r^n,s,rs,\ldots,r^{n-1}s\}.$$
The operation among these elements is defined by the following set of rules: $r^0$ being the identity, for any $x$ we have $r^0x = xr^0=x$. Among all rotations, $r^ir^j = r^{(i+j)\bmod n}$ holds. Now, $s$ being the reflection along the axis oriented at 0 degrees, we have $s^2=r^0$. Finally, $sr^i=r^{n-i}s$.

Using these rules, any product of elements in $D_n$ can be reduced to one of the elements of $D_n$ itself. For example,
$$r^3sr^1=r^3r^{n-1}s=r^{3+n-1}s=r^2s.$$
Our motive is to define these patterns in Mathematica so that such computations can be automatically done. For it, we will use the `**` symbol of Mathematica that stands for `NonCommutativeMultiply` so that $xy$ should not be confused for $yx$.

We will denote a rotation $r^i$ by `Rot[r, i]` to secure more control over the operation, although it will be formatted as is. We also define $n=4$ during this experiment.

```mathematica
ClearAll[Rot, r, s]
n := 4
```

Now, the first rule is that anything (left-or-right) multiplied by $r^0$ results in itself, hence

```mathematica
Unprotect[NonCommutativeMultiply];
Sym[r, 0] ** x_ := x
x_ ** Sym[r, 0] := x
```

Mathematica's advanced pattern matching makes it very easy to define such rules. Now for example if we type `Sym[r, 0] ** Sym[r, 2]`, the result will be `Sym[r, 2]` itself.

Next, we define how rotations react with each other:

```mathematica
Sym[r, i_] ** Sym[r, j_] := Sym[r, Mod[i + j, n]]
```

and finally we define the rules regarding $s$:

```mathematica
s ** s := Sym[r, 0]
s ** Sym[r, i_] := Sym[r, n-k] ** s
```

With that, we are almost done. All that remains is to let Mathematica know that when we type `r^i`, we mean `Sym[r, i]`. Further, in all outputs, we want `Sym[r, i]` formatted as `r^i` back:

```mathematica
r /: r^i_ := Sym[r, i]
Format[Sym[r, i_]] := Superscript[r, i]
Protect[NonCommutativeMultiply];
```

And that is it. Now, using our previous example, if we type

```mathematica
r^3 ** s ** r^1
```

we get

```
r^2 ** s
```

as the output. Here are a few more test runs:

```mathematica
r^0 ** r^1					(* r^1 *) 
r^2 ** r^1					(* r^3 *)
r^1 ** r^3 ** s				(* s *)
r^3 ** s ** r^3 ** s		(* r^0 *)
s ** r^1 ** s ** r^2		(* r^1 *)
r^2 ** s ** r^1 ** s		(* r^1 *)
s ** r^3 ** s ** r^2		(* r^3 *)
r^1 ** s ** r^2 ** s		(* r^3 *)
r^3 ** s ** r^1 ** s ** s	(* r^1 s *)
r^1 ** s ** r^1 ** s		(* r^0 *)
r^2 ** s ** r^1 ** s		(* r^1 *)
r^3 ** r^2 ** s ** r^1 ** s	(* r^0 *)
```

The code is available in this mathematica notebook: [dih.nb](../../resources/mm/dih.nb).