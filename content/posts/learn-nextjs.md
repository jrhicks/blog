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

	* Query and Mutate Prototype

		* Use in-browser explorer
		
		* `/graphql/v1`

	* Query and Mutate in Next.js

		* Why Apollo -vs- SWR

			* Industry standard

			* A lot of functionality on top of query

				* Mutations

				* Linking multiple GraphQL Backends

				* Caching

		* useQuery

[/graphql/queries.js](https://github.com/leerob/daydrink/blob/master/graphql/queries.js)
```
import gql from 'graphql-tag';

export const GET_DEALS_QUERY = gql`
    query getDeals($dayOfWeek: String!) {
        deals(where: {daysActive: {dayOfWeek: {_eq: $dayOfWeek}}}) {
            id
            description
            alcoholType
            userDeals {
                upvoted
                userId
                id
            }
            daysActive {
                id
                dayOfWeek
                startTime
                endTime
                allDay
            }
            location {
                id
                name
            }
        }
    }
`;
```

[/graphql/hooks.js](https://github.com/leerob/daydrink/blob/6ce7157d852cda26eb0bead226b632f60e6632a1/graphql/hooks.js)

```
import {useQuery} from '@apollo/react-hooks';
import {GET_DEALS_QUERY} from './queries';
import {calculateScoreAndSortDesc} from '../utils/deals';

export const useDeals = (dayOfWeek) => {
    const {loading, error, data} = useQuery(GET_DEALS_QUERY, {
        variables: {dayOfWeek}
    });

    if (!loading && data.deals) {
        return {
            loading,
            error,
            data: {
                deals: calculateScoreAndSortDesc(data.deals)
            }
        };
    }

    return {
        loading,
        error,
        data
    };
};
```

## Managing Assets and SEO

* Zero Config

* Public folder acts like routes

	* imageoptim / pre-commit hook with husky

* Meta tags and Google Analytics

	* I believe you update [/pages/_document.js](https://github.com/leerob/daydrink/blob/6ce7157d852cda26eb0bead226b632f60e6632a1/pages/_document.js)

	* https://developers.facebook.com/tools/debug/

	* https://cards-dev.twitter.com/validator

	* Chrome Extensions

		* Chrome OG Image Preview

		* SEO Minion Extension

		* Accessiblity Insights Extension

	* Lighthouse Audit

## Building a blog with MDX

MDX -vs- Headless CMS

* Developers Love Markdown and MDX

* Marketing folks and other would benefit from a headless CMS

Headless CMS

* Contentful

* Sanity

* getInitialProps

MDX

* next.config

```
const remarkHighlight = require('remark-highlight.js');
const withPlugins = require('next-compose-plugins');

const withCSS = require('@zeit/next-css');
const withMDX = require('@zeit/next-mdx')({
  options: {
    mdPlugins: [remarkHighlight]
  }
});

// Generates Blog Index
const withBlog = require('next-mdx-blog');

module.exports = withPlugins([withCSS, withMDX, withBlog], {
  author: 'Andrew Lisowski',
  authorLink: 'https://github.intuit.com/alisowski',
  avatar: 'https://avatars2.githubusercontent.com/u/1192452?s=400&v=4',
  pageExtensions: ['js', 'mdx']
});
```

* Cool example is to use StaticKit to capture leads.

## Authentication

* JWT

	* Providers

		* Auth0

		* Firebase
	
* Authentication Example in DayDrink

	* [utils/auth.js](https://github.com/leerob/daydrink/blob/50324a8e42659ce692d284e50d64e826145f4d9e/utils/auth.js) - library to intefrace with Firebase

	* [pages/signin.js](https://github.com/leerob/daydrink/blob/50324a8e42659ce692d284e50d64e826145f4d9e/pages/signin.js) - 

	* [components/Auth.js](https://github.com/leerob/daydrink/blob/50324a8e42659ce692d284e50d64e826145f4d9e/components/Auth.js) uses [react-hook-form](https://react-hook-form.com/)

	* [withAuthModal] is a higher order component that you can do to wrap secure pieces of functionality.  Like [AddDealModal.js](https://github.com/leerob/daydrink/blob/50324a8e42659ce692d284e50d64e826145f4d9e/components/AddDealModal.js)  or [Voter.js](https://github.com/leerob/daydrink/blob/50324a8e42659ce692d284e50d64e826145f4d9e/components/Voter.js)


## Testing

Setup

* Install Dependencies

```
    "devDependencies": {
        "@testing-library/jest-dom": "^5.0.2",
        "@testing-library/react": "^9.4.0",
        "babel-jest": "^24.9.0",
        "jest": "^24.9.0",
        "mutationobserver-shim": "^0.3.3",
    }
```

* Configure Test Runner

Overide babel.rc

```
{
    "presets": ["next/babel"]
}
```

* Add Script to package.json

```
    "scripts": {
        "test": "jest"
    },
```

* Use [test-util.js](https://github.com/leerob/daydrink/blob/master/test/test-utils.js) to setup Global stuff.  Usefull for aurthorization and themes

```
import {render} from '@testing-library/react';
import {ThemeProvider, ColorModeProvider} from '@chakra-ui/core';
import '@testing-library/jest-dom';
import 'mutationobserver-shim';

const ChakraRenderer = ({children}) => {
    return (
        <ThemeProvider>
            <ColorModeProvider value="dark">{children}</ColorModeProvider>
        </ThemeProvider>
    );
};

const customRender = (ui, options) =>
    render(ui, {
        wrapper: ChakraRenderer,
        ...options
    });

export * from '@testing-library/react';
export {customRender as render};
```

* Write a test.

	* [Study BarCard.js example](https://github.com/leerob/daydrink/blob/master/test/components/BarCard.spec.js)

	* Use [React Testing Library CheatSheet](https://testing-library.com/docs/react-testing-library/cheatsheet/)
	
		* getBy - you know it's there

		* findBy - Async Await

		* queryBy - Multiple matches
	
	* Snapshot tests

		* Good for Component Libraries

		* Good for tiny components

		* Horrible for large components (developers will tend to blindly ignore or blindly accept)

	* Integration Tests

		* [Study the signin.spec.js](https://github.com/leerob/daydrink/blob/master/test/pages/signin.spec.js)

		* Mock things sparingly

```
jest.mock('next/router');
jest.mock('../../utils/auth');

        useRouter.mockReturnValue({push: expectedRouterPush});
        useAuth.mockReturnValue({
            signin: expectedSignIn,
            userId: 123
        });
```
	
* Interact with UI

```
       await act(async () => {
            fireEvent.change(email, {target: {value: expectedEmail}});
            fireEvent.change(password, {target: {value: expectedPassword}});
            fireEvent.click(signInButton);
        });
```

* Report Errors in the Wild

	* Sentry (Plugin)

* Gracefully handle Errors

	* Customize the [error page](https://github.com/leerob/daydrink/blob/master/pages/_error.js) `/pages/_error.js`

## State Management & More

* Redux -vs- React Context

* Prop Drilling

Redux

* Needs some special considerations to not break static site compile

* Concerns: want to avoid breaking static site compiling

* `withRedux` ops a component out of static site 

* Instructor suggests NOT using redux

React Context API

* Avoids concern of static site compiling

* Does have neat dev tools

* Create multiple store / providers

* [useSearch Example](https://github.com/leerob/daydrink/search?q=useSearch)

TypeScript

* Next.js makes it easy to get going

* [Next.js TypeScript Docs](https://nextjs.org/docs/basic-features/typescript)

* Next.js Specific Types Exist

	* Page

	* API Component

	* Request/Response

* GraphQL Code Generation

	* [Next.JS, TypeScript, and Code Generation](https://graphql-code-generator.com/docs/plugins/typescript)

Dynamic Imports

* Why?

	* Performance Reasons

	* Didn't work with Server Side Rendering

Exporting & Deployment

* Zeit.co's now - Highly recommended

	* Git Flow

	* Preview before merge

	* now.js

		* Redirects

		* Env (private) secrets
	
* Netlify - Really great





