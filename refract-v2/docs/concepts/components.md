---
title: Components
sidebar_position: 4
---

Refract applications are built from isolated pieces of UI called components. A component is a small, reusable building block that returns part of your user interface. Components can be as tiny as a button or as large as an entire page.

Components in Refract are created using the `createComponent()` function.
- They are pure functions returning JSX-like syntax.
- Props and local reactive state are passed in as "lenses"—an abstraction over refractions.

```js
import { createComponent } from "refract";

const Counter = createComponent(({ lens }) => {
	const count = lens.useRefraction(0);

	return (
		<button onClick={() => count.set(count.value + 1)}>
			Clicked {count.value} times
		</button>
	);
});
```