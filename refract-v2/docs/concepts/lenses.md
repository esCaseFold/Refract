---
title: Lenses
sidebar_position: 4
---

- Think of lenses as the bridge between props, refractions, and effects.
- Provide scoped access to component state, side-effects, and lifecycle.

```js {1-3}
const TodoList = createComponent(({ lens }) => {
	const todos = lens.useRefraction([]);
	lens.useEffect(() => {
		fetchTodos().then(todos.set);
	}, []);
});
```