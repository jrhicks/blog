---
template: post
title: Zapier is the King of App-Based Extensibility
slug: zapiers-app-based-extensibility
socialImage: /media/greece-85466_640.jpg
draft: false
date: 2020-11-26T14:35:03.492Z
description: Study Zapier's App Builder to gain insight on the essential components required to go from API to App.
category: Platform
---

Platforms do not hard-code integrations with APIs.  Instead they create an open mechanism to build apps that integrate with APIs.

Zapier's mission to connect everything has probably created the most approachable ecosystem to developing "apps" given a services existing API.  What's amazing is they provide a form-based approach to developing an app on their platform.  Through web form wizzards, a developer can go from API to App by registering the API specifics for authentication, authorization, triggers and actions.

* Authentication Methods

  * API Key - App must provide input fields for user.

  * O AUTH 2 - Oauth v2 authentication redirects users to your API’s site where they can authorize Zapier to access their account which sends a request token to Zapier that is exchanged for an access token.

  * Session Auth

  * Basic Auth

  * Digest Auth

* Triggers - The platform consumes data with triggers by polling or subscribing to webhooks.

Help users find new data as soon as it’s available in your app. Triggers connect to webhooks or polling endpoints.

 * Apps may need to poll external services for updates.  Alternatively external services may have a "subscribe" or "unsubscribe" feature.

* Actions - Create or update records of integrated service.

* Publish

 * Build

 * Review

 * Publish
  