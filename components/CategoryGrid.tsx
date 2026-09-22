"use client";

import { CategoryCard } from "@/components/CategoryCard";
import { menu } from "@/data/menu";
import { useState } from "react";

export function CategoryGrid() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section className="menu-index" id="menu" aria-labelledby="menu-title">
      <div className="section-heading">
        <p>Nuestro menú</p><h1 id="menu-title">¿Qué se te antoja?</h1><span aria-hidden="true" />
      </div>
      <div className="category-grid">
        {menu.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            isActive={activeCategory === category.id}
            onToggle={() => setActiveCategory((current) => current === category.id ? null : category.id)}
          />
        ))}
      </div>
    </section>
  );
}
