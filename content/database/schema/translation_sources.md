---
title: Translation_Sources
---

The `Translation_Sources` table contains all the sources of translations that the database contains, used by the [Translations](translations).

A translation source is a combination of the Gurbani [source](sources), the [language](languages), and the author details.

To retrieve the actual [Translations](translations) for a translation source, use the [Translations](translations) table.

## Columns

### `id`

The unique identifier of the translation source.

| Type    | Constraints |
| ------- | ----------- |
| integer | Primary Key |

### `name_english`

The name of the translation source, in English.

| Type | Constraints |
| ---- | ----------- |
| text | Not Null    |

### `name_gurmukhi`

The name of the translation source, in Gurmukhi, ASCII representation.

| Type | Constraints |
| ---- | ----------- |
| text | Not Null    |

### `composition_id`

The unique identifier of the Gurbani [composition](compositions) that the translation source corresponds to.

| Type    | Constraints                                                      |
| ------- | ---------------------------------------------------------------- |
| integer | Foreign Key ([Compositions.id](compositions#id)), <br/> Not Null |

### `language_id`

The unique identifier of the [language](languages) that the translation source is translated into.

| Type    | Constraints                                                |
| ------- | ---------------------------------------------------------- |
| integer | Foreign Key ([Languages.id](languages#id)), <br/> Not Null |
