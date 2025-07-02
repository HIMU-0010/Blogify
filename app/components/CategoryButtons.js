"use client"

import { useRouter, usePathname } from "next/navigation"


export default function CategoryButtons({ categories, selectedCategories, currentSort }) {
  const router = useRouter()
  const pathname = usePathname()

  const handleCategoryClick = (category) => {
    if (pathname.startsWith("/blog/")) {
      router.push(`/?categories=${encodeURIComponent(category)}`)
      return
    }

    const currentCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category]

    const url = new URL(window.location)

    if (currentCategories.length > 0) {
      url.searchParams.set("categories", currentCategories.join(","))
    } else {
      url.searchParams.delete("categories")
    }

    
    if (currentSort) {
      url.searchParams.set("sort", currentSort)
    }
    
    router.push(url.pathname + url.search)
  }

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            selectedCategories.includes(category)
              ? "bg-green-200 font-medium hover:bg-green-300"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
