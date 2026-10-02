# Changelog

## Unreleased

- Fix emphasized text (`*…*`, `_…_`) rendering upright in posts and other markdown views: Chakra's preflight `font: inherit` reset dropped the default italic on `em` and `i`, which `globals.css` now restores.
- Fix link previews still showing template leftovers: `/contact` now reads "Get in touch with Julien", `/strat` and `/settings` drop the "| personal-website" suffix, every page uses "Julien Beranger" as its site name, and `/posts` gets its preview image back. The root metadata drops the w3pk/W3HC keywords and author and the placeholder Google verification.
- Add the HuG and Wulong projects after 像素众创, with their descriptions in all 10 languages.
- Fix footnote links in posts not scrolling to their target: the markdown list item and link overrides now keep their `id`, so footnote references and back-references scroll smoothly.
- Fix the `Source:` line of a pulled post linking to the repo's commit history: it now shows and links the stored `source_url` as is.
- Fix `pnpm posts` ignoring `.env` on Node older than 20.12: the script now loads it with `tsx --env-file=.env` instead of `process.loadEnvFile`.
- Add `--author` and `--date` flags to `pnpm posts pull` for metadata the source file's frontmatter lacks; `pnpm posts sync` keeps them. The source of a pulled post now shows at the bottom of the page as `Source: <repo commit history>` instead of a header link.
- Add GitHub-sourced posts: `pnpm posts pull <github-url> [slug]` fetches a markdown file from a public GitHub repo, parses it like `pnpm posts add` (dating it by its last commit when the frontmatter has no `date`) and stores its `source_url`; `pnpm posts sync` re-pulls every such post. The post page links back to the source. Run `pnpm posts init` once to add the column.
- Render ` ```mermaid ` fences in posts as diagrams, themed to the site colors and lazy-loaded only on posts that use them; a diagram that fails to parse falls back to a plain code block.
- Add a copy-to-clipboard button to the top right of every code block in posts.
- Tighten the gap between a post's header and its content.
- Add the 像素众创 (xszc) collective pixel artwork project after Zhankai, with its description in all 10 languages.
- Add a Linus Torvalds quote as the second entry of the homepage intro rotation.
- Add `unlisted` flag for posts: excludes a post from `/posts`, the sitemap, `llms.txt`/`llms-full.txt` and `feed.xml`, and sets `noindex, nofollow`, while keeping it reachable at its direct URL. Set via `unlisted: true` in a post's frontmatter, or toggled after the fact with `pnpm posts unlist <slug>` / `pnpm posts relist <slug>`.
