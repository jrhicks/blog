---
template: post
title: Tailwind Challenge
slug: tailwind-challenge
socialImage: /media/greece-85466_640.jpg
draft: false
date: 2020-12-16T14:35:03.492Z
description: I write some CSS with Tailwind to illustrate the answer to a viral brain teaser.
category: tailwind challenge
---

## Solving Internet Challenges with CSS

![](/media/count-shapes-puzzle.png)

## Could I solve this problem with TailwindCSS?

```
function Puzzle({ index, className }) {
    const boxes = [
        "left-0 top-0 w-8 h-8",
        "left-24 top-0 w-8 h-8",
        "left-0 top-24 w-8 h-8",
        "left-24 top-24 w-8 h-8",
        "left-0 top-8 w-16 h-16",
        "left-8 top-0 w-16 h-16",
        "left-16 top-8 w-16 h-16",
        "left-8 top-16 w-16 h-16",
        "left-8 top-8 w-8 h-8",
        "left-16 top-8 w-8 h-8",
        "left-16 top-16 w-8 h-8",
        "left-8 top-16 w-8 h-8",
        "left-0 top-0 w-24 h-24",
        "left-8 top-0 w-24 h-24",
        "left-8 top-8 w-24 h-24",
        "left-0 top-8 w-24 h-24",
        "left-8 top-8 w-16 h-16",
        "left-0 top-0 w-32 h-32",
    ]

    return (
        <div className="w-32 h-32 m-4">
            <div className="relative col-span-1">
                {
                    boxes.map( coordinates => {
                        return (<div className={`absolute border ${coordinates} border-gray-800`} />)
                    })
                }
                <div className={`absolute ${boxes[index]} ${className} border-4 border-gray-800`} />
            </div>
        </div>
    )
}

export default function ArtPage() {
    return (
        <>
            <div className="flex">
                <Puzzle index={0} className="bg-yellow-100" />
                <Puzzle index={1} className="bg-yellow-100" />
                <Puzzle index={2} className="bg-yellow-100" />
                <Puzzle index={3} className="bg-yellow-100" />
            </div>
            <div className="flex">
                <Puzzle index={4} className="bg-blue-100" />
                <Puzzle index={5} className="bg-blue-100" />
                <Puzzle index={6} className="bg-blue-100" />
                <Puzzle index={7} className="bg-blue-100" />
            </div>
            <div className="flex">
                <Puzzle index={8} className="bg-pink-100" />
                <Puzzle index={9} className="bg-pink-100" />
                <Puzzle index={10} className="bg-pink-100" />
                <Puzzle index={11} className="bg-pink-100" />
            </div>
            <div className="flex">
                <Puzzle index={12} className="bg-green-100" />
                <Puzzle index={13} className="bg-green-100" />
                <Puzzle index={14} className="bg-green-100" />
                <Puzzle index={15} className="bg-green-100" />
            </div>
            <div className="flex">
                <Puzzle index={16} className="bg-gray-100" />
                <Puzzle index={17} className="bg-gray-100" />
            </div>
        </>
    )
}
```

![](/media/tailwind-challenge.png)