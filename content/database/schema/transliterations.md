---
title: Transliterations
---

The `Transliterations` table contains the corresponding transliteration of a single line in a given [language](languages) and [source](sources).

:::caution
The `transliteration` can be nullable.
:::

## Columns

### `line_id`

The unique identifier of the line that the transliteration corresponds with.

| Type    | Constraints                                           |
| ------- | ----------------------------------------------------- |
| char(4) | Primary Key, <br/> Foreign Key ([Lines.id](lines#id)) |

### `source_id`

The unique identifier of the [Source](sources) that the transliteration is of.

| Type    | Constraints                                               |
| ------- | --------------------------------------------------------- |
| integer | Primary Key, <br/> Foreign Key ([Sources.id](sources#id)) |

### `language_id`

The unique identifier of the [Language](languages) that the transliteration is in.

| Type    | Constraints                                                   |
| ------- | ------------------------------------------------------------- |
| integer | Primary Key, <br/> Foreign Key ([Languages.id](languages#id)) |

### `transliteration`

The transliteration of the Gurbani line.

| Type | Constraints |
| ---- | ----------- |
| text | None        |

### `first_letters`

The first letters of each word in the `transliteration`, useful for searching the database by first letter.

| Type | Constraints |
| ---- | ----------- |
| text | Not Null    |

### `vishraam_first_letters`

Same as `first_letters`, but includes heavy vishraams. Useful for prioritizing search results.

| Type | Constraints |
| ---- | ----------- |
| text | Not Null    |
