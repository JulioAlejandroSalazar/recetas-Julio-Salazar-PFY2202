import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from './Home'

// Mock de la API ANTES del import real
vi.mock('../api/restApi', () => ({
  fetchRecipes: vi.fn()
}))

import { fetchRecipes } from '../api/restApi'

describe('Home page', () => {
  const mockRecipes = [
    { id: 1, title: "Torta", category: "Postre", difficulty: "Fácil" },
    { id: 2, title: "Pizza", category: "Comida", difficulty: "Media" }
  ]

  test('muestra loading al inicio', () => {
    fetchRecipes.mockResolvedValue(mockRecipes)

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  test('muestra recetas al cargar correctamente', async () => {
    fetchRecipes.mockResolvedValue(mockRecipes)

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(screen.getByText('Torta')).toBeInTheDocument()
      expect(screen.getByText('Pizza')).toBeInTheDocument()
    })
  })

  test('muestra error si la API falla', async () => {
    fetchRecipes.mockRejectedValue(new Error('Error API'))

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    await waitFor(() => {
      expect(screen.getByText('Error: Error API')).toBeInTheDocument()
    })
  })
})
