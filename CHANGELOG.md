# Changelog

## Unreleased

- Render ` ```mermaid ` fences in posts as diagrams, themed to the site colors and lazy-loaded only on posts that use them; a diagram that fails to parse falls back to a plain code block.
- Add a copy-to-clipboard button to the top right of every code block in posts.
- Tighten the gap between a post's header and its content.
- Add the 像素众创 (xszc) collective pixel artwork project after Zhankai, with its description in all 10 languages.
- Add a Linus Torvalds quote as the second entry of the homepage intro rotation.
- Add `unlisted` flag for posts: excludes a post from `/posts`, the sitemap, `llms.txt`/`llms-full.txt` and `feed.xml`, and sets `noindex, nofollow`, while keeping it reachable at its direct URL. Set via `unlisted: true` in a post's frontmatter, or toggled after the fact with `pnpm posts unlist <slug>` / `pnpm posts relist <slug>`.
