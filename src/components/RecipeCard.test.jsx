import { render, screen } from '@testing-library/react'
import RecipeCard from './RecipeCard'

describe('RecipeCard component', () => {
  test('muestra el título correctamente', () => {
    render(<RecipeCard title="Tarta" category="Postre" difficulty="Fácil" />)

    expect(screen.getByText('Tarta')).toBeInTheDocument()
  })

  test('muestra categoría y dificultad', () => {
    render(<RecipeCard title="Pizza" category="Comida" difficulty="Media" />)

    expect(screen.getByText('Comida • Media')).toBeInTheDocument()
  })
})
