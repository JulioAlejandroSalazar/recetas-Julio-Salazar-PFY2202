import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import RecipeDetail from './RecipeDetail'

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useParams: () => ({ id: '123' })
  }
})

// Mock API
vi.mock('../api/gqlApi', () => ({
  fetchRecipeDetails: vi.fn()
}))

import { fetchRecipeDetails } from '../api/gqlApi'

describe('RecipeDetail page', () => {
  const mockDetail = {
    title: "Pizza",
    ingredients: ["Harina", "Tomate", "Queso"],
    method: "Hornear por 20 minutos",
    cookingTime: "20 min"
  }

  test('muestra loading al inicio', () => {
    fetchRecipeDetails.mockResolvedValue(mockDetail)

    render(
      <MemoryRouter>
        <RecipeDetail />
      </MemoryRouter>
    )

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  test('muestra datos cuando la API responde bien', async () => {
    fetchRecipeDetails.mockResolvedValue(mockDetail)

    render(
      <MemoryRouter>
        <RecipeDetail />
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(screen.getByText('Pizza')).toBeInTheDocument()
      expect(screen.getByText('Harina')).toBeInTheDocument()
      expect(screen.getByText('Hornear por 20 minutos')).toBeInTheDocument()
    })
  })

  test('muestra error cuando la API falla', async () => {
    fetchRecipeDetails.mockRejectedValue(new Error('Falla GQL'))

    render(
      <MemoryRouter>
        <RecipeDetail />
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(screen.getByText('Error: Falla GQL')).toBeInTheDocument()
    })
  })
})
