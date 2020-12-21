---
template: post
title: Fighting PostgreSQL bloat with Logical Replication on Heroku
slug: imagineering-extensible-4dx-app
socialImage: /media/46611631795_6c9ce00750_w.jpg
draft: true
date: 2020-12-19T14:35:03.492Z
description: Let's shrink our database size.  Many attempts just don't work.  Challenge accepted.
category: Heroku PostgreSQL
---

## The Challenge

If you've every attempted to clean up your PostgreSQL you may have noticed it's size doesn't really decrease.  

* VACUUM - Doesn't actually reduce database size

* [VACUUM FULL](https://wiki.postgresql.org/wiki/VACUUM_FULL) - Requires multiple hours of downtime

* [pgrepack](https://github.com/reorg/pg_repack) - This extension isn't installable on Heroku

* [pglogical](https://www.2ndquadrant.com/en/resources/pglogical/) - This extensions isn't installable on Heroku

* [repcloud](https://github.com/the4thdoctor/repcloud)  - Looks complicated and dubious


## A Candidate

[Logical Replication](https://severalnines.com/database-blog/overview-logical-replication-postgresql) - March 2018

## References amd Attribution

* Page Social Image - [CC 2019](https://creativecommons.org/licenses/by-nd/2.0/) [Mike Bonitz](https://flic.kr/p/2e1UNd4)

* [Understanding of Bloat and VACUUM in PostgreSQL](https://www.percona.com/blog/2018/08/06/basic-understanding-bloat-vacuum-postgresql-mvcc/) - Aug 2018 - Avinash Vallarapu

