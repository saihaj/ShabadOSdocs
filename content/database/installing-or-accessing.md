---
title: Installing or accessing Shabad OS Database
sidebar_label: Installing or accessing
---

<p class='lead'>There are 2 officially supported release formats (<a href="https://github.com/ShabadOS/database/releases">SQLite</a> and <a href="https://www.npmjs.com/package/@shabados/database">npm</a>), and a REST API provided by <a href="https://github.com/GurbaniNow/api">GurbaniNow</a></p>

:::tip
Please refrain from modify any existing content of the database. If there is a mistake, please file an issue for any specific line using the [Shabad OS Viewer](https://viewer.shabados.com/) (use the menu button on any line) or more generally at [GitHub](https://github.com/shabados/database/issues).

The only exception to this rule is that tables or data that you do not require may be dropped entirely to save storage space in constrained environments.
:::

## SQLite

Our [GitHub Releases](https://github.com/ShabadOS/database/releases) contain the latest SQLite3 database releases. [Read about the schema used >](schema/overview)

These releases follow [semantic versioning](https://semver.org/), so it is possible to download databases with content additions and fixes without breaking your application.

Running `SELECT * FROM Lines ORDER BY order_id LIMIT 100` will return the first 100 lines that the database contains, in the correct order. [See more example queries >](usage/queries)

## npm

The database is packaged as an npm module [@shabados/database](https://www.npmjs.com/package/@shabados/database). To install it, run `npm install @shabados/database`. Importing the package will give you access to the location of the database.

This package uses the same [semantic versioning](https://semver.org/) format as the SQLite database, so running `npm update` will allow you to retrieve compatible database corrections without breaking your application. Additionally, there is a JavaScript API that can be imported from the package, allowing you to leverage the database using wrapper functions, without the need to write SQL. [Check out the JavaScript wrapper functions >]

## GurbaniNow REST API

[GurbaniNow](https://gurbaniNow.com) has teamed up with Shabad OS to provide the most accurate, accessible, and transparent Gurbani database. GurbaniNow's latest [API endpoint](https://api.gurbaninow.com) is powered by the Shabad OS database, for those who wish to access Gurbani through an online REST interface. [See their GitHub repo for API Documentation >](https://github.com/GurbaniNow/api)
