"use client"

import { useRouter } from "next/navigation"

export default function SortDropdown({ currentSort, selectedCategories }) {
  const router = useRouter()

  const handleSortChange = (newSort) => {
    const url = new URL(window.location)
    url.searchParams.set("sort", newSort)

    if (selectedCategories.length > 0) {
      url.searchParams.set("categories", selectedCategories.join(","))
    }

    router.push(url.pathname + url.search)
  }

  return (
    <div>
      <label htmlFor="sort" className="text-sm font-medium text-gray-700 mr-2">
        Sort by:
      </label>
      <select
        id="sort"
        name="sort"
        value={currentSort}
        onChange={(e) => handleSortChange(e.target.value)}
        className="border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500"
      >
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
      </select>
    </div>
  )
}
