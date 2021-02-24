---
title: Shabads
---

The `Shabads` table is used to group the [`Lines`](/database/schema/lines) together, and provide additional metadata about those [`Lines`](/database/schema/lines).

Every Shabad must have a [`composition`](/database/schema/compositions), [`writer`](/database/schema/writers), and [`section`](/database/schema/sections).

The content is unordered by default, and must be ordered by `order_id`.

The `id` is a three-letter, immutable identifier that will refer to the same Shabad across database versions.

## Columns

### `id`

A unique identifier for the Shabad. Permanent and will never change.

| Type    | Constraints |
| ------- | ----------- |
| char(3) | Primary Key |

### `writer_id`

The unique identifier of the [writer](/database/schema/writers) of the Shabad.

| Type    | Constraints                                                             |
| ------- | ----------------------------------------------------------------------- |
| integer | Foreign Key ([Writers.id](/database/schema/writers#id)), <br/> Not Null |

### `section_id`

The unique identifier of the [section](/database/schema/sections) that the Shabad belongs to.

| Type    | Constraints                                                               |
| ------- | ------------------------------------------------------------------------- |
| integer | Foreign Key ([Sections.id](/database/schema/sections#id)), <br/> Not Null |

### `subsection_id`

The unique identifier of the subsection that the Shabad belongs to.

| Type    | Constraints                                                     |
| ------- | --------------------------------------------------------------- |
| integer | Foreign Key ([Subsections.id](/database/schema/subsections#id)) |

### `sttm_id`

The unique identifier of the equivalent Shabad within the SikhiToTheMax 2 database.

| Type    | Constraints |
| ------- | ----------- |
| integer | None        |

### `composition_id`

The Gurbani [composition](/database/schema/compositions) that the Shabad belongs to.

| Type    | Constraints                                                             |
| ------- | ----------------------------------------------------------------------- |
| integer | Foreign Key ([Sources.id](/database/schema/sources#id)), <br/> Not Null |

### `order_id`

The correct order of Shabads. Order by this field to fetch shabads in the correct order.

| Type    | Constraints |
| ------- | ----------- |
| integer | None        |
