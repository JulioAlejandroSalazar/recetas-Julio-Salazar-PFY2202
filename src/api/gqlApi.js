export async function fetchRecipeDetails(id) {
    const query = `
      query GetRecipeDetail($id: ID!) {
        recipe(id: $id) {
          id
          title
          ingredients
          method
          cookingTime
        }
      }
    `
  
    const res = await fetch("/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { id } }),
    })
  
    if (!res.ok) {
      throw new Error("Failed to fetch GraphQL data")
    }
  
    const json = await res.json()
    return json.data.recipe
  }
  