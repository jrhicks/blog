---
template: post
title: Tailwind Challenge - Illustrate Brainteaser Solution
slug: tailwind-challenge
socialImage: /media/tailwind-challenge2.png
draft: false
date: 2020-12-16T14:35:03.492Z
description: Tailwind Challenge - Illustrate solution to count-the-squaries brain-teaser with #tailwindcss
category: tailwind challenge
---

## The Challenge

Illustrate the solution to this count-the-squaries brain-teaser with #tailwindcss

![](/media/count-shapes-puzzle.png)

## The Solution

```
function Puzzle({ index, className, children }) {
    const boxes = [
        "left-0 top-0 w-6 h-6",
        "left-24 top-0 w-6 h-6",
        "left-0 top-24 w-6 h-6",
        "left-24 top-24 w-6 h-6",
        "left-0 top-6 w-14 h-14",
        "left-6 top-0 w-14 h-14",
        "left-14 top-6 w-14 h-14",
        "left-6 top-14 w-14 h-14",
        "left-6 top-6 w-6 h-6",
        "left-14 top-6 w-6 h-6",
        "left-14 top-14 w-6 h-6",
        "left-6 top-14 w-6 h-6",
        "left-0 top-0 w-24 h-24",
        "left-6 top-0 w-24 h-24",
        "left-6 top-6 w-24 h-24",
        "left-0 top-6 w-24 h-24",
        "left-6 top-6 w-14 h-14",
        "left-0 top-0 w-32 h-32",
    ]

    return (
        <div className="flex flex-row">
            <div className="w-32 h-32 m-4">
                <div className="relative col-span-1">
                    {
                        boxes.map( coordinates => {
                            return (<div key={coordinates} className={`absolute border ${coordinates} border-gray-600`} />)
                        })
                    }
                    <div className={`absolute ${boxes[index]} ${className} border-4 border-gray-600`} />
                </div>
            </div>
            
            <div>
            DFSDFSDF  {children}
            </div>
        </div>
    )
}

export default function ArtPage() {
    return (
        <>
            <div className="flex">
                <Puzzle index={0} className="bg-yellow-100">SQUARE</Puzzle>
                <Puzzle index={1} className="bg-yellow-100">SQUARE</Puzzle>
                <Puzzle index={2} className="bg-yellow-100">SQUARE</Puzzle>
                <Puzzle index={3} className="bg-yellow-100">SQUARE</Puzzle>
            </div>
            <div className="flex">
                <Puzzle index={4} className="bg-blue-100" >RECTANGLE</Puzzle>
                <Puzzle index={5} className="bg-blue-100" >RECTANGLE</Puzzle>
                <Puzzle index={6} className="bg-blue-100" >RECTANGLE</Puzzle>
                <Puzzle index={7} className="bg-blue-100" >RECTANGLE</Puzzle>
            </div>
            <div className="flex">
                <Puzzle index={8} className="bg-pink-100" >SQUARE</Puzzle>
                <Puzzle index={9} className="bg-pink-100">SQUARE</Puzzle>
                <Puzzle index={10} className="bg-pink-100">SQUARE</Puzzle>
                <Puzzle index={11} className="bg-pink-100" >SQUARE</Puzzle>
            </div>
            <div className="flex">
                <Puzzle index={12} className="bg-green-100">SQUARE</Puzzle>
                <Puzzle index={13} className="bg-green-100" >SQUARE</Puzzle>
                <Puzzle index={14} className="bg-green-100" >SQUARE</Puzzle>
                <Puzzle index={15} className="bg-green-100" >YSQUAREES</Puzzle>
            </div>
            <div className="flex">
                <Puzzle index={16} className="bg-gray-100" >SQUARE</Puzzle>
                <Puzzle index={17} className="bg-gray-100">SQUARE</Puzzle>
            </div>
        </>
    )
}
```

## The Result

![](/media/tailwind-challenge2.png)