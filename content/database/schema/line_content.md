---
title: Line_Content
---

The `Line_Content` table contains the content for [Lines](lines) of [Sources](sources). This exists to support the different Sources of the same line.

## Columns

### `line_id`

The unique identifier of the line.

| Type    | Constraints                                           |
| ------- | ----------------------------------------------------- |
| char(4) | Primary Key, <br/> Foreign Key ([Lines.id](lines#id)) |

### `source_id`

The unique identifier of the source.

| Type    | Constraints                                         |
| ------- | --------------------------------------------------- |
| integer | Primary, <br/> Foreign Key ([Sources](sources)) Key |

### `gurmukhi`

The line, stored as a compatible ASCII Gurmukhi font.

| Type | Constraints |
| ---- | ----------- |
| text | Not Null    |

### `first_letters`

The first letters of each word in the `gurmukhi` line, useful for searching the database by first letter.

| Type | Constraints |
| ---- | ----------- |
| text | Not Null    |