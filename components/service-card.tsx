"use client"

import Link from "next/link"
// import Image from "next/image" // No longer needed if no images are displayed

interface ServiceCardProps {
  title: string
  description: string
  linkHref: string
}

export function ServiceCard({ title, description, linkHref }: ServiceCardProps) {
  return (
    <Link href={linkHref} className="block h-full">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center h-full hover:shadow-lg transition-shadow duration-300">
        {/* Removed the image icon div */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h2>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <span className="text-amber-600 hover:text-amber-700 font-semibold">Learn More &rarr;</span>
      </div>
    </Link>
  )
}
