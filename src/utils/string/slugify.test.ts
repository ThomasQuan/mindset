import { slugify } from './slugify';

describe('slugify', () => {
  it('should generate a slug from a string', () => {
    expect(slugify('My blog post')).toBe('my-blog-post');
  });

  it('should generate a slug from a string with special characters', () => {
    expect(slugify('My blog post!')).toBe('my-blog-post');
  });
});
