import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-5xl font-extrabold text-red-600 mb-4">404 - Not Found</h2>
      <p className="text-gray-700 text-lg mb-8">The page you are looking for does not exist or has been moved.</p>
      <Link
        href="/"
        className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
      >
        Go back to the homepage
      </Link>
    </div>
  )
}
