/** Slugs are used in URLs, so keep them to safe characters. */
export function isValidSlug(slug: string): boolean {
  return /^[a-z0-9][a-z0-9-]*$/.test(slug)
}

/**
 * Minimal YAML frontmatter parser: supports `key: value` pairs with optional
 * single or double quotes. Enough for post metadata, no dependency needed.
 */
export function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw)

  if (!match) {
    return { data: {}, content: raw }
  }

  const data: Record<string, string> = {}

  for (const line of match[1].split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue

    const separator = trimmed.indexOf(':')
    if (separator === -1) continue

    const key = trimmed.slice(0, separator).trim()
    let value = trimmed.slice(separator + 1).trim()

    if (
      (value.startsWith('"') && value.endsWith('"') && value.length > 1) ||
      (value.startsWith("'") && value.endsWith("'") && value.length > 1)
    ) {
      value = value.slice(1, -1)
    }

    if (key) data[key] = value
  }

  return { data, content: raw.slice(match[0].length) }
}

/**
 * The first `# ` heading is the post title: the page renders it as the page
 * heading, so it is pulled out of the body to avoid showing it twice.
 */
export function extractLeadingHeading(content: string): { heading?: string; body: string } {
  const match = /^\s*#\s+(.+?)\s*(?:\r?\n|$)/.exec(content)

  if (!match) return { body: content }

  return { heading: match[1], body: content.slice(match[0].length).replace(/^\s*\r?\n/, '') }
}
