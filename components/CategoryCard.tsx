import Image from "next/image";
import { MenuItem } from "@/components/MenuItem";
import type { MenuCategory } from "@/data/menu";

type CategoryCardProps = {
  category: MenuCategory;
  isActive: boolean;
  onToggle: () => void;
};

export function CategoryCard({ category, isActive, onToggle }: CategoryCardProps) {
  const panelId = `${category.id}-panel`;
  return (
    <article className={`category-card category-card--${category.id}${isActive ? " category-card--active" : ""}`}>
      <button className="category-card__trigger" type="button" aria-expanded={isActive} aria-controls={panelId} onClick={onToggle}>
        <Image src={category.image} alt="" fill sizes={isActive ? "(max-width: 767px) 100vw, 1100px" : "(max-width: 767px) 50vw, 33vw"} />
      </button>
      <div className="category-card__panel" id={panelId} aria-hidden={!isActive}>
        <div className="category-card__panel-inner">
          {category.note ? <p className="category-note">{category.note}</p> : null}
          <ul className="menu-list">
            {category.items.map((item) => <MenuItem key={item.name} item={item} />)}
          </ul>
          <button className="close-category" type="button" onClick={onToggle}>Cerrar <span aria-hidden="true">↑</span></button>
        </div>
      </div>
    </article>
  );
}
