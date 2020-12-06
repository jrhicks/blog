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

[Designing with Tailwind CSS: Setting up Tailwind and PostCSS](https://www.youtube.com/watch?list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&v=21HuwjmuS7A&index=1) - FREE Youtube Course

## Simplest Project Setup

1.  Install a few dependencies

    * autoprefixer

    * postcss-cli

    * tailwindcss


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

[Designing with Tailwind CSS: Utility first Workflow](https://www.youtube.com/watch?v=Ybybd3GCNn4&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=2) - FREE Youtube Course

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

![](/media/learn_tailwind1.png)

Take a second to setup a responsive design preview tool.

* [Sizzy](https://sizzy.co/) - Commercial preview plugin

* [HTTP Server / HTML Preview](https://marketplace.visualstudio.com/items?itemName=Flixs.vs-code-http-server-and-html-preview) - Free extension for visual studio code

* [ResponsivelyApp](https://responsively.app/) - Develop responsive web apps 5x faster!  A must-have DevTool for all Front-End developers that will make your job easier.  ...and it is open-source too! 

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

    * lg:max-w-full

* Container

    * lg:relative

* IMG

    * inset-0 h-full w-full object-cover object-center

### Extra Large Screen

* Add inner container

  * `xl:max-w-lg` `xl:ml-auto`

* Responsive line breaks `<br class="hidden lg:inline" />`

## Hover, Focus, and Active States

[Designing with Tailwind CSS: Hover, Focus, and Active States](https://www.youtube.com/watch?v=olyRu5R1EZ4&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=4) - Free Youtube course by Adam Wathan