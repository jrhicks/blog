---
template: post
title: Architecting 4DX Platform Extensibility
slug: architecting-4dx-app-extensibility
socialImage: /media/greece-85466_640.jpg
draft: false
date: 2020-11-29T14:35:03.492Z
description: Imagining an React Native 4dX Platform App Extensibility API
category: Execution Idea
---

With the idea that a [React Native App can communicate with WebViews](https://precor.github.io/web-api-bridge/), what might the communication protocol look like to create an app platform for 4DX Leads.

## Behavior Apps

**Install** - Allow an admin to install the app onto a Goal.  Apps requested to install are provided details about the context their joining.  The app may need to authenticate with another system or collect data from the user to complete the install.  The app can persist data on the Platform.

Apps need to register their leads.

Platform can open the app for installation onto the goal.
```
{
    type: 'install',
    payload: {
        goal_id: "c38c96ea-28a8-4a65-95ff-df1b9076d05f",
        install_id: 'c38c96ea-28a8-4a65-95ff-df1b9076d05f",
    }
}
```

App Sends Message to Platform asking for the Team Members working on the Goal.
```
{
    type: 'request-team',
    payload: {
        goal_id: "c38c96ea-28a8-4a65-95ff-df1b9076d05f",
    }
}
```
 
Platform sends message with team members.
```
{
    type: 'provide-team',
    payload: {
        goal_id: "c38c96ea-28a8-4a65-95ff-df1b9076d05f",
        members: [
            {
                id: "c38c96ea-28a8-4a65-95ff-df1b9076d05f",
                firstName: 'Jeffrey',
                lastName: 'Hicks',
                email: 'jeff@foobar.com',
                phone: '+15558675309'
            }
        ]
    }
}
```

App sends message to Platform to add a Lead.  It's possible an app could add multiple leads.  For example an app where managers and front line employees work on a checklist together.  Leads can share data if they are were registered from the same app.

```
{
    type: 'register-lead',
    payload: {
        id: '7d8eafcb-3b32-4b50-b000-a2a1321a15b7', 
        name: 'Clean'
    }
}
```

App can persist data on the platform.
```
{
    type: 'store',
    payload: {
        scope: 'install',
        scope_id: 'c38c96ea-28a8-4a65-95ff-df1b9076d05f",
        key: 'club_number',
        data: '10001',
    },
}
```

**Plan Week** - Allow manager to configure the scoreboard for the week.  For an app that rotates responsibilities among staff this is where a manager could rotate assignments.  

Platform opens the app so the user can plan the week.
```
{
    type: 'plan-week',
    payload: {
        goal_id: "c38c96ea-28a8-4a65-95ff-df1b9076d05f",
        week_id: "298deb0d-6145-4a93-bab0-b36505fcb846",
        start_date: Nov 20, 2020,
        end_date: Dec 5, 2020,
    }
}
```

**Execute** - Allow a team member to execute to both complete the action and update the player scoreboard.

Platform opens the app so the user can execute a action.
```
{
    type: 'execute',
    payload: {
        week_id: "298deb0d-6145-4a93-bab0-b36505fcb846",
        member_id: "c38c96ea-28a8-4a65-95ff-df1b9076d05f",
        date: '2012-12-21'
    }
}
```

The app can update the players scoreboard for a team member for a specific day.
```
{    
    type: 'post-score',
    date: '2012-12-21',
    member_id: "c38c96ea-28a8-4a65-95ff-df1b9076d05f",
    lead_id: '7d8eafcb-3b32-4b50-b000-a2a1321a15b7', 
    date: 2020/11/27,
    value: '0.50'
}
```

App can persist data about the week.
```
{
    type: 'store',
    payload: {
        scope: 'week',
        week_id: "298deb0d-6145-4a93-bab0-b36505fcb846",
        key: '2020/11/27-checklist',
        data: {
            'item1': 'done',
            'item2': 'done',
            'item3': 'done',
            'item4': 'pending'
        }',
    },
}
```

App can signal that it should be closed.
```
{
    type: 'close',
    payload: {
        status: 'ok'
    }
}
```
