---
template: post
title: Setting up Development Env for React Native
slug: setting-up-development-env-for-react-native
socialImage: /media/greece-85466_640.jpg
draft: false
date: 2020-12-01T14:35:03.492Z
description: Notes while getting 
category: I took some notes while working through some issues setting up my development machine for create-react-native.
---

## Issues

I took some notes while working through some issues setting up my development machine for create-react-native.

## Install hangs

Install hangs on log outup `Locating project files.`  Solution was to upgrade Node to latest version.

## No bundle URL Present

I was getting this error (`No bundle URL Present`) inside the iPhone simulator.  I never found a solution, so I skipped to the next issue:  `EMFILE: too many open files`.  Fortunately, resolving that issue fixed this issue.

## EMFILE: too many open files

After running `react-native run-ios` I got the error `EMFILE:  too many open files`.  Found some ideas on [this blog entry](https://medium.com/codespace69/reactnative-run-got-error-emfile-too-many-open-files-react-native-cli-ab96222cc82d) and tried:


```
$ brew update
$ brew install watchman
```

Awesome.  Everything is working :)