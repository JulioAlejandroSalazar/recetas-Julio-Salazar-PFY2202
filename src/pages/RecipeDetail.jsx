import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchRecipeDetails } from '../services/recipeDetailsApi'

export default function RecipeDetail() {
  const { id } = useParams()
  const [detail, setDetail] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchRecipeDetails(id)
      .then(d => { setDetail(d); setLoading(false) })
      .catch(e => { setError(e.message); setLoading(false) })
  }, [id])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!detail) return <div>No details found</div>

  return (
    <div 
      className="bg-white p-6 rounded shadow"
      data-testid="recipe-detail"
    >
      <h2 className="text-2xl font-bold mb-4">{detail.title}</h2>

      <h3 className="text-xl font-semibold mb-2">Ingredientes</h3>
      <ul 
        className="list-disc pl-6 mb-4"
        data-testid="ingredient-list"
      >
        {detail.ingredients.map((ing, i) => (
          <li key={i} data-testid="ingredient-item">{ing}</li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mb-2">Preparación</h3>
      <p className="pl-2">{detail.method}</p>

      <p className="mt-4 text-sm">Tiempo aproximado: {detail.cookingTime}</p>
    </div>
  )
}
