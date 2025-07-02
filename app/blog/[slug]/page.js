import { notFound } from "next/navigation";
import blogData from "../../../data/data.json";
import Sidebar from "../../components/Sidebar";
import BlogContent from "../../components/BlogContent";

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function findBlogBySlug(slug) {
  return blogData.find((blog) => generateSlug(blog.title) === slug);
}

export default function BlogDetailPage({ params }) {
  const { slug } = params;
  const blog = findBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const recommendedBlogs = blogData
    .filter((b) => b.title !== blog.title)
    .slice(0, 4);

  const allCategories = [...new Set(blogData.map((blog) => blog.category))];

  return (
    <section className="py-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 lg:pr-12">
            <BlogContent blog={blog} recommendedBlogs={recommendedBlogs} />
          </div>

          <div className="lg:w-1/3 mt-10 lg:mt-0">
            <Sidebar
              categories={allCategories}
              selectedCategories={[]}
              currentSort="latest"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: generateSlug(blog.title),
  }));
}
