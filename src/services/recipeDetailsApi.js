export const mockRecipeDetails = {
    "1": {
      ingredients: ["Harina", "Huevos", "Leche", "Azúcar", "Mantequilla"],
      method: "Mezclar los ingredientes, calentar un sartén y cocinar por ambos lados.",
      cookingTime: "15 min"
    },
    "2": {
      ingredients: ["Láminas de pasta", "Carne molida", "Tomate", "Queso", "Bechamel"],
      method: "Armar capas de pasta, carne y salsas. Hornear hasta gratinar.",
      cookingTime: "50 min"
    },
    "3": {
      ingredients: ["Lechuga romana", "Pollo", "Crutones", "Queso parmesano", "Aderezo César"],
      method: "Cortar la lechuga, mezclar con pollo y crutones, agregar aderezo y queso.",
      cookingTime: "10 min"
    },
    "4": {
      ingredients: ["Tomates", "Cebolla", "Ajo", "Caldo de verduras", "Crema"],
      method: "Sofreír, licuar y cocinar a fuego lento. Agregar crema al servir.",
      cookingTime: "25 min"
    },
    "5": {
      ingredients: ["Masa de pizza", "Tomate", "Mozzarella", "Albahaca"],
      method: "Armar la pizza y hornear a alta temperatura hasta que esté dorada.",
      cookingTime: "20 min"
    },
    "6": {
      ingredients: ["Tortillas", "Carne", "Cebolla", "Cilantro", "Salsa"],
      method: "Cocinar la carne, calentar tortillas y servir con cebolla y cilantro.",
      cookingTime: "15 min"
    }
  }
 
export const fetchRecipeDetails = async (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (mockRecipeDetails[id]) {
            resolve({
            id,
            ...mockRecipeDetails[id]
            })
        } else {
            reject(new Error("Recipe not found"))
        }
        }, 400)
    })
    }
  