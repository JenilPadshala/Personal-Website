---
title: "Building a Scalar Autograd Engine in C++"
description: "Notes on designing a tiny reverse-mode automatic differentiation engine, from weak-pointer Value nodes to topological backprop."
date: 2026-06-15
tags: ["C++", "Machine Learning", "Autograd"]
draft: false
---

Automatic differentiation is the quiet engine behind every deep learning
framework. To really understand it, I built a small scalar autograd engine in
C++ — something close in spirit to micrograd, but with a focus on clean memory
ownership and a Python binding for experimentation.

## Why build it from scratch?

Reading about backpropagation is one thing; watching gradients flow through a
graph you wrote yourself is another. The goals were:

- Represent a computation as a **Directed Acyclic Graph (DAG)** of `Value` nodes.
- Compute gradients with **reverse-mode** autodiff.
- Avoid cyclic references so memory is released predictably.
- Expose the C++ core to Python for quick validation.

## The Value node

Each `Value` stores its data, its gradient, and a closure describing how to
propagate gradients to its inputs. The tricky part is ownership: a naive design
with `shared_ptr` everywhere creates reference cycles. Linking parents to
children via **weak pointers** breaks those cycles and keeps cleanup
deterministic.

## Backward pass

The backward pass is a topological sort followed by a reverse traversal:

```cpp
// pseudo-code
build_topo(root);
root.grad = 1.0;
for (auto* node : reversed(topo)) {
  node->backward();  // pushes grad into its inputs
}
```

An **iterative DFS** (rather than recursion) keeps the stack flat even for deep
graphs.

## Validating against PyTorch

With Pybind11 exposing the engine to Python, I could compute gradients for the
same expression in both my engine and PyTorch and assert they match. That test
suite is what turns "it seems to work" into "it works."

## Takeaways

Building the engine made the abstractions in PyTorch feel concrete. If you're
learning ML systems, I'd highly recommend writing your own autograd — it's a
weekend project that pays off every time you read a training loop afterward.
