import BlogList from "./components/BlogList";
import Sidebar from "./components/Sidebar";
import blogData from "../data/data.json";


function filterBlogsByCategories(blogs, categories) {
  if (!categories || categories.length === 0) {
    return blogs;
  }
  return blogs.filter((blog) => categories.includes(blog.category));
}

function sortBlogs(blogs, sortBy) {
  const sortedBlogs = [...blogs];

  switch (sortBy) {
    case "oldest":
      return sortedBlogs.sort((a, b) => new Date(a.date) - new Date(b.date));
    case "latest":
    default:
      return sortedBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
}


export default function HomePage({ searchParams }) {

  const { categories, sort = "latest" } = searchParams || {};
  const selectedCategories = categories ? categories.split(",") : [];

  
  let filteredBlogs = filterBlogsByCategories(blogData, selectedCategories);
  filteredBlogs = sortBlogs(filteredBlogs, sort);

  
  const allCategories = [...new Set(blogData.map((blog) => blog.category))];

  return (
    <section className="py-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 lg:pr-12">
            <BlogList
              blogs={filteredBlogs}
              currentSort={sort}
              selectedCategories={selectedCategories}
            />
          </div>

          <div className="lg:w-1/3 mt-10 lg:mt-0">
            <Sidebar
              categories={allCategories}
              selectedCategories={selectedCategories}
              currentSort={sort}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
