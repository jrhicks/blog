---
title: Learn Tailwind
date: "2020-12-05T14:00:00.000Z"
template: "post"
draft: false
slug: "learn-tailwind"
category: "Design"
tags:
  - "Design"
  - "Course Notes"
  - "Tailwind"
description: "My course notes while watching Designing with Tailwind CSS"
socialImage: "/media/42-line-bible.jpg"
---

## Course

Video: [Designing with Tailwind CSS: Setting up Tailwind and PostCSS](https://www.youtube.com/watch?list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&v=21HuwjmuS7A&index=1) - FREE Youtube Course

Code: [Designing with TailwindCSS Github Repo](https://github.com/tailwindlabs/designing-with-tailwindcss)

Tools: 

* [Tawilwind IntelliSense](https://tailwindcss.com/docs/intellisense)

* [Sizzy](https://sizzy.co/) - Commercial preview plugin


## Getting Up and Running

Code: [Setting up Tailwind and PostCSS](https://github.com/tailwindlabs/designing-with-tailwindcss/tree/master/01-getting-up-and-running/01-setting-up-tailwind-and-postcss) - Github Repo

1.  Install a few dependencies

    * autoprefixer

    * postcss-cli

    * tailwindcss```


2. Generate tailwind.config.js

    * npx tailwindcss init

3.  Generate postcss.config.js

    * npx tailwindcss init -p

4.  Configure PostCSS

    * Update plugins in postcss.config.js
  
```
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
```

5.  Write tailwind.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6.  Create build script

```
build: 'postcss css/tailwind.css -0 public/build/tailwind.css'
```

## Utility first Workflow

Video: [Designing with Tailwind CSS: Utility first Workflow](https://www.youtube.com/watch?v=Ybybd3GCNn4&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=2) - FREE Youtube Course

Code: [The Utility-First Workflow](https://github.com/tailwindlabs/designing-with-tailwindcss/tree/master/01-getting-up-and-running/02-the-utility-first-workflow) - Github Repo

* Logo

    * Padding `p-[spacing-scale]`

    * Horizontal padding `px-`, Vertical Padding `py-`

* Hero Image

    * Height `h-10`

    * Margin Top `mt-4`

    * Border Radius `rounded` `rounded-sm` `rounded-lg`

    * Shadow `shadow`

* Heading

    * `h1` tag as normal

    * `mt` Margin top

    * Font size `text-2xl`

    * Font weight `font-hairline`, `font-bold`, `font-black`

    * Go Grey, `text-gray-900`

    * Lineheight `leading-none` (very tight), `leading-tight` (typographical term)

    * Match logo color on some of the text `text-indigo-500`

* Body

    * `p` tag as normal

    * `mt-2` Margin top

    * `text-gray-600` Black is too intense for text

* Call To Action

    * `div` tag
    
      * `mt-4` Margin top

    * `a` inner tag

        *  `inline-block`

        * `px-5` & `px-3`

        * `bg-indicgo-500` and `text-white`

        * `uppercase` paired with `tracking-wider` Typically want to add some letter spacing with uppercase, `text-sm`

        * `shadow-lg`

## Responsive Design


[Designing with Tailwind CSS: Responsive Design](https://www.youtube.com/watch?v=Ff_n_QClipQ&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=3) - FREE Youtube Course

[Designing with Tailwind CSS: Responstive Design](https://github.com/tailwindlabs/designing-with-tailwindcss/tree/master/01-getting-up-and-running/03-responsive-design) - Github Code


![](/media/learn_tailwind1.png)

Take a second to setup a responsive design preview tool.

* [Sizzy](https://sizzy.co/) - Commercial preview plugin


Use Media Selector

* Four Default Breakpoints

* `sm`, `md`, `lg`, `xlg`

* min-width breakpoints

* simply prefix any utility class with breakpoint: like `sm-bg-green-500`

### Small Screen Responsive

* `sm:max-w-xl` on small screens set max width to extra large

* `sm:mx-auto` on small screens

* `sm:text-base` reset text to the base size ???

### Large Screen Strategies

* Go side-by-side, layout

* Add another container

* Wrap both in a container with class `flex` to get them side by side

* Hide old stuff on large

    * `lg:hidden`

* Hide new stuff on small, but not large

    * `hidden lg:block`

* Disable Max width on large

    * `lg:max-w-full`

* Container

    * `lg:relative`

* IMG

    * `inset-0 h-full w-full object-cover object-center`

### Extra Large Screen

* Add inner container

  * `xl:max-w-lg` `xl:ml-auto`

* Responsive line breaks `<br class="hidden lg:inline" />`

## Hover, Focus, and Active States

[Designing with Tailwind CSS: Hover, Focus, and Active States](https://www.youtube.com/watch?v=olyRu5R1EZ4&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=4) - Free Youtube course by Adam Wathan

[Designing with Tailwind CSS: Hover, Focus and Active States](https://github.com/tailwindlabs/designing-with-tailwindcss/tree/master/01-getting-up-and-running/04-hover-focus-and-active-styles) - Github Repo

Since Tailwind permutes, some variants aren't active by default.  They are already enabled in places you would expect.

* `hover:bg-indigo-400`

* `focus:outline-none focus:shadow-outline`

* `active:bg-indogo-600` doesn't work ... why?

* Need to Enable, (**need all**,  **Order Matters**)

tailwind.config.js
```
variants: {
  backgroundColor: [responsive', 'hover', 'focus', 'active']
}
```

## Composing Utilities with @apply

[Designing with Tailwind CSS: Composing Utilities with @apply](https://www.youtube.com/watch?v=krSgBUmIgP0&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=5)

[Designing with Tailwind CSS: Composing Utilities with @apply](https://github.com/tailwindlabs/designing-with-tailwindcss/tree/master/01-getting-up-and-running/05-composing-utilities-with-apply) - Github Repo

Advice

* Use sparingly

* Doesn't work with variants

* Don't hardcode breakpointes, use @screen directive

How?

* Open tailwind.css

```
@tailwind base;
@tailwind components;

.btn {
  @apply inline-block px-5 py-3 rounded-lg text-sm uppercase tracking-wider font-semibold;
}
.btn:focus {
  @apply outline-none shadow-outline;
}
```

* Watch for Changes

```
  "scripts": {
    "build": "postcss css/tailwind.css -o public/build/tailwind.css",
    "watch": "postcss css/tailwind.css -o public/build/tailwind.css --watch"
  },
```  

