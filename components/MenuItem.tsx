import type { MenuItem as MenuItemType } from "@/data/menu";

export function MenuItem({ item }: { item: MenuItemType }) {
  return (
    <li className="menu-item">
      <div className="menu-item__line">
        <p className="menu-item__name">{item.name}</p>
        <span className="menu-item__leader" aria-hidden="true" />
        <p className="menu-item__price" aria-label={`${item.price} pesos`}>${item.price}</p>
      </div>
      {item.description ? <p className="menu-item__description">{item.description}</p> : null}
      {item.note ? <p className="menu-item__note">{item.note}</p> : null}
    </li>
  );
}
