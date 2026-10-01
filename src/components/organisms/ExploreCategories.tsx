import { categories } from "@/src/data/categoriesData";
import CategoryCard from "../molecules/CategoryCard";



export default function ExploreCategories() {
  return (
    <section className="py-[var(--spacing-section-gap)] container-content">
      {/* Section Header */}
      <div className="text-center max-w-[var(--container-section-intro)] mx-auto mb-12">
        <h2 className="type-heading-m mb-4 text-[var(--color-heading)]">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="type-body-l text-[var(--color-body)]">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[var(--spacing-gutter)]">
        {categories.map((category) => (
          <CategoryCard 
            key={category.id} 
            name={category.name} 
            icon={category.icon} 
          />
        ))}
      </div>
    </section>
  );
}