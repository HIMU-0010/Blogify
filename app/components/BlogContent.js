import Image from "next/image"
import Link from "next/link"

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

export default function BlogContent({ blog, recommendedBlogs }) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{blog.title}</h1>

        <div className="flex items-center mb-6">
          <Image
            src={blog.author.avatar || "/placeholder.svg"}
            alt={blog.author.name}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full mr-4"
          />
          <div>
            <div className="flex items-center">
              <span className="font-medium mr-2">{blog.author.name}</span>
              <button className="text-green-600 text-sm font-medium">Follow</button>
            </div>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <span>{blog.date}</span>
              <span className="mx-1">·</span>
              <span className="bg-gray-100 px-2 py-1 rounded-full">{blog.category}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div
        className="article-content prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      />

      {/* Recommended Blogs */}
      <section className="bg-gray-50 py-12 mt-12 rounded-lg">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-xl font-bold mb-6">Recommended Blogs</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendedBlogs.map((recBlog, index) => (
              <article key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <Image
                    src={recBlog.author.avatar || "/placeholder.svg"}
                    alt={recBlog.author.name}
                    width={24}
                    height={24}
                    className="h-6 w-6 rounded-full mr-2"
                  />
                  <span className="text-sm font-medium">{recBlog.author.name}</span>
                </div>

                <Link href={`/blog/${generateSlug(recBlog.title)}`}>
                  <h4 className="text-lg font-bold mb-2 hover:underline cursor-pointer">{recBlog.title}</h4>
                </Link>

                <p className="text-gray-700 mb-4 text-sm line-clamp-3">
                  {recBlog.description.replace(/<[^>]*>/g, "").substring(0, 100)}...
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-500 text-sm">
                    <span>{recBlog.date}</span>
                    <span className="mx-1">·</span>
                    <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">{recBlog.category}</span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
