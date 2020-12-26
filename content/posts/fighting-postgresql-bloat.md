---
template: post
title: Fighting PostgreSQL bloat with Logical Backup and Resore on Heroku
slug: fighting-postgresql-bloat-on-heroku
socialImage: /media/46611631795_6c9ce00750_w.jpg
draft: true
date: 2020-12-19T14:35:03.492Z
description: Let's shrink our database size.  Many attempts just don't work.  Challenge accepted.
category: Heroku PostgreSQL
---

## The Situation

heroku pg:bloat

 ```table | public     | members                                                      |   5.8 | 9185 MB
 table | public     | system_logs                                                  |  50.9 | 576 MB
 table | public     | events                                                       |   6.3 | 39 MB```

heroku pg:table-size

```           name            |    size
----------------------------+------------
 members                    | 12 GB
 system_logs                | 607 MB
 recurring_services         | 82 MB
 events                     | 54 MB```

## Failed Attempts

If you've every attempted to clean up your PostgreSQL you may have noticed it's size doesn't really decrease.  

* VACUUM - Doesn't actually reduce database size

* [VACUUM FULL](https://wiki.postgresql.org/wiki/VACUUM_FULL) - Requires multiple hours of downtime

* [pgrepack](https://github.com/reorg/pg_repack) - This extension isn't installable on Heroku

* [pglogical](https://www.2ndquadrant.com/en/resources/pglogical/) - This extensions isn't installable on Heroku

* [repcloud](https://github.com/the4thdoctor/repcloud)  - Looks complicated and dubious

## Used Solution

Logically copy all the data into a new database.

`heroku addons:create heroku-postgresql:standard-0 --app APPNAME`



## References amd Attribution

* Page Social Image - [CC 2019](https://creativecommons.org/licenses/by-nd/2.0/) [Mike Bonitz](https://flic.kr/p/2e1UNd4)

* [Understanding of Bloat and VACUUM in PostgreSQL](https://www.percona.com/blog/2018/08/06/basic-understanding-bloat-vacuum-postgresql-mvcc/) - Aug 2018 - Avinash Vallarapu

