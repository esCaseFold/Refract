---
title: Refractions
sidebar_position: 1
---

Refractions are the foundation of state management in Refract. They store reactive values, automatically update dependent components, and integrate seamlessly with lenses and optics to help you build modular, maintainable applications.

The are:
- Similar to signals or refs, they update the UI when mutated.
- Can be scoped globally or locally to components.

## Why Refractions?
Without a reactive state system, changing all of the values as needed would have to be done manually. This would make building the UI both needlessly tedious and much more error prone.  

:::tip Refractions are like message boards
They contain messages (state) that components "look" at. When the message changes, all connected components "see" it and react automatically.
:::

## Basics


## Example

```js
import { useRefraction } from "refract";

const theme = useRefraction("light");

theme.set("dark");
console.log(theme.value); // 'dark'
```

## API Reference

See [Refraction](../api/index.mdx#refractions)