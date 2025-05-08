
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
    fetch: (ger:string) => void;
  };
  
  export type HandleChange = {
    onHover: (id: string) => void;
  };
  
  export interface MovieSliderProps {
    data: Movie[];
    className:string;
    time:number;
    scroll:boolean;
  }
  
export type NewData ={
    id:string,
    title:string,
    poster_url:string,
    description:string,
    year:number,
    rating:number,
    geners:string,
    time:number
}  


export interface State {
    newDailys: number[];
    newData: {
      id?:string | undefined,
      title?:string | undefined;
      poster_url?:string | undefined;
      description?:string | undefined ;
      year?:number | undefined;
      rating?:number | undefined;
      geners?:string | undefined;
      time?:number | undefined;
    };
    backgroundImage:string;
    sort:NewData[];
    filterData:NewData[];
    addId: string;
    loading: boolean;
    error: string | null;
    count: (data: any[]) => void;
    fetchData: (id: string) =>void;
    filter:(val:string)=>void
  }



