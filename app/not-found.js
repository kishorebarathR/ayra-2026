import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#002561] text-white px-4">
            <div className="flex flex-col items-center">
                <Image src="/ayra-logo.svg" alt="AYRA Logo" width={120} height={40} className="mb-8" />
                <h1 className="text-7xl font-bold mb-4 tracking-tight drop-shadow-lg">404</h1>
                <h2 className="text-2xl md:text-3xl font-semibold mb-2">Page Not Found</h2>
                <p className="text-lg md:text-xl text-white/80 mb-8 text-center max-w-xl">
                    Oops! The page you are looking for doesn&apos;t exist or has been moved.<br />
                    Please check the URL or return to the homepage.
                </p>
                <Link href="/">
                    <span className="inline-block px-8 py-3 rounded-full bg-[#8772F7] hover:bg-[#4b89e8] text-white font-semibold text-lg shadow-md transition-colors duration-300">
                        Go to Homepage
                    </span>
                </Link>
            </div>
            <div className="mt-12 opacity-60">
                {/* Optional: Subtle illustration or icon */}
                <svg width="120" height="120" fill="none" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="56" stroke="#4b89e8" strokeWidth="4" fill="#003070" />
                    <path d="M40 80 Q60 100 80 80" stroke="#fff" strokeWidth="3" fill="none" />
                    <circle cx="50" cy="55" r="5" fill="#fff" />
                    <circle cx="70" cy="55" r="5" fill="#fff" />
                </svg>
            </div>
        </div>
    );
} 