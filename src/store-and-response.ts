import { create } from "zustand";

interface State {
  weather: object;
}

// const useStore = create<State>((set) => ({
//   weather: {},
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }));
