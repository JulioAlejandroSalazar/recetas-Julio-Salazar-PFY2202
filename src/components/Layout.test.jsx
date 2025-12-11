import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Layout from './Layout'

describe('Layout component', () => {
  test('renderiza el header con el título', () => {
    render(
      <MemoryRouter>
        <Layout>
          <div>Contenido de prueba</div>
        </Layout>
      </MemoryRouter>
    )

    expect(screen.getByText('Recetas App')).toBeInTheDocument()
  })

  test('renderiza los children dentro del layout', () => {
    render(
      <MemoryRouter>
        <Layout>
          <p>Hola mundo</p>
        </Layout>
      </MemoryRouter>
    )

    expect(screen.getByText('Hola mundo')).toBeInTheDocument()
  })

  test('renderiza el footer correctamente', () => {
    render(
      <MemoryRouter>
        <Layout>
          <div />
        </Layout>
      </MemoryRouter>
    )

    expect(screen.getByText('© 2025 Recetas App')).toBeInTheDocument()
  })
})
