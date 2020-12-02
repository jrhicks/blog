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

	* Zero Config

	* File based routing

	* Not overly dependent on GraphQL

* Dynamic and static pages.

	* Actually has server

## React Overview

* Functional Components and hooks are your friend

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

I got the impression that the course was out-of-date on the CSS.  The video was explaining that experimental flags needed to be turned on.

Global style uses a `pages/_app.js` convention that reminds me of Rails layout partials.  Per the docs for [Adding a Global Stylesheet in Next.js](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet), you `import` the `styles.css` into `pages/_app.js`.  

```
import '../styles.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

Unlike the course which explains the need to set experimental flags, the documentation details [Built In CSS Support](https://nextjs.org/docs/basic-features/built-in-css-support) and even has a [Tailwind Example](https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss).  Next.js compiles CSS for its built-in CSS support using PostCSS, and has pretty good defaults, but you can also [Customize PostCSS Config](https://nextjs.org/docs/advanced-features/customizing-postcss-config)

SASS is support, but requires installation

```
npm install sass
```

It can be configured also.

/next.config.js
```
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
```

[Styled Components requires configuring .babelrc] (https://github.com/vercel/next.js/blob/master/examples/with-styled-components/.babelrc)

## Fetching Data

* Custom Server -vs- API Routes

	* Why Custom Server
	
		* Go monolithic 
		
		* Might need your own authentication handlers

		* Might need to augment the express server.

		* Lose static optimization :(

	* Why API Routes

		* Go Serverless

		* Keep static optimizations

		* Each API route becomes a serverless function!

* useSWR

	* Load data on client only, and reload it on focus

* GraphQL

	* Access nested data easier and possibly faster

	* Mobile app friendly to take fewer requests

	* Hasura is an open source

	* DayDrink is a cool real world example that is more hefty than a Todo app.

* Hasura

	* Recommend Heroku, [One Click Hasura Install on Heroku](https://hasura.io/docs/1.0/graphql/core/deployment/deployment-guides/heroku.html)

	* Why PostgreSQL
	
		* Great for Relationships

		* Has One, Has Many etc.

		* New Tooling to get up and going faster

	* 