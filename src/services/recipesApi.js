export const mockRecipes = [
    {
      id: 1,
      title: "Panqueques",
      difficulty: "Fácil",
      category: "Postres"
    },
    {
      id: 2,
      title: "Lasaña",
      difficulty: "Media",
      category: "Platos principales"
    },
    {
      id: 3,
      title: "Ensalada César",
      difficulty: "Fácil",
      category: "Ensaladas"
    },
    {
      id: 4,
      title: "Sopa de Tomate",
      difficulty: "Fácil",
      category: "Sopas"
    },
    {
      id: 5,
      title: "Pizza Margarita",
      difficulty: "Media",
      category: "Pizzas"
    },
    {
      id: 6,
      title: "Tacos de Carne",
      difficulty: "Media",
      category: "Mexicana"
    }
  ]

export const fetchRecipes = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockRecipes), 400)
    })
}
