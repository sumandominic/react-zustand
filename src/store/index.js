import { create } from "zustand";
export const useStore = create((set) => ({
  todos: [],
  addToDo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  deleteToDo: (index) =>
    set((state) => ({ todos: state.todos.filter((_, i) => i !== index) })),
  toggleToDo: (index) =>
    set((state) => ({
      todos: state.todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
}));
