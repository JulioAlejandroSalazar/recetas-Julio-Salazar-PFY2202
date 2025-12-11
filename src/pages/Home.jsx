import React, { useEffect, useState } from 'react'
import { fetchRecipes } from '../services/RecipesApi'
import { Link } from 'react-router-dom'
import RecipeCard from "../components/RecipeCard"

export default function Home() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchRecipes().then(data => {
      setRecipes(data)
      setLoading(false)
    }).catch(err => {
      setError(err.message)
      setLoading(false)
    })
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map(r => (
        <Link key={r.id} to={`/recipe/${r.id}`}>
          <RecipeCard {...r} />
        </Link>
      ))}
    </div>
  )
}
