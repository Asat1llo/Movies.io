import {create} from 'zustand'
import { supabase } from './supabaseClient';
import { Fetch, State, } from '@/types/props';


export const useFetch = create<Fetch>((set) => ({
  data: [],
  loading: false,
  error: null,
  filtredTop: [],
  filtredPas: [],

  fetch: async (ger) => {
    set({ loading: true, error: null }); // Boshlashda error reset qilinadi
  
    try {
      const { data, error } = await supabase
        .from('movie')
        .select('*');
  
      if (error) throw new Error(error.message);
      if (!data) throw new Error('No data received from Supabase.');
  
      if (!ger || ger === 'All') {
        const filtredPas = data.filter((item) => item.rating <= 7);
        const filtredTop = data.filter((item) => item.rating >= 7);
        set({ data, filtredPas, filtredTop });
        return;
      }
  
      const filteredData = data.filter((item) => {
        const genres = item.genres?.split(',').map((str: string) => str.trim()) || [];
        return genres.includes(ger);
      });
  
      const dataToUse = filteredData.length ? filteredData : data;
  
      const top = dataToUse.filter((item) => item.rating >= 7);
      const pas = dataToUse.filter((item) => item.rating < 7);
  
      set({ data, filtredPas: pas, filtredTop: top });
  
    } catch (err: any) {
      set({ error: err.message }); // ❗ data va filtredlarni tozalama ❗
    } finally {
      set({ loading: false }); // loading har holda false bo'lishi kerak
    }
  }
  
}));



  export const useCountStore = create<State>((set) => ({
    newDailys: [],
    newData: [],
    sort:[],
    addId: '',
    loading: false,
    error: null,
    count: (data) => {
      const newTime = data.map(() => Math.floor(Math.random() * 3000) + 8000);
      set({ newDailys: newTime });
    },
    fetchData: async (id) => {
      set({ loading: true });
      const { data, error } = await supabase
        .from("movie")
        .select("*")
        .eq("id", id)
        .single();
        error ? set({ error: error.message }) :set({ newData: data })
      set({ loading: false }); 
    }    
  }));