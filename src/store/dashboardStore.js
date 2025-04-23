// src/store/dashboardStore.js
import { create } from "zustand";
import dashboardData from "../data/dashboardData";

const useDashboardStore = create((set) => ({
  categories: dashboardData.categories,

  addWidget: (categoryName, name, type, content) =>
    set((state) => {
      const newId = Date.now(); // Unique ID
      return {
        categories: state.categories.map((cat) =>
          cat.name === categoryName
            ? {
                ...cat,
                widgets: [
                  ...cat.widgets,
                  { id: newId, name, type, content }
                ],
              }
            : cat
        ),
      };
    }),

  removeWidget: (categoryName, widgetId) =>
    set((state) => ({
      categories: state.categories.map((cat) =>
        cat.name === categoryName
          ? {
              ...cat,
              widgets: cat.widgets.filter((w) => w.id !== widgetId),
            }
          : cat
      ),
    })),
}));

export default useDashboardStore;
