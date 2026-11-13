---
title: Side Effects
sidebar_position: 5
---

Side Effects are APIs used when Refract needs to get data from outside its own ecosystem. 


**Note**: Side-effects are opt-in and clearly scoped—no ambiguous behavior.

## Why Side Effects?

For all uses of UI, you need outside data in order for it to work properly, namely the ablitiy to detect clicks and scrolling.
So, it is essential that there be an API that can link to the environment outside of the Refract app.

## `useEffect`

[See [API Reference](../api/index.mdx#useeffect) for full reference]

In Refract, `useEffect` is the hook you use when your component needs to synchronize with the outside world (much like the [React `useEffect` hook](https://react.dev/reference/react/useEffect#what-are-good-alternatives-to-data-fetching-in-effects)).
While your component’s main job is to calculate and render UI, effects let it reach beyond the render cycle to perform actions like:

- Fetching or saving data

- Subscribing to a data stream

- Running a timer or animation

- Manually changing the DOM

### Common Uses

Here are some real-world situations where `useEffect` shines:

- Fetching data from an API when a component mounts

- Listening for browser events like resize or scroll

- Connecting to a WebSocket for real-time updates

- Synchronizing state with localStorage or sessionStorage

- Triggering animations when certain values change

Example:

```js
useEffect(() => {
	async function fetchData() {
		const response = await fetch("/api/data");
		const result = await response.json();
		setData(result);
	}
	fetchData();
}, []); // run once on mount
```

## `useFlash`

**useFlash** runs once after render for things like animations.
