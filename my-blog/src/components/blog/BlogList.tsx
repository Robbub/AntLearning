import BlogCard from './BlogCard.tsx';

export default function BlogList() {
  const posts = [
  { id: 1, title: "First Post", content: "Hello world" },
  { id: 2, title: "Second Post", content: "Another post" }
];

  return (
    <>
      {posts.map(post => (
        <BlogCard key={post.id} post={post} />
      ))}
    </>
  );
}
