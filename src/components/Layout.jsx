import { Link } from "react-router-dom"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">

      <header className="w-full bg-gray-800 text-white px-6 py-4 shadow">
        <h1 data-testid="app-title" className="text-xl font-semibold">
          <Link to="/" className="hover:text-gray-300 transition-colors">
            Recetas App
          </Link>
        </h1>
      </header>

      <main className="flex-grow px-6 py-10 max-w-6xl mx-auto w-full">
        {children}
      </main>

      <footer className="w-full bg-gray-900 text-gray-300 text-center py-4 text-sm mt-auto">
        © 2025 Recetas App
      </footer>
    </div>
  )
}
