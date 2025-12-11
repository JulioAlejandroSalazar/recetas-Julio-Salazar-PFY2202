export async function fetchRecipes() {
    const res = await fetch("/api/recipes")
  
    if (!res.ok) throw new Error("Error fetching recipes")
    return res.json()
}
  