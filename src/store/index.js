import axios from "axios";
import { create } from "zustand";

const isWindow = () => global.toString() === "[object Window]";

const useAppStore = create((set, get) => ({
  user: isWindow() ? window.initState.user : undefined,
  cards: isWindow() ? window.initState.cards : [],
  card: isWindow() ? window.initState.card : null,
<<<<<<< HEAD
  allItems: isWindow() ? window.initState.allItems : [],
=======
  oneCard: isWindow() ? window.initState.card : null,
>>>>>>> dev

  setCards: (cards) => set({ cards }),
  setCard: (card) => set({ card }),
  setAllItems: (allItems) => set({ allItems }),

  deleteItems: async (id) => {
    axios.delete(`/api/cart/${id}`).then((res) => {
      if (res.status === 200) {
        set({ allItems: get().allItems.filter((el) => el.id !== id) });
      }
    });
  },
<<<<<<< HEAD
=======
  
>>>>>>> dev
}));

export default useAppStore;
