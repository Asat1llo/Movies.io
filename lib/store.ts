import { create } from 'zustand';
import { supabase } from './supabaseClient';
import { Fetch, State } from '@/types/props';



// Helper function for error throwing
const throwErrorIfAny = (error: string | number | undefined | unknown, message = "Unknown error") => {
  if (error) {
    if (typeof error === 'object' && error !== null && 'message' in error) {
      throw new Error((error as { message: string }).message);
    } else {
      throw new Error(String(error) || message);
    }
  }
};


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
      const { data, error } = await supabase.from('movie').select('*');
      throwErrorIfAny(error, 'Failed to fetch movies');

      if (!data) throw new Error('No data received.');

      let filtredPas = data.filter((item) => item.rating < 7);
      let filtredTop = data.filter((item) => item.rating >= 7);

      if (genre && genre !== 'All') {
        const filteredData = data.filter((item) =>
          item.genres?.split(',').map((g: string) => g.trim()).includes(genre)
        );
        
        filtredPas = filteredData.filter((item) => item.rating < 7);
        filtredTop = filteredData.filter((item) => item.rating >= 7);
      }

      set({ data, filtredPas, filtredTop });
    }catch (err: unknown) {
      if (err instanceof Error) {
        set({ error: err.message });
      } else {
        set({ error: 'Unknown error occurred' });
      }
    }
    finally {
      set({ loading: false });
    }
  }
}));







// ========== useCountStore ==========
export const useCountStore = create<State>((set) => ({
  newDailys: [],
  newData: [],
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
      const { data, error } = await supabase.from("movie").select("*").eq("id", id).single();
      throwErrorIfAny(error, 'Failed to fetch movie by ID');

      if (data) set({ newData: data });
    } catch (err: any) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },

  filter: async (value) => {
    set({ loading: true, error: null });

    try {
      const { data, error } = await supabase.from("movie").select("*");
      throwErrorIfAny(error, 'Failed to fetch movies for filtering');

      const searchValue = value?.trim().toLowerCase();

      const filteredData = searchValue
        ? data?.filter((item) => item.title.toLowerCase().includes(searchValue))
        : data;

      set({ filterData: filteredData || [] });
    } catch (err: any) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  }
}));
