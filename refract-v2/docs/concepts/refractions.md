---
title: Refraction
sidebar_position: 2
---

A **refraction** is a reactive unit of state.
- Similar to signals or refs, they update the UI when mutated.
- Can be scoped globally or locally to components.

```js
import { useRefraction } from "refract";

const theme = useRefraction("light");

theme.set("dark");
console.log(theme.value); // 'dark'
```