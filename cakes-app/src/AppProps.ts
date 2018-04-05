export interface AppProps {

}

export interface AppState {
    cakes: Cake[];
}

export interface Cake {
    id: number;
    name: string;
    comment: string;
    imageUrl: string;
    yumFactor: number;    
}

export interface CakesListProps {
    cakes: Cake[];
}