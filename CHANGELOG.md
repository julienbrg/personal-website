# Changelog

## Unreleased

- Add `unlisted` flag for posts: excludes a post from `/posts`, the sitemap, `llms.txt`/`llms-full.txt` and `feed.xml`, and sets `noindex, nofollow`, while keeping it reachable at its direct URL. Set via `unlisted: true` in a post's frontmatter, or toggled after the fact with `pnpm posts unlist <slug>` / `pnpm posts relist <slug>`.
