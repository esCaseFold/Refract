---
title: Lenses
sidebar_position: 2
---

Lenses are your precision tools in Refract. They let you zoom in on just the data you need, update it safely, and keep your app’s state reactive and scoped. Combined with refractions and optics, they give you fine-grained control over both state and logic.
- Think of lenses as the bridge between props, refractions, and effects.
- Provide scoped access to component state, side-effects, and lifecycle.

## Basics


```js
const TodoList = createComponent(({ lens }) => {
	const todos = lens.useRefraction([]);
	lens.useEffect(() => {
		fetchTodos().then(todos.set);
	}, []);
});
```

## API Reference
