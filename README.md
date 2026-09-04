[![WCAG 2.1 AA](https://img.shields.io/badge/WCAG-2.1%20AA-green.svg)](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1&levels=aa)

# Personal website

Julien's website

## Install

```bash
pnpm i
```

## Run

```bash
pnpm dev
```

## Build

```bash
pnpm build
```

## Machine-readable endpoints

Every post is served in formats any crawler, model or agent can read without
running JavaScript:

| URL              | Format                                                                   |
| ---------------- | ------------------------------------------------------------------------ |
| `/<slug>.md`     | the post as markdown (alias: `/<slug>/raw`)                              |
| `/llms.txt`      | site overview + index of every post ([llmstxt.org](https://llmstxt.org)) |
| `/llms-full.txt` | every post in full, in one markdown file                                 |
| `/feed.xml`      | RSS 2.0, full post content in `content:encoded`                          |
| `/sitemap.xml`   | every URL with its date                                                  |
| `/robots.txt`    | everything but `/settings` open to all crawlers                          |

Post pages advertise their markdown source with
`<link rel="alternate" type="text/markdown">`, and carry `BlogPosting`
JSON-LD. `/<slug>.md` answers `text/markdown` to clients that ask for it and
`text/plain` to browsers, so the source stays readable in a tab.

## License

GPL-3.0
