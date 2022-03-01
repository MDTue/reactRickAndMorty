export interface Character {
    id: number;
    name: string;
    imageUrl: string;
    image: string;
    location : {name:string};
    status : string;
    species : string;
    gender : string;

    }
    export interface Response{
        results: Array<Character>;
    }