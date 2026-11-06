/**
 * Company fields such as `name` are either a plain string or a
 * per-language object, e.g. {"fi": "...", "en": "..."}.
 *
 * Returns the string to show for the given language, falling back to Finnish.
 */
export const getText = (value, lang) =>
  typeof value === "string" ? value : value[lang] || value.fi;
