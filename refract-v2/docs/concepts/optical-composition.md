---
title: Optical Composition
sidebar_position: 3
---

**Optics** are reusable hooks or logic patterns.

They are similar to [React hooks](https://react.dev/reference/react/hooks) but with dependency-aware caching and animation-aware transitions.

```js
import { useOptic } from "refract";

function useMousePosition() {
	const pos = useRefraction({ x: 0, y: 0 });

	useOptic(() => {
		const handler = (e) => pos.set({ x: e.clientX, y: e.clientY });
		window.addEventListener("mousemove", handler);
		return () => window.removeEventListener("mousemove", handler);
	}, []);

	return pos;
}
```