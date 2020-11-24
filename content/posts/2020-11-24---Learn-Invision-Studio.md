---
title: Learn InVision Studio
date: "2020-11-24T14:00:00.000Z"
template: "post"
draft: false
slug: "learn-invision"
category: "Design"
tags:
  - "Design"
  - "Course Notes"
  - "InVision Studio"
description: "My course notes for Master the Power of InVision Studio"
socialImage: "/media/42-line-bible.jpg"
---

## A Quick Tour

Artboards are the individual screen's for your design.  They are a type of object that can be added to the canvas.  Add an artboard to your canvas [Press A]. 

Left Side - Layers List
Top Bar - Contextual Toolbar for 1 or more selected objects
Inspector - Contextual properties of 1 or more selected objects
Artboards - [Press A] - Click and Drag.  Use inspector to select device.  
Preview Window - Press Play Button and navigate as using a real device.

## Canvas Navigation

* [Command 1] - View Everything
* [Command 2] - Zoom selection to fit Screen

## Adding and Editing Text Layers

https://www.invisionapp.com/studio/learn/adding-and-editing-text-layers/

* [Press T] - To add a text layer.
* [Pres ESC] - To escape editing the body.
* Color Picker - You can change the color picker to show "Global Colors", "Document Colors", or "Recent Colors".
* Auto: [Press T] Click
* Fixed: [Press T] Click and drag
* Centering - Center the box, Center the lettering in the box, set anchor point for responsive resizing

## Managing Layers

Organize Canvaas Objects by creating groups.

https://www.invisionapp.com/studio/learn/managing-layers/

1.  Click and Drag
2.  Shift-Click add/remove specific objects from selection
3.  [Command G]
4.  Test your group by toggling the visibility using "eye-icon"
5.  [Command R] Rename Selected layer or group.  [Return]
6.  [Tab] Select next item in layers.  [Shift Tab] Select previous item.
7.  Lock layers bying [Shift Click] eyeball icon.

## Masking Layers

Use groups to clip visible portion of objects to a window.  Great for animating.

https://www.invisionapp.com/studio/learn/masking-layers/

1.  Create a Group
2.  Add Rectangle to Group
3.  Right click on Rectangle from Layer tools, and "Mask"
4.  You can add an exception by "Ignore Underlying Mask" by Right clicking on that object in the layers menu.

## Use boolean operations

https://www.invisionapp.com/studio/learn/using-boolean-operations/

Illustrate with shapes.  Shift Click and operate using top contextual top bar.

1.  UNION - Shift Click on 2 Objects
2.  SUBTRACT - Top Shape Subtracts from bottom shape.
3.  INTERSECT - Remove non-overlapping areas
4.  EXCLUDE - Remove overlapping areas

## Scrolling artboards

https://www.invisionapp.com/studio/learn/scrolling-artboards/

1.  Artboards are made scrollable via inspector.
2.  Toolbars
	a.  Select group
	b.  To fix the content
	c.  Select Pin and then select where to Pin.  Top, Buttom ... etc
3.  Parralax Effect
    a.  Pin image with mask

## Rapid Prototyping

Linking Screens

1.  Select Object / Link
2.  [Press C] or click Lightning Bolt from Contextual Upper Toolbar
3.  Select destination Artboard
4.  Select Trigger, Transition, Type
5.  Repeat process for Link Backs.

Home Artboard

1.  Right click on Artboard
2.  Set Artboard as Home

## Previewing on a Device

https://www.invisionapp.com/studio/learn/previewing-on-a-device/

1.  Select Arboard to Preview
2.  From Top Contextual Menu click "Device"
3.  Ensure Phone on local WIFI
4.  Open InVision Mobile App\
5.  Scan

## Advanced Animation using Motion

Design stuff that your front-end developer will waste hours trying to replicate.  J

https://www.invisionapp.com/studio/learn/advanced-animation-using-motion-transition/

1.  Copy elements [Command C] onto other Artboard
2.  Move elements, Resize, Fade image
3.  To put layer in back, click and drag on layers to bottom of list

## Fine-tuning animations with the Timeline Editor

https://www.invisionapp.com/studio/learn/editing-animations-timeline/

Refine Speed and timing of animated objects so that your front-end developer can role their eyes at your awesome cross-screen animations.

1.  Select 
2.  From Inspector window
3.  Click "Edit Timeline" from interaction.
4.  Debug which items transition
    a.  Solid dot - Exists on Artboard
	b.  Hollow - No match artboard
5.  Drag red line
6.  Click on bar to delay a transition.  (Great for bringing in controls)
7.  Click on edge of bar to elongate.   (Great for easing in backgrounds)
8.  Link items
    a.  Shift Click object in source
	b.  Timeline to destination artboard
	c.  Shift Click object in destination
	d.  Click Link button in upper right toolbar.

## The Timer Trigger

https://www.invisionapp.com/studio/learn/the-timer-trigger/

Timer Triggers

1.  Select arboard (not object)  Select name of artboard.
2.  [Press C]
3.  Connect second artboard

## Creating, adding, and editing components

https://www.invisionapp.com/studio/learn/creating-adding-editing-components/

Components - Design elements that can exist on multiple screens

1.  Select layer / group
2.  Click "Component" Icon near lightning.
3.  [Command K]

Component Library

1.  Open component list using Book Icon in upper right corner left side bar.

Instance

1.  Click And Drag from Component Library 
2.  Click existing instance using [Option Drag]
3.  Downgrade instance to element - Right click and "Detach"
4.  Modify Component "Master" - Select Instance and Click "Edit Component" button

## Component Overrides

https://www.invisionapp.com/studio/learn/component-overrides/

Modify some instances.  Usefull for changing icon on a button, modify color to depeict a different state, or customizing text. 

1.  Edit the instance instead of editing the component.
2.  Undo all changes by "Reset overrides"

## Component Resizing

https://www.invisionapp.com/studio/learn/component-resizing/

If you resize a component container, you can scale objects in component to Percent from the inspector menu.

## Shared Design Libraries

Maintain components across multiple projects.

https://www.invisionapp.com/studio/learn/shared-design-libraries/

1.  Toggle to Component library from Layer List
2.  Click + Icon from Library
3.  Connect Instance to Shared Library Component using Inspector

## Syncing, presenting, and sharing

https://www.invisionapp.com/studio/learn/syncing-presenting-and-sharing/

1.  Share button in upper right of toolbar
2.  Freehand - Create Freehand version (two arrows) from share dialogue
3.  Fidelity Prototype - To create a web accisslbe prototype
4.  Comment
5.  Share link is approproiate for developer hand-off.  Inspector has "Code" links for stylesheets.
