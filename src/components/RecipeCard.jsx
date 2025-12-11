export default function RecipeCard({ title, category, difficulty }) {
  return (
    <div data-testid="recipe-card" className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-500 text-sm mt-1">
        {category} • {difficulty}
      </p>
    </div>
  );
}
