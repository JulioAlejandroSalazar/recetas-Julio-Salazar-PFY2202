import { http, HttpResponse, graphql } from 'msw'
import data from './recipes.json'

export const handlers = [
  // REST — listado de recetas
  http.get("/api/recipes", () => {
    return HttpResponse.json(data.recipes)
  }),

  // GraphQL — detalles de receta
  graphql.query("GetRecipeDetail", ({ variables }) => {
    const { id } = variables

    const recipe = data.recipes.find(r => r.id == id)
    const details = data.details[id] ?? null

    return HttpResponse.json({
      data: {
        recipe: {
          id,
          title: recipe?.title ?? "Receta desconocida",
          ingredients: details?.ingredients ?? [],
          method: details?.method ?? "",
          cookingTime: details?.cookingTime ?? "N/A"
        }
      }
    })
  }),
]
