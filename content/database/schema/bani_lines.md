---
title: Bani_Lines
---

The `Bani_Lines` table connects one [Bani](/database/schema/banis) to many [Lines](/database/schema/lines).

:::note
The `line_group` field is slightly more complicated, as it orders collections of [lines](/database/schema/lines), but not the [lines](/database/schema/lines) themselves.
:::

## Columns

### `line_id`

The 4 letter unique identifier of a [Line](/database/schema/lines).

| Type    | Constraints                                                            |
| ------- | ---------------------------------------------------------------------- |
| char(4) | Primary Key, <br/> Foreign Key ([Lines.id](/database/schema/lines#id)) |

### `bani_id`

The unique identifier of the [Bani](/database/schema/banis) that contains this line.

| Type    | Constraints                                                            |
| ------- | ---------------------------------------------------------------------- |
| integer | Primary Key, <br/> Foreign Key ([Banis.id](/database/schema/banis#id)) |

### `line_group`

A partition within the [Bani](/database/schema/banis) to group [Lines](/database/schema/lines). Order by this field, (and the [Lines.order_id](/database/schema/lines#order_id), if joining) to get the correct order of the groups (and [Lines](/database/schema/lines) within the groups).

| Type    | Constraints |
| ------- | ----------- |
| integer | Primary Key |
