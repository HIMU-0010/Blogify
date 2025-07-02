import CategoryButtons from "./CategoryButtons"

// Server Component that receives processed data
export default function Sidebar({ categories, selectedCategories, currentSort }) {
  return (
    <div className="sticky top-20">
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-4">Discover more of what matters to you</h3>
        <CategoryButtons categories={categories} selectedCategories={selectedCategories} currentSort={currentSort} />
      </div>

      {/* Footer Links */}
      <div className="mt-8 border-t border-gray-200 pt-8">
        <div className="flex flex-wrap text-sm text-gray-500 gap-x-4 gap-y-2">
          <a href="#" className="hover:text-gray-700">
            Help
          </a>
          <a href="#" className="hover:text-gray-700">
            Status
          </a>
          <a href="#" className="hover:text-gray-700">
            Writers
          </a>
          <a href="#" className="hover:text-gray-700">
            Blog
          </a>
          <a href="#" className="hover:text-gray-700">
            Careers
          </a>
          <a href="#" className="hover:text-gray-700">
            Privacy
          </a>
          <a href="#" className="hover:text-gray-700">
            Terms
          </a>
          <a href="#" className="hover:text-gray-700">
            About
          </a>
        </div>
      </div>
    </div>
  )
}
