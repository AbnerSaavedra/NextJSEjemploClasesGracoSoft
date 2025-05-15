const BlogPage = ({params: {slug}}) => {
  return (
    <>
      <p className="text-3xl">Blog Page <strong>{slug}</strong></p>
    </>
  )
}

export default BlogPage;
