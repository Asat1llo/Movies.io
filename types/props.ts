
export type Props = {
    rating: number;
  };
  
  export interface Movie {
    id: string;
    title: string;
    rating: number;
    poster_url: string;
  }
  
  export type Fetch = {
    data: Movie[];
    loading: boolean;
    error: string | null;
    filtredTop: Movie[];
    filtredPas: Movie[];
    fetch: () => void;
    filter: (data: Movie[]) => void;
  };
  
  export type HandleChange = {
    onHover: (id: string) => void;
  };
  
  export interface MovieSliderProps {
    data: Movie[];
    className:string;
  }
  
export interface NewData {
    title:string
    id:string,
    poster_url:string,
    description:string,
    year:number,
    rating:number,
    geners:string;
}  


export interface State {
    newDailys: number[];
    newData: NewData[];
    addId: string;
    loading: boolean;
    error: string | null;
    count: (data: any[]) => void;
    fetchData: (id: string) =>void;
  }