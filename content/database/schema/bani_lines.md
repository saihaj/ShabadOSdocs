---
title: Bani_Lines
---

The `Bani_Lines` table connects one [Bani](banis) to many [Lines](lines).

:::note
The `line_group` field is slightly more complicated, as it orders collections of [lines](lines), but not the [lines](lines) themselves.
:::

## Columns

### `line_id`

The 4 letter unique identifier of a [Line](lines).

| Type    | Constraints                                           |
| ------- | ----------------------------------------------------- |
| char(4) | Primary Key, <br/> Foreign Key ([Lines.id](lines#id)) |

### `bani_id`

The unique identifier of the [Bani](banis) that contains this line.

| Type    | Constraints                                           |
| ------- | ----------------------------------------------------- |
| integer | Primary Key, <br/> Foreign Key ([Banis.id](banis#id)) |

### `line_group`

A partition within the [Bani](banis) to group [Lines](lines). Order by this field, (and the [Lines.order_id](lines#order_id), if joining) to get the correct order of the groups (and [Lines](lines) within the groups).

| Type    | Constraints |
| ------- | ----------- |
| integer | Primary Key |
