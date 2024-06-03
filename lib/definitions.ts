export type Recipe = {
    id: string;
    name: string;
    stepscount: number;
    steps: string;
    timeneededinminutes: number
    ingrediants: string //this is a string that lists all of the ingredients
    imageurl: string
};