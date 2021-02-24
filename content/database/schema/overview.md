---
title: Overview
---

<p class="lead">Shabad OS Database was engineered to provide relational structures for better consistency and flexibility.</p>

![Schema](/img/schema.png)

## Tables

### Lines

Gurbani lines, linked to a `Shabad`. [Read more >](/database/schema/lines)

| Example                         | Dependency              |
| ------------------------------- | ----------------------- |
| `source_page: 10, Line_Content` | `Shabads`, `Line_Types` |

### Line_Content

Corresponding Gurmukhi related to the `source` of a `line`. [Read more >](/database/schema/line_content)

| Example                                         | Dependency         |
| ----------------------------------------------- | ------------------ |
| `SGPC: nmsqM mhMqy ]`, `source2: nmsqM mhMqy ]` | `Sources`, `Lines` |

### Line_Types

List of possible line classifications. [Read more >](/database/schema/line_types)

| Example        | Dependency |
| -------------- | ---------- |
| `rahao`, `tuk` | None       |

### Shabads

Grouping of Gurbani `Lines`, with additional metadata. [Read more >](/database/schema/shabads)

| Example                              | Dependency                                    |
| ------------------------------------ | --------------------------------------------- |
| `Writer, Section, Subsection, Lines` | `Lines`, `Writers`, `Sections`, `Subsections` |

### Writers

Composers of `Shabads`. [Read more >](/database/schema/writers)

| Example             | Dependency |
| ------------------- | ---------- |
| `Guru Angad Dev Ji` | None       |

### Compositions

A composition of Gurbani `Shabads`. [Read more >](/database/schema/compositions)

| Example                    | Dependency |
| -------------------------- | ---------- |
| `Sri Guru Granth Sahib Ji` | None       |

### Sources

A source of Gurbani . [Read more >](/database/schema/sources)

| Example                    | Dependency |
| -------------------------- | ---------- |
| `SGPC`, `Budha Dal Mehron` | None       |

### Sections

Grouping of `Shabads` within a single composition. [Read more >](/database/schema/sections)

| Example                    | Dependency     |
| -------------------------- | -------------- |
| `Raag Gujri`, `Siree Raag` | `Compositions` |

### Subsections

Sub-groupings within a single section. [Read more >](/database/schema/subsections)

| Example     | Dependency |
| ----------- | ---------- |
| `Mahalaa 1` | `Sections` |

### Languages

Available translation languages. [Read more >](/database/schema/languages)

| Example   | Dependency |
| --------- | ---------- |
| `English` | None       |

### Transliterations

Transliterations for Gurbani `Lines` in a given `Language` and `Source`. [Read more >](/database/schema/transliterations)

| Example                       | Dependency                      |
| ----------------------------- | ------------------------------- |
| `SGPC: har har har gun gaavo` | `Lines`, `Languages`, `Sources` |

### Translation_Sources

Translation source authors and languages for a single [Read more >](/database/schema/translation_sources)

| Example                                        | Dependency             |
| ---------------------------------------------- | ---------------------- |
| `Language: English, Author: Sant Singh Khalsa` | `Languages`, `Sources` |

### Translations

Translations for Gurbani `Lines` from a translation source. [Read more >](/database/schema/translations)

| Example           | Dependency                     |
| ----------------- | ------------------------------ |
| `The Lord is One` | `Lines`, `Translation_Sources` |

### Banis

Named of available Banis. [Read more >](/database/schema/banis)

| Example        | Dependency |
| -------------- | ---------- |
| `Jap Ji Sahib` | None       |

### Bani_Lines

Groupings of `Lines` to `Banis`. [Read more >](/database/schema/bani_lines)

| Example | Dependency       |
| ------- | ---------------- |
| N/A     | `Banis`, `Lines` |
