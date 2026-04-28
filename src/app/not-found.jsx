import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="relative mb-8">
        <h1 className="text-[120px] font-medium tracking-tighter text-gray-100 leading-none select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-18 h-18 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center p-5">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
              <path d="M11 8v3M11 14h.01"/>
            </svg>
          </div>
        </div>
      </div>

      <p className="text-2xl font-medium text-gray-800 mb-2">Page not found</p>
      <p className="text-gray-500 mb-8 max-w-xs leading-relaxed">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link href="/" className="px-6 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
        Go home
      </Link>
    </div>
  );
}