import Link from "next/link"

/**
 * Breadcrumbs component
 * @param {Object} props
 * @param {{label: string, href: string}[]} props.items - Array of breadcrumb items
 */
const Breadcrumbs = ({ items = [] }) => {
    if (!items.length) return null
    return (
        <nav aria-label="Breadcrumb" className="my-4">
            <ol className="flex items-center space-x-1 text-gray-500">
                {items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                        {idx > 0 && (
                            <svg className="w-4 h-4 mx-2 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        )}
                        {idx < items.length - 1 ? (
                            <Link href={item.href} className="hover:underline text-blue-600 font-tthoves-medium transition-colors duration-200">
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-gray-900 font-semibold font-tthoves-medium">{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}

export default Breadcrumbs
