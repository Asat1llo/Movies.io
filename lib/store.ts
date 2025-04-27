import {create} from 'zustand'
import { supabase } from './supabaseClient';
import { Fetch, State, } from '@/types/props';



export const useFetch = create <Fetch>((set)=>({
   data:[],
   loading:false,
   error:null,
   filtredTop:[],
   filtredPas:[],
   fetch:async()=>{
    set({loading:true})
    const {data,error} = await supabase
    .from('movie')
    .select('*');
    error ? set({error:error.message}):set({data})
    set({loading:false})
   },
   filter:(data)=>{
      const top = data.filter(item=> item.rating >= 7) 
      const pas = data.filter(item=> item.rating <= 7) 
      set({filtredPas:pas,filtredTop:top})
   }

})) 


  export const useCountStore = create<State>((set) => ({
    newDailys: [],
    newData: [],
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
    },
  }));