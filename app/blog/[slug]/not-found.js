import Link from "next/link"
import Header from "../../components/Header"

export default function NotFound() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Header />

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-8">{"Sorry, the blog post you're looking for doesn't exist."}</p>
          <Link href="/" className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
