/**
 * Generate a slug from a string
 * A slug is a url friendly string
 * example: "My blog post" => "my-blog-post"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
