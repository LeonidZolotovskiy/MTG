import { create } from 'zustand';

const isWindow = () => global.toString() === '[object Window]';

const useAppStore = create((set, get) => ({

  user: isWindow() ? window.initState.user : undefined,
  cards: isWindow() ? window.initState.cards : [],
  card: isWindow() ? window.initState.card : null,
  oneCard: isWindow() ? window.initState.card : null,

  setCards: (cards) => set({ cards }),
  setCard: (card) => set({ card }),

  deleteCards: async (id) => {
    set({ cards: get().cards.filter((el) => el.id !== id) });
  },
  
}));

export default useAppStore;
