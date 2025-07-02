import Link from "next/link"
import Image from "next/image"
import SortDropdown from "./SortDropdown"

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

export default function BlogList({ blogs, currentSort, selectedCategories }) {
  return (
    <>
      {/* Sorting Dropdown */}
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Articles</h2>
        <SortDropdown currentSort={currentSort} selectedCategories={selectedCategories} />
      </div>

      {/* Articles */}
      {blogs.map((blog, index) => (
        <article key={index} className="mb-10 pb-10 border-b border-gray-200">
          <div className="flex items-center mb-4">
            <Image
              src={blog.author.avatar || "/placeholder.svg"}
              alt={blog.author.name}
              width={24}
              height={24}
              className="h-6 w-6 rounded-full mr-2"
            />
            <span className="text-sm font-medium">{blog.author.name}</span>
          </div>

          <Link href={`/blog/${generateSlug(blog.title)}`}>
            <h2 className="text-xl font-bold mb-2 hover:underline cursor-pointer">{blog.title}</h2>
          </Link>

          <div
            className="text-gray-700 mb-4 line-clamp-3"
            dangerouslySetInnerHTML={{
              __html: blog.description.replace(/<[^>]*>/g, "").substring(0, 150) + "...",
            }}
          />

          <div className="flex justify-between items-center">
            <div className="flex items-center text-gray-500 text-sm">
              <span>{blog.date}</span>
              <span className="mx-1">·</span>
              <span className="bg-gray-100 px-2 py-1 rounded-full">{blog.category}</span>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </article>
      ))}

      {/* Load More Button */}
      <div className="text-center">
        <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors">
          Load more
        </button>
      </div>
    </>
  )
}
