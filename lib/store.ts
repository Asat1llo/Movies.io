import { create } from 'zustand';
import { Fetch, State, Movie } from '@/types/props';
import { localMovies } from './data';

// ========== useFetch Store ==========
export const useFetch = create<Fetch>((set) => ({
  data: [],
  loading: false,
  error: null,
  filtredTop: [],
  filtredPas: [],

  fetch: async (genre) => {
    set({ loading: true, error: null });

    try {
      const data = localMovies;

      let filtredPas = data.filter((item) => item.rating < 7);
      let filtredTop = data.filter((item) => item.rating >= 7);

      if (genre && genre !== 'All') {
        const filteredData = data.filter((item) =>
          item.genres ? item.genres.split(',').map((g: string) => g.trim()).includes(genre) : false
        );
        
        filtredPas = filteredData.filter((item) => item.rating < 7);
        filtredTop = filteredData.filter((item) => item.rating >= 7);
      }

      set({ data: data as unknown as Movie[], filtredPas: filtredPas as unknown as Movie[], filtredTop: filtredTop as unknown as Movie[] });
    } catch (err: unknown) {
      if (err instanceof Error) {
        set({ error: err.message });
      } else {
        set({ error: 'Unknown error occurred' });
      }
    } finally {
      set({ loading: false });
    }
  }
}));

// ========== useCountStore ==========
export const useCountStore = create<State>((set) => ({
  newDailys: [],
  newData: {},
  sort: [],
  addId: '',
  filterData: [],
  loading: false,
  error: null,

  count: (data) => {
    const randomTimes = data.map(() => Math.floor(Math.random() * (3000 - 800) + 800));
    set({ newDailys: randomTimes });
  },

  fetchData: async (id) => {
    set({ loading: true, error: null });

    try {
      const data = localMovies.find(m => String(m.id) === String(id));
      if (!data) throw new Error('Movie not found');

      set({ newData: data });
    } catch (err: unknown) {
      if (err instanceof Error) {
        set({ error: err.message });
      } else {
        set({ error: 'Unknown error occurred' });
      }
    } finally {
      set({ loading: false });
    }
  },

  filter: async (value) => {
    set({ loading: true, error: null });

    try {
      const data = localMovies;
      const searchValue = value?.trim().toLowerCase();

      const filteredData = searchValue
        ? data.filter((item) => item.title.toLowerCase().includes(searchValue))
        : data;

      set({ filterData: filteredData || [] });
    } catch (err: unknown) {
      if (err instanceof Error) {
        set({ error: err.message });
      } else {
        set({ error: 'Unknown error occurred' });
      }
    } finally {
      set({ loading: false });
    }
  }
}));
