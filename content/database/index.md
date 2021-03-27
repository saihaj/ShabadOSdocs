---
title: Database
slug: /
---

<p class='lead'>A digital representation of Sikh Bani and other Panthic texts with a public logbook of sangat-sourced corrections</p>

The Shabad OS Database contains published materials from around the world including SGPC published Sri Guru Granth Sahib ji, Taksaal published Sri Dasam Granth ji, and SikhNet published English translations by Dr. Sant Singh Khalsa. [Read a full list of published sources used in the database >](/database/source-material)

Previous efforts to digitize Sikh banis and panthic texts have mostly been individual efforts. This database being open-source has allowed dozens of individuals to contribute to it's content and accuracy. Thousands of corrections small and large have been made to ensure a continuously accurate database to truly reflect the original published sources. As discrepancies between the originals and digital are found, they can be fixed by anyone editing the plain text files containing the data and opening a pull request to shabados/database ([learn more here >](/viewer/guides/proofreading)). Once the PR is accepted into the main branch, database files are automatically generated and can be reflected in online APIs. [Check out the plain text json files >](https://github.com/shabados/database/tree/main/data)

Since the project is open-source, it consequently has reduced the need to duplicate efforts among various parties. There is a central place to update all published sources of bani and panthic texts. There is no point of contention on what should be corrected or not. If it is written a certain way in a published source (e.g. a SGPC published Sri Guru Granth Sahib ji from volumes 1-4 of Shabadaarth circa 2009-2012), then it should be reflected that way in the digital database.

If there are multiple, reputable sources of bani that should be added, they can be. Various sources can be provided for the same bani. For example the gurbani for jaap sahib found in the SGPC published gutka and Damdami Taksaal published nitnem steek can be present simultaneously in the database. Which source is used can be chosen by developers or provided as a choice to the end-user by a developer.

Furthermore, if any organization were to attempt paath bhed (critical analysis/revision) on any Sikh composition (e.g. Sri Guru Granth Sahib ji), they could import any number of authentic sources (e.g. authenticated hand-written saroops) to the Shabad OS Database for ease of comparison (each hand-written saroop would exist as it's own version of gurbani, across which one could note any variations in lines).

In this sense, the Shabad OS Database is providing a single platform, a single point of truth, for all reputable publications of gurbani and panthic texts. All of which is free to be consumed, analyzed, and researched by developers and end-users in variously generated database files and online APIs.

[Start using the Shabad OS Database as the source of truth for your applications >](/database/installing-or-accessing)

## Partners

GurbaniNow works on the Shabad OS database to ensure high-accuracy of gurbani. Subsequently they use the database to power their online website and API, serving millions of end-users across the globe. Checkout their [website](https://gurbaninow.com), [API](https://api.gurbaninow.com), and [GitHub](https://github.com/GurbaniNow).

Basics of Sikhi uses the Shabad OS Database for their YouTube / Instagram videos. They are also providing their own English Translations of Sri Guru Granth Sahib ji (with more to come), for everyone utilizing the Database to read. So people viewing the Shabad OS Presenter or GurbaniNow website will be able to read the Basics of Sikhi English translations. Check out their [YouTube](https://www.youtube.com/basicsofsikhi), [Instagram](https://www.instagram.com/basicsofsikhi), and [website](https://www.basicsofsikhi.com).

## Technology

It was paramount to us that we be able to track changes to the database in an easy way. Git provides this for plain text, but not so much for binary database files. It allows any programmer or developer to see changes made by history or author. Git is the most widely used source-code management tool for software developers.

Since most people don't use the data in plain-text, we need a way to generate the various database files programmers and developers would use (e.g. MySQL, MariaDB, SQLite). We do this with [knex](https://github.com/knex/knex), "a SQL query builder that is flexible, portable, and fun to use!"

Since 2017, we have been pioneering a new approach to digitizing Sikh bani and panthic texts. As far as we know this is the first and only of it's kind in the Sikh sphere to leverage these technologies. We believe this will become the de facto standard and are proud to already provide this data to millions of end-users.

## Versioning

Frequent updates to the database are published according to semantic versioning via [npm](https://npmjs.com/package/@shabados/database) and [GitHub releases](https://github.com/shabados/database/releases). This means that you can safely update the database without worrying about the schema changing, according to the version. See [semantic versioning](https://semver.org/) for more information.

We are currently on major version 4, but are actively working on version 5, which will be a breaking change for existing apps. Once version 5 is ready to be released, we will provide documentation on how to migrate from v4.
