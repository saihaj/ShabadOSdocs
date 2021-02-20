---
title: Translations
---

The `Translations` table contains the corresponding translation of a single line from a [translation source](translation_sources).

:::caution
The `translation` can be nullable.
:::

If used, the `additional_information` is a serialized JSON string that must be deserialized with a `JSON.parse()` or equivalent, to support non-standard fields universally across different translation sources.

## Columns

### `line_id`

The unique identifier of the Gurbani line that the translation corresponds with.

| Type    | Constraints                                           |
| ------- | ----------------------------------------------------- |
| char(4) | Primary Key, <br/> Foreign Key ([Lines.id](lines#id)) |

### `translation_source_id`

The unique identifier of the [translation source](translation_sources) that the translation originates from.

| Type    | Constraints                                                                       |
| ------- | --------------------------------------------------------------------------------- |
| integer | Primary Key, <br/> Foreign Key ([Translation_Sources.id](translation_sources#id)) |

### `translation`

The translation of the Gurbani line.

| Type | Constraints |
| ---- | ----------- |
| text | None        |

### `additional_information`

Any additional, non-standard data about the translation. Stored as a serialized JSON object.

| Type      | Constraints |
| --------- | ----------- |
| text/json | None        |
