import axios from 'axios';
import { create } from 'zustand';

const isWindow = () => global.toString() === '[object Window]';

const useAppStore = create((set, get) => ({
  user: isWindow() ? window.initState.user : undefined,
  cards: isWindow() ? window.initState.cards : [],
  card: isWindow() ? window.initState.card : null,
  allItems: isWindow() ? window.initState.allItems : [],
  oneCard: isWindow() ? window.initState.card : null,
  cities: [],

  setCards: (cards) => set({ cards }),
  setCard: (card) => set({ card }),
  setUser: (user) => set({ user }),
  setAllItems: (allItems) => set({ allItems }),
  setCities: (cities) => set({ cities }),

  deleteItems: async (id) => {
    axios.delete(`/api/cart/${id}`).then((res) => {
      if (res.status === 200) {
        set({ allItems: get().allItems.filter((el) => el.id !== id) });
      }
    });
  },
  getCities: async () => {
    axios.get('/api/cities')
      .then((res) => {
        if (res.status === 200) {
          set({ cities: res.data });
        }
      });
  },
}));

export default useAppStore;
