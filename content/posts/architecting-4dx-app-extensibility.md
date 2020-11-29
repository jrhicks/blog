---
template: post
title: Architecting 4DX App Extensibility
slug: architecting-4dx-app-extensibility
socialImage: /media/greece-85466_640.jpg
draft: false
date: 2020-11-29T14:35:03.492Z
description: Imagining an React Native 4dX Platform App Extensibility API
category: Execution Idea
---

With the idea that a [React Native App can communicate with WebViews](https://precor.github.io/web-api-bridge/), what might the communication protocol look like to create an app platform for 4DX Leads.

App Screens
------------------
Setup - Allow an admin to setup the application.  For an app that is a checklist for example, this may entail configuring the checklist items.

Plan - Allow an admin to configure the application for the week given a work schedule.  For an app that rotates responsibilities among staff this is where a manager could rotate assignments.  Applications should define their plan cadence.

Run - Allow a team member to run the application and complete a lead.

Show - Allow a team member to show a completed lead.
