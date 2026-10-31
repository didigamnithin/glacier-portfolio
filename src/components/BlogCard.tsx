import type { Post } from "../data/content";

type BlogCardProps = {
  post: Post;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <a className="blog-card" href={post.href} target="_blank" rel="noreferrer">
      <time className="blog-date" dateTime={post.date}>
        {post.date}
      </time>
      <h3 className="blog-title">{post.title}</h3>
      <p className="blog-excerpt">{post.excerpt}</p>
      <ul className="blog-tags">
        {post.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </a>
  );
}
