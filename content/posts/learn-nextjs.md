---
title: Learn Next.js
date: "2020-12-01T14:00:00.000Z"
template: "post"
draft: false
slug: "learn-nextjs"
category: "Design"
tags:
  - "Development"
  - "Course Notes"
  - "Next.js"
description: "My Course notes for mastering Next.js by Lee Robinsin"
---

## Course

* [Master Next.js Course](https://masteringnextjs.com/) by Lee Robinsin

## Why Next.js

* Rapid development of best in class.

* Dynamic and static pages.

* Zero Config

* Popularity of Next.js and Javascript rising

* Server side rendering improves SEO

* File based routing

* No plugin system

* Actually has server

* Not overly dependent on GraphQL

## React Overview

* Functional Components better than Class Components

* Hooks better than lifecycle methods

* Hooks great for state in functional Components

* `{...props}` the spread operator is your friend

## Developing Locally

* npx create-next-app

* yarn dev

* ESLINT

 * eslint.rc

 * ignore file

* Prettier

 * On Save with Editor

 * On Commit Hooks with Husky

* Standard.js

 * Linting and formatting without the config

## Navigating Between Components

### Pags and Routing

/pages/index.js
```
import Link from 'next/link';

const Page = () => {
	return (
		<Link as="post/1" href="/about/[id]">
			<a>About</a>
		</Link>
	);
}

export default Page;
```

/pages/post/[id]/index.js
```
import {useRouter} from 'next/router';

const Post = () => {
	const router = userRouter();`
	const {id} = router.query;

	return (
		<h1>Post: {id}</h1>
	)
}

export default Post;
```

### Loading data Server Side and Client Side

The `getInitialProps` function will be executed on the server side, but also on the client side, when we navigate to a new page using the Link component as we did.  It has some `Caveats`

```
function Page({ stars }) {
  return <div>Next stars: {stars}</div>
}

Page.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Page
```

## Styling

To import CSS files directly turn on the experimental flag.
Experimental {css: true}