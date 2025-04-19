import { create } from "zustand";

const useDashboardStore = create((set) => ({
  categories: JSON.parse(localStorage.getItem("categories")) || [],
  
  addWidget: (categoryName, widgetName, widgetText) =>
    set((state) => {
      const updatedCategories = state.categories.map((category) => {
        if (category.name === categoryName) {
          const newWidget = {
            id: Date.now(),
            name: widgetName,
            content: widgetText,
          };
          return { ...category, widgets: [...category.widgets, newWidget] };
        }
        return category;
      });

      localStorage.setItem("categories", JSON.stringify(updatedCategories));
      return { categories: updatedCategories };
    }),

  removeWidget: (categoryName, widgetId) =>
    set((state) => {
      const updatedCategories = state.categories.map((category) => {
        if (category.name === categoryName) {
          return {
            ...category,
            widgets: category.widgets.filter((widget) => widget.id !== widgetId),
          };
        }
        return category;
      });

      localStorage.setItem("categories", JSON.stringify(updatedCategories));
      return { categories: updatedCategories };
    }),
}));

export default useDashboardStore;